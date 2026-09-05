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
function FUNNEL(demo){ demo=demo||'/demo'; return '<div style="max-width:820px;margin:30px auto;padding:20px 22px;border:1px solid #EAD9A8;border-radius:16px;background:linear-gradient(135deg,#FFF9EC,#FFFDF7);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:14px"><div style="min-width:220px;flex:1"><div style="font-weight:800;font-size:16px;color:#0B1220;line-height:1.3">İşletmenizi bugün dijitalleştirin</div><div style="font-weight:500;font-size:13px;color:#6B7280;margin-top:3px;line-height:1.5">15 gün ücretsiz demo &#8212; kart bilgisi yok, kurulum &amp; destek dahil. Beğenirseniz aylık 1.000 &#8378;.</div></div><div style="display:flex;gap:9px;flex-wrap:wrap"><a href="/demo-talep" style="display:inline-flex;align-items:center;gap:6px;padding:12px 18px;border-radius:12px;background:linear-gradient(135deg,#E0A100,#B8860B);color:#0B1220;font-weight:800;font-size:14px;text-decoration:none;box-shadow:0 8px 20px rgba(224,161,0,.3)">&#128640; Ücretsiz Demo Başlat</a><a href="'+demo+'" style="display:inline-flex;align-items:center;gap:6px;padding:12px 18px;border-radius:12px;background:#0B1220;color:#fff;font-weight:700;font-size:14px;text-decoration:none">&#9654; Canlı Demo</a></div></div>'; }
var WA_METIN = 'Merhaba%2C%20TEKNOPERS%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.';
// Siteye gömülü dijital asistan (index.html'deki ile aynı). Env ile değiştirilebilir/kapatılabilir.
var ASISTAN_EMBED = (typeof process !== 'undefined' && process.env && process.env.ASISTAN_EMBED !== undefined)
  ? process.env.ASISTAN_EMBED : 'https://ai.teknopers.com.tr/embed.js';
function ASISTAN(){ return ASISTAN_EMBED ? '<script src="'+ASISTAN_EMBED+'" async></script>' : ''; }

// Fontlar — render ENGELLEMEYEN yükleme (ana sayfayla aynı desen: preload + media=print onload + noscript).
// Eskiden düz <link rel="stylesheet"> idi; o, ilk boyamayı bloke edip LCP/FCP'yi düşürüyordu.
var FONT_URL = 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600;700;800&family=Figtree:wght@400;600;700&family=JetBrains+Mono:wght@500&display=swap';
function FONTLAR(){
  return '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'+
    '<link rel="preload" as="style" href="'+FONT_URL+'">\n'+
    '<link rel="stylesheet" href="'+FONT_URL+'" media="print" onload="this.media=\'all\'">\n'+
    '<noscript><link rel="stylesheet" href="'+FONT_URL+'"></noscript>\n';
}

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

function jsonLd(soru,cevap,slug,d){
  d=d||{};
  var url=SITE+'/soru/'+slug;
  var faq={"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":soru,"acceptedAnswer":{"@type":"Answer","text":sadeMetin(cevap)}}]};
  var yol={"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
    {"@type":"ListItem","position":1,"name":MARKA,"item":SITE+"/"},
    {"@type":"ListItem","position":2,"name":"Sorular","item":SITE+"/sorular"},
    {"@type":"ListItem","position":3,"name":soru,"item":url}]};
  // E-E-A-T sinyali: sayfayı editoryal içerik olarak tanımlar (yazar + yayıncı kimliği + logo).
  // Tarih alanları OPSİYONEL — sahte tazelik üretmemek için yalnızca kayıtta yayin/guncelleme varsa girer.
  var makale={"@context":"https://schema.org","@type":"TechArticle","headline":soru,"description":ozet(cevap,155),"inLanguage":"tr-TR","mainEntityOfPage":{"@type":"WebPage","@id":url},"author":{"@type":"Organization","name":MARKA,"url":SITE+"/"},"publisher":{"@type":"Organization","name":MARKA,"logo":{"@type":"ImageObject","url":SITE+"/icon-512.png"}}};
  if(d.yayin){ makale.datePublished=d.yayin; }
  if(d.guncelleme||d.yayin){ makale.dateModified=d.guncelleme||d.yayin; }
  var g=function(x){return JSON.stringify(x).replace(/</g,'\\u003c');};
  return '<script type="application/ld+json">'+g(makale)+'</script>\n<script type="application/ld+json">'+g(faq)+'</script>\n<script type="application/ld+json">'+g(yol)+'</script>';
}

function NAV(){
  // Lansman kampanyası şeridi — kampanya bitince bu satırı silin/yorum satırı yapın
  return '<a href="/#fiyat" style="display:block;background:linear-gradient(90deg,#0B1220,#1b2942);color:#FFD873;text-align:center;text-decoration:none;font:700 12.5px/1.35 \'JetBrains Mono\',ui-monospace,monospace;letter-spacing:.02em;padding:9px 14px;border-bottom:1px solid #26324a">🚀 Lansman kampanyası: aylık 1.000 ₺ — sınırlı süre · <span style="color:#fff;text-decoration:underline">Detay →</span></a>'+
    '<header class="mast"><div class="mast-in">'+
    '<a class="wordmark" href="/"><span class="lg">T</span>TEKNOPERS</a>'+
    '<nav class="mast-nav">'+
      '<a href="/urunler">Ürünler</a>'+
      '<a href="/cozumler">Çözümler</a>'+
      '<a href="/araclar/">Araçlar</a>'+
      '<a href="/#fiyat">Fiyatlar</a>'+'<a href="/egitim">Eğitim</a>'+'<a href="/demo-talep">Ücretsiz Demo</a>'+
      '<a href="/blog.html">Blog</a>'+
      '<a class="wa" href="https://wa.me/'+WA+'?text='+WA_METIN+'" target="_blank" rel="noopener">WhatsApp\'tan Yaz</a>'+
    '</nav>'+
  '</div></header>';
}
// teknopers.com.tr footer'ıyla aynı kimlik
function FOOTER(){
  return '<footer><div class="wrap"><div class="foot-grid">'+
    '<div><a class="logo" href="/"><span class="lg">T</span>TEKNOPERS</a>'+
    '<p style="margin-top:14px;max-width:320px;font-size:14px">Türk KOBİ\'leri için saha, ön muhasebe, stok ve randevu yönetim sistemleri. İstanbul\'dan, sahanın içinden.</p>'+
    '<div class="social">'+
      '<a href="https://www.instagram.com/teknopers.saha" target="_blank" rel="noopener">Instagram</a>'+
      '<a href="https://www.facebook.com/share/1DnvkpxuM1/" target="_blank" rel="noopener">Facebook</a>'+
      '<a href="https://www.linkedin.com/company/teknopers/" target="_blank" rel="noopener">LinkedIn</a>'+
      '<a href="https://www.tiktok.com/@teknopers8" target="_blank" rel="noopener">TikTok</a>'+
      '<a href="https://www.threads.com/@teknopers.saha" target="_blank" rel="noopener">Threads</a>'+
    '</div></div>'+
    '<div><h3>Ürünler</h3>'+
      '<a href="/urun/pdks-personel-takip-sistemi">PDKS &amp; Personel Takip</a>'+
      '<a href="/urun/on-muhasebe-programi">Ön Muhasebe</a>'+
      '<a href="/urun/depo-stok-yonetim-programi">Depo &amp; Stok</a>'+
      '<a href="/urun/kuafor-ve-berber-randevu-programi">Kuaför Randevu</a>'+
      '<a href="/urunler">Tüm ürünler</a>'+
    '</div>'+
    '<div><h3>Kaynaklar</h3>'+
      '<a href="/cozumler">Sektörel çözümler</a>'+
      '<a href="/araclar/">Hesaplama araçları</a>'+'<a href="/egitim">Eğitim videoları</a>'+'<a href="/demo-talep">Ücretsiz demo</a>'+
      '<a href="/blog-pdks-nedir.html">PDKS nedir?</a>'+
      '<a href="/sorular">Tüm sorular</a>'+
      '<a href="/blog.html">Blog</a>'+
    '</div></div>'+
    '<div class="foot-bottom"><span>© '+new Date().getFullYear()+' TEKNOPERS · teknopers.com.tr</span>'+
    '<span>WhatsApp: <a href="https://wa.me/'+WA+'" target="_blank" rel="noopener" style="display:inline;color:#FFD34D">0543 447 22 26</a></span></div>'+
  '</div></footer>';
}

// Yeni kimlik: soğuk beyaz zemin (krem değil), Bricolage Grotesque başlık, mono etiketler,
// lacivert + altın (şirket) / gül (salon) ikili aksan. Salon sayfalarında body.tema-salon
// ile --gold güle işaret eder; tüm alt kullanımlar (base + PSTIL + EK_STIL) otomatik döner.
var STIL = [
":root{--paper:#FBFCFE;--bg:#F6F7FB;--cream:#F6F7FB;--panel:#FFFFFF;--ink:#0B1220;--ink2:#1C2536;--slate:#586178;--mut:#7B8499;--line:#E3E7F0;--line2:#D3D9E6;--gold:#E0A100;--goldD:#976B00;--goldL:#FFF7E4;--rose:#C0566A;--roseD:#8E3346;--roseL:#FCEEF0;--green:#1FA855;--greenL:#E5F5EE;--ok:#12996B;--navy:#0B1220;--brand:#E0A100;--disp:'Bricolage Grotesque','Segoe UI',system-ui,-apple-system,Arial,sans-serif;--body:'Figtree','Segoe UI',system-ui,-apple-system,Arial,sans-serif;--mono:'JetBrains Mono',ui-monospace,Consolas,monospace;--r:14px;--sh:0 1px 2px rgba(11,18,32,.05),0 10px 26px -14px rgba(11,18,32,.20)}",
"body.tema-salon{--gold:#C0566A;--goldD:#8E3346;--goldL:#FCEEF0}",
"body.tema-salon .btn-gold{color:#fff}",
"*{margin:0;padding:0;box-sizing:border-box}",
"html{scroll-behavior:smooth;scroll-padding-top:88px;-webkit-text-size-adjust:100%}",
"body{background:var(--bg);color:var(--ink);font-family:var(--body);line-height:1.68;-webkit-font-smoothing:antialiased}",

"a{color:inherit;text-decoration:none}",
".wrap{max-width:1140px;margin:0 auto;padding:0 22px}",
"header.mast{position:sticky;top:0;z-index:100;background:rgba(246,247,251,.82);backdrop-filter:saturate(1.4) blur(12px);-webkit-backdrop-filter:saturate(1.4) blur(12px);border-bottom:1px solid var(--line)}",
".mast-in{max-width:1140px;margin:0 auto;padding:12px 22px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap}",
".wordmark{display:inline-flex;align-items:center;gap:10px;font-family:var(--disp);font-weight:800;font-size:20px;letter-spacing:-.02em;color:var(--ink)}",
".wordmark .lg{width:30px;height:30px;border-radius:8px;background:var(--ink);color:var(--brand);display:grid;place-items:center;font-size:16px;font-weight:800;box-shadow:inset 0 0 0 1.5px rgba(224,161,0,.4)}",
".mast-nav{display:flex;align-items:center;gap:5px;font-size:14px;font-weight:600;color:var(--slate);flex-wrap:wrap}",
".mast-nav a{padding:8px 11px;border-radius:8px}.mast-nav a:hover{color:var(--ink);background:#fff}",
".mast-nav a.wa{color:#fff;background:var(--green);font-weight:700}.mast-nav a.wa:hover{background:#1c9a4e;color:#fff}",
"@media(max-width:720px){.mast-nav{gap:2px;font-size:13px;width:100%}.mast-nav a{padding:7px 9px}}",
".btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;font-family:var(--body);font-weight:700;font-size:15px;padding:13px 22px;border-radius:11px;border:1.5px solid transparent;cursor:pointer;line-height:1.3;transition:background .15s,transform .15s,filter .15s}",
".btn:active{transform:translateY(1px)}",
".btn-gold{background:var(--gold);color:#241900}.btn-gold:hover{filter:brightness(.94)}",
".btn-navy{background:var(--navy);color:var(--cream)}.btn-navy:hover{background:#1C2536}",
".btn-wa{background:var(--green);color:#fff}.btn-wa:hover{background:#1c9a4e}",
"a.btn:focus-visible,button:focus-visible,summary:focus-visible{outline:2.5px solid var(--gold);outline-offset:2px}",
"main{max-width:760px;margin:0 auto;padding:40px 22px 64px}",
".yol{font-family:var(--mono);font-size:12px;color:var(--mut);margin-bottom:18px;letter-spacing:.02em}.yol a{color:var(--mut)}.yol a:hover{color:var(--goldD)}",
".eyebrow{font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--goldD);display:inline-flex;align-items:center;gap:9px;margin-bottom:16px}.eyebrow::before{content:'';width:7px;height:7px;border-radius:2px;background:var(--gold)}",
"h1{font-family:var(--disp);font-size:clamp(28px,4.8vw,40px);font-weight:800;line-height:1.08;letter-spacing:-.02em;margin:0 0 18px;color:var(--ink)}",
"main>h2,main>section>h2{font-family:var(--disp);font-size:20px;font-weight:800;letter-spacing:-.015em;color:var(--ink);margin:24px 0 10px}",
"main>section ul,main>section>ul{list-style:none;padding:0;margin:0}main>section li{margin:8px 0}main>section li a{display:block;padding:12px 14px;border:1px solid var(--line);border-radius:10px;color:var(--ink);font-weight:600;background:var(--panel)}main>section li a:hover{border-color:var(--gold);background:#fff}",
"article h2{font-family:var(--disp);font-size:21px;font-weight:800;margin:28px 0 10px;color:var(--ink);position:relative;padding-left:16px;letter-spacing:-.01em}article h2::before{content:'';position:absolute;left:0;top:5px;bottom:5px;width:4px;background:var(--gold);border-radius:2px}",
"article p{margin:0 0 15px;font-size:16.5px;color:var(--ink2)}",
"article strong{color:var(--goldD);font-weight:700}",
"article code{background:var(--goldL);padding:2px 7px;border-radius:5px;font-size:14px;color:var(--goldD);font-family:var(--mono)}",
"article ul,article ol{margin:0 0 16px;padding-left:2px;list-style:none}",
"article ul li{position:relative;padding-left:22px;margin:8px 0;font-size:16px;color:var(--ink2)}article ul li::before{content:'';position:absolute;left:2px;top:11px;width:7px;height:7px;background:var(--gold);transform:rotate(45deg)}",
"article ol{counter-reset:s}article ol li{position:relative;padding-left:38px;margin:11px 0;counter-increment:s;font-size:16px;color:var(--ink2)}article ol li::before{content:counter(s);position:absolute;left:0;top:-1px;width:26px;height:26px;border-radius:7px;background:var(--navy);color:var(--cream);font-size:12px;font-weight:800;display:flex;align-items:center;justify-content:center}",
".uyari{margin:22px 0;padding:13px 16px;background:var(--goldL);border-left:3px solid var(--gold);border-radius:0 10px 10px 0;font-size:13.5px;line-height:1.6;color:#5C4B14}.uyari a{color:var(--goldD);font-weight:600}",
".arac-cta{margin:28px 0;padding:20px;border-radius:var(--r);background:var(--panel);border:1px solid var(--line);border-left:4px solid var(--gold);box-shadow:var(--sh)}",
".arac-cta .k{font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--goldD)}",
".arac-cta p{margin:6px 0 14px;font-size:16px;color:var(--ink);font-weight:600}",
".arac-cta .satir{display:flex;gap:10px;flex-wrap:wrap}",
".ilgili{margin-top:34px;border-top:1px solid var(--line);padding-top:22px}.ilgili h2{font-family:var(--disp);font-size:18px;margin:0 0 12px;color:var(--ink)}",
".ilgili ul{list-style:none;padding:0;margin:0}.ilgili a{display:block;padding:12px 14px;color:var(--ink);border:1px solid var(--line);border-radius:10px;margin-bottom:9px;font-weight:600;background:var(--panel)}.ilgili a:hover{border-color:var(--gold);background:#fff}",
"footer{background:var(--navy);color:#A9B4C7;margin-top:44px;padding:50px 0 26px;font-size:14px}",
"footer .wrap{max-width:1140px}",
"footer .foot-grid{display:grid;grid-template-columns:1.6fr 1fr 1fr;gap:34px;padding-bottom:30px;border-bottom:1px solid rgba(255,255,255,.1)}@media(max-width:720px){footer .foot-grid{grid-template-columns:1fr}}",
"footer .logo{display:inline-flex;align-items:center;gap:10px;font-family:var(--disp);font-weight:800;font-size:19px;letter-spacing:-.02em;color:#fff}footer .logo .lg{width:28px;height:28px;border-radius:8px;background:#fff;color:var(--navy);display:grid;place-items:center;font-weight:800;font-size:15px}",
"footer h3{font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#8794AB;margin-bottom:14px}",
"footer a{display:block;color:#C4CDDD;padding:5px 0}footer a:hover{color:var(--gold)}",
"footer .social{display:flex;gap:8px;margin-top:16px;flex-wrap:wrap}footer .social a{display:inline-flex;font-family:var(--mono);font-size:11px;font-weight:600;color:#C4CDDD;border:1px solid rgba(255,255,255,.14);border-radius:8px;padding:6px 10px}footer .social a:hover{background:rgba(255,255,255,.08);color:#fff}",
"footer .foot-bottom{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-top:20px;font-size:13px;color:#8794AB}"
].join("");

function sayfaUret(o){
  var slug=o.slug, soru=o.soru, cevap=o.cevap, ilgili=o.ilgili||[], arac=o.arac||null, aracAd=o.aracAd||null, blog=o.blog||null, blogAd=o.blogAd||null, cozum=o.cozum||null, cozumAd=o.cozumAd||null;
  var url=SITE+'/soru/'+slug;
  var aciklama=ozet(cevap,155);
  var govde=paragrafla(cevap);
  var waSoru=encodeURIComponent('Merhaba, TEKNOPERS sitesinden yazıyorum.\nSorum: '+soru);
  var tarihSatir=(o.guncelleme||o.yayin)?'<div style="font-family:var(--mono);font-size:11.5px;color:var(--mut);margin:-6px 0 16px">Güncelleme: '+esc(o.guncelleme||o.yayin)+'</div>':'';

  // Araç/blog iç link CTA'sı (trafiği dönüşüme taşıyan kısım)
  var ctaSatir='';
  if(arac){ ctaSatir+='<a class="btn btn-gold" href="'+arac+'">'+esc(aracAd||'Ücretsiz hesaplama aracını kullan')+' →</a>'; }
  ctaSatir+='<a class="btn btn-wa" href="https://wa.me/'+WA+'?text='+waSoru+'" target="_blank" rel="noopener">WhatsApp\'tan sor</a>';
  var blogSatir = blog ? '<p style="margin-top:12px;font-size:14px"><a href="'+blog+'" style="color:var(--goldD);font-weight:600">Detaylı rehber: '+esc(blogAd||'ilgili yazı')+' →</a></p>' : '';
  var cozumSatir = cozum ? '<p style="margin-top:8px;font-size:14px"><a href="/cozum/'+cozum+'" style="color:var(--goldD);font-weight:700">İlgili çözüm: '+esc(cozumAd||'çözüm sayfası')+' →</a></p>' : '';
  var aracKutu=FUNNEL()+'<div class="arac-cta"><span class="k">TEKNOPERS ile</span>'+
    '<p>'+ (arac ? 'Rakamı kendin hesapla ya da işletmeni tek ekrandan yönet.' : 'İşletmeni tek ekrandan yönetmek için bize yaz.') +'</p>'+
    '<div class="satir">'+ctaSatir+'</div>'+blogSatir+cozumSatir+'</div>';

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
  '<meta property="og:image" content="'+SITE+'/og-soru.png">\n<meta property="og:image:width" content="1200">\n<meta property="og:image:height" content="630">\n<meta property="og:image:alt" content="'+esc(soru)+' — TEKNOPERS">\n'+
  '<meta name="twitter:card" content="summary_large_image">\n<meta name="twitter:image" content="'+SITE+'/og-soru.png">\n<meta name="theme-color" content="#0B1220">\n'+
  '<link rel="icon" href="/favicon.ico">\n<link rel="apple-touch-icon" href="/apple-touch-icon.png">\n'+
  FONTLAR()+
  jsonLd(soru,cevap,slug,o)+'\n'+
  '<script async src="https://www.googletagmanager.com/gtag/js?id='+GA_ID+'"></script>\n'+
  '<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date());gtag("config","'+GA_ID+'");</script>\n'+
  '<style>'+STIL+'</style>\n</head>\n<body>\n'+
  NAV()+'\n<main>\n'+
  '<div class="yol"><a href="/">Ana sayfa</a> / <a href="/sorular">Sorular</a> / <span>'+esc(soru)+'</span></div>\n'+
  '<article>\n<span class="eyebrow">Bilgi Rehberi</span>\n<h1>'+esc(soru)+'</h1>\n'+tarihSatir+
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
  '<style>body{font-family:system-ui,Segoe UI,Arial,sans-serif;background:#F6F8FB;color:#0B1220;max-width:620px;margin:0 auto;padding:60px 22px;line-height:1.6}h1{font-family:Sora,sans-serif}a{color:#8C6708;font-weight:600}.k{display:inline-block;margin-top:14px;padding:12px 22px;border-radius:14px;background:linear-gradient(135deg,#FFCF3F,#E5A800);color:#0B1220;font-weight:700}</style>\n'+
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
  '<link rel="canonical" href="'+SITE+'/sorular">\n<meta name="robots" content="index, follow">\n<meta name="theme-color" content="#0B1220">\n<link rel="icon" href="/favicon.ico">\n'+
  '<meta property="og:type" content="website">\n<meta property="og:site_name" content="TEKNOPERS">\n<meta property="og:title" content="Sık Sorulan Sorular | TEKNOPERS">\n<meta property="og:description" content="Puantaj, bordro, izin, fazla mesai ve randevu yönetiminde en çok aranan sorular.">\n<meta property="og:url" content="'+SITE+'/sorular">\n<meta property="og:locale" content="tr_TR">\n<meta property="og:image" content="'+SITE+'/og-soru.png">\n<meta property="og:image:width" content="1200">\n<meta property="og:image:height" content="630">\n<meta property="og:image:alt" content="TEKNOPERS rehber ve SSS">\n<meta name="twitter:card" content="summary_large_image">\n<meta name="twitter:image" content="'+SITE+'/og-soru.png">\n'+
  '<script type="application/ld+json">'+JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage","name":"Sık sorulan sorular","url":SITE+"/sorular","isPartOf":{"@type":"WebSite","name":MARKA,"url":SITE+"/"},"breadcrumb":{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Ana Sayfa","item":SITE+"/"},{"@type":"ListItem","position":2,"name":"Sorular","item":SITE+"/sorular"}]},"mainEntity":{"@type":"ItemList","numberOfItems":sorular.length,"itemListElement":sorular.map(function(s,i){return {"@type":"ListItem","position":i+1,"name":s.soru,"url":SITE+"/soru/"+s.slug};})}}).replace(/</g,'\\u003c')+'</script>\n'+
  FONTLAR()+
  '<style>'+STIL+' main h1{margin-bottom:8px}.ilgili{border:0;padding:0}</style>\n</head><body>\n'+
  NAV()+'\n<main>\n<div class="yol"><a href="/">Ana sayfa</a> / <span>Sorular</span></div>\n'+
  '<span class="eyebrow">Bilgi Rehberi</span>\n<h1>Sık sorulan sorular</h1>\n'+
  '<p style="color:var(--slate);margin-bottom:6px">Personel yönetimi, bordro, iş hukuku ve randevu konularında en çok aranan sorular ve ücretsiz <a href="/araclar/" style="color:var(--goldD);font-weight:600">hesaplama araçları</a>.</p>\n'+
  bolum.replace(/class="ilgili"/g,'')+'\n'+
  '<div class="arac-cta"><span class="k">TEKNOPERS</span><p>İşletmeni tek ekrandan yönet: puantaj, cari, stok, randevu.</p><div class="satir"><a class="btn btn-gold" href="/araclar/">Araçlara göz at →</a><a class="btn btn-wa" href="https://wa.me/'+WA+'?text='+WA_METIN+'" target="_blank" rel="noopener">WhatsApp\'tan Yaz</a></div></div>\n'+
  '</main>\n'+FOOTER()+'\n'+ASISTAN()+'\n</body></html>';
}


var IKON={'⏱':'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2"/><path d="M9 2h6M12 2v3"/>','🗂':'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 14l2 2 4-4"/>','🔐':'<rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/><circle cx="12" cy="15.5" r="1.3"/>','🏭':'<path d="M3 21V11l6 3.5V11l6 3.5V7h5v14z"/><path d="M7 21v-3M12 21v-3M17 21v-3"/>','📒':'<path d="M5 4a2 2 0 0 1 2-2h12v18H7a2 2 0 0 0-2 2z"/><path d="M5 20a2 2 0 0 1 2-2h12"/><path d="M10 2v6l2-1.3L14 8V2"/>','🧾':'<path d="M6 2v20l2-1.3L10 22l2-1.3L14 22l2-1.3L18 22V2z"/><path d="M9 7h6M9 11h6M9 15h4"/>','📦':'<path d="M12 2 3 6.5v11L12 22l9-4.5v-11z"/><path d="M3 6.5 12 11l9-4.5M12 11v11"/>','💈':'<circle cx="6" cy="6" r="2.6"/><circle cx="6" cy="18" r="2.6"/><path d="M8.2 7.6 20 17M8.2 16.4 20 7"/>','💅':'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M18 4v3M19.5 5.5h-3"/>','🦷':'<path d="M12 3c2.4 0 4.5 1.4 4.5 4.2 0 3.6-1.2 11.8-2.4 11.8-1 0-1-3.4-2.1-3.4s-1.1 3.4-2.1 3.4c-1.2 0-2.4-8.2-2.4-11.8C7.5 4.4 9.6 3 12 3z"/>','🐾':'<circle cx="6.5" cy="10" r="1.6"/><circle cx="10" cy="6.5" r="1.6"/><circle cx="14" cy="6.5" r="1.6"/><circle cx="17.5" cy="10" r="1.6"/><path d="M12 12c-2.5 0-4.5 2-4.5 4.2 0 1.6 1.4 2.3 2.6 1.9 1.3-.4 2.5-.4 3.8 0 1.2.4 2.6-.3 2.6-1.9C16.5 14 14.5 12 12 12z"/>','🥗':'<path d="M4 20C3 12 8 4 20 4c0 12-8 17-16 16z"/><path d="M4 20C8 15 13 11 18 9"/>','🧘':'<circle cx="12" cy="5" r="2.4"/><path d="M12 8v6M12 14l-5 6M12 14l5 6M7 11h10"/>','📍':'<path d="M12 22s7-6.5 7-12A7 7 0 0 0 5 10c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.6"/>','🧮':'<rect x="5" y="2.5" width="14" height="19" rx="2"/><rect x="8" y="5.5" width="8" height="3.5" rx="1"/><path d="M8.5 13h.01M12 13h.01M15.5 13h.01M8.5 16.5h.01M12 16.5h.01M15.5 16v3"/>','📄':'<path d="M6 2.5h8l4 4v15H6z"/><path d="M14 2.5v4h4"/><path d="M9 13h6M9 16.5h6"/>','🔒':'<rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/><circle cx="12" cy="15.5" r="1.3"/>','🔔':'<path d="M6.5 9a5.5 5.5 0 0 1 11 0c0 4.5 2 5.5 2 5.5h-15s2-1 2-5.5z"/><path d="M10 19a2 2 0 0 0 4 0"/>','📅':'<rect x="3.5" y="4.5" width="17" height="16" rx="2"/><path d="M3.5 9.5h17M8 2.5v4M16 2.5v4"/><path d="M7.5 13h3v3h-3z"/>','🔗':'<path d="M10 13a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 0 0-5-5l-1.5 1.5"/><path d="M14 11a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5l1.5-1.5"/>','💬':'<path d="M4 4.5h16v11H9l-4 4v-4H4z"/><path d="M8 9h8M8 12h5"/>','🎫':'<path d="M3 8.5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2 2 2 0 0 0 0 4 2 2 0 0 1-2 2H5a2 2 0 0 1-2-2 2 2 0 0 0 0-4z"/><path d="M14 6.5v11"/>','💰':'<rect x="3.5" y="7.5" width="17" height="12" rx="2.5"/><path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H18v2.5"/><circle cx="16" cy="13.5" r="1.4"/>','🏆':'<path d="M8 4h8v4.5a4 4 0 0 1-8 0z"/><path d="M8 5H5.5v1.5A3 3 0 0 0 8 9.4M16 5h2.5v1.5A3 3 0 0 1 16 9.4"/><path d="M9.5 18h5M10.5 21h3M12 13v5"/>','🧩':'<path d="M12 3 3 7.5 12 12l9-4.5z"/><path d="M3 12l9 4.5 9-4.5M3 16.5 12 21l9-4.5"/>','📊':'<path d="M4 20V4M4 20h16"/><rect x="7" y="12" width="3" height="5"/><rect x="12" y="8" width="3" height="9"/><rect x="17" y="5" width="3" height="12"/>','💻':'<rect x="3" y="5" width="18" height="12" rx="2"/><path d="M2 21h20M9 21v-4h6v4"/>','📱':'<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18.5h2"/>','📈':'<path d="M4 20V4M4 20h16"/><path d="M7 15l4-4 3 3 5-6"/>'};
function ikon(e,size){size=size||24;var k=String(e||'').replace(/[\ufe0f\u20e3]/g,'').trim();var i=IKON[k];return i?'<svg viewBox="0 0 24 24" width="'+size+'" height="'+size+'" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+i+'</svg>':esc(e||'');}

var KLASIK = '/* KLASIK KURUMSAL — tum SSR sablonlari */header.mast{background:#fff;backdrop-filter:none;border-bottom:3px solid var(--ink);box-shadow:0 2px 8px rgba(11,18,32,.10)}.btn{border-radius:5px;box-shadow:none;border:1px solid transparent;font-weight:700}.btn-gold{border-color:#b58500}.btn-wa{border-color:#178043}.btn-navy{border-color:#05090f}.btn-ghost{background:#EDF0F6;color:var(--ink);border:1.5px solid var(--line2)}.btn-ghost:hover{background:#DFE4EE;border-color:var(--ink)}.k,.arac-cta,.ilgili{border-radius:6px;box-shadow:0 1px 2px rgba(11,18,32,.08)}main h1,main h2{letter-spacing:-.01em}.u-hero{border-radius:8px}.u-cta a{border-radius:5px}.u-cta .ghost{background:rgba(255,255,255,.12);border:1.5px solid rgba(255,255,255,.5);color:#fff}.af,.sec-a,.price-card,.evolve,.u-final,.u-faq{border-radius:6px}.af{box-shadow:0 1px 2px rgba(11,18,32,.08);border-top:3px solid var(--gold)}body.tema-salon .af{border-top-color:var(--rose)}.price-card{box-shadow:0 1px 3px rgba(11,18,32,.12)}.hero,.oz,.blok,.riskbox,.cta-blok,.sss{border-radius:6px}.oz,.blok{box-shadow:0 1px 2px rgba(11,18,32,.08)}';
STIL = STIL + KLASIK;

module.exports = { slugYap:slugYap, slugCoz:slugCoz, esc:esc, vurgu:vurgu, sadeMetin:sadeMetin, ozet:ozet, sayfaUret:sayfaUret, hataSayfasi:hataSayfasi, listeSayfasiUret:listeSayfasiUret, FUNNEL:FUNNEL, STIL:STIL, NAV:NAV, FOOTER:FOOTER, ASISTAN:ASISTAN, ikon:ikon, FONTLAR:FONTLAR, SITE:SITE, WA:WA, GA_ID:GA_ID };
