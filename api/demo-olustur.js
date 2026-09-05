/**
 * api/demo-olustur.js — DOĞRUDAN DEMO OLUŞTURMA (şirket adı → gerçek 2 günlük demo)
 * ============================================================================
 * Uygulamaların KENDİ Supabase altyapısında gerçek deneme hesabı açar; kontrol
 * senin mevcut CEO panellerinde. Ayrı tablo/panel YOK.
 *
 * ERP (erp.teknopers.com.tr) — 2 gün KATI (kodda doğrulandı):
 *   1) POST /api/kurucu/giris  {pin: SUPER_PIN}                 → {token}
 *   2) POST /api/kurucu/sirket {mode:'ekle', ad, deneme_gun:2}  (Bearer token)
 *      → {sirket:{kod}, mgr_pin};  bitis_tarihi = bugün+2; süre dolunca giriş kapanır.
 *   Kullanıcı erp.teknopers.com.tr'ye kod + mgr_pin ile girer.
 *
 * GEREKLİ ORTAM DEĞİŞKENİ (Vercel → teknopers-web):
 *   SUPER_PIN  → ERP kurucu PIN'i (ERP projesindekiyle AYNI değer)
 *   DEMO_GUN   → (ops.) varsayılan 15
 *
 * SALON (salon.teknopers.com.tr) — 2 gün KATI:
 *   POST /api/superadmin {action:'create_salon', salon_name, owner_name, sector, trial_days:2}
 *   (Bearer TEKNOPERS_MASTER_KEY) → {login:{code,pin}}. salons.trial_ends=now+2; süre
 *   dolunca api/auth.js girişi reddeder. GEREKLİ env: TEKNOPERS_MASTER_KEY.
 */
'use strict';

/* Basit IP rate-limit (bağımlılıksız, best-effort).
   NOT: Vercel serverless'te bellek örnek-başınadır ve soğuk başlatmada sıfırlanır;
   bu yüzden kesin değil ama honeypot + bu limit, sıradan script'leri durdurur.
   Kesin koruma için Vercel Firewall / KV veya captcha eklenebilir. */
var _vur = {};                 // ip -> [zaman damgaları]
var PENCERE = 10 * 60 * 1000;  // 10 dakika
var LIMIT = 3;                 // pencere başına en fazla
function rateLimit(ip){
  var t = Date.now(), a = (_vur[ip] || []).filter(function(x){ return t - x < PENCERE; });
  if (a.length >= LIMIT) { _vur[ip] = a; return false; }
  a.push(t); _vur[ip] = a;
  if (Math.random() < 0.02) { for (var k in _vur){ if(!_vur[k].some(function(x){return t-x<PENCERE;})) delete _vur[k]; } }
  return true;
}
function ipAl(req){ return ((req.headers['x-forwarded-for']||'').split(',')[0].trim()) || (req.socket && req.socket.remoteAddress) || 'yok'; }

var ERP = (process.env.ERP_URL || 'https://erp.teknopers.com.tr').replace(/\/$/, '');
var SALON = (process.env.SALON_URL || 'https://salon.teknopers.com.tr').replace(/\/$/, '');
var GUN = parseInt(process.env.DEMO_GUN || '15', 10) || 15;

function j(res, kod, obj){
  res.statusCode = kod;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(obj));
}
function bodyOku(req){
  return new Promise(function(coz){
    if (req.body && typeof req.body === 'object') return coz(req.body);
    var d = '';
    req.on('data', function(c){ d += c; if (d.length > 1e5) req.destroy(); });
    req.on('end', function(){ try { coz(JSON.parse(d || '{}')); } catch(e){ coz({}); } });
    req.on('error', function(){ coz({}); });
  });
}

module.exports = async function (req, res) {
  if (req.method !== 'POST') return j(res, 405, { ok:false });
  var b = await bodyOku(req);
  if (b.hp || b.website) return j(res, 200, { ok:true }); // honeypot: sessiz
  if (!rateLimit(ipAl(req))) return j(res, 429, { ok:false, sebep:'cok-fazla-deneme', mesaj:'Çok fazla deneme. Lütfen birkaç dakika sonra tekrar deneyin.' });

  var ad = String(b.ad || '').trim().replace(/\s+/g, ' ').slice(0, 80);
  if (ad.length < 2) return j(res, 400, { ok:false, sebep:'ad', mesaj:'Şirket/işletme adı gerekli.' });

  var urun = (b.urun === 'salon') ? 'salon' : 'erp';

  // Salon: gerçek 2 günlük deneme aç (superadmin create_salon + trial_days)
  if (urun === 'salon') {
    var MASTER = process.env.TEKNOPERS_MASTER_KEY;
    if (!MASTER) return j(res, 200, { ok:false, sebep:'yapilandirma' });
    try {
      var sc = await fetch(SALON + '/api/superadmin', {
        method:'POST',
        headers:{ 'Content-Type':'application/json', 'Authorization':'Bearer ' + MASTER },
        body: JSON.stringify({ action:'create_salon', salon_name: ad, owner_name: ad, sector:'guzellik', trial_days: GUN })
      });
      var sj = await sc.json().catch(function(){ return {}; });
      if (!sj || !sj.ok || !sj.login) return j(res, 200, { ok:false, sebep:'olusturulamadi' });
      return j(res, 200, { ok:true, urun:'salon', url: SALON, kod: sj.login.code, pin: sj.login.pin, gun: GUN });
    } catch (e) {
      return j(res, 200, { ok:false, sebep:'hata' });
    }
  }

  // ERP: gerçek 2 günlük deneme aç
  var SUPER = process.env.SUPER_PIN;
  if (!SUPER) return j(res, 200, { ok:false, sebep:'yapilandirma' });

  try {
    var g = await fetch(ERP + '/api/kurucu/giris', {
      method:'POST', headers:{ 'Content-Type':'application/json' }, body: JSON.stringify({ pin: SUPER })
    });
    var gj = await g.json().catch(function(){ return {}; });
    if (!gj || !gj.ok || !gj.token) return j(res, 200, { ok:false, sebep:'yetki' });

    var c = await fetch(ERP + '/api/kurucu/sirket', {
      method:'POST',
      headers:{ 'Content-Type':'application/json', 'Authorization':'Bearer ' + gj.token },
      body: JSON.stringify({ mode:'ekle', ad: ad, deneme_gun: GUN })
    });
    var cj = await c.json().catch(function(){ return {}; });
    if (!cj || !cj.ok || !cj.sirket) return j(res, 200, { ok:false, sebep:'olusturulamadi' });

    return j(res, 200, {
      ok:true, urun:'erp', url: ERP,
      kod: cj.sirket.kod, pin: cj.mgr_pin, gun: GUN
    });
  } catch (e) {
    return j(res, 200, { ok:false, sebep:'hata' });
  }
};
