/**
 * urunler.js — TEKNOPERS · ÜRÜNLER (alt özellikli, yeni mimari)
 * Her modül ayrı ürün; altOzellikler ile alt modüller listelenir.
 * Alanlar: slug, ad, etiket, keyword, urunTuru('sirket'|'salon'), ikon, aile,
 *  hero[], altOzellikler[{i,b,a}], nedir[], kimlerIcin[/cozum/], sorular[/soru/],
 *  araclar[{yol,ad}], ctaBaslik, ctaMetin.
 */
'use strict';

var URUNLER = [

// ───────── SAHA & PERSONEL ─────────
{
  slug:"pdks-personel-takip-sistemi", ad:"PDKS ve Personel Takip", etiket:"Şirket Takip · Saha",
  keyword:"Cihazsız PDKS ve Personel Takip Programı", urunTuru:"sirket", ikon:"⏱️", aile:"Saha & Personel",
  hero:["Parmak izi ve kart cihazına gerek kalmadan, personelin kendi telefonundan konum doğrulamalı mesai takibi. KVKK uyumlu, kart hilesine kapalı, sıfır donanım."],
  altOzellikler:[
    {i:"📋",b:"Puantaj",a:"Giriş-çıkış, mola ve fazla mesai otomatik puantaja işlenir."},
    {i:"🗓️",b:"Vardiya planı",a:"Çok vardiyalı ekiplerde çizelge ve rotasyon."},
    {i:"🏖️",b:"İzin yönetimi",a:"Yıllık izin hakkı, kullanılan ve kalan izin takibi."},
    {i:"📍",b:"GPS konum",a:"İşyeri/şantiye alanı teyidi; sahte konum bariyeri."},
    {i:"🔒",b:"Cihaz Bağı",a:"Hesap tek telefona kilitlenir; kart hilesi engellenir."},
    {i:"🚚",b:"Saha takibi",a:"Ofis dışı ekipler için konumlu giriş-çıkış."}
  ],
  nedir:["PDKS (Personel Devam Kontrol Sistemi), çalışanların giriş-çıkışını kaydeden sistemdir. TEKNOPERS PDKS bunu hiçbir cihaz olmadan yapar: personel kendi telefonundan, GPS ile konumu doğrulanarak mesaisini başlatır.","Cihaz Bağı ile başkasının yerine giriş imkânsız hâle gelir; mesai, izin ve fazla çalışma otomatik hesaplanıp bordroya baz olur."],
  kimlerIcin:["fabrika-icin-cihazsiz-pdks-ve-personel-takibi","temizlik-sirketleri-icin-mobil-pdks-ve-saha-takibi","guvenlik-sirketleri-icin-devriye-ve-nokta-kontrol","insaat-santiyeleri-icin-personel-taseron-ve-zimmet-takibi","otel-restoran-ve-kafeler-icin-personel-ve-vardiya-takibi","nakliye-kargo-ve-filo-icin-saha-personel-ve-arac-zimmet-takibi"],
  sorular:["cihazsiz-pdks-nedir","parmak-izi-ile-mesai-takibi-yasak-mi","baskasinin-yerine-kart-basmak-tazminat-hakki-var-mi","puantaj-nasil-tutulur","gps-ile-personel-giris-cikis-takibi-nasil-yapilir","vardiya-plani-nasil-yapilir"],
  araclar:[{yol:"/araclar/puantaj-cetveli/",ad:"Puantaj Cetveli Aracı"}],
  ctaBaslik:"Mesai riskini sisteme devredin", ctaMetin:"Cihazsız PDKS demosu için bize yazın."
},
{
  slug:"zimmet-takip-sistemi", ad:"Zimmet Takip", etiket:"Şirket Takip · Zimmet",
  keyword:"Ekipman ve Evrak Zimmet Takip Programı", urunTuru:"sirket", ikon:"🔐", aile:"Saha & Personel",
  hero:["Laptop, telefon, araç, kıymetli evrak… Kimde ne var? Teslimi fotoğraf, konum ve dijital onayla kayıt altına alın."],
  altOzellikler:[
    {i:"💻",b:"Ekipman zimmeti",a:"Demirbaş teslimi kime, ne zaman verildi kayda geçer."},
    {i:"📄",b:"Evrak zimmeti",a:"Kıymetli evrak teslimi tutanakla belgelenir."},
    {i:"📸",b:"Fotoğraflı tutanak",a:"Teslim anı görüntüyle kaydedilir."},
    {i:"🕒",b:"Konum + zaman",a:"Ne zaman, nerede teslim edildi damgalanır."},
    {i:"↩️",b:"İade takibi",a:"İade edilmeyen zimmetler işaretlenir."},
    {i:"🚪",b:"Çıkışta kontrol",a:"Personel ayrılırken zimmet kolayca kapatılır."}
  ],
  nedir:["Zimmet takip sistemi, ekipman ve evrakın kime teslim edildiğini kayıt altına alır. TEKNOPERS Zimmet, teslim anında telefondan fotoğraf çeker, konum ve zaman damgası basar, dijital onay alır.","Kimde ne var tek listede görünür; kayıp ve haksız suçlama riski ortadan kalkar."],
  kimlerIcin:["isletmeler-icin-ekipman-ve-evrak-zimmet-takibi","hukuk-burolari-icin-gorev-atama-ve-evrak-zimmet-sistemi","insaat-santiyeleri-icin-personel-taseron-ve-zimmet-takibi","nakliye-kargo-ve-filo-icin-saha-personel-ve-arac-zimmet-takibi"],
  sorular:["ekipman-zimmet-takibi-nasil-yapilir","evrak-zimmet-tutanagi-nasil-tutulur","arac-zimmet-takibi-nasil-yapilir"],
  araclar:[],
  ctaBaslik:"Kimde ne var, artık net", ctaMetin:"Dijital zimmet modülünü görmek için bize yazın."
},
{
  slug:"gorev-atama-ve-saha-yonetimi", ad:"Görev Atama ve Saha Yönetimi", etiket:"Şirket Takip · Saha",
  keyword:"Görev Atama ve Saha Ekip Yönetimi Programı", urunTuru:"sirket", ikon:"🗂️", aile:"Saha & Personel",
  hero:["Ekibe görevi WhatsApp'tan değil, izole ve konum damgalı bir sistemden atayın. Kim, neyi, nerede, ne zaman yaptı tek panelde."],
  altOzellikler:[
    {i:"📌",b:"İzole görev atama",a:"Görevler kuruma özel şifreli ekrandan atanır."},
    {i:"📍",b:"Konum + zaman",a:"Görev nerede, ne zaman yapıldı kayda geçer."},
    {i:"✅",b:"Fotoğraflı onay",a:"Tamamlanan iş görüntüyle belgelenir."},
    {i:"🛡️",b:"Veri güvenliği",a:"WhatsApp yerine yetkilendirilmiş erişim."},
    {i:"🔐",b:"Zimmet bağı",a:"Ekipman/evrak teslimi göreve bağlanır."},
    {i:"🧭",b:"İzlenebilirlik",a:"Her hareket loglanır ve raporlanır."}
  ],
  nedir:["Görev atama ve saha yönetimi, merkezden sahaya veya ofis ekibine lokasyon ve zaman damgalı görev vermeyi sağlar. TEKNOPERS bu akışı kurumsal olmayan mesajlaşmadan çıkarıp izole, şifreli bir sisteme taşır.","Görev tamamlandığında personel onaylar, gerekirse fotoğraf ve konum ekler; veri sızıntısı riski ortadan kalkar."],
  kimlerIcin:["hukuk-burolari-icin-gorev-atama-ve-evrak-zimmet-sistemi","temizlik-sirketleri-icin-mobil-pdks-ve-saha-takibi","guvenlik-sirketleri-icin-devriye-ve-nokta-kontrol","nakliye-kargo-ve-filo-icin-saha-personel-ve-arac-zimmet-takibi","insaat-santiyeleri-icin-personel-taseron-ve-zimmet-takibi"],
  sorular:["saha-personeli-nasil-takip-edilir","whatsapp-ile-musteri-verisi-paylasmak-yasal-mi","sofor-ve-saha-personeli-nasil-takip-edilir"],
  araclar:[{yol:"/araclar/puantaj-cetveli/",ad:"Puantaj Cetveli Aracı"}],
  ctaBaslik:"Sahayı ve ofisi tek panelden yönetin", ctaMetin:"Görev atama ve saha yönetimini görmek için bize yazın."
},
{
  slug:"atolye-ve-orta-olcekli-uretim-icin-pdks", ad:"Atölye ve Orta Ölçekli Üretim için PDKS", etiket:"Şirket Takip · Üretim",
  keyword:"50-200 Personelli Atölye ve Üretim için Cihazsız PDKS", urunTuru:"sirket", ikon:"🏭", aile:"Saha & Personel",
  hero:["50-200 personelli atölye ve orta ölçekli üretim için cihazsız, KVKK uyumlu mesai takibi. Pahalı biyometrik cihaz ve kart hilesi olmadan, çok istasyonlu."],
  altOzellikler:[
    {i:"🏭",b:"İstasyon bazlı takip",a:"Çok tezgâhlı üretimde kim nerede çalıştı görünür."},
    {i:"🔒",b:"Cihaz Bağı",a:"Kart/telefon hilesi engellenir."},
    {i:"🗓️",b:"Vardiya",a:"Çok vardiyalı üretimde çizelge yönetimi."},
    {i:"👷",b:"Taşeron hakediş",a:"Taşeron/ekip bazlı otomatik hakediş."},
    {i:"⏱️",b:"Fazla mesai",a:"Zamlı ücretler otomatik hesaplanır."},
    {i:"✅",b:"KVKK uyumu",a:"Biyometrik veri işlemez; ceza riski taşımaz."}
  ],
  nedir:["Bu ürün, büyük fabrika ölçeğine gelmemiş ama 50-200 personelle çalışan atölye ve orta ölçekli üretim için tasarlanmış cihazsız bir PDKS'tir. Personel telefonundan, GPS ile konumu doğrulanarak mesaisini başlatır.","Üretim bölüm ve istasyonlara ayrılır; vardiya, taşeron hakedişi ve fazla mesai otomatik hesaplanır."],
  kimlerIcin:["atolye-ve-orta-olcekli-uretim-icin-mesai-ve-vardiya-takibi","fabrika-icin-cihazsiz-pdks-ve-personel-takibi","insaat-santiyeleri-icin-personel-taseron-ve-zimmet-takibi"],
  sorular:["50-200-personelli-atolyede-mesai-takibi-nasil-yapilir","cok-istasyonlu-uretimde-personel-takibi-nasil-yapilir","150-personelli-fabrikada-mesai-nasil-takip-edilir"],
  araclar:[{yol:"/araclar/puantaj-cetveli/",ad:"Puantaj Cetveli Aracı"}],
  ctaBaslik:"Fabrika bütçesi olmadan fabrika disiplini", ctaMetin:"Atölye için cihazsız PDKS demosu için bize yazın."
},

// ───────── STOK, SATIŞ & ÖN MUHASEBE ─────────
{
  slug:"depo-stok-yonetim-programi", ad:"Depo ve Stok Yönetim", etiket:"Şirket Takip · Depo",
  keyword:"Barkodlu Depo ve Stok Takip Programı", urunTuru:"sirket", ikon:"📦", aile:"Stok, Satış & Ön Muhasebe",
  hero:["Barkodla saniyede stok giriş-çıkışı, OCR ile fatura okuma ve kritik seviye uyarısı. Depo farklarını görünür kılın."],
  altOzellikler:[
    {i:"🏷️",b:"Barkodlu stok",a:"Hızlı ve hatasız giriş-çıkış, anlık kalan miktar."},
    {i:"🧾",b:"OCR fatura okuma",a:"Fatura fotoğrafı saniyede cariye ve stoğa işlenir."},
    {i:"🔔",b:"Kritik stok uyarısı",a:"Ürün bitmeden otomatik haber verir."},
    {i:"📊",b:"Stok sayımı",a:"Barkod okutarak fiili stok karşılaştırılır."},
    {i:"🔐",b:"Demirbaş zimmet",a:"Depo ekipmanı personele zimmetlenir."},
    {i:"💱",b:"KDV dahil/hariç",a:"Çoklu fiyatlandırma desteği."}
  ],
  nedir:["Stok takip programı, ürünlerin giriş-çıkışını ve kalan miktarını izleyen sistemdir. TEKNOPERS Depo, ürünleri barkod okutarak hızlı ve hatasız kaydeder; kalan miktar anlık güncellenir.","Fatura fotoğrafı OCR ile okunarak tedarikçi cari hesabına işlenir; kritik stok uyarısıyla ürün bitmeden haberdar olursunuz."],
  kimlerIcin:["depo-ve-lojistik-icin-stok-ve-demirbas-zimmet-yonetimi","uretim-ve-toptan-icin-teklif-cari-ve-stok-yonetimi","market-ve-perakende-icin-stok-ve-personel-yonetimi"],
  sorular:["depo-stok-sayimi-nasil-yapilir","barkod-ile-stok-takibi-nasil-yapilir","ocr-ile-fatura-okuma-nedir","kucuk-isletmeler-icin-stok-takip-programi"],
  araclar:[],
  ctaBaslik:"Depo zararını görünür kılın", ctaMetin:"Barkodlu stok ve OCR fatura sistemini görmek için bize yazın."
},
{
  slug:"satis-teklif-ve-cari-programi", ad:"Satış, Teklif ve Cari", etiket:"Şirket Takip · Satış",
  keyword:"Antetli Teklif, Cari ve Satış Yönetim Programı", urunTuru:"sirket", ikon:"🧾", aile:"Stok, Satış & Ön Muhasebe",
  hero:["Antetli profesyonel teklif, sipariş yönetimi ve cari (borç-alacak) takibi bir arada. Satışı stok ve tahsilatla tek ekrandan yürütün."],
  altOzellikler:[
    {i:"📝",b:"Antetli teklif",a:"Fiyat listesinden dakikalar içinde profesyonel teklif."},
    {i:"📦",b:"Sipariş yönetimi",a:"Onaylanan teklif siparişe ve stoğa dönüşür."},
    {i:"👥",b:"Cari takibi",a:"Müşteri-tedarikçi borç-alacak anlık görünür."},
    {i:"💰",b:"Tahsilat takibi",a:"Vadesi geçen alacaklar listelenir, hatırlatılır."},
    {i:"🏷️",b:"Fiyat listeleri",a:"Müşteriye/gruba özel fiyatlandırma."},
    {i:"💱",b:"KDV dahil/hariç",a:"Alış-satış KDV yönetimi bir arada."}
  ],
  nedir:["Satış, teklif ve cari programı; teklif–sipariş–cari–tahsilat döngüsünü tek sistemde toplar. TEKNOPERS ile fiyat listenizden saniyede antetli teklif hazırlar, gönderir ve durumunu takip edersiniz.","Onaylanan teklif doğrudan siparişe ve cariye dönüşür; kim ne kadar borçlu, hangi alacak gecikti tek bakışta görünür."],
  kimlerIcin:["uretim-ve-toptan-icin-teklif-cari-ve-stok-yonetimi","market-ve-perakende-icin-stok-ve-personel-yonetimi"],
  sorular:["teklif-nasil-hazirlanir","cari-hesap-takibi-nasil-yapilir","fatura-ve-tahsilat-takibi-nasil-yapilir"],
  araclar:[],
  ctaBaslik:"Teklif–cari–tahsilat tek ekranda", ctaMetin:"Satış ve teklif yönetimini görmek için bize yazın."
},
{
  slug:"on-muhasebe-programi", ad:"Ön Muhasebe", etiket:"Şirket Takip · Ön Muhasebe",
  keyword:"Ön Muhasebe Programı — Cari, Fatura, Kasa", urunTuru:"sirket", ikon:"📒", aile:"Stok, Satış & Ön Muhasebe",
  hero:["İşletmenizin günlük para akışını — cari, fatura, kasa, gider, tahsilat — eksiksiz yöneten ön muhasebe sistemi. Günü gününe kontrol, tek ekranda."],
  altOzellikler:[
    {i:"👥",b:"Cari hesap",a:"Müşteri ve tedarikçi borç-alacak takibi."},
    {i:"🧾",b:"Fatura",a:"Kesilen ve gelen faturaların kaydı."},
    {i:"💵",b:"Kasa yönetimi",a:"Nakit/kart giriş-çıkış ve gün sonu kasa."},
    {i:"📉",b:"Gider takibi",a:"Sabit ve değişken giderler tek yerde."},
    {i:"🗂️",b:"e-Belge & vergi takibi",a:"Son tarihler ve e-belge yükümlülükleri hatırlatılır."},
    {i:"📊",b:"Raporlar",a:"Ciro, alacak, gider ve nakit akışı."}
  ],
  nedir:["Ön muhasebe programı, işletmenin günlük mali işleyişini — satış, tahsilat, cari, fatura, kasa ve gider — yöneten sistemdir. TEKNOPERS Ön Muhasebe, işinizi günü gününe kontrol etmeniz için birebir çalışır: kim borçlu, kasada ne var, hangi fatura ödendi tek ekranda görünür.","İşletmenizin nakit akışını canlı tutar; alacaklarınızı takip eder, giderlerinizi izler ve büyüdükçe yeni modüllerle genişler."],
  kimlerIcin:["uretim-ve-toptan-icin-teklif-cari-ve-stok-yonetimi","mali-musavir-ve-muhasebe-ofisleri-icin-evrak-ve-surec-takibi"],
  sorular:["on-muhasebe-programi-nedir","cari-hesap-takibi-nasil-yapilir","fatura-ve-tahsilat-takibi-nasil-yapilir","vergi-ve-e-belge-takibi-nasil-yapilir"],
  araclar:[],
  ctaBaslik:"Nakit akışını kontrol altına alın", ctaMetin:"Ön muhasebe sistemini görmek için bize yazın."
},

// ───────── SEKTÖREL RANDEVU (SALON) ─────────
{
  slug:"kuafor-ve-berber-randevu-programi", ad:"Kuaför ve Berber Randevu Programı", etiket:"Salon & Randevu",
  keyword:"Kuaför ve Berber Randevu Programı", urunTuru:"salon", ikon:"💈", aile:"Sektörel Randevu · Salon",
  hero:["Çakışmasız online randevu, otomatik WhatsApp hatırlatma ve müşteri geçmişi. No-show'u düşürün, düzenli müşteriyi geri getirin."],
  altOzellikler:[
    {i:"📅",b:"Online randevu",a:"Müşteri boş saati seçer, çakışma engellenir."},
    {i:"💬",b:"WhatsApp hatırlatma",a:"Otomatik hatırlatma ile gelmeyen azalır."},
    {i:"👤",b:"Müşteri CRM",a:"Geçmiş, tercih ve harcama tek kartta."},
    {i:"💵",b:"Kasa & ciro",a:"Günlük gelir ve gün sonu raporu."},
    {i:"🎁",b:"Sadakat",a:"Sık gelene özel kampanya ve puan."},
    {i:"💇",b:"Personel primi",a:"Ciro bazlı prim otomatik hesaplanır."}
  ],
  nedir:["Kuaför ve berberler için sade ve hızlı randevu sistemi. Müşteri kendi boş saatini seçer, randevu takvime düşer, çakışma olmaz.","Otomatik hatırlatma no-show'u azaltır; müşteri geçmişi tutulur ve sadakat kampanyaları kurulur."],
  kimlerIcin:["kuafor-ve-berberler-icin-online-randevu-ve-crm"],
  sorular:["kuafor-randevu-sistemi-nasil-kurulur","randevu-kacirma-no-show-nasil-onlenir","salon-musteri-takip-programi-ne-ise-yarar"],
  araclar:[{yol:"/araclar/randevu-hatirlatma-mesaji/",ad:"Randevu Hatırlatma Aracı"},{yol:"/araclar/salon-karlilik-simulatoru/",ad:"Salon Kârlılık Simülatörü"}],
  ctaBaslik:"Koltuğu boş bırakmayın", ctaMetin:"Kuaför randevu sistemini görmek için bize yazın."
},
{
  slug:"guzellik-ve-estetik-randevu-programi", ad:"Güzellik ve Estetik Randevu Programı", etiket:"Salon & Randevu",
  keyword:"Güzellik Salonu ve Estetik Randevu Programı", urunTuru:"salon", ikon:"💅", aile:"Sektörel Randevu · Salon",
  hero:["Lazer, cilt bakımı gibi çok seanslı hizmetlerde paket takibi, otomatik hatırlatma ve müşteri geçmişi. Personel primi ve kasa bir arada."],
  altOzellikler:[
    {i:"🎫",b:"Paket/seans takibi",a:"Kalan seans otomatik sayılır ve hatırlatılır."},
    {i:"💬",b:"WhatsApp hatırlatma",a:"No-show otomatik hatırlatmayla düşer."},
    {i:"👤",b:"Müşteri kartı",a:"Geçmiş işlemler, tercihler, harcama."},
    {i:"💅",b:"Personel primi",a:"Ciro bazlı prim otomatik."},
    {i:"💵",b:"Kasa & gün sonu",a:"Gelir ve gider tek raporda."},
    {i:"🎁",b:"Kampanya",a:"Sadakat ve özel gün kampanyaları."}
  ],
  nedir:["Güzellik ve estetik merkezleri için randevu, paket, müşteri geçmişi ve kasayı tek ekranda toplayan sistem.","Peşin satılan paketlerde kalan seans otomatik düşer; bitişe yaklaşınca yenileme hatırlatması gider."],
  kimlerIcin:["guzellik-ve-estetik-merkezleri-icin-randevu-ve-seans-programi"],
  sorular:["seans-paketi-takibi-nasil-yapilir","randevu-kacirma-no-show-nasil-onlenir","salon-personeli-primi-nasil-belirlenir"],
  araclar:[{yol:"/araclar/salon-acma-maliyeti/",ad:"Salon Açma Maliyeti"},{yol:"/araclar/salon-karlilik-simulatoru/",ad:"Salon Kârlılık Simülatörü"}],
  ctaBaslik:"Paket ve randevuyu tek ekrana taşıyın", ctaMetin:"Güzellik merkezi programını görmek için bize yazın."
},
{
  slug:"dis-klinigi-randevu-programi", ad:"Diş Kliniği Randevu Programı", etiket:"Salon & Randevu",
  keyword:"Diş Kliniği Randevu ve Hasta Takip Programı", urunTuru:"salon", ikon:"🦷", aile:"Sektörel Randevu · Salon",
  hero:["Çok seanslı tedavilerde hasta geçmişi, kalan seans ve otomatik hatırlatma. No-show kaybını WhatsApp hatırlatmasıyla düşürün."],
  altOzellikler:[
    {i:"🪑",b:"Koltuk bazlı takvim",a:"Hekim ve koltuk çakışması engellenir."},
    {i:"🦷",b:"Hasta kartı",a:"Tedavi geçmişi ve notlar tek yerde."},
    {i:"🎫",b:"Seans/paket",a:"Kalan seans otomatik sayılır."},
    {i:"💬",b:"WhatsApp hatırlatma",a:"No-show diş kliniğinde pahalıdır; hatırlatma düşürür."},
    {i:"💵",b:"Ödeme takibi",a:"Tedavi bakiyesi ve tahsilat."},
    {i:"🛡️",b:"KVKK",a:"Hasta verisi yetkili erişimle korunur."}
  ],
  nedir:["Diş klinikleri için hekim/koltuk bazlı çakışmasız takvim, hasta ve seans takibi.","Otomatik hatırlatma no-show'u düşürür; tedavi paketi ve ödeme takibi bir arada yürür."],
  kimlerIcin:["dis-klinikleri-icin-randevu-hasta-ve-seans-takibi"],
  sorular:["dis-klinigi-randevu-programi-nasil-secilir","dis-klinigi-hasta-takip-programi-nasil-olmali","dis-klinigi-randevu-programi-ucretsiz-mi","randevu-kacirma-no-show-nasil-onlenir","seans-paketi-takibi-nasil-yapilir"],
  araclar:[{yol:"/araclar/randevu-hatirlatma-mesaji/",ad:"Randevu Hatırlatma Aracı"}],
  ctaBaslik:"Boş koltuğu doldurun", ctaMetin:"Diş kliniği randevu sistemini görmek için bize yazın."
},
{
  slug:"veteriner-klinik-randevu-programi", ad:"Veteriner Klinik Randevu Programı", etiket:"Salon & Randevu",
  keyword:"Veteriner Kliniği Randevu ve Hasta Takip Programı", urunTuru:"salon", ikon:"🐾", aile:"Sektörel Randevu · Salon",
  hero:["Hayvan ve sahip kaydını birlikte tutun, aşı ve kontrol hatırlatmalarını otomatikleştirin, no-show kaybını düşürün."],
  altOzellikler:[
    {i:"🐾",b:"Hasta kartı",a:"Tür, ırk, tedavi geçmişi ve aşı takvimi."},
    {i:"💉",b:"Aşı/kontrol hatırlatma",a:"Zamanı gelince otomatik bildirim."},
    {i:"📅",b:"Randevu takvimi",a:"Çakışmasız randevu ve hatırlatma."},
    {i:"📞",b:"Sahip iletişimi",a:"Sahip bilgisi ve geçmişi bir arada."},
    {i:"💵",b:"Ödeme & cari",a:"Tedavi bakiyesi ve tahsilat."},
    {i:"💊",b:"İlaç stoğu",a:"Klinik stok takibiyle entegre."}
  ],
  nedir:["Veteriner klinikleri için hasta (hayvan) ve sahip kaydını birlikte tutan, randevu ve hatırlatmayı birleştiren sistem.","Aşı ve kontrol hatırlatması düzenli ziyareti ve hayvan sağlığını güvence altına alır."],
  kimlerIcin:["veteriner-klinikleri-icin-randevu-ve-hasta-takip-sistemi"],
  sorular:["veteriner-klinigi-randevu-programi-nasil-olmali","veteriner-asi-hatirlatma-sistemi-nasil-kurulur","randevu-kacirma-no-show-nasil-onlenir","randevu-hatirlatma-mesaji-ornekleri"],
  araclar:[{yol:"/araclar/randevu-hatirlatma-mesaji/",ad:"Randevu Hatırlatma Aracı"}],
  ctaBaslik:"Aşı hatırlatmasıyla hastayı geri getirin", ctaMetin:"Veteriner randevu sistemini görmek için bize yazın."
},
{
  slug:"diyetisyen-danisan-takip-programi", ad:"Diyetisyen ve Danışan Takip Programı", etiket:"Salon & Randevu",
  keyword:"Diyetisyen Randevu ve Danışan Takip Programı", urunTuru:"salon", ikon:"🥗", aile:"Sektörel Randevu · Salon",
  hero:["Danışanın kilo/ölçü ilerlemesini, paket kullanımını ve randevularını tek ekranda takip edin. No-show'u otomatik hatırlatmayla düşürün."],
  altOzellikler:[
    {i:"📇",b:"Danışan kartı",a:"Kilo/ölçü geçmişi ve notlar tek yerde."},
    {i:"📈",b:"İlerleme takibi",a:"Sonuçları görmek devamı ve sadakati artırır."},
    {i:"🎫",b:"Paket takibi",a:"Kalan görüşme otomatik sayılır."},
    {i:"📅",b:"Randevu & hatırlatma",a:"Çakışmasız takvim, otomatik hatırlatma."},
    {i:"💵",b:"Ödeme/cari",a:"Paket ve tahsilat takibi."},
    {i:"🛡️",b:"Veri gizliliği",a:"Danışan verisi yetkili erişimle korunur."}
  ],
  nedir:["Diyetisyenler için randevunun yanı sıra danışanın kilo/ölçü ilerlemesini ve paket kullanımını izleyen sistem.","İlerlemeyi görmek hem sonuç hem sadakat getirir; randevu hatırlatması no-show'u azaltır."],
  kimlerIcin:["diyetisyen-ve-danisan-takip-sistemi"],
  sorular:["diyetisyen-randevu-ve-danisan-takip-programi","diyetisyen-danisan-olcum-takibi-nasil-yapilir","seans-paketi-takibi-nasil-yapilir","randevu-kacirma-no-show-nasil-onlenir"],
  araclar:[{yol:"/araclar/randevu-hatirlatma-mesaji/",ad:"Randevu Hatırlatma Aracı"}],
  ctaBaslik:"Danışanın ilerlemesini görünür kılın", ctaMetin:"Diyetisyen takip sistemini görmek için bize yazın."
},
{
  slug:"pilates-studyo-uyelik-programi", ad:"Pilates ve Stüdyo Üyelik Programı", etiket:"Salon & Randevu",
  keyword:"Pilates ve Spor Stüdyosu Üyelik ve Ders Programı", urunTuru:"salon", ikon:"🧘", aile:"Sektörel Randevu · Salon",
  hero:["Ders takvimi, üyelik/paket takibi ve yoklama tek ekranda. Üyelik bitişini hatırlatarak yenilemeyi artırın."],
  altOzellikler:[
    {i:"📅",b:"Ders takvimi",a:"Grup/özel ders ve kontenjan yönetimi."},
    {i:"🎫",b:"Üyelik takibi",a:"Kalan ders ve bitiş tarihi otomatik."},
    {i:"✔️",b:"Yoklama",a:"Derse kim geldi kaydı."},
    {i:"🔁",b:"Yenileme hatırlatma",a:"Bitişe yakın otomatik bildirim."},
    {i:"💬",b:"WhatsApp hatırlatma",a:"Ders öncesi otomatik hatırlatma."},
    {i:"💵",b:"Ödeme/cari",a:"Üyelik ve tahsilat takibi."}
  ],
  nedir:["Pilates ve spor stüdyoları için ders takvimini üyelik ve paket takibiyle birleştiren sistem.","Üyelik bitişini önceden hatırlatmak yenilemeyi artırır; kontenjan ve yoklama düzene girer."],
  kimlerIcin:["pilates-ve-spor-studyolari-icin-uyelik-sistemi"],
  sorular:["pilates-studyosu-uyelik-takip-programi","seans-paketi-takibi-nasil-yapilir","randevu-kacirma-no-show-nasil-onlenir"],
  araclar:[{yol:"/araclar/randevu-hatirlatma-mesaji/",ad:"Randevu Hatırlatma Aracı"}],
  ctaBaslik:"Üyelik yenilemesini kaçırmayın", ctaMetin:"Pilates üyelik sistemini görmek için bize yazın."
}

];

module.exports = { URUNLER: URUNLER };
