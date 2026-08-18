/**
 * lib/urun-motor.js — TEKNOPERS · ÜRÜN SAYFASI (YENİ MİMARİ)
 * ==============================================================================
 * Düz makale şablonundan çıkıp premium ürün sayfası mimarisi:
 *  koyu hero → alt özellik kartları → nedir → sektörler → "her yöne evrilir"
 *  bandı → fiyat kartı → sorular → güçlü CTA.
 * Nav/footer site ile aynı (kimlik), gövde mimarisi tamamen yeni.
 */
'use strict';

var seo = require('./seo-motor.js');
var SITE = seo.SITE, WA = seo.WA, GA_ID = seo.GA_ID, esc = seo.esc;
var MARKA = 'TEKNOPERS';

// Fiyat (teknopers.com.tr/#fiyat). Şirket ailesi bu fiyata dahil; Salon kendi fiyatı.
var FIYAT = {
  sirket: { aylik: 2500, yillik: 24000, aile: 'Şirket Takip Sistemi paketine dahildir' },
  salon:  { aylik: 1500, yillik: 12000, aile: 'Salon & Randevu paketidir' }
};
function trSayi(n){ return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,'.'); }
function piyasa(x){ return Math.round(x/0.9/10)*10; }
function fiyatBilgi(t){ return FIYAT[t==='salon'?'salon':'sirket']; }
function kirp(s,n){ s=String(s||'').replace(/\s+/g,' ').trim(); return s.length>n?s.slice(0,n-1)+'…':s; }
function pp(m){ return '<p>'+seo.vurgu(esc(m))+'</p>'; }

function faqLd(o){
  if(!o.sss||!o.sss.length) return '';
  var faq={"@context":"https://schema.org","@type":"FAQPage","mainEntity":o.sss.map(function(q){return {"@type":"Question","name":q.s,"acceptedAnswer":{"@type":"Answer","text":q.c}};})};
  return '\n<script type="application/ld+json">'+JSON.stringify(faq).replace(/</g,'\\u003c')+'</script>';
}
function jsonLd(o){
  var url=SITE+'/urun/'+o.slug, f=fiyatBilgi(o.urunTuru);
  var app={"@context":"https://schema.org","@type":"SoftwareApplication","name":o.ad,
    "applicationCategory":"BusinessApplication","operatingSystem":"Web, Android, iOS",
    "description":kirp((o.hero&&o.hero[0])||o.ad,200),
    "provider":{"@type":"Organization","name":MARKA,"url":SITE+"/"},
    "offers":{"@type":"Offer","priceCurrency":"TRY","price":String(f.aylik),"description":"Aylık, işletme başına — kullanıcı başına ücret yok"}};
  var yol={"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
    {"@type":"ListItem","position":1,"name":MARKA,"item":SITE+"/"},
    {"@type":"ListItem","position":2,"name":"Ürünler","item":SITE+"/urunler"},
    {"@type":"ListItem","position":3,"name":o.ad,"item":url}]};
  var g=function(x){return JSON.stringify(x).replace(/</g,'\\u003c');};
  return '<script type="application/ld+json">'+g(app)+'</script>\n<script type="application/ld+json">'+g(yol)+'</script>'+faqLd(o);
}

// YENİ ürün sayfası stilleri (gövde mimarisi)
var PSTIL = [
  '.u-hero{position:relative;overflow:hidden;background:radial-gradient(120% 140% at 15% 0%,#1b2942 0%,#0B1220 55%);color:#fff;border-radius:26px;padding:40px 30px 34px;margin-top:8px;box-shadow:0 24px 60px rgba(11,20,36,.28)}',
  '.u-hero::after{content:"";position:absolute;right:-60px;top:-60px;width:260px;height:260px;border-radius:50%;background:radial-gradient(circle,rgba(245,179,1,.28),transparent 70%)}',
  '.u-badge{display:inline-flex;align-items:center;gap:8px;font-family:var(--mono);font-size:11.5px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#FFD770;border:1px solid rgba(245,179,1,.35);background:rgba(245,179,1,.08);padding:5px 12px;border-radius:30px}',
  '.u-hero h1{font-family:var(--disp);font-size:clamp(28px,5.4vw,42px);line-height:1.12;letter-spacing:-.02em;margin:16px 0 12px;color:#fff}',
  '.u-hero .u-lead{font-size:17.5px;color:#C7D2E0;max-width:640px;margin:0 0 22px}',
  '.u-cta{display:flex;gap:11px;flex-wrap:wrap}',
  '.u-cta a{display:inline-flex;align-items:center;gap:8px;font-weight:800;font-size:15px;padding:14px 24px;border-radius:14px;text-decoration:none}',
  '.u-cta .wa{background:linear-gradient(135deg,#33D375,#17A052);color:#fff;box-shadow:0 12px 28px rgba(31,175,94,.34)}',
  '.u-cta .gold{background:linear-gradient(135deg,#FFCF3F,var(--gold));color:#0B1220;box-shadow:0 12px 28px rgba(229,168,0,.32)}',
  '.u-cta .ghost{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.28)}',
  '.u-sec{margin:34px 0}',
  '.u-kicker{font-family:var(--mono);font-size:11.5px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--goldD);margin-bottom:8px}',
  '.u-sec h2{font-family:var(--disp);font-size:23px;font-weight:800;letter-spacing:-.01em;color:var(--ink);margin:0 0 6px}',
  '.u-sec>p{font-size:16.5px;color:var(--ink2);margin:0 0 14px;max-width:660px}',
  '.af-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:16px}@media(max-width:640px){.af-grid{grid-template-columns:1fr}}',
  '.af{position:relative;background:var(--paper);border:1px solid var(--line);border-radius:16px;padding:18px 18px 16px;transition:border-color .15s,transform .15s}',
  '.af:hover{border-color:var(--gold);transform:translateY(-2px)}',
  '.af .ic{width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,var(--goldL),#FDE7B0);display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:12px}',
  '.af b{display:block;font-family:var(--disp);font-size:16px;color:var(--ink);margin-bottom:4px}',
  '.af span{font-size:14px;color:var(--slate);line-height:1.55}',
  '.sec-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:14px}@media(max-width:640px){.sec-grid{grid-template-columns:1fr}}',
  '.sec-a{display:block;background:#fff;border:1px solid var(--line);border-radius:14px;padding:14px 16px;text-decoration:none;transition:border-color .15s}.sec-a:hover{border-color:var(--gold)}',
  '.sec-a b{display:block;font-family:var(--disp);font-size:15px;color:var(--ink)}.sec-a span{font-size:13.5px;color:var(--slate)}',
  '.evolve{margin:36px 0;border-radius:22px;padding:30px 26px;background:linear-gradient(135deg,#FFF7DC,#FFFDF6);border:1px solid #F0DFA6;position:relative;overflow:hidden}',
  '.evolve h2{font-family:var(--disp);font-size:22px;color:var(--ink);margin:0 0 8px}',
  '.evolve p{font-size:16px;color:var(--ink2);max-width:640px;margin:0}',
  '.evolve .tag{display:inline-block;font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--goldD);margin-bottom:10px}',
  '.price-card{margin:34px 0;border-radius:22px;overflow:hidden;border:1px solid var(--line);box-shadow:var(--sh)}',
  '.price-top{background:linear-gradient(135deg,#0B1220,#1b2942);color:#fff;padding:20px 24px}',
  '.price-top .k{font-family:var(--mono);font-size:11.5px;letter-spacing:.1em;text-transform:uppercase;color:#FFD770}',
  '.price-body{background:#fff;padding:22px 24px}',
  '.price-row{display:flex;gap:26px;flex-wrap:wrap;align-items:flex-end}',
  '.price-row .old{font-size:13px;color:var(--mut)}.price-row .old s{color:#b0392f}',
  '.price-row .big{font-family:var(--disp);font-size:32px;font-weight:800;color:var(--ink);line-height:1.1}.price-row .big small{font-size:15px;font-weight:600;color:var(--slate)}',
  '.price-rozet{display:inline-block;margin-top:12px;background:var(--green);color:#fff;font-size:12.5px;font-weight:700;padding:5px 13px;border-radius:20px}',
  '.price-note{font-size:13px;color:var(--slate);margin:12px 0 16px;line-height:1.6}',
  '.q-list a{display:block;padding:12px 15px;border:1px solid var(--line);border-radius:12px;margin-bottom:8px;color:var(--ink);font-weight:600;font-size:14.5px;background:#fff;text-decoration:none}.q-list a:hover{border-color:var(--gold)}',
  '.u-final{margin:36px 0 8px;border-radius:22px;padding:30px 26px;text-align:center;background:radial-gradient(120% 160% at 50% 0%,#1b2942,#0B1220);color:#fff}',
  '.u-final h2{font-family:var(--disp);font-size:24px;color:#fff;margin:0 0 8px}.u-final p{color:#C7D2E0;margin:0 0 18px}',
  '.u-final .u-cta{justify-content:center}',
  'body.tema-salon .u-badge{color:#F4A9B4;border-color:rgba(192,86,106,.4);background:rgba(192,86,106,.1)}',
  'body.tema-salon .u-hero::after{background:radial-gradient(circle,rgba(192,86,106,.3),transparent 70%)}',
  'body.tema-salon .u-cta .gold{background:linear-gradient(135deg,#D2778A,var(--rose));color:#fff;box-shadow:0 12px 28px rgba(192,86,106,.32)}',
  'body.tema-salon .af .ic{background:linear-gradient(135deg,var(--roseL),#F6D3DA)}',
  'body.tema-salon .evolve{background:linear-gradient(135deg,#FCEFF1,#fff);border-color:#F3D5DB}',
  '.u-faq{border:1px solid var(--line);border-radius:12px;margin:9px 0;background:var(--paper);overflow:hidden}',
  '.u-faq summary{cursor:pointer;padding:13px 16px;font-weight:700;color:var(--ink);font-size:15px;list-style:none}',
  '.u-faq summary::-webkit-details-marker{display:none}',
  '.u-faq summary::before{content:"+";color:var(--goldD);font-weight:800;margin-right:9px}',
  '.u-faq[open] summary::before{content:"\\2013"}',
  '.u-faq p{margin:0 16px 14px;color:var(--slate);font-size:14.5px;line-height:1.66}'
].join('');

function altOzellikGrid(list){
  if(!list||!list.length) return '';
  return '<div class="af-grid">'+list.map(function(o){
    return '<div class="af"><div class="ic">'+esc(o.i||'•')+'</div><b>'+esc(o.b)+'</b><span>'+esc(o.a)+'</span></div>';
  }).join('')+'</div>';
}

function evolveBloku(o){
  var a=o.aile||'', d;
  if(/Salon|Randevu/.test(a)) d={t:'Sektörünüzün diline göre kurulur',h:', işletmenizin diliyle konuşur',p:', diş kliniğinde "hasta ve tedavi", diyetisyende "danışan ve seans" der; hizmet listeniz ve ekrandaki kelimeler size göre kurulur. Yeni ihtiyaç çıkınca modül eklemek dakikalar sürer.'};
  else if(/Muhasebe|Stok|Sat/.test(a)) d={t:'Para akışına göre kurulur',h:', işiniz büyüdükçe kalabalıklaşmaz, netleşir',p:' bugünkü cari ve kasa düzeninize oturur; işiniz büyüdükçe teklif, stok ve ön muhasebe modüllerini aynı sistemde açarsınız. Tek kalıba sığmak yerine işinizin gerçek akışına uyarlanır.'};
  else d={t:'Sahaya göre kurulur',h:', ekibiniz büyüdükçe sizinle büyür',p:' sabit bir paket değildir; bugün birkaç kişilik ekiple başlar, yarın onlarca kişiye ve yeni sahalara aynı sistemle ölçeklenir. İhtiyacınız olmayan modül ekranı doldurmaz; gerektiğinde birlikte ekleriz.'};
  return '<section class="evolve"><span class="tag">'+esc(d.t)+'</span><h2>'+esc(o.ad+d.h)+'</h2><p>'+esc(o.ad+d.p)+'</p></section>';
}

function urunSayfaUret(o, sektorler, sorular){
  var url=SITE+'/urun/'+o.slug, f=fiyatBilgi(o.urunTuru);
  var aciklama=kirp((o.hero&&o.hero[0])||o.ad,155);
  var urun=(o.urunTuru==='salon')?{ad:'Salon & Randevu',anchor:'/#salon'}:{ad:'Şirket Takip',anchor:'/#sirket'};
  var waSoru=encodeURIComponent('Merhaba, '+o.ad+' hakkında bilgi/demo almak istiyorum.');
  var temaCls=(o.urunTuru==='salon')?' class="tema-salon"':'';

  var heroCta='<a class="wa" href="https://wa.me/'+WA+'?text='+waSoru+'" target="_blank" rel="noopener">WhatsApp\'tan demo iste</a>'
    +'<a class="ghost" href="#fiyat-'+o.slug+'">Fiyatı gör</a>';

  var sektorHtml=(sektorler&&sektorler.length)
    ? '<section class="u-sec"><div class="u-kicker">Sektörel uyarlama</div><h2>Hangi sektörler için?</h2><p>'+esc(o.ad)+', aşağıdaki sektörlerin diline ve iş akışına uyarlanır.</p><div class="sec-grid">'+
      sektorler.map(function(s){return '<a class="sec-a" href="/cozum/'+s.slug+'"><b>'+esc(s.sektor)+'</b><span>'+esc(s.baslik)+' →</span></a>';}).join('')+'</div></section>'
    : '';
  var soruHtml=(sorular&&sorular.length)
    ? '<section class="u-sec"><div class="u-kicker">Sık sorulanlar</div><h2>Merak edilenler</h2><div class="q-list">'+
      sorular.map(function(s){return '<a href="/soru/'+s.slug+'">'+esc(s.soru)+'</a>';}).join('')+'</div></section>'
    : '';
  var sssHtml=(o.sss&&o.sss.length)
    ? '<section class="u-sec"><div class="u-kicker">Sık sorulan sorular</div><h2>'+esc(o.ad)+' hakkında merak edilenler</h2>'+o.sss.map(function(q){return '<details class="u-faq"><summary>'+esc(q.s)+'</summary><p>'+seo.vurgu(esc(q.c))+'</p></details>';}).join('')+'</section>'
    : '';
  var aracHtml=(o.araclar&&o.araclar.length)
    ? '<section class="u-sec"><div class="u-kicker">Ücretsiz araçlar</div><h2>Hemen deneyin</h2><div class="q-list">'+
      o.araclar.map(function(a){return '<a href="'+a.yol+'">'+esc(a.ad)+' →</a>';}).join('')+'</div></section>'
    : '';

  var finalCta='<a class="wa" href="https://wa.me/'+WA+'?text='+waSoru+'" target="_blank" rel="noopener">WhatsApp\'tan demo iste</a>'
    +'<a class="gold" href="'+urun.anchor+'">'+esc(urun.ad)+' →</a>';

  return '<!DOCTYPE html>\n<html lang="tr">\n<head>\n'+
  '<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n'+
  '<title>'+esc(o.keyword||o.ad)+' | '+MARKA+'</title>\n'+
  '<meta name="description" content="'+esc(aciklama)+'">\n'+
  '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">\n'+
  '<link rel="canonical" href="'+url+'">\n'+
  '<meta property="og:type" content="product">\n<meta property="og:site_name" content="'+MARKA+'">\n'+
  '<meta property="og:title" content="'+esc(o.ad)+'">\n<meta property="og:description" content="'+esc(aciklama)+'">\n'+
  '<meta property="og:url" content="'+url+'">\n<meta property="og:locale" content="tr_TR">\n'+
  '<meta property="og:image" content="'+SITE+((o.urunTuru==='salon')?'/og-salon.png':'/og-urun.png')+'">\n<meta property="og:image:width" content="1200">\n<meta property="og:image:height" content="630">\n<meta property="og:image:alt" content="'+esc(o.ad)+' — TEKNOPERS">\n'+
  '<meta name="twitter:card" content="summary_large_image">\n<meta name="twitter:image" content="'+SITE+((o.urunTuru==='salon')?'/og-salon.png':'/og-urun.png')+'">\n<meta name="theme-color" content="#0B1220">\n'+
  '<link rel="icon" href="/favicon.ico">\n<link rel="apple-touch-icon" href="/apple-touch-icon.png">\n'+
  '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'+
  '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Figtree:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&display=swap">\n'+
  jsonLd(o)+'\n'+
  '<script async src="https://www.googletagmanager.com/gtag/js?id='+GA_ID+'"></script>\n'+
  '<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date());gtag("config","'+GA_ID+'");</script>\n'+
  '<style>'+seo.STIL+PSTIL+'</style>\n</head>\n<body'+temaCls+'>\n'+
  seo.NAV()+'\n<main>\n'+
  '<div class="yol"><a href="/">Ana sayfa</a> / <a href="/urunler">Ürünler</a> / <span>'+esc(o.ad)+'</span></div>\n'+
  // HERO
  '<section class="u-hero"><span class="u-badge">'+esc(o.etiket||'TEKNOPERS Ürünü')+'</span>'+
  '<h1>'+esc(o.ad)+'</h1>'+
  '<div class="u-lead">'+esc((o.hero&&o.hero[0])||'')+'</div>'+
  '<div class="u-cta">'+heroCta+'</div></section>\n'+
  // ALT ÖZELLİKLER
  (o.altOzellikler&&o.altOzellikler.length ? '<section class="u-sec"><div class="u-kicker">Ürünün modülleri</div><h2>İçindeki özellikler</h2><p>'+esc(o.ad)+' tek bir işlev değil; ihtiyacınıza göre açılan şu alt modülleri barındırır:</p>'+altOzellikGrid(o.altOzellikler)+'</section>\n' : '')+
  // NEDİR
  '<section class="u-sec"><div class="u-kicker">Tanım</div><h2>'+esc(o.ad)+' nedir?</h2>'+(o.nedir||[]).map(pp).join('')+'</section>\n'+
  // SEKTÖRLER
  sektorHtml+'\n'+
  // EVRİLEBİLİRLİK
  evolveBloku(o)+'\n'+
  // FİYAT
  '<section class="price-card" id="fiyat-'+o.slug+'"><div class="price-top"><span class="k">Fiyat · '+esc(f.aile)+'</span></div>'+
  '<div class="price-body"><div class="price-row">'+
  '<div><div class="old">Piyasa: <s>'+trSayi(piyasa(f.aylik))+' ₺/ay</s></div><div class="big">'+trSayi(f.aylik)+' ₺<small>/ay</small></div></div>'+
  '<div><div class="old">Piyasa: <s>'+trSayi(piyasa(f.yillik))+' ₺/yıl</s></div><div class="big">'+trSayi(f.yillik)+' ₺<small>/yıl</small></div></div>'+
  '</div><div class="price-rozet">Piyasanın ~%10 altında</div>'+
  '<div class="price-note">KDV hariç · işletme başına, sınırsız personel · kullanıcı başına ücret yok · kurulum, eğitim ve tüm modüller dahil</div>'+
  '<a class="btn btn-gold" href="/#fiyat">Tüm fiyatları gör →</a></div></section>\n'+
  // ARAÇLAR + SORULAR
  aracHtml+'\n'+soruHtml+'\n'+sssHtml+'\n'+
  // FINAL CTA
  seo.FUNNEL(o.urunTuru==='salon'?'/demo#salon':'/demo#sirket')+'<section class="u-final"><h2>'+esc(o.ctaBaslik||'Başlayalım')+'</h2><p>'+esc(o.ctaMetin||'Demo için bize yazın.')+'</p><div class="u-cta">'+finalCta+'</div></section>\n'+
  '</main>\n'+seo.FOOTER()+'\n'+seo.ASISTAN()+'\n</body>\n</html>';
}

function urunListeUret(urunler){
  // ürünleri aileye göre grupla
  var grup={}; urunler.forEach(function(u){ var k=u.aile||'Ürünler'; (grup[k]=grup[k]||[]).push(u); });
  var bolum=Object.keys(grup).map(function(k){
    var kart=grup[k].map(function(u){
      return '<a href="/urun/'+u.slug+'" class="af" style="display:block;text-decoration:none"><div class="ic">'+esc(u.ikon||'📦')+'</div><b>'+esc(u.ad)+'</b><span>'+esc(kirp((u.hero&&u.hero[0])||'',110))+'</span></a>';
    }).join('');
    return '<section class="u-sec"><div class="u-kicker">'+esc(k)+'</div><div class="af-grid">'+kart+'</div></section>';
  }).join('');
  return '<!DOCTYPE html>\n<html lang="tr">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n'+
  '<title>Ürünler | '+MARKA+'</title>\n'+
  '<meta name="description" content="TEKNOPERS ürünleri: PDKS, depo & stok, satış & teklif, ön muhasebe, zimmet ve sektörel randevu programları. Her ürün alt modülleriyle birlikte.">\n'+
  '<link rel="canonical" href="'+SITE+'/urunler">\n<meta name="robots" content="index, follow">\n<meta name="theme-color" content="#0B1220">\n<link rel="icon" href="/favicon.ico">\n'+
  '<meta property="og:type" content="website">\n<meta property="og:site_name" content="TEKNOPERS">\n<meta property="og:title" content="Ürünler | TEKNOPERS">\n<meta property="og:description" content="Personel, stok, cari, ön muhasebe ve randevu: tek sistemde 13 modül.">\n<meta property="og:url" content="'+SITE+'/urunler">\n<meta property="og:locale" content="tr_TR">\n<meta property="og:image" content="'+SITE+'/og-urun.png">\n<meta property="og:image:width" content="1200">\n<meta property="og:image:height" content="630">\n<meta property="og:image:alt" content="TEKNOPERS ürünleri">\n<meta name="twitter:card" content="summary_large_image">\n<meta name="twitter:image" content="'+SITE+'/og-urun.png">\n'+
  '<script type="application/ld+json">'+JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":"Ürünler","url":SITE+"/urunler","isPartOf":{"@type":"WebSite","name":"TEKNOPERS","url":SITE+"/"},"breadcrumb":{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Ana Sayfa","item":SITE+"/"},{"@type":"ListItem","position":2,"name":"Ürünler","item":SITE+"/urunler"}]},"mainEntity":{"@type":"ItemList","numberOfItems":urunler.length,"itemListElement":urunler.map(function(u,i){return {"@type":"ListItem","position":i+1,"name":u.ad,"url":SITE+"/urun/"+u.slug};})}}).replace(/</g,'\\u003c')+'</script>\n'+
  '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Figtree:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&display=swap">\n'+
  '<style>'+seo.STIL+PSTIL+'</style>\n</head>\n<body>\n'+
  seo.NAV()+'\n<main>\n<div class="yol"><a href="/">Ana sayfa</a> / <span>Ürünler</span></div>\n'+
  '<section class="u-hero"><span class="u-badge">Ürün Ailesi</span><h1>Her işe bir ürün</h1><div class="u-lead">PDKS\'ten depoya, satıştan salona. Her ürün, altındaki modüllerle birlikte; küçük eklemelerle işinize uyarlanır.</div><div class="u-cta"><a class="wa" href="https://wa.me/'+WA+'" target="_blank" rel="noopener">WhatsApp\'tan Yaz</a><a class="ghost" href="/cozumler">Sektörel çözümler</a></div></section>\n'+
  bolum+'\n'+
  '</main>\n'+seo.FOOTER()+'\n'+seo.ASISTAN()+'\n</body></html>';
}

module.exports = { urunSayfaUret: urunSayfaUret, urunListeUret: urunListeUret };
