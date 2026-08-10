/**
 * api/soru.js — TEKNOPERS (teknopers.com.tr) · PROGRAMATİK SEO / SSR MOTORU
 * ==============================================================================
 * /soru/:slug ve /sorular. Akış (sıra maliyet için kritik):
 *   1) Önbellek (Supabase, opsiyonel) → varsa AI'a GİTMEDEN döndür
 *   2) Yoksa: paylaşılan AI beynine (lib/ai-kopru.js) SEO talimatıyla sor
 *   3) Yanıtı önbelleğe yaz (fire-and-forget)
 *   4) Tam SSR HTML + ISR başlıkları (s-maxage=1gün + swr=7gün) → çoğu istek edge'den
 * Her sayfa ilgili /araclar/ hesaplama aracına iç link verir (trafik→dönüşüm).
 *
 * vercel.json rewrite: /soru/:slug → /api/soru?slug=:slug ; /sorular → ?slug=__liste__
 * Not: Web projesinde ayrı bir korpus yok; grounding gerekmiyor — güçlü sistem
 * talimatı + uydurma kilidi yeterli (ai-kopru.js içinde).
 */
'use strict';

var SORULAR = require('../sorular.js').SORULAR;
var seo = require('../lib/seo-motor.js');
var beyin = require('../lib/ai-kopru.js');
var cache = require('../lib/cache.js');
// Manuel cevaplar (opsiyonel). Dosya yoksa/boşsa sistem AI ile çalışır.
var CEVAPLAR = {};
try { CEVAPLAR = require('../cevaplar.js').CEVAPLAR || {}; } catch (e) { CEVAPLAR = {}; }

var HARITA = {};
SORULAR.forEach(function (s) { HARITA[s.slug] = s; });

function temizSlug(s) {
  return String(s || '').toLowerCase().replace(/[^a-z0-9-]/g, '').replace(/-+/g, '-').replace(/^-|-$/g, '').slice(0, 120);
}
function ilgiliBul(slug, n) {
  var merkez = HARITA[slug];
  var diger = SORULAR.filter(function (s) { return s.slug !== slug; });
  var ayni = merkez ? diger.filter(function (s) { return s.kategori === merkez.kategori; }) : [];
  var kalan = diger.filter(function (s) { return ayni.indexOf(s) === -1; });
  return ayni.concat(kalan).slice(0, n).map(function (s) { return { slug: s.slug, soru: s.soru }; });
}

module.exports = async function (req, res) {
  var ham = (req.query && req.query.slug) || '';

  if (ham === '__liste__') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=604800');
    return res.end(seo.listeSayfasiUret(SORULAR));
  }

  var slug = temizSlug(ham);
  if (!slug) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.end(seo.hataSayfasi('', 'Soru bulunamadı'));
  }

  var kayit = HARITA[slug];
  var soru = kayit ? kayit.soru : seo.slugCoz(slug);

  try {
    var cevap = null, saglayici = null;

    // 0) Manuel cevap varsa → AI'a hiç gitme, önbellek gerekmez
    if (CEVAPLAR[slug] && String(CEVAPLAR[slug]).trim()) {
      cevap = String(CEVAPLAR[slug]).trim();
      saglayici = 'manuel';
    }

    // 1) yoksa önbellek
    if (!cevap) {
      var c = await cache.oku(slug);
      if (c && c.cevap) { cevap = c.cevap; saglayici = c.saglayici; }
    }

    // 2) yoksa AI
    if (!cevap) {
      var sonuc = await beyin.sor({
        soru: soru,
        talimat: beyin.talimatSeo(soru, ''),   // web'de korpus yok → boş bağlam; talimat yeterli
        maksToken: 1100
      });
      cevap = sonuc.cevap; saglayici = sonuc.saglayici;
      cache.yaz(slug, soru, cevap, saglayici).catch(function () {});
    }

    var html = seo.sayfaUret({
      slug: slug, soru: soru, cevap: cevap,
      ilgili: ilgiliBul(slug, 6),
      arac: kayit && kayit.arac, aracAd: kayit && kayit.aracAd,
      blog: kayit && kayit.blog, blogAd: kayit && kayit.blogAd,
      cozum: kayit && kayit.cozum, cozumAd: kayit && kayit.cozumAd
    });

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800');
    return res.end(html);

  } catch (e) {
    console.error('[soru]', slug, e && (e.kod || e.message));
    res.statusCode = 503;
    res.setHeader('Retry-After', '120');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=30');
    return res.end(seo.hataSayfasi(slug, soru));
  }
};
