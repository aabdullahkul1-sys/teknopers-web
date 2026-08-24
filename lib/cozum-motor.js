/**
 * lib/cozum-motor.js — TEKNOPERS · SEKTÖREL ÇÖZÜM SAYFASI ŞABLONU
 * ==============================================================================
 * /cozum/<slug> pazarlama sayfasını üretir (PAS düzeni): hero → Sorun → Neden acil
 * → Çözüm → Özellik kartları → CTA → ilgili sorular/çözümler. Görünüm site ile
 * birebir (seo-motor'dan NAV/FOOTER/STIL). <head>'de BreadcrumbList + Service şeması.
 */
'use strict';

var seo = require('./seo-motor.js');
var SITE = seo.SITE, WA = seo.WA, GA_ID = seo.GA_ID, esc = seo.esc;
var MARKA = 'TEKNOPERS';

function p(metin){ return '<p>' + seo.vurgu(esc(metin)) + '</p>'; }
function blok(dizi){ return (dizi || []).map(p).join('\n'); }

function jsonLd(o){
  var url = SITE + '/cozum/' + o.slug;
  var yol = {
    "@context":"https://schema.org","@type":"BreadcrumbList",
    "itemListElement":[
      {"@type":"ListItem","position":1,"name":MARKA,"item":SITE+"/"},
      {"@type":"ListItem","position":2,"name":"Çözümler","item":SITE+"/cozumler"},
      {"@type":"ListItem","position":3,"name":o.baslik,"item":url}
    ]
  };
  var svc = {
    "@context":"https://schema.org","@type":"Service",
    "name":o.baslik,
    "serviceType":o.sektor,
    "provider":{"@type":"Organization","name":MARKA,"url":SITE+"/"},"publisher":{"@type":"Organization","name":MARKA,"logo":{"@type":"ImageObject","url":SITE+"/icon-512.png"}},
    "areaServed":{"@type":"Country","name":"Türkiye"},
    "description":o.ozet
  };
  var g = function(x){ return JSON.stringify(x).replace(/</g,'\\u003c'); };
  var out = '<script type="application/ld+json">'+g(svc)+'</script>\n<script type="application/ld+json">'+g(yol)+'</script>';
  if (o.sss && o.sss.length){
    var faq = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":o.sss.map(function(q){return {"@type":"Question","name":q.s,"acceptedAnswer":{"@type":"Answer","text":q.c}};})};
    out += '\n<script type="application/ld+json">'+g(faq)+'</script>';
  }
  return out;
}

var EK_STIL = [
  '.hero{padding:6px 0 4px}',
  '.lead{font-size:18px;color:var(--ink2);margin:0 0 8px;max-width:640px}',
  '.blok{margin:26px 0}.blok h2{font-family:var(--disp);font-size:21px;font-weight:700;margin:0 0 10px;color:var(--ink);display:flex;align-items:center;gap:10px}',
  '.blok h2 .no{width:28px;height:28px;border-radius:8px;background:var(--goldL);color:var(--goldD);font-size:13px;font-weight:800;display:flex;align-items:center;justify-content:center;flex:none}',
  '.riskbox{border-left:3px solid var(--gold);background:linear-gradient(90deg,rgba(229,168,0,.06),transparent);padding:2px 16px;border-radius:0 12px 12px 0}',
  '.ozet-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:14px 0}@media(max-width:620px){.ozet-grid{grid-template-columns:1fr}}',
  '.oz{background:var(--paper);border:1px solid var(--line);border-radius:14px;padding:14px 16px}',
  '.oz b{display:block;font-family:var(--disp);font-size:15px;color:var(--ink);margin-bottom:4px}',
  '.oz span{font-size:14px;color:var(--slate);line-height:1.55}',
  '.cta-blok{margin:30px 0 8px;padding:24px;border-radius:var(--r);background:linear-gradient(135deg,#0B1220,#182338);color:#fff;box-shadow:var(--sh)}',
  '.cta-blok h2{font-family:var(--disp);font-size:22px;color:#fff;margin:0 0 8px}',
  '.cta-blok p{color:#C7D2E0;margin:0 0 16px;font-size:15px}',
  '.cta-blok .satir{display:flex;gap:10px;flex-wrap:wrap}',
  '.cift{display:grid;grid-template-columns:1fr 1fr;gap:22px;margin-top:34px}@media(max-width:620px){.cift{grid-template-columns:1fr}}',
  '.cift h2{font-family:var(--disp);font-size:17px;margin:0 0 10px}',
  '.cift a{display:block;padding:11px 14px;border:1px solid var(--line);border-radius:10px;margin-bottom:8px;color:var(--ink);font-weight:600;font-size:14.5px;background:var(--paper)}.cift a:hover{border-color:var(--gold)}',
  'body.tema-salon .riskbox{background:linear-gradient(90deg,rgba(192,86,106,.07),transparent)}',
  '.adimlar{margin:10px 0 0;padding-left:22px}',
  '.adimlar li{margin:10px 0;color:var(--ink2);line-height:1.62;font-size:15.5px}',
  '.adimlar li::marker{color:var(--goldD);font-weight:800}',
  '.sss{border:1px solid var(--line);border-radius:12px;margin:9px 0;background:var(--paper);overflow:hidden}',
  '.sss summary{cursor:pointer;padding:13px 16px;font-weight:700;color:var(--ink);font-size:15px;list-style:none}',
  '.sss summary::-webkit-details-marker{display:none}',
  '.sss summary::before{content:"+";color:var(--goldD);font-weight:800;margin-right:9px}',
  '.sss[open] summary::before{content:"\\2013"}',
  '.sss p{margin:0 16px 14px;color:var(--slate);font-size:14.5px;line-height:1.66}'
].join('');

function ozellikGrid(list){
  return '<div class="ozet-grid">' + (list||[]).map(function(o){
    return '<div class="oz"><b>'+esc(o.b)+'</b><span>'+esc(o.a)+'</span></div>';
  }).join('') + '</div>';
}

function cozumFoto(sektor){
  var s=(sektor||'').toLocaleLowerCase('tr'); var img,alt;
  if(/diş|dental/.test(s)){ img='dis-klinik-randevu'; alt='Diş kliniğinde randevu ve hasta kayıtlarını tablet ile yöneten ekip — TeknoPers'; }
  else if(/veteriner|hayvan/.test(s)){ img='veteriner-klinik-randevu'; alt='Veteriner kliniğinde müşteri ve randevu takibi — TeknoPers'; }
  else if(/güzellik|guzellik|estetik|cilt|spa|masaj/.test(s)){ img='guzellik-estetik-randevu'; alt='Güzellik ve estetik merkezinde randevu takibi — TeknoPers'; }
  else if(/kuaför|kuafor|berber|salon|dövme|dovme|tırnak|tirnak/.test(s)){ img='kuafor-salon-yogun'; alt='Yoğun kuaför salonunda randevu ve müşteri yönetimi — TeknoPersSalon'; }
  else if(/diyet|pilates|fizyo|klinik|sağlık|saglik/.test(s)){ img='klinik-diyetisyen-randevu'; alt='Klinik ve stüdyoda randevu takibi — TeknoPers randevu'; }
  else { img='saha-ekip-fabrika'; alt='Sahada ekip ve operasyon takibini tablet ile yöneten yönetici — TeknoPers'; }
  return '<img src="/gorseller/'+img+'.webp" width="1200" height="800" loading="lazy" decoding="async" alt="'+alt+'" style="display:block;width:100%;height:auto;border-radius:8px;margin:14px 0 8px;box-shadow:0 14px 34px -16px rgba(11,18,32,.30)">\n';
}

function cozumSayfaUret(o, ilgiliSorular, ilgiliCozumler, urun){
  var url = SITE + '/cozum/' + o.slug;
  var urunSatir = urun ? '<p style="margin:2px 0 0;font-size:14px"><a href="/urun/'+urun.slug+'" style="color:var(--goldD);font-weight:700">Bu çözüm '+esc(urun.ad)+' ürününün parçasıdır →</a></p>' : '';
  var urun = (o.urun === 'salon')
    ? { ad: 'Salon & Randevu Programı', anchor: '/#salon' }
    : { ad: 'Şirket Takip Sistemi', anchor: '/#sirket' };
  var waSoru = encodeURIComponent('Merhaba, '+o.baslik+' hakkında bilgi/demo almak istiyorum.');
  var temaCls=(o.urun==='salon')?' class="tema-salon"':'';

  var ctaSatir = '<a class="btn btn-wa" href="https://wa.me/'+WA+'?text='+waSoru+'" target="_blank" rel="noopener">WhatsApp\'tan demo iste</a>'
    + '<a class="btn btn-gold" href="'+urun.anchor+'">'+esc(urun.ad)+' →</a>'
    + (o.arac ? '<a class="btn" style="background:#fff;border:1px solid var(--line2);color:var(--ink)" href="'+o.arac+'">'+esc(o.aracAd||'İlgili araç')+'</a>' : '');

  var sorularHtml = (ilgiliSorular && ilgiliSorular.length)
    ? '<div><h2>İlgili sorular</h2>'+ilgiliSorular.map(function(s){return '<a href="/soru/'+s.slug+'">'+esc(s.soru)+'</a>';}).join('')+'</div>'
    : '';
  var cozumlerHtml = (ilgiliCozumler && ilgiliCozumler.length)
    ? '<div><h2>Diğer çözümler</h2>'+ilgiliCozumler.map(function(s){return '<a href="/cozum/'+s.slug+'">'+esc(s.baslik)+'</a>';}).join('')+'</div>'
    : '';

  var nasilHtml = (o.nasilCalisir && o.nasilCalisir.length)
    ? '<section class="blok"><h2><span class="no">4</span>Nasıl çalışır?</h2><ol class="adimlar">'+o.nasilCalisir.map(function(a){return '<li>'+seo.vurgu(esc(a))+'</li>';}).join('')+'</ol></section>\n'
    : '';
  var sssHtml = (o.sss && o.sss.length)
    ? '<section class="blok"><h2>Sık sorulan sorular</h2>'+o.sss.map(function(q){return '<details class="sss"><summary>'+esc(q.s)+'</summary><p>'+seo.vurgu(esc(q.c))+'</p></details>';}).join('')+'</section>\n'
    : '';

  return '<!DOCTYPE html>\n<html lang="tr">\n<head>\n'+
  '<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n'+
  '<title>'+esc(o.baslik)+' | '+MARKA+'</title>\n'+
  '<meta name="description" content="'+esc(o.ozet)+'">\n'+
  '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">\n'+
  '<link rel="canonical" href="'+url+'">\n'+
  '<meta property="og:type" content="website">\n<meta property="og:site_name" content="'+MARKA+'">\n'+
  '<meta property="og:title" content="'+esc(o.baslik)+'">\n<meta property="og:description" content="'+esc(o.ozet)+'">\n'+
  '<meta property="og:url" content="'+url+'">\n<meta property="og:locale" content="tr_TR">\n'+
  '<meta property="og:image" content="'+SITE+((o.urun==='salon')?'/og-salon.png':'/og-cozum.png')+'">\n<meta property="og:image:width" content="1200">\n<meta property="og:image:height" content="630">\n<meta property="og:image:alt" content="'+esc(o.baslik)+' — TEKNOPERS">\n'+
  '<meta name="twitter:card" content="summary_large_image">\n<meta name="twitter:image" content="'+SITE+((o.urun==='salon')?'/og-salon.png':'/og-cozum.png')+'">\n<meta name="theme-color" content="#0B1220">\n'+
  '<link rel="icon" href="/favicon.ico">\n<link rel="apple-touch-icon" href="/apple-touch-icon.png">\n'+
  seo.FONTLAR()+
  jsonLd(o)+'\n'+
  '<script async src="https://www.googletagmanager.com/gtag/js?id='+GA_ID+'"></script>\n'+
  '<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date());gtag("config","'+GA_ID+'");</script>\n'+
  '<style>'+seo.STIL+EK_STIL+'</style>\n</head>\n<body'+temaCls+'>\n'+
  seo.NAV()+'\n<main>\n'+
  '<div class="yol"><a href="/">Ana sayfa</a> / <a href="/cozumler">Çözümler</a> / <span>'+esc(o.sektor)+'</span></div>\n'+
  '<div class="hero"><span class="eyebrow">'+esc(o.sektor)+'</span>\n<h1>'+esc(o.baslik)+'</h1>\n'+
  blok(o.giris).replace(/<p>/g,'<p class="lead">')+urunSatir+'</div>\n'+cozumFoto(o.sektor)+
  '<section class="blok"><h2><span class="no">1</span>Sorun</h2>'+blok(o.sorun)+'</section>\n'+
  '<section class="blok"><h2><span class="no">2</span>Neden acil?</h2><div class="riskbox">'+blok(o.kiskirtma)+'</div></section>\n'+
  '<section class="blok"><h2><span class="no">3</span>TEKNOPERS çözümü</h2>'+blok(o.cozum)+ozellikGrid(o.ozellikler)+'</section>\n'+
  nasilHtml+
  seo.FUNNEL(o.urun==='salon'?'/demo#salon':'/demo#sirket')+'<div class="cta-blok"><h2>'+esc(o.ctaBaslik||'Hazır mısınız?')+'</h2><p>'+esc(o.ctaMetin||'Demo için bize yazın.')+'</p><div class="satir">'+ctaSatir+'</div></div>\n'+
  '<div class="cift">'+sorularHtml+cozumlerHtml+'</div>\n'+
  sssHtml+
  '<div class="uyari" style="margin-top:26px">Bu sayfadaki yasal değerlendirmeler genel bilgilendirme amaçlıdır; bağlayıcı hukuki görüş değildir. Kesin durum için hukuk/mali müşavirinize danışın.</div>\n'+
  '</main>\n'+seo.FOOTER()+'\n'+seo.ASISTAN()+'\n</body>\n</html>';
}

function cozumListeUret(cozumler){
  var kart = cozumler.map(function(o){
    return '<a href="/cozum/'+o.slug+'" class="oz" style="text-decoration:none;display:block"><b>'+esc(o.baslik)+'</b><span>'+esc(o.sektor)+' — '+esc(o.ozet)+'</span></a>';
  }).join('');
  return '<!DOCTYPE html>\n<html lang="tr">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n'+
  '<title>Sektörel Çözümler | '+MARKA+'</title>\n'+
  '<meta name="description" content="Fabrika, hukuk bürosu, temizlik, güvenlik, inşaat, depo, klinik ve salon için TEKNOPERS sektörel çözümleri: cihazsız PDKS, zimmet, stok, teklif ve randevu yönetimi.">\n'+
  '<link rel="canonical" href="'+SITE+'/cozumler">\n<meta name="robots" content="index, follow">\n<meta name="theme-color" content="#0B1220">\n<link rel="icon" href="/favicon.ico">\n'+
  '<meta property="og:type" content="website">\n<meta property="og:site_name" content="TEKNOPERS">\n<meta property="og:title" content="Sektörel Çözümler | TEKNOPERS">\n<meta property="og:description" content="Fabrikadan salona, şantiyeden kliniğe; sektörünüze özel yazılım çözümleri.">\n<meta property="og:url" content="'+SITE+'/cozumler">\n<meta property="og:locale" content="tr_TR">\n<meta property="og:image" content="'+SITE+'/og-cozum.png">\n<meta property="og:image:width" content="1200">\n<meta property="og:image:height" content="630">\n<meta property="og:image:alt" content="TEKNOPERS sektörel çözümler">\n<meta name="twitter:card" content="summary_large_image">\n<meta name="twitter:image" content="'+SITE+'/og-cozum.png">\n'+
  '<script type="application/ld+json">'+JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":"Sektörel çözümler","url":SITE+"/cozumler","isPartOf":{"@type":"WebSite","name":"TEKNOPERS","url":SITE+"/"},"breadcrumb":{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Ana Sayfa","item":SITE+"/"},{"@type":"ListItem","position":2,"name":"Çözümler","item":SITE+"/cozumler"}]},"mainEntity":{"@type":"ItemList","numberOfItems":cozumler.length,"itemListElement":cozumler.map(function(c,i){return {"@type":"ListItem","position":i+1,"name":c.baslik,"url":SITE+"/cozum/"+c.slug};})}}).replace(/</g,'\\u003c')+'</script>\n'+
  seo.FONTLAR()+
  '<style>'+seo.STIL+EK_STIL+' .ozet-grid{grid-template-columns:1fr}</style>\n</head>\n<body>\n'+
  seo.NAV()+'\n<main>\n<div class="yol"><a href="/">Ana sayfa</a> / <span>Çözümler</span></div>\n'+
  '<span class="eyebrow">Sektörel Çözümler</span>\n<h1>İşinize göre TEKNOPERS çözümleri</h1>\n'+
  '<p style="color:var(--slate);margin-bottom:8px">Sabit lokasyonlu üretim tesislerinden salonlara kadar; sektörünüzün acı noktasına odaklanan çözümler.</p>\n'+
  '<div class="ozet-grid">'+kart+'</div>\n'+
  '<div class="cta-blok"><h2>Sektörünüz listede yok mu?</h2><p>İhtiyacınızı yazın, size uygun modülü birlikte kuralım.</p><div class="satir"><a class="btn btn-wa" href="https://wa.me/'+WA+'" target="_blank" rel="noopener">WhatsApp\'tan Yaz</a><a class="btn btn-gold" href="/sorular">Sık sorulan sorular</a></div></div>\n'+
  '</main>\n'+seo.FOOTER()+'\n'+seo.ASISTAN()+'\n</body></html>';
}

module.exports = { cozumSayfaUret: cozumSayfaUret, cozumListeUret: cozumListeUret };
