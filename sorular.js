/**
 * sorular.js — TEKNOPERS (teknopers.com.tr) · PROGRAMATİK SEO HEDEF LİSTESİ
 * ==============================================================================
 * Her satır = /soru/<slug> sayfası + sitemap girdisi + hub linki.
 * arac/aracAd → o sorunun landing'inden ilgili HESAPLAMA ARACINA iç link
 * (trafiği dönüşüme taşıyan asıl kısım). blog/blogAd → ilgili derin rehber.
 *
 * Yeni soru = yeni satır. SLUG: küçük harf, tireli, Türkçesiz (ı→i, ş→s, ğ→g...).
 */
'use strict';

// kısayollar (araç/blog yolları site köküne göre)
var A = {
  kidem:      ['/araclar/kidem-tazminati-hesaplama/','Kıdem Tazminatı Hesapla'],
  ihbar:      ['/araclar/ihbar-tazminati-hesaplama/','İhbar Tazminatı Hesapla'],
  izin:       ['/araclar/yillik-izin-hesaplama/','Yıllık İzin Hesapla'],
  mesai:      ['/araclar/fazla-mesai-hesaplama/','Fazla Mesai Hesapla'],
  maas:       ['/araclar/net-brut-maas-hesaplama/','Net-Brüt Maaş Hesapla'],
  maliyet:    ['/araclar/isveren-maliyeti-hesaplama/','İşveren Maliyeti Hesapla'],
  prim:       ['/araclar/personel-prim-hesaplama/','Personel Prim Hesapla'],
  puantaj:    ['/araclar/puantaj-cetveli/','Puantaj Cetveli Aracı'],
  tatil:      ['/araclar/resmi-tatiller/','Resmî Tatiller Takvimi'],
  randevu:    ['/araclar/randevu-hatirlatma-mesaji/','Randevu Hatırlatma Mesajı'],
  salonmal:   ['/araclar/salon-acma-maliyeti/','Salon Açma Maliyeti Hesapla'],
  salonkar:   ['/araclar/salon-karlilik-simulatoru/','Salon Kârlılık Simülatörü']
};
var B = {
  pdks:    ['/blog-pdks-nedir.html','PDKS nedir?'],
  puantaj: ['/blog-puantaj-nasil-tutulur.html','Puantaj nasıl tutulur?'],
  mesai:   ['/blog-fazla-mesai-yillik-izin.html','Fazla mesai ve yıllık izin'],
  saha:    ['/blog-saha-personel-takibi.html','Saha personel takibi'],
  dis:     ['/blog-dis-klinigi-randevu-programi.html','Diş kliniği randevu programı'],
  noshow:  ['/blog-randevu-hatirlatma-no-show.html','Randevu hatırlatma ve no-show'],
  seans:   ['/blog-seans-paketi-takibi.html','Seans paketi takibi']
};
function q(slug, soru, kategori, arac, blog){
  var o = { slug:slug, soru:soru, kategori:kategori };
  if(arac){ o.arac=arac[0]; o.aracAd=arac[1]; }
  if(blog){ o.blog=blog[0]; o.blogAd=blog[1]; }
  return o;
}

var SORULAR = [
  // ── PUANTAJ & PERSONEL TAKİBİ ──
  q('puantaj-nasil-tutulur','Puantaj nasıl tutulur?','Puantaj & Personel Takibi',A.puantaj,B.puantaj),
  q('puantaj-cetveli-nasil-hazirlanir','Puantaj cetveli nasıl hazırlanır?','Puantaj & Personel Takibi',A.puantaj,B.puantaj),
  q('excel-ile-puantaj-nasil-yapilir','Excel ile puantaj nasıl yapılır?','Puantaj & Personel Takibi',A.puantaj,B.puantaj),
  q('puantaj-programi-nasil-secilir','Puantaj programı nasıl seçilir?','Puantaj & Personel Takibi',A.puantaj,B.pdks),
  q('saha-personeli-nasil-takip-edilir','Saha personeli nasıl takip edilir?','Puantaj & Personel Takibi',A.puantaj,B.saha),
  q('insaat-santiyesinde-personel-takibi-nasil-yapilir','İnşaat şantiyesinde personel takibi nasıl yapılır?','Puantaj & Personel Takibi',A.puantaj,B.saha),
  q('temizlik-personeli-takip-programi-nasil-olmali','Temizlik personeli takip programı nasıl olmalı?','Puantaj & Personel Takibi',A.puantaj,B.saha),
  q('guvenlik-personeli-devriye-takibi-nasil-yapilir','Güvenlik personeli devriye takibi nasıl yapılır?','Puantaj & Personel Takibi',A.puantaj,B.saha),
  q('gps-ile-personel-giris-cikis-takibi-nasil-yapilir','GPS ile personel giriş çıkış takibi nasıl yapılır?','Puantaj & Personel Takibi',A.puantaj,B.pdks),
  q('cihazsiz-pdks-nedir','Cihazsız PDKS nedir?','Puantaj & Personel Takibi',A.puantaj,B.pdks),
  q('parmak-izi-cihazi-olmadan-mesai-takibi-nasil-olur','Parmak izi cihazı olmadan mesai takibi nasıl olur?','Puantaj & Personel Takibi',A.puantaj,B.pdks),
  q('personel-gec-kalma-raporu-nasil-alinir','Personel geç kalma raporu nasıl alınır?','Puantaj & Personel Takibi',A.puantaj,B.puantaj),
  q('vardiya-plani-nasil-yapilir','Vardiya planı nasıl yapılır?','Puantaj & Personel Takibi',A.puantaj,null),
  q('personel-izin-takibi-nasil-yapilir','Personel izin takibi nasıl yapılır?','Puantaj & Personel Takibi',A.izin,B.mesai),
  q('kucuk-isletmeler-icin-personel-takip-programi','Küçük işletmeler için personel takip programı nasıl olmalı?','Puantaj & Personel Takibi',A.puantaj,B.pdks),

  // ── İŞ HUKUKU & BORDRO ──
  q('kidem-tazminati-nasil-hesaplanir','Kıdem tazminatı nasıl hesaplanır?','İş Hukuku & Bordro',A.kidem,null),
  q('2026-kidem-tazminati-tavani-ne-kadar','2026 kıdem tazminatı tavanı ne kadar?','İş Hukuku & Bordro',A.kidem,null),
  q('ihbar-tazminati-kac-gun','İhbar tazminatı kaç gün?','İş Hukuku & Bordro',A.ihbar,null),
  q('ihbar-tazminati-nasil-hesaplanir','İhbar tazminatı nasıl hesaplanır?','İş Hukuku & Bordro',A.ihbar,null),
  q('yillik-izin-nasil-hesaplanir','Yıllık izin nasıl hesaplanır?','İş Hukuku & Bordro',A.izin,B.mesai),
  q('yillik-izin-kac-gun','Kıdeme göre yıllık izin kaç gün?','İş Hukuku & Bordro',A.izin,B.mesai),
  q('10-gun-yillik-izin-ucreti-nasil-hesaplanir','10 günlük yıllık izin ücreti nasıl hesaplanır?','İş Hukuku & Bordro',A.izin,null),
  q('yillik-izin-ucreti-fesihte-nasil-odenir','Kullanılmayan yıllık izin ücreti fesihte nasıl ödenir?','İş Hukuku & Bordro',A.izin,null),
  q('fazla-mesai-ucreti-nasil-hesaplanir','Fazla mesai ücreti nasıl hesaplanır?','İş Hukuku & Bordro',A.mesai,B.mesai),
  q('fazla-mesai-saatlik-ucret-nasil-bulunur','Fazla mesai için saatlik ücret nasıl bulunur?','İş Hukuku & Bordro',A.mesai,null),
  q('fazla-mesai-yillik-siniri-kac-saat','Fazla mesai yıllık sınırı kaç saat?','İş Hukuku & Bordro',A.mesai,B.mesai),
  q('resmi-tatilde-calisan-iscinin-ucreti-nasil-hesaplanir','Resmî tatilde çalışan işçinin ücreti nasıl hesaplanır?','İş Hukuku & Bordro',A.tatil,null),
  q('hafta-tatili-ucreti-nasil-hesaplanir','Hafta tatili ücreti nasıl hesaplanır?','İş Hukuku & Bordro',A.mesai,null),
  q('gece-calismasi-ucreti-nasil-hesaplanir','Gece çalışması ücreti nasıl hesaplanır?','İş Hukuku & Bordro',A.mesai,null),
  q('net-maastan-brut-maas-nasil-hesaplanir','Net maaştan brüt maaş nasıl hesaplanır?','İş Hukuku & Bordro',A.maas,null),
  q('brutten-nete-maas-nasil-hesaplanir','Brütten nete maaş nasıl hesaplanır?','İş Hukuku & Bordro',A.maas,null),
  q('asgari-ucretin-isverene-maliyeti-2026','2026 asgari ücretin işverene maliyeti ne kadar?','İş Hukuku & Bordro',A.maliyet,null),
  q('bir-iscinin-isverene-toplam-maliyeti-nasil-hesaplanir','Bir işçinin işverene toplam maliyeti nasıl hesaplanır?','İş Hukuku & Bordro',A.maliyet,null),
  q('sgk-primi-nasil-hesaplanir','SGK primi nasıl hesaplanır?','İş Hukuku & Bordro',A.maliyet,null),
  q('sgk-ise-giris-bildirgesi-nasil-verilir','SGK işe giriş bildirgesi nasıl verilir?','İş Hukuku & Bordro',A.maliyet,null),
  q('isten-cikis-kodlari-nelerdir','İşten çıkış kodları nelerdir?','İş Hukuku & Bordro',A.kidem,null),
  q('personel-primi-nasil-hesaplanir','Personel primi nasıl hesaplanır?','İş Hukuku & Bordro',A.prim,null),
  q('personel-prim-sistemi-nasil-kurulur','Personel prim sistemi nasıl kurulur?','İş Hukuku & Bordro',A.prim,null),
  q('deneme-suresi-en-fazla-ne-kadar-olabilir','İş sözleşmesinde deneme süresi en fazla ne kadar olabilir?','İş Hukuku & Bordro',null,null),
  q('is-sozlesmesi-turleri-nelerdir','İş sözleşmesi türleri nelerdir?','İş Hukuku & Bordro',null,null),
  q('sgk-prim-gunu-nasil-hesaplanir','SGK prim günü nasıl hesaplanır?','İş Hukuku & Bordro',A.maliyet,null),

  // ── SALON & RANDEVU YÖNETİMİ ──
  q('kuafor-randevu-sistemi-nasil-kurulur','Kuaför randevu sistemi nasıl kurulur?','Salon & Randevu',A.randevu,B.noshow),
  q('kuafor-randevu-programi-nasil-secilir','Kuaför randevu programı nasıl seçilir?','Salon & Randevu',A.randevu,B.noshow),
  q('guzellik-salonu-randevu-programi-ozellikleri','Güzellik salonu randevu programında hangi özellikler olmalı?','Salon & Randevu',A.randevu,B.noshow),
  q('berber-randevu-uygulamasi-nasil-olmali','Berber randevu uygulaması nasıl olmalı?','Salon & Randevu',A.randevu,B.noshow),
  q('online-randevu-sistemi-nasil-calisir','Online randevu sistemi nasıl çalışır?','Salon & Randevu',A.randevu,B.noshow),
  q('randevu-hatirlatma-mesaji-ornekleri','Randevu hatırlatma mesajı örnekleri nelerdir?','Salon & Randevu',A.randevu,B.noshow),
  q('randevu-kacirma-no-show-nasil-onlenir','Randevu kaçırma (no-show) nasıl önlenir?','Salon & Randevu',A.randevu,B.noshow),
  q('salon-musteri-takip-programi-ne-ise-yarar','Salon müşteri takip programı ne işe yarar?','Salon & Randevu',A.salonkar,B.seans),
  q('musteri-sadakat-programi-nasil-kurulur','Salonda müşteri sadakat programı nasıl kurulur?','Salon & Randevu',A.salonkar,B.seans),
  q('seans-paketi-takibi-nasil-yapilir','Seans paketi takibi nasıl yapılır?','Salon & Randevu',A.salonkar,B.seans),
  q('guzellik-salonu-acma-maliyeti-ne-kadar','Güzellik salonu açma maliyeti ne kadar?','Salon & Randevu',A.salonmal,null),
  q('kuafor-acmak-icin-gerekli-belgeler-nelerdir','Kuaför açmak için gerekli belgeler nelerdir?','Salon & Randevu',A.salonmal,null),
  q('guzellik-salonu-ruhsati-nasil-alinir','Güzellik salonu ruhsatı nasıl alınır?','Salon & Randevu',A.salonmal,null),
  q('salon-personeli-primi-nasil-belirlenir','Salon personeli primi nasıl belirlenir?','Salon & Randevu',A.prim,null),
  q('kuaforde-kasa-nasil-tutulur','Kuaförde kasa nasıl tutulur?','Salon & Randevu',A.salonkar,null),
  q('salon-gun-sonu-raporu-nasil-alinir','Salon gün sonu raporu nasıl alınır?','Salon & Randevu',A.salonkar,null),

  // ── SEKTÖREL RANDEVU ──
  q('dis-klinigi-randevu-programi-nasil-secilir','Diş kliniği randevu programı nasıl seçilir?','Sektörel Randevu',A.randevu,B.dis),
  q('diyetisyen-randevu-ve-danisan-takip-programi','Diyetisyen randevu ve danışan takip programı nasıl olmalı?','Sektörel Randevu',A.randevu,B.seans),
  q('pilates-studyosu-uyelik-takip-programi','Pilates stüdyosu üyelik takip programı nasıl olmalı?','Sektörel Randevu',A.randevu,B.seans),
  q('dovme-studyosu-randevu-sistemi-nasil-kurulur','Dövme stüdyosu randevu sistemi nasıl kurulur?','Sektörel Randevu',A.randevu,B.noshow),
  q('veteriner-klinigi-randevu-programi-nasil-olmali','Veteriner kliniği randevu programı nasıl olmalı?','Sektörel Randevu',A.randevu,B.noshow),
  q('masaj-salonu-randevu-uygulamasi-nasil-secilir','Masaj salonu randevu uygulaması nasıl seçilir?','Sektörel Randevu',A.randevu,B.noshow),

  // ── KOBİ DİJİTALLEŞME ──
  q('kucuk-isletmeler-icin-stok-takip-programi','Küçük işletmeler için stok takip programı nasıl olmalı?','KOBİ Dijitalleşme',null,null),
  q('cari-hesap-takibi-nasil-yapilir','Cari hesap takibi nasıl yapılır?','KOBİ Dijitalleşme',null,null),
  q('on-muhasebe-programi-nedir','Ön muhasebe programı nedir?','KOBİ Dijitalleşme',null,null),
  q('fatura-ve-tahsilat-takibi-nasil-yapilir','Fatura ve tahsilat takibi nasıl yapılır?','KOBİ Dijitalleşme',null,null),
  q('barkod-ile-stok-takibi-nasil-yapilir','Barkod ile stok takibi nasıl yapılır?','KOBİ Dijitalleşme',null,null),
  q('kvkk-kucuk-isletmeler-icin-ne-gerektirir','KVKK küçük işletmeler için ne gerektirir?','KOBİ Dijitalleşme',null,null)
];

module.exports = { SORULAR: SORULAR };
