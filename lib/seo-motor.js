/**
 * lib/seo-motor.js — TEKNOPERS (teknopers.com.tr) · PROGRAMATİK SEO ŞABLONU
 * ==============================================================================
 * /soru/<slug> sayfasını üretir. Tasarım teknopers.com.tr ile BİREBİR aynı
 * (açık tema, Sora/Figtree, defter-kareli doku, altın vurgu, aynı nav + footer).
 * Her sayfa ilgili HESAPLAMA ARACINA (/araclar/...) iç link vererek trafiği
 * dönüşüme taşır. <head>'de JSON-LD FAQPage + BreadcrumbList; gövde JS olmadan
 * taranabilir (H1/H2/p + noscript).
 */
'use strict';

var SITE = (process.env.SITE_URL || 'https://teknopers.com.tr').replace(/\/$/, '');
var GA_ID = process.env.GA_ID || 'G-8GBQE6QZP8';
var MARKA = 'TEKNOPERS';
var WA = '905434472226';
var WA_METIN = 'Merhaba%2C%20TEKNOPERS%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.';
// Siteye gömülü dijital asistan (index.html'deki ile aynı). Env ile değiştirilebilir/kapatılabilir.
var ASISTAN_EMBED = (typeof process !== 'undefined' && process.env && process.env.ASISTAN_EMBED !== undefined)
  ? process.env.ASISTAN_EMBED : 'https://ai.teknopers.com.tr/embed.js';
function ASISTAN(){ return ASISTAN_EMBED ? '<script src="'+ASISTAN_EMBED+'" async></script>' : ''; }

var TR = { 'ı':'i','İ':'i','ş':'s','Ş':'s','ğ':'g','Ğ':'g','ü':'u','Ü':'u','ö':'o','Ö':'o','ç':'c','Ç':'c','â':'a','î':'i','û':'u' };

function slugYap(m){
  return String(m||'').replace(/[ıİşŞğĞüÜöÖçÇâîû]/g,function(x){return TR[x]||x;})
    .toLowerCase().replace(/[^a-z0-9\s-]/g,' ').trim().replace(/\s+/g,'-').replace(/-+/g,'-').replace(/^-|-$/g,'');
}
function slugCoz(slug){
  var s=String(slug||'').replace(/-/g,' ').replace(/\s+/g,' ').trim();
  if(!s) return '';
  var c=s.charAt(0).toLocaleUpperCase('tr')+s.slice(1);
  return /[?]$/.test(c)?c:c+'?';
}
function esc(s){
  return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}
function vurgu(e){ return e.replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/`([^`]+)`/g,'<code>$1</code>'); }

function paragrafla(cevap){
  var norm=String(cevap||'').replace(/\r/g,'').replace(/\n{3,}/g,'\n\n').trim();
  return norm.split(/\n{2,}/).map(function(b){return b.trim();}).filter(Boolean).map(function(blok){
    var satir=blok.split('\n').map(function(l){return l.trim();}).filter(Boolean);
    var num=satir.length&&satir.every(function(l){return /^\d+[.)]\s+/.test(l);});
    var mad=satir.length&&satir.every(function(l){return /^([-*•])\s+/.test(l);});
    if(num){return '<ol>'+satir.map(function(l){return '<li>'+vurgu(esc(l.replace(/^\d+[.)]\s+/,'')))+'</li>';}).join('')+'</ol>';}
    if(mad){return '<ul>'+satir.map(function(l){return '<li>'+vurgu(esc(l.replace(/^([-*•])\s+/,'')))+'</li>';}).join('')+'</ul>';}
    if(/^#{2,4}\s+/.test(blok)){return '<h2>'+vurgu(esc(blok.replace(/^#{2,4}\s+/,'')))+'</h2>';}
    return '<p>'+vurgu(esc(blok.replace(/^#{1,6}\s+/gm,''))).replace(/\n/g,'<br>')+'</p>';
  }).join('\n');
}
function sadeMetin(s){
  return String(s||'').replace(/\*\*(.+?)\*\*/g,'$1').replace(/`([^`]+)`/g,'$1')
    .replace(/^#{1,6}\s+/gm,'').replace(/^\s*[-*•]\s+/gm,'• ').replace(/^\s*\d+[.)]\s+/gm,'')
    .replace(/\r/g,'').replace(/[ \t]+/g,' ').replace(/\n{3,}/g,'\n\n').trim();
}
function ozet(s,n){ n=n||155; var d=sadeMetin(s).replace(/\s+/g,' ').trim(); return d.length>n?d.slice(0,n-1).trim()+'…':d; }

function jsonLd(soru,cevap,slug){
  var url=SITE+'/soru/'+slug;
  var faq={"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":soru,"acceptedAnswer":{"@type":"Answer","text":sadeMetin(cevap)}}]};
  var yol={"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
    {"@type":"ListItem","position":1,"name":MARKA,"item":SITE+"/"},
    {"@type":"ListItem","position":2,"name":"Sorular","item":SITE+"/sorular"},
    {"@type":"ListItem","position":3,"name":soru,"item":url}]};
  var g=function(o){return JSON.stringify(o).replace(/</g,'\\u003c');};
  return '<script type="application/ld+json">'+g(faq)+'</script>\n<script type="application/ld+json">'+g(yol)+'</script>';
}

// teknopers.com.tr'nin nav'ı (birebir)
function NAV(){
  return '<nav><div class="nav-in">'+
    '<a class="logo" href="/"><span class="lg">T</span>TEKNOPERS</a>'+
    '<div class="nav-links">'+
      '<a href="/araclar/">Araçlar</a>'+
      '<a href="/#sirket">Şirket Takip</a>'+
      '<a href="/#salon">Salon Programı</a>'+
      '<a href="/#fiyat">Fiyatlar</a>'+
      '<a href="/ortaklik.html">Ortaklık</a>'+
      '<a href="/blog.html">Blog</a>'+
    '</div>'+
    '<a class="btn btn-wa nav-cta" href="https://wa.me/'+WA+'?text='+WA_METIN+'" target="_blank" rel="noopener">WhatsApp\'tan Yaz</a>'+
  '</div></nav>';
}
// teknopers.com.tr'nin footer'ı (birebir)
function FOOTER(){
  return '<footer><div class="wrap"><div class="foot-grid">'+
    '<div><a class="logo" href="/" style="margin-bottom:12px"><span class="lg">T</span>TEKNOPERS</a>'+
    '<p style="margin-top:12px;max-width:320px;font-size:14px;color:var(--slate)">Türk KOBİ\'leri için saha, depo, cari ve randevu yönetim sistemleri. İstanbul\'dan, sahanın içinden.</p>'+
    '<div class="social">'+
      '<a href="https://www.instagram.com/teknopers.saha" target="_blank" rel="noopener">Instagram</a>'+
      '<a href="https://www.linkedin.com/company/teknopers/" target="_blank" rel="noopener">LinkedIn</a>'+
      '<a href="https://www.tiktok.com/@teknopers8" target="_blank" rel="noopener">TikTok</a>'+
    '</div></div>'+
    '<div><h3>Ürünler</h3>'+
      '<a href="/#sirket">Şirket Takip Sistemi</a><a href="/#salon">Salon Programı</a><a href="/#fiyat">Fiyatlar</a><a href="/ortaklik.html">Ortaklık</a>'+
    '</div>'+
    '<div><h3>Kaynaklar</h3>'+
      '<a href="/araclar/">Hesaplama Araçları</a><a href="/blog-pdks-nedir.html">PDKS nedir?</a><a href="/blog-puantaj-nasil-tutulur.html">Puantaj nasıl tutulur?</a><a href="/sorular">Tüm sorular</a><a href="/blog.html">Blog</a>'+
    '</div></div>'+
    '<div class="foot-bottom"><span>© '+new Date().getFullYear()+' TEKNOPERS · teknopers.com.tr</span>'+
    '<span>WhatsApp: <a href="https://wa.me/'+WA+'" target="_blank" rel="noopener" style="display:inline;color:#FFD34D">0543 447 22 26</a></span></div>'+
  '</div></footer>';
}

// site kimliğiyle uyumlu stil (açık tema, Sora/Figtree, defter dokusu, altın vurgu)
var STIL = [
":root{--bg:#F6F8FB;--paper:#FFFFFF;--ink:#0B1424;--ink2:#1C2A42;--slate:#4B5A70;--mut:#5C6B82;--line:#E3E9F1;--line2:#D3DCE8;--gold:#E5A800;--goldD:#8C6708;--goldL:#FFF4D6;--green:#0C7E5C;--greenL:#E4F7F0;--navy:#0B1424;--disp:'Sora','Segoe UI',system-ui,-apple-system,Arial,sans-serif;--body:'Figtree','Segoe UI',system-ui,-apple-system,Arial,sans-serif;--mono:'JetBrains Mono',ui-monospace,Consolas,monospace;--r:18px;--sh:0 14px 40px rgba(11,20,36,.08)}",
"*{margin:0;padding:0;box-sizing:border-box}",
"html{scroll-behavior:smooth;scroll-padding-top:86px}",
"body{background:var(--bg);color:var(--ink);font-family:var(--body);line-height:1.68}",
"body::before{content:'';position:fixed;inset:0;z-index:-1;pointer-events:none;background:linear-gradient(to right,rgba(11,20,36,.028) 1px,transparent 1px),linear-gradient(to bottom,rgba(11,20,36,.028) 1px,transparent 1px);background-size:34px 34px;mask-image:linear-gradient(180deg,transparent 0,black 140px,black calc(100% - 120px),transparent 100%)}",
"a{color:inherit;text-decoration:none}",
".wrap{max-width:1140px;margin:0 auto;padding:0 22px}",
"nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(255,255,255,.85);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-bottom:1px solid var(--line)}",
".nav-in{max-width:1140px;margin:0 auto;padding:0 22px;height:70px;display:flex;align-items:center;gap:24px}",
".logo{display:flex;align-items:center;gap:11px;font-family:var(--disp);font-weight:800;font-size:19px;color:var(--ink)}",
".logo .lg{width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,#FFCF3F,var(--gold));color:var(--navy);display:flex;align-items:center;justify-content:center;font-size:20px;box-shadow:0 4px 12px rgba(229,168,0,.35)}",
".nav-links{display:flex;gap:22px;margin-left:auto;font-size:14.5px;font-weight:600;color:var(--slate)}",
".nav-links a:hover{color:var(--ink)}",
"@media(max-width:820px){.nav-links{display:none}}",
".btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;font-weight:700;font-size:15px;padding:13px 24px;border-radius:14px;border:1px solid transparent;cursor:pointer;line-height:1.35}",
".btn-wa{background:linear-gradient(135deg,#33D375,#17A052);color:#fff;box-shadow:0 10px 26px rgba(31,175,94,.32)}",
".btn-gold{background:linear-gradient(135deg,#FFCF3F,var(--gold));color:var(--navy);box-shadow:0 10px 26px rgba(229,168,0,.30)}",
"main{max-width:760px;margin:0 auto;padding:104px 22px 60px}",
".yol{font-family:var(--mono);font-size:12px;color:var(--mut);margin-bottom:16px;letter-spacing:.02em}.yol a{color:var(--mut)}.yol a:hover{color:var(--goldD)}",
".eyebrow{font-family:var(--mono);font-size:11.5px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--goldD);display:inline-flex;align-items:center;gap:8px;margin-bottom:14px}.eyebrow::before{content:'';width:22px;height:3px;border-radius:2px;background:var(--gold)}",
"h1{font-family:var(--disp);font-size:clamp(26px,4.6vw,38px);font-weight:800;line-height:1.16;letter-spacing:-.018em;margin:0 0 18px;color:var(--ink)}",
"article h2{font-family:var(--disp);font-size:22px;font-weight:700;margin:28px 0 10px;color:var(--ink);letter-spacing:-.01em}",
"article p{margin:0 0 15px;font-size:16.5px;color:var(--ink2)}",
"article ul,article ol{margin:0 0 16px;padding-left:4px;list-style:none}",
"article ul li{position:relative;padding-left:22px;margin:8px 0;font-size:16px;color:var(--ink2)}article ul li::before{content:'';position:absolute;left:3px;top:10px;width:6px;height:6px;border-radius:50%;background:var(--gold)}",
"article ol{counter-reset:s}article ol li{position:relative;padding-left:36px;margin:11px 0;counter-increment:s;font-size:16px;color:var(--ink2)}article ol li::before{content:counter(s);position:absolute;left:0;top:-2px;width:26px;height:26px;border-radius:8px;background:linear-gradient(135deg,#FFCF3F,var(--gold));color:var(--navy);font-size:12px;font-weight:800;display:flex;align-items:center;justify-content:center}",
"article strong{color:var(--goldD);font-weight:700}",
"article code{background:var(--goldL);padding:2px 7px;border-radius:6px;font-size:14px;color:var(--goldD);font-family:var(--mono)}",
".uyari{margin:22px 0;padding:13px 15px;background:var(--greenL);border:1px solid #BFE6D6;border-radius:12px;font-size:13.5px;line-height:1.6;color:#0A5C43}.uyari a{color:var(--goldD);font-weight:600}",
".arac-cta{margin:28px 0;padding:20px;border-radius:var(--r);background:linear-gradient(135deg,var(--goldL),#FFFDF6);border:1px solid #F0DFA6;box-shadow:var(--sh)}",
".arac-cta .k{font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--goldD)}",
".arac-cta p{margin:6px 0 14px;font-size:16px;color:var(--ink);font-weight:600}",
".arac-cta .satir{display:flex;gap:10px;flex-wrap:wrap}",
".ilgili{margin-top:34px;border-top:1px solid var(--line);padding-top:22px}.ilgili h2{font-family:var(--disp);font-size:18px;margin:0 0 12px}",
".ilgili ul{list-style:none;padding:0;margin:0}.ilgili a{display:block;padding:12px 14px;color:var(--ink);border:1px solid var(--line);border-radius:12px;margin-bottom:9px;font-weight:600;background:var(--paper)}.ilgili a:hover{border-color:var(--gold)}",
"footer{background:var(--navy);color:#C7D2E0;margin-top:40px;padding:44px 0 26px;font-size:14px}",
"footer .foot-grid{display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:30px}@media(max-width:720px){footer .foot-grid{grid-template-columns:1fr}}",
"footer .logo{color:#fff}footer h3{font-family:var(--disp);font-size:15px;color:#fff;margin-bottom:12px}",
"footer a{display:block;color:#AEBACB;padding:4px 0}footer a:hover{color:#fff}",
"footer .social{display:flex;gap:14px;margin-top:14px;flex-wrap:wrap}footer .social a{display:inline;font-weight:600;color:#FFD34D}",
"footer .foot-bottom{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;border-top:1px solid rgba(255,255,255,.12);margin-top:28px;padding-top:18px;font-size:13px;color:#8B98AC}"
].join("");

function sayfaUret(o){
  var slug=o.slug, soru=o.soru, cevap=o.cevap, ilgili=o.ilgili||[], arac=o.arac||null, aracAd=o.aracAd||null, blog=o.blog||null, blogAd=o.blogAd||null;
  var url=SITE+'/soru/'+slug;
  var aciklama=ozet(cevap,155);
  var govde=paragrafla(cevap);
  var waSoru=encodeURIComponent('Merhaba, TEKNOPERS sitesinden yazıyorum.\nSorum: '+soru);

  // Araç/blog iç link CTA'sı (trafiği dönüşüme taşıyan kısım)
  var ctaSatir='';
  if(arac){ ctaSatir+='<a class="btn btn-gold" href="'+arac+'">'+esc(aracAd||'Ücretsiz hesaplama aracını kullan')+' →</a>'; }
  ctaSatir+='<a class="btn btn-wa" href="https://wa.me/'+WA+'?text='+waSoru+'" target="_blank" rel="noopener">WhatsApp\'tan sor</a>';
  var blogSatir = blog ? '<p style="margin-top:12px;font-size:14px"><a href="'+blog+'" style="color:var(--goldD);font-weight:600">Detaylı rehber: '+esc(blogAd||'ilgili yazı')+' →</a></p>' : '';
  var aracKutu='<div class="arac-cta"><span class="k">TEKNOPERS ile</span>'+
    '<p>'+ (arac ? 'Rakamı kendin hesapla ya da işletmeni tek ekrandan yönet.' : 'İşletmeni tek ekrandan yönetmek için bize yaz.') +'</p>'+
    '<div class="satir">'+ctaSatir+'</div>'+blogSatir+'</div>';

  var ilgiliHtml = ilgili.length
    ? '<nav class="ilgili" aria-label="İlgili sorular"><h2>İlgili sorular</h2><ul>'+
      ilgili.map(function(i){return '<li><a href="/soru/'+i.slug+'">'+esc(i.soru)+'</a></li>';}).join('')+'</ul></nav>'
    : '';

  return '<!DOCTYPE html>\n<html lang="tr">\n<head>\n'+
  '<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n'+
  '<title>'+esc(soru)+' | '+MARKA+'</title>\n'+
  '<meta name="description" content="'+esc(aciklama)+'">\n'+
  '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">\n'+
  '<link rel="canonical" href="'+url+'">\n'+
  '<meta property="og:type" content="article">\n<meta property="og:site_name" content="'+MARKA+'">\n'+
  '<meta property="og:title" content="'+esc(soru)+'">\n<meta property="og:description" content="'+esc(aciklama)+'">\n'+
  '<meta property="og:url" content="'+url+'">\n<meta property="og:locale" content="tr_TR">\n'+
  '<meta name="twitter:card" content="summary">\n<meta name="theme-color" content="#0B1424">\n'+
  '<link rel="icon" href="/favicon.ico">\n<link rel="apple-touch-icon" href="/apple-touch-icon.png">\n'+
  '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'+
  '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sora:wght@700;800&family=Figtree:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&display=swap">\n'+
  jsonLd(soru,cevap,slug)+'\n'+
  '<script async src="https://www.googletagmanager.com/gtag/js?id='+GA_ID+'"></script>\n'+
  '<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date());gtag("config","'+GA_ID+'");</script>\n'+
  '<style>'+STIL+'</style>\n</head>\n<body>\n'+
  NAV()+'\n<main>\n'+
  '<div class="yol"><a href="/">Ana sayfa</a> / <a href="/sorular">Sorular</a> / <span>'+esc(soru)+'</span></div>\n'+
  '<article>\n<span class="eyebrow">Bilgi Rehberi</span>\n<h1>'+esc(soru)+'</h1>\n'+
  govde+'\n'+
  '<div class="uyari">Bu içerik genel bilgilendirme amaçlıdır; bağlayıcı hukuki/mali görüş değildir. Güncel oran ve kesin hesap için mali müşavirinize (SMMM) danışın.</div>\n'+
  '</article>\n'+
  aracKutu+'\n'+
  ilgiliHtml+'\n'+
  '<noscript><p style="margin-top:16px;color:#5C6B82;font-size:14px">Bu sayfa JavaScript olmadan da görüntülenir.</p></noscript>\n'+
  '</main>\n'+FOOTER()+'\n'+ASISTAN()+'\n</body>\n</html>';
}

function hataSayfasi(slug,soru){
  var s=soru||(slug?slugCoz(slug):'Sorunuz');
  return '<!DOCTYPE html>\n<html lang="tr"><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n'+
  '<title>'+esc(s)+' | '+MARKA+'</title>\n<meta name="robots" content="noindex, follow">\n'+
  '<style>body{font-family:system-ui,Segoe UI,Arial,sans-serif;background:#F6F8FB;color:#0B1424;max-width:620px;margin:0 auto;padding:60px 22px;line-height:1.6}h1{font-family:Sora,sans-serif}a{color:#8C6708;font-weight:600}.k{display:inline-block;margin-top:14px;padding:12px 22px;border-radius:14px;background:linear-gradient(135deg,#FFCF3F,#E5A800);color:#0B1424;font-weight:700}</style>\n'+
  '</head><body><h1>'+esc(s)+'</h1><p>Bu yanıt şu anda hazırlanamadı. Birkaç saniye sonra sayfayı yenileyin.</p>'+
  '<a class="k" href="/araclar/">Hesaplama araçları →</a> &nbsp; <a href="/sorular">Diğer sorular</a></body></html>';
}

function listeSayfasiUret(sorular){
  var g={};
  sorular.forEach(function(s){var k=s.kategori||'Genel';(g[k]=g[k]||[]).push(s);});
  var bolum=Object.keys(g).map(function(k){
    var li=g[k].map(function(s){return '<li><a href="/soru/'+s.slug+'">'+esc(s.soru)+'</a></li>';}).join('');
    return '<section style="margin-top:24px"><h2>'+esc(k)+'</h2><ul>'+li+'</ul></section>';
  }).join('');
  return '<!DOCTYPE html>\n<html lang="tr"><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n'+
  '<title>Sık sorulan sorular | '+MARKA+'</title>\n'+
  '<meta name="description" content="Personel, puantaj, kıdem ve ihbar tazminatı, yıllık izin, fazla mesai, salon ve randevu yönetimi hakkında en çok aranan soruların yanıtları ve ücretsiz hesaplama araçları.">\n'+
  '<link rel="canonical" href="'+SITE+'/sorular">\n<meta name="robots" content="index, follow">\n<meta name="theme-color" content="#0B1424">\n<link rel="icon" href="/favicon.ico">\n'+
  '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sora:wght@700;800&family=Figtree:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&display=swap">\n'+
  '<style>'+STIL+' main h1{margin-bottom:8px}.ilgili{border:0;padding:0}</style>\n</head><body>\n'+
  NAV()+'\n<main>\n<div class="yol"><a href="/">Ana sayfa</a> / <span>Sorular</span></div>\n'+
  '<span class="eyebrow">Bilgi Rehberi</span>\n<h1>Sık sorulan sorular</h1>\n'+
  '<p style="color:var(--slate);margin-bottom:6px">Personel yönetimi, bordro, iş hukuku ve randevu konularında en çok aranan sorular ve ücretsiz <a href="/araclar/" style="color:var(--goldD);font-weight:600">hesaplama araçları</a>.</p>\n'+
  bolum.replace(/class="ilgili"/g,'')+'\n'+
  '<div class="arac-cta"><span class="k">TEKNOPERS</span><p>İşletmeni tek ekrandan yönet: puantaj, cari, stok, randevu.</p><div class="satir"><a class="btn btn-gold" href="/araclar/">Araçlara göz at →</a><a class="btn btn-wa" href="https://wa.me/'+WA+'?text='+WA_METIN+'" target="_blank" rel="noopener">WhatsApp\'tan Yaz</a></div></div>\n'+
  '</main>\n'+FOOTER()+'\n'+ASISTAN()+'\n</body></html>';
}

module.exports = { slugYap:slugYap, slugCoz:slugCoz, esc:esc, sadeMetin:sadeMetin, ozet:ozet, sayfaUret:sayfaUret, hataSayfasi:hataSayfasi, listeSayfasiUret:listeSayfasiUret };
