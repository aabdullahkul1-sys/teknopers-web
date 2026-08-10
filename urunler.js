/**
 * urunler.js — TEKNOPERS · ÜRÜN SAYFALARI (/urun/<slug>)
 * ==============================================================================
 * Her modül BİR ÜRÜN olarak konumlanır. Ürün sayfası; o ürünün sektör
 * çözümlerini (/cozum/), sorularını (/soru/) ve araçlarını (/araclar/) tek
 * çatıda toplar ve head keyword'ünü ("pdks", "stok takip programı"...) hedefler.
 *
 * Alanlar:
 *  slug, ad (ürün adı), etiket (hangi ürün ailesi), keyword (SEO başlığı için),
 *  hero (kısa vaat), nedir[] (SEO metni), ozellikler[{b,a}],
 *  kimlerIcin[] (/cozum/ slug'ları), sorular[] (/soru/ slug'ları),
 *  araclar[{yol,ad}], urunTuru ('sirket'|'salon'), ctaBaslik, ctaMetin.
 */
'use strict';

var URUNLER = [

{
  slug: 'pdks-personel-takip-sistemi',
  ad: 'PDKS ve Personel Takip Sistemi',
  etiket: 'Şirket Takip · Saha',
  keyword: 'Cihazsız PDKS ve Personel Takip Programı',
  urunTuru: 'sirket',
  hero: ['Parmak izi ve kart cihazına gerek kalmadan, personelin kendi telefonundan konum doğrulamalı mesai takibi. KVKK uyumlu, kart hilesine kapalı, sıfır donanım.'],
  nedir: [
    'PDKS (Personel Devam Kontrol Sistemi), çalışanların işe giriş-çıkışını kaydeden sistemdir. TEKNOPERS PDKS, bunu hiçbir fiziksel cihaz olmadan yapar: personel kendi telefonundan, GPS ile konumu doğrulanarak mesaisini başlatır.',
    '"Cihaz Bağı" özelliğiyle hesap tek telefona kilitlenir; böylece başkasının yerine giriş (buddy punching) imkânsız hâle gelir. Giriş-çıkış, mola, fazla mesai ve izinler otomatik olarak puantaja işlenir ve ay sonu bordroya baz olur.'
  ],
  ozellikler: [
    { b: 'Sıfır donanım', a: 'Parmak izi/kart cihazı yok; kurulum ve bakım maliyeti ortadan kalkar.' },
    { b: 'KVKK dostu', a: 'Biyometrik veri işlemez; özel nitelikli veri riskini taşımaz.' },
    { b: 'Cihaz Bağı kilidi', a: 'Hesap tek telefona kilitlenir, kart hilesi engellenir.' },
    { b: 'GPS konum doğrulama', a: 'Şantiye/işyeri alanı teyidi; sahte konum bariyeri.' },
    { b: 'Otomatik puantaj', a: 'Mesai, mola ve izin otomatik hesaplanır.' },
    { b: 'Vardiya yönetimi', a: 'Çok vardiyalı ekiplerde çizelge ve fazla mesai.' }
  ],
  kimlerIcin: ['fabrika-icin-cihazsiz-pdks-ve-personel-takibi', 'temizlik-sirketleri-icin-mobil-pdks-ve-saha-takibi', 'guvenlik-sirketleri-icin-devriye-ve-nokta-kontrol', 'insaat-santiyeleri-icin-personel-taseron-ve-zimmet-takibi', 'otel-restoran-ve-kafeler-icin-personel-ve-vardiya-takibi', 'nakliye-kargo-ve-filo-icin-saha-personel-ve-arac-zimmet-takibi', 'market-ve-perakende-icin-stok-ve-personel-yonetimi'],
  sorular: ['cihazsiz-pdks-nedir', 'parmak-izi-ile-mesai-takibi-yasak-mi', 'baskasinin-yerine-kart-basmak-tazminat-hakki-var-mi', '150-personelli-fabrikada-mesai-nasil-takip-edilir', 'puantaj-nasil-tutulur', 'gps-ile-personel-giris-cikis-takibi-nasil-yapilir'],
  araclar: [{ yol: '/araclar/puantaj-cetveli/', ad: 'Puantaj Cetveli Aracı' }],
  ctaBaslik: 'PDKS\'yi cihazsız kurun',
  ctaMetin: 'Donanım maliyeti ve yasal riski sıfırlayan mobil PDKS demosu için bize yazın.'
},

{
  slug: 'depo-stok-yonetim-programi',
  ad: 'Depo ve Stok Yönetim Programı',
  etiket: 'Şirket Takip · Depo',
  keyword: 'Barkodlu Depo ve Stok Takip Programı',
  urunTuru: 'sirket',
  hero: ['Barkodla saniyede stok giriş-çıkışı, OCR ile fatura okuma ve kritik seviye uyarısı. Depo farklarını görünür kılın.'],
  nedir: [
    'Stok takip programı, ürünlerin giriş-çıkışını ve kalan miktarını izleyen sistemdir. TEKNOPERS Depo, ürünleri barkod okutarak hızlı ve hatasız kaydeder; kalan miktar anlık güncellenir.',
    'Fatura fotoğrafı OCR ile okunarak tedarikçi cari hesabına ve stoğa işlenir. Kritik stok uyarısıyla ürün bitmeden haberdar olur, sayımı barkodla dakikalar içinde yaparsınız.'
  ],
  ozellikler: [
    { b: 'Barkodlu stok', a: 'Hızlı ve hatasız giriş-çıkış, anlık kalan miktar.' },
    { b: 'OCR fatura okuma', a: 'Fatura fotoğrafı saniyede cariye ve stoğa işlenir.' },
    { b: 'Kritik stok uyarısı', a: 'Ürün bitmeden otomatik haber verir.' },
    { b: 'Kolay sayım', a: 'Barkod okutarak fiili stok karşılaştırılır.' },
    { b: 'Cari entegrasyon', a: 'Tedarikçi borç-alacak takibi bir arada.' },
    { b: 'Çoklu fiyat', a: 'KDV dahil/hariç fiyatlandırma desteği.' }
  ],
  kimlerIcin: ['depo-ve-lojistik-icin-stok-ve-demirbas-zimmet-yonetimi', 'uretim-ve-toptan-icin-teklif-cari-ve-stok-yonetimi', 'market-ve-perakende-icin-stok-ve-personel-yonetimi'],
  sorular: ['depo-stok-sayimi-nasil-yapilir', 'barkod-ile-stok-takibi-nasil-yapilir', 'ocr-ile-fatura-okuma-nedir', 'kucuk-isletmeler-icin-stok-takip-programi'],
  araclar: [],
  ctaBaslik: 'Depo zararını görünür kılın',
  ctaMetin: 'Barkodlu stok ve OCR fatura sistemini görmek için bize yazın.'
},

{
  slug: 'zimmet-takip-sistemi',
  ad: 'Zimmet Takip Sistemi',
  etiket: 'Şirket Takip · Zimmet',
  keyword: 'Ekipman ve Evrak Zimmet Takip Programı',
  urunTuru: 'sirket',
  hero: ['Laptop, telefon, araç, kıymetli evrak… Kimde ne var? Teslimi fotoğraf, konum ve dijital onayla kayıt altına alın.'],
  nedir: [
    'Zimmet takip sistemi, ekipman ve evrakın kime teslim edildiğini kayıt altına alır. TEKNOPERS Zimmet, teslim anında personelin telefonundan fotoğraf çeker, konum ve zaman damgası basar, dijital onay alır.',
    'Kimde ne var tek listede görünür; iade edilmeyen zimmetler işaretlenir. Personel çıkışında zimmet kontrolü kolaylaşır, kayıp ve haksız suçlama riski ortadan kalkar.'
  ],
  ozellikler: [
    { b: 'Fotoğraflı tutanak', a: 'Teslim anı görüntüyle kayda geçer.' },
    { b: 'Konum + zaman damgası', a: 'Ne zaman, nerede teslim edildi belgelenir.' },
    { b: 'Dijital onay', a: 'Personel teslimi uygulamada onaylar.' },
    { b: 'Kimde ne var', a: 'Tüm zimmetler tek listede, anlık.' },
    { b: 'İade takibi', a: 'İade edilmeyen ekipman işaretlenir.' },
    { b: 'Çıkışta kontrol', a: 'Personel ayrılırken zimmet kolayca kapatılır.' }
  ],
  kimlerIcin: ['isletmeler-icin-ekipman-ve-evrak-zimmet-takibi', 'hukuk-burolari-icin-gorev-atama-ve-evrak-zimmet-sistemi', 'insaat-santiyeleri-icin-personel-taseron-ve-zimmet-takibi', 'nakliye-kargo-ve-filo-icin-saha-personel-ve-arac-zimmet-takibi'],
  sorular: ['ekipman-zimmet-takibi-nasil-yapilir', 'evrak-zimmet-tutanagi-nasil-tutulur'],
  araclar: [],
  ctaBaslik: 'Kimde ne var, artık net',
  ctaMetin: 'Dijital zimmet modülünü görmek için bize yazın.'
},

{
  slug: 'on-muhasebe-cari-teklif-programi',
  ad: 'Ön Muhasebe, Cari ve Teklif Programı',
  etiket: 'Şirket Takip · Ön Muhasebe',
  keyword: 'Ön Muhasebe, Cari ve Teklif Programı',
  urunTuru: 'sirket',
  hero: ['Hızlı teklif, müşteri-tedarikçi cari takibi ve fatura-tahsilat yönetimi bir arada. Nakit akışını kontrol altına alın.'],
  nedir: [
    'Ön muhasebe programı, işletmenin günlük para akışını (satış, tahsilat, cari, fatura, stok) takip eden sistemdir. TEKNOPERS ile fiyat listesinden dakikalar içinde teklif hazırlar, gönderir ve durumunu takip edersiniz.',
    'Her müşteri ve tedarikçi için cari kart tutulur; borç-alacak anlık görünür, vadesi geçen alacaklar listelenir. Onaylanan teklif doğrudan siparişe ve cariye dönüşür. Resmi beyannameler için mali müşavirinizle çalışmaya devam edersiniz.'
  ],
  ozellikler: [
    { b: 'Hızlı teklif', a: 'Fiyat listesinden saniyede teklif; gönder ve takip et.' },
    { b: 'Cari takibi', a: 'Borç-alacak anlık; vadesi geçen alacak uyarısı.' },
    { b: 'Fatura & tahsilat', a: 'Kesilen fatura ve tahsilat durumu tek yerde.' },
    { b: 'Stok entegrasyonu', a: 'Satış stoktan otomatik düşer.' },
    { b: 'OCR fatura', a: 'Alış faturaları fotoğrafla cariye işlenir.' },
    { b: 'Raporlar', a: 'Ciro, alacak ve nakit akışı tek bakışta.' }
  ],
  kimlerIcin: ['uretim-ve-toptan-icin-teklif-cari-ve-stok-yonetimi', 'depo-ve-lojistik-icin-stok-ve-demirbas-zimmet-yonetimi', 'mali-musavir-ve-muhasebe-ofisleri-icin-evrak-ve-surec-takibi'],
  sorular: ['teklif-nasil-hazirlanir', 'cari-hesap-takibi-nasil-yapilir', 'on-muhasebe-programi-nedir', 'fatura-ve-tahsilat-takibi-nasil-yapilir', 'vergi-ve-e-belge-takibi-nasil-yapilir', 'on-muhasebede-takip-disiplini-nasil-saglanir'],
  araclar: [],
  ctaBaslik: 'Teklif–cari–tahsilat döngüsünü tek ekrana taşıyın',
  ctaMetin: 'Ön muhasebe ve satış yönetimini görmek için bize yazın.'
},

{
  slug: 'salon-randevu-yonetim-programi',
  ad: 'Salon ve Randevu Yönetim Programı',
  etiket: 'Salon & Randevu',
  keyword: 'Salon, Kuaför ve Klinik Randevu Programı',
  urunTuru: 'salon',
  hero: ['Çakışmasız online randevu, otomatik WhatsApp hatırlatma, seans/paket takibi ve müşteri CRM. Kuaförden diş kliniğine, veterinerden diyetisyene.'],
  nedir: [
    'Salon ve randevu yönetim programı; randevu takvimi, müşteri geçmişi, seans/paket takibi ve kasa yönetimini tek ekranda toplar. TEKNOPERS Salon, altı sektöre (kuaför, güzellik, diş, veteriner, diyetisyen, pilates) uyarlanabilir çok kiracılı bir yapıdır.',
    'Müşteri online randevu alır, çakışma olmaz; otomatik hatırlatma no-show oranını düşürür. Peşin satılan paketlerde kalan seans otomatik sayılır, personel primi ve gün sonu kasa tek raporda görünür.'
  ],
  ozellikler: [
    { b: 'Online randevu', a: 'Müşteri boş saati seçer, çakışma engellenir.' },
    { b: 'Otomatik hatırlatma', a: 'WhatsApp/SMS ile no-show düşürülür.' },
    { b: 'Seans/paket takibi', a: 'Kalan seans otomatik sayılır ve hatırlatılır.' },
    { b: 'Müşteri CRM', a: 'Geçmiş, tercih ve harcama tek kartta.' },
    { b: 'Personel primi', a: 'Ciro bazlı prim otomatik hesaplanır.' },
    { b: 'Kasa & gün sonu', a: 'Gelir, gider ve gün sonu raporu.' }
  ],
  kimlerIcin: ['kuafor-ve-berberler-icin-online-randevu-ve-crm', 'guzellik-ve-estetik-merkezleri-icin-randevu-ve-seans-programi', 'dis-klinikleri-icin-randevu-hasta-ve-seans-takibi', 'veteriner-klinikleri-icin-randevu-ve-hasta-takip-sistemi', 'diyetisyen-ve-danisan-takip-sistemi', 'pilates-ve-spor-studyolari-icin-uyelik-sistemi'],
  sorular: ['kuafor-randevu-sistemi-nasil-kurulur', 'randevu-kacirma-no-show-nasil-onlenir', 'seans-paketi-takibi-nasil-yapilir', 'salon-musteri-takip-programi-ne-ise-yarar', 'online-randevu-sistemi-nasil-calisir', 'randevu-hatirlatma-mesaji-ornekleri'],
  araclar: [
    { yol: '/araclar/randevu-hatirlatma-mesaji/', ad: 'Randevu Hatırlatma Aracı' },
    { yol: '/araclar/salon-acma-maliyeti/', ad: 'Salon Açma Maliyeti' },
    { yol: '/araclar/salon-karlilik-simulatoru/', ad: 'Salon Kârlılık Simülatörü' }
  ],
  ctaBaslik: 'Randevuyu ve müşteriyi tek ekrana taşıyın',
  ctaMetin: 'Salon & randevu programını görmek için bize yazın.'
},

{
  slug: 'gorev-atama-ve-saha-yonetimi',
  ad: 'Görev Atama ve Saha Yönetimi',
  etiket: 'Şirket Takip · Saha',
  keyword: 'Görev Atama ve Saha Ekip Yönetimi Programı',
  urunTuru: 'sirket',
  hero: ['Ekibe görevi WhatsApp\'tan değil, izole ve konum damgalı bir sistemden atayın. Kim, neyi, nerede, ne zaman yaptı tek panelde.'],
  nedir: [
    'Görev atama ve saha yönetimi, merkezden sahaya veya ofis içindeki ekibe lokasyon ve zaman damgalı görev vermeyi sağlar. TEKNOPERS, bu akışı kurumsal olmayan mesajlaşma ağlarından çıkarıp izole, şifreli bir sisteme taşır.',
    'Görev tamamlandığında personel uygulamadan onaylar; gerektiğinde fotoğraf ve konum ekler. Böylece iş süreçlerinin izlenebilirliği artar, veri sızıntısı riski ortadan kalkar ve "yaptım/yapmadım" tartışması biter.'
  ],
  ozellikler: [
    { b: 'İzole görev atama', a: 'Görevler şifreli, kuruma özel ekrandan atanır.' },
    { b: 'Konum + zaman damgası', a: 'Görev nerede, ne zaman yapıldı kayda geçer.' },
    { b: 'Fotoğraflı onay', a: 'Tamamlanan iş görüntüyle belgelenir.' },
    { b: 'Veri güvenliği', a: 'WhatsApp yerine yetkilendirilmiş erişim.' },
    { b: 'Zimmet entegrasyonu', a: 'Ekipman/evrak teslimi göreve bağlanır.' },
    { b: 'İzlenebilirlik', a: 'Her hareket loglanır, raporlanır.' }
  ],
  kimlerIcin: ['hukuk-burolari-icin-gorev-atama-ve-evrak-zimmet-sistemi', 'temizlik-sirketleri-icin-mobil-pdks-ve-saha-takibi', 'guvenlik-sirketleri-icin-devriye-ve-nokta-kontrol', 'nakliye-kargo-ve-filo-icin-saha-personel-ve-arac-zimmet-takibi', 'insaat-santiyeleri-icin-personel-taseron-ve-zimmet-takibi'],
  sorular: ['saha-personeli-nasil-takip-edilir', 'whatsapp-ile-musteri-verisi-paylasmak-yasal-mi', 'sofor-ve-saha-personeli-nasil-takip-edilir', 'guvenlik-personeli-devriye-takibi-nasil-yapilir'],
  araclar: [{ yol: '/araclar/puantaj-cetveli/', ad: 'Puantaj Cetveli Aracı' }],
  ctaBaslik: 'Sahayı ve ofisi tek panelden yönetin',
  ctaMetin: 'Görev atama ve saha yönetimini görmek için bize yazın.'
},

{
  slug: 'atolye-ve-orta-olcekli-uretim-icin-pdks',
  ad: 'Atölye ve Orta Ölçekli Üretim için PDKS',
  etiket: 'Şirket Takip · Üretim',
  keyword: '50-200 Personelli Atölye ve Üretim için Cihazsız PDKS',
  urunTuru: 'sirket',
  hero: ['50-200 personelli atölye ve orta ölçekli üretim için cihazsız, KVKK uyumlu mesai takibi. Pahalı biyometrik cihaz ve kart hilesi olmadan, çok istasyonlu.'],
  nedir: [
    'Bu ürün, büyük fabrika ölçeğine gelmemiş ama 50-200 personelle çalışan atölye ve orta ölçekli üretim tesisleri için tasarlanmış cihazsız bir PDKS\'tir. Personel kendi telefonundan, GPS ile konumu doğrulanarak mesaisini başlatır.',
    'Üretim bölüm ve istasyonlara ayrılır; kim, hangi tezgâhta ne kadar çalıştı görünür. Cihaz Bağı ile kart hilesi engellenir; vardiya, taşeron hakedişi ve fazla mesai otomatik hesaplanır. Biyometrik veri işlenmediği için KVKK riski taşınmaz.'
  ],
  ozellikler: [
    { b: 'Orta ölçeğe uygun', a: '50-200 personel için pratik, hızlı kurulum.' },
    { b: 'Sıfır donanım', a: 'Pahalı biyometrik cihaz ve bakım maliyeti yok.' },
    { b: 'KVKK dostu', a: 'Biyometrik veri işlemez; ceza riski taşımaz.' },
    { b: 'İstasyon bazlı takip', a: 'Çok tezgâhlı üretimde kim nerede çalıştı görünür.' },
    { b: 'Cihaz Bağı kilidi', a: 'Kart/telefon hilesi engellenir.' },
    { b: 'Taşeron & vardiya', a: 'Taşeron hakedişi ve vardiya otomatik.' }
  ],
  kimlerIcin: ['atolye-ve-orta-olcekli-uretim-icin-mesai-ve-vardiya-takibi', 'fabrika-icin-cihazsiz-pdks-ve-personel-takibi', 'insaat-santiyeleri-icin-personel-taseron-ve-zimmet-takibi'],
  sorular: ['50-200-personelli-atolyede-mesai-takibi-nasil-yapilir', 'cok-istasyonlu-uretimde-personel-takibi-nasil-yapilir', '150-personelli-fabrikada-mesai-nasil-takip-edilir', 'parmak-izi-ile-mesai-takibi-yasak-mi', 'baskasinin-yerine-kart-basmak-tazminat-hakki-var-mi'],
  araclar: [{ yol: '/araclar/puantaj-cetveli/', ad: 'Puantaj Cetveli Aracı' }],
  ctaBaslik: 'Fabrika bütçesi olmadan fabrika disiplini',
  ctaMetin: 'Atölye ve orta ölçekli üretim için cihazsız PDKS demosu için bize yazın.'
}

];

module.exports = { URUNLER: URUNLER };
