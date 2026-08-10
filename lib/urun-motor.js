/**
 * lib/urun-motor.js — TEKNOPERS · ÜRÜN SAYFASI ŞABLONU (/urun/<slug>)
 * ==============================================================================
 * Modülü BİR ÜRÜN olarak sunar: hero → "nedir" → özellikler → hangi sektörler
 * (/cozum/) → sık sorulan sorular (/soru/) → araçlar (/araclar/) → CTA.
 * <head>'de SoftwareApplication + BreadcrumbList şeması (ürün SEO'su için güçlü).
 */
'use strict';

var seo = require('./seo-motor.js');
var SITE = seo.SITE, WA = seo.WA, GA_ID = seo.GA_ID, esc = seo.esc;
var MARKA = 'TEKNOPERS';

// Sitedeki gerçek fiyatlar (teknopers.com.tr/#fiyat). Şirket ailesi modülleri bu
// fiyata dahildir; Salon kendi fiyatı. Piyasa referansı = fiyat/0.9 (~%10 altı).
var FIYAT = {
  sirket: { aylik: 2500, yillik: 24000, aile: 'Şirket Takip Sistemi fiyatına dahildir' },
  salon:  { aylik: 1500, yillik: 12000, aile: 'Salon & Randevu Programı fiyatıdır' }
};
function trSayi(n){ return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,'.'); }
function piyasa(x){ return Math.round(x/0.9/10)*10; }
function fiyatBilgi(urunTuru){ return FIYAT[urunTuru==='salon'?'salon':'sirket']; }

function p(m){ return '<p>'+seo.vurgu(esc(m))+'</p>'; }
function blok(d){ return (d||[]).map(p).join('\n'); }
function kirp(s,n){ s=String(s||'').replace(/\s+/g,' ').trim(); return s.length>n?s.slice(0,n-1)+'…':s; }

var MSTIL = [
  '.lead{font-size:18px;color:var(--ink2);margin:0 0 8px;max-width:640px}',
  '.blok{margin:26px 0}.blok h2{font-family:var(--disp);font-size:21px;font-weight:700;margin:0 0 10px;color:var(--ink)}',
  '.ozet-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:14px 0}@media(max-width:620px){.ozet-grid{grid-template-columns:1fr}}',
  '.oz{background:var(--paper);border:1px solid var(--line);border-radius:14px;padding:14px 16px}',
  '.oz b{display:block;font-family:var(--disp);font-size:15px;color:var(--ink);margin-bottom:4px}',
  '.oz span{font-size:14px;color:var(--slate);line-height:1.55}',
  '.linkler a{display:block;padding:11px 14px;border:1px solid var(--line);border-radius:10px;margin-bottom:8px;color:var(--ink);font-weight:600;font-size:14.5px;background:var(--paper)}.linkler a:hover{border-color:var(--gold)}',
  '.cta-blok{margin:30px 0 8px;padding:24px;border-radius:var(--r);background:linear-gradient(135deg,#0B1424,#182338);color:#fff;box-shadow:var(--sh)}',
  '.cta-blok h2{font-family:var(--disp);font-size:22px;color:#fff;margin:0 0 8px}.cta-blok p{color:#C7D2E0;margin:0 0 16px;font-size:15px}.cta-blok .satir{display:flex;gap:10px;flex-wrap:wrap}'
].join('');

function jsonLd(o){
  var url = SITE+'/urun/'+o.slug;
  var app = {
    "@context":"https://schema.org","@type":"SoftwareApplication",
    "name":o.ad,"applicationCategory":"BusinessApplication","operatingSystem":"Web, Android, iOS",
    "description":kirp((o.hero&&o.hero[0])||o.ad,200),
    "provider":{"@type":"Organization","name":MARKA,"url":SITE+"/"},
    "offers":{"@type":"Offer","priceCurrency":"TRY","price":String(fiyatBilgi(o.urunTuru).aylik),"description":"Aylık, işletme başına — kullanıcı başına ücret yok"}
  };
  var yol = {
    "@context":"https://schema.org","@type":"BreadcrumbList",
    "itemListElement":[
      {"@type":"ListItem","position":1,"name":MARKA,"item":SITE+"/"},
      {"@type":"ListItem","position":2,"name":"Ürünler","item":SITE+"/urunler"},
      {"@type":"ListItem","position":3,"name":o.ad,"item":url}
    ]
  };
  var g=function(x){return JSON.stringify(x).replace(/</g,'\\u003c');};
  return '<script type="application/ld+json">'+g(app)+'</script>\n<script type="application/ld+json">'+g(yol)+'</script>';
}

function grid(list){ return '<div class="ozet-grid">'+(list||[]).map(function(o){return '<div class="oz"><b>'+esc(o.b)+'</b><span>'+esc(o.a)+'</span></div>';}).join('')+'</div>'; }

function urunSayfaUret(o, sektorler, sorular){
  var url = SITE+'/urun/'+o.slug;
  var aciklama = kirp((o.hero&&o.hero[0])||o.ad, 155);
  var urun = (o.urunTuru==='salon') ? {ad:'Salon & Randevu Programı',anchor:'/#salon'} : {ad:'Şirket Takip Sistemi',anchor:'/#sirket'};
  var waSoru = encodeURIComponent('Merhaba, '+o.ad+' hakkında bilgi/demo almak istiyorum.');

  var sektorHtml = (sektorler&&sektorler.length)
    ? '<section class="blok"><h2>Hangi sektörler için?</h2><div class="ozet-grid">'+
      sektorler.map(function(s){return '<a href="/cozum/'+s.slug+'" class="oz" style="text-decoration:none;display:block"><b>'+esc(s.sektor)+'</b><span>'+esc(s.baslik)+' →</span></a>';}).join('')+'</div></section>'
    : '';
  var soruHtml = (sorular&&sorular.length)
    ? '<section class="blok"><h2>Sık sorulan sorular</h2><div class="linkler">'+
      sorular.map(function(s){return '<a href="/soru/'+s.slug+'">'+esc(s.soru)+'</a>';}).join('')+'</div></section>'
    : '';
  var aracHtml = (o.araclar&&o.araclar.length)
    ? '<section class="blok"><h2>Ücretsiz araçlar</h2><div class="linkler">'+
      o.araclar.map(function(a){return '<a href="'+a.yol+'">'+esc(a.ad)+' →</a>';}).join('')+'</div></section>'
    : '';

  var ctaSatir = '<a class="btn btn-wa" href="https://wa.me/'+WA+'?text='+waSoru+'" target="_blank" rel="noopener">WhatsApp\'tan demo iste</a>'
    + '<a class="btn btn-gold" href="'+urun.anchor+'">'+esc(urun.ad)+' →</a>';

  return '<!DOCTYPE html>\n<html lang="tr">\n<head>\n'+
  '<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n'+
  '<title>'+esc(o.keyword||o.ad)+' | '+MARKA+'</title>\n'+
  '<meta name="description" content="'+esc(aciklama)+'">\n'+
  '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">\n'+
  '<link rel="canonical" href="'+url+'">\n'+
  '<meta property="og:type" content="product">\n<meta property="og:site_name" content="'+MARKA+'">\n'+
  '<meta property="og:title" content="'+esc(o.ad)+'">\n<meta property="og:description" content="'+esc(aciklama)+'">\n'+
  '<meta property="og:url" content="'+url+'">\n<meta property="og:locale" content="tr_TR">\n'+
  '<meta name="twitter:card" content="summary">\n<meta name="theme-color" content="#0B1424">\n'+
  '<link rel="icon" href="/favicon.ico">\n<link rel="apple-touch-icon" href="/apple-touch-icon.png">\n'+
  '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'+
  '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sora:wght@700;800&family=Figtree:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&display=swap">\n'+
  jsonLd(o)+'\n'+
  '<script async src="https://www.googletagmanager.com/gtag/js?id='+GA_ID+'"></script>\n'+
  '<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date());gtag("config","'+GA_ID+'");</script>\n'+
  '<style>'+seo.STIL+MSTIL+'</style>\n</head>\n<body>\n'+
  seo.NAV()+'\n<main>\n'+
  '<div class="yol"><a href="/">Ana sayfa</a> / <a href="/urunler">Ürünler</a> / <span>'+esc(o.ad)+'</span></div>\n'+
  '<span class="eyebrow">'+esc(o.etiket||'TEKNOPERS Ürünü')+'</span>\n<h1>'+esc(o.ad)+'</h1>\n'+
  blok(o.hero).replace(/<p>/g,'<p class="lead">')+'\n'+
  '<div class="cta-blok" style="margin-top:18px"><div class="satir">'+ctaSatir+'</div></div>\n'+
  '<section class="blok"><h2>'+esc(o.ad)+' nedir?</h2>'+blok(o.nedir)+'</section>\n'+
  '<section class="blok"><h2>Öne çıkan özellikler</h2>'+grid(o.ozellikler)+'</section>\n'+
  (function(){ var f=fiyatBilgi(o.urunTuru); return '<section class="blok"><h2>Fiyat</h2><div class="fiyat-kutu">'+
    '<div class="fiyat-ust">'+esc(f.aile)+' · işletme başına sabit fiyat</div>'+
    '<div class="fiyat-satir">'+
      '<div class="fiyat-birim"><div class="piyasa">Piyasa: <s>'+trSayi(piyasa(f.aylik))+' ₺/ay</s></div><div class="tp">'+trSayi(f.aylik)+' ₺<small>/ay</small></div></div>'+
      '<div class="fiyat-birim"><div class="piyasa">Piyasa: <s>'+trSayi(piyasa(f.yillik))+' ₺/yıl</s></div><div class="tp">'+trSayi(f.yillik)+' ₺<small>/yıl</small></div></div>'+
    '</div>'+
    '<div class="fiyat-rozet">Piyasanın ~%10 altında</div>'+
    '<div class="fiyat-not">KDV hariç · işletme başına, sınırsız personel · kullanıcı başına ücret yok · kurulum, eğitim ve tüm modüller dahil</div>'+
    '<a class="btn btn-gold" href="/#fiyat">Tüm fiyatları gör →</a>'+
  '</div></section>\n'; })()+
  sektorHtml+'\n'+soruHtml+'\n'+aracHtml+'\n'+
  '<div class="cta-blok"><h2>'+esc(o.ctaBaslik||'Hazır mısınız?')+'</h2><p>'+esc(o.ctaMetin||'Demo için bize yazın.')+'</p><div class="satir">'+ctaSatir+'</div></div>\n'+
  '</main>\n'+seo.FOOTER()+'\n'+seo.ASISTAN()+'\n</body>\n</html>';
}

function urunListeUret(urunler){
  var kart = urunler.map(function(o){
    return '<a href="/urun/'+o.slug+'" class="oz" style="text-decoration:none;display:block"><b>'+esc(o.ad)+'</b><span>'+esc(o.etiket)+' — '+esc(kirp((o.hero&&o.hero[0])||'',110))+'</span></a>';
  }).join('');
  return '<!DOCTYPE html>\n<html lang="tr">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n'+
  '<title>Ürünler | '+MARKA+'</title>\n'+
  '<meta name="description" content="TEKNOPERS ürünleri: cihazsız PDKS, depo ve stok, zimmet takip, ön muhasebe ve salon randevu yönetimi. Her ürünün sektör çözümleri ve soruları bir arada.">\n'+
  '<link rel="canonical" href="'+SITE+'/urunler">\n<meta name="robots" content="index, follow">\n<meta name="theme-color" content="#0B1424">\n<link rel="icon" href="/favicon.ico">\n'+
  '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sora:wght@700;800&family=Figtree:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&display=swap">\n'+
  '<style>'+seo.STIL+MSTIL+' .ozet-grid{grid-template-columns:1fr}</style>\n</head>\n<body>\n'+
  seo.NAV()+'\n<main>\n<div class="yol"><a href="/">Ana sayfa</a> / <span>Ürünler</span></div>\n'+
  '<span class="eyebrow">Ürünler</span>\n<h1>TEKNOPERS ürünleri</h1>\n'+
  '<p style="color:var(--slate);margin-bottom:8px">Her modül ayrı bir üründür: sektör çözümleri, soruları ve araçlarıyla birlikte.</p>\n'+
  '<div class="ozet-grid">'+kart+'</div>\n'+
  '<div class="cta-blok"><h2>Hangi ürün size uygun?</h2><p>İhtiyacınızı yazın, doğru modülü birlikte belirleyelim.</p><div class="satir"><a class="btn btn-wa" href="https://wa.me/'+WA+'" target="_blank" rel="noopener">WhatsApp\'tan Yaz</a><a class="btn btn-gold" href="/cozumler">Sektörel çözümler</a></div></div>\n'+
  '</main>\n'+seo.FOOTER()+'\n'+seo.ASISTAN()+'\n</body></html>';
}

module.exports = { urunSayfaUret: urunSayfaUret, urunListeUret: urunListeUret };
