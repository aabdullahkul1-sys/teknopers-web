/**
 * lib/cache.js — TEKNOPERS AI · SEO YANITI KALICI ÖNBELLEĞİ (Supabase REST)
 * ==============================================================================
 * AMAÇ (maliyet kilidi): Bir soru bir kez AI'a sorulur, cevabı Supabase'e yazılır.
 * Sonraki tüm istekler (Google botu dahil) AI'a GİTMEDEN önbellekten okur.
 * Vercel CDN önbelleği düşse ya da yenilense bile bu katman AI çağrısını korur.
 * Yani maliyet ≈ benzersiz soru başına 1 AI çağrısı (ömür boyu).
 *
 * NEDEN SDK YOK: Bu projede paket kurulumu yok (telefon-only geliştirme).
 * Supabase'in hazır REST (PostgREST) uçlarını düz fetch ile kullanıyoruz.
 *
 * ZARİF DÜŞÜŞ: SUPABASE_URL / SUPABASE_SERVICE_KEY tanımlı değilse önbellek
 * sessizce DEVRE DIŞI kalır — sistem her istekte AI'a gider ama ÇALIŞMAYA
 * DEVAM EDER. Yani Supabase kurmadan da yayına alabilirsin; kurunca maliyet düşer.
 *
 * ORTAM DEĞİŞKENLERİ (Vercel → Settings → Environment Variables):
 *   SUPABASE_URL          → https://xxxx.supabase.co
 *   SUPABASE_SERVICE_KEY  → service_role anahtarı (RLS'i baypas eder, SUNUCUDA kalır)
 *   SORU_CACHE_TABLO      → (ops.) varsayılan: ai_soru_cache
 */
'use strict';

var SB_URL = (process.env.SUPABASE_URL || process.env.SUPABASE_PROJECT_URL || '').replace(/\/$/, '');
var SB_KEY = process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_KEY || '';
var TABLO = process.env.SORU_CACHE_TABLO || 'ai_soru_cache';
var ACIK = !!(SB_URL && SB_KEY);

function acikMi() { return ACIK; }

// Önbellekten oku → {slug, soru, cevap, saglayici} | null
async function oku(slug) {
  if (!ACIK) return null;
  try {
    var u = SB_URL + '/rest/v1/' + TABLO + '?slug=eq.' + encodeURIComponent(slug) + '&select=slug,soru,cevap,saglayici&limit=1';
    var r = await fetch(u, { headers: { apikey: SB_KEY, Authorization: 'Bearer ' + SB_KEY } });
    if (!r.ok) return null;
    var rows = await r.json();
    return (Array.isArray(rows) && rows[0]) ? rows[0] : null;
  } catch (e) { return null; }
}

// Önbelleğe yaz (upsert). Kritik değil — hata yutulur, cevap yine döner.
async function yaz(slug, soru, cevap, saglayici) {
  if (!ACIK) return;
  try {
    await fetch(SB_URL + '/rest/v1/' + TABLO, {
      method: 'POST',
      headers: {
        apikey: SB_KEY, Authorization: 'Bearer ' + SB_KEY,
        'Content-Type': 'application/json',
        Prefer: 'resolution=merge-duplicates,return=minimal'
      },
      body: JSON.stringify({
        slug: slug, soru: soru, cevap: cevap,
        saglayici: saglayici || null, guncelleme: new Date().toISOString()
      })
    });
  } catch (e) { /* önbellek yazımı best-effort */ }
}

module.exports = { oku: oku, yaz: yaz, acikMi: acikMi };
