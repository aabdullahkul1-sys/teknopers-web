/**
 * cozumler.js — TEKNOPERS · SEKTÖREL ÇÖZÜM SAYFALARI (/cozum/<slug>)
 * ==============================================================================
 * Dönüşüm odaklı pazarlama sayfaları. Her biri PAS formülüyle yazılır:
 *   giris (vaat) → sorun (pain) → kiskirtma (risk/maliyet) → cozum → ozellikler → CTA.
 * Bilgi veren /soru/ sayfalarından farkı: bunlar SATIŞ sayfalarıdır; sektörün acı
 * noktasına odaklanır ve demo/WhatsApp'a yönlendirir.
 *
 * Yeni çözüm = yeni obje. SLUG küçük harf, tireli, Türkçesiz.
 * urun: 'sirket' → teknopers.com.tr Şirket Takip · 'salon' → Salon Programı.
 *
 * YASAL NOT: Biyometrik/KVKK ve Yargıtay ifadeleri genel ve doğrulanabilir
 * temalara dayanır; spesifik karar numarası ve güncel ceza tutarı YAZILMAMIŞTIR.
 * Kesin yasal iddia eklemeden önce güncel mevzuata/hukukçuya teyit ettir.
 */
'use strict';

// ürün kısayolları
var U = {
  sirket: { ad: 'Şirket Takip Sistemi', anchor: '/#sirket' },
  salon:  { ad: 'Salon & Randevu Programı', anchor: '/#salon' }
};

function c(o){ return o; }

var COZUMLER = [

c({
  slug: 'fabrika-icin-cihazsiz-pdks-ve-personel-takibi',
  nasilCalisir: ["Personel fabrikaya girerken kendi telefonundan konum doğrulamalı giriş yapar; kart veya parmak izi cihazına gerek kalmaz.", "Vardiya, mola ve fazla mesai saatleri otomatik puantaja işlenir; bölüm ve hat bazında ayrışır.", "Yönetici anlık olarak kim içeride, kim geç kaldı, hangi hatta kaç kişi var görür.", "Ay sonunda puantaj ve hakediş tablosu tek tıkla Excel'e ve bordroya baz olarak çıkar."],
  sss: [
    { s: "Cihazsız PDKS fabrikada güvenilir mi?", c: "Konum doğrulama ve cihaz bağı ile personel yalnızca fabrika sahasındayken mesai başlatabilir; başka yerden veya başkasının yerine giriş engellenir. Bu, sabit kart cihazından daha esnek ve hilesizdir." },
    { s: "150 kişilik bir fabrikada kurulum ne kadar sürer?", c: "Donanım kurulumu olmadığı için genellikle 1 gün içinde devreye girer; personel telefonuna uygulamayı kurar ve ilk gün mesai başlatır." },
    { s: "KVKK açısından konum takibi sorun olur mu?", c: "Konum yalnızca mesai başlat/bitir anında ve iş amacıyla alınır, sürekli takip yapılmaz; aydınlatma metni ve açık rıza akışı sistemle birlikte gelir." }
  ],
  sektor: 'Üretim & Fabrika',
  urun: 'sirket',
  arac: '/araclar/puantaj-cetveli/', aracAd: 'Puantaj Cetveli Aracı',
  baslik: 'Fabrikalar için Cihazsız PDKS ve Personel Takip Sistemi',
  ozet: '50, 100, 150 personelli üretim tesisleri için donanımsız, KVKK uyumlu mobil mesai takibi. Parmak izi ve kart hilesi olmadan, konum doğrulamalı puantaj.',
  giris: [
    '50 ile 150 arası personel çalıştıran bir üretim tesisiniz varsa, mesai takibi hem yasal hem finansal bir risk alanıdır. TEKNOPERS, fabrikanızı parmak izi cihazlarının KVKK riskinden ve kart sistemlerinin suistimalinden aynı anda kurtaran, donanım gerektirmeyen bir mobil PDKS sunar.'
  ],
  sorun: [
    'Fabrikalarda mesai takibi genelde iki kötü seçenek arasına sıkışır: biyometrik cihazlar (parmak izi, yüz tanıma) ya da manyetik kart sistemleri.',
    'Biyometrik cihazlar özel nitelikli kişisel veri işlediği için ağır KVKK riski taşır. Kart sistemleri ise "başkasının yerine kart basma" (buddy punching) hilesine sonuna kadar açıktır.',
    'Her iki yöntem de donanım maliyeti, arıza, tozlanma ve servis bekleme süreleriyle gelir.'
  ],
  kiskirtma: [
    'Biyometrik mesai takibinde çalışanın açık rızası olsa bile, işçi–işveren arasındaki güç dengesizliği nedeniyle bu rıza yeterli sayılmayabilir; Kurul, daha az müdahaleci alternatifler dururken biyometrik veri işlemeyi ölçülülük ilkesine aykırı bulabilmektedir. Sonuç: milyonlarca liraya varan idari para cezası riski.',
    'Kart sistemine dönmek ise başka bir kapıyı açar: işyerinde olmayan bir işçinin arkadaşına kartını bastırması, size her ay haksız fazla mesai ödetir. Üstelik bu suistimali dijital delille ispatlayamazsanız, haklı fesih hakkınızı da kullanamazsınız.'
  ],
  cozum: [
    'TEKNOPERS mobil PDKS, hiçbir biyometrik veri saklamaz ve hiçbir cihaz gerektirmez. Personel kendi telefonundan, GPS ile konumu doğrulanarak mesaisini başlatır.',
    '"Cihaz Bağı" özelliği hesabı tek bir fiziksel telefona kilitler; böylece kimse başkasının yerine giriş yapamaz. Sahte konum (mock location) uygulamaları yazılım bariyeriyle engellenir.',
    'Giriş-çıkış, mola ve izinler otomatik olarak puantaja işlenir; ay sonu hakediş tabloları Excel hatası olmadan hazırlanır.'
  ],
  ozellikler: [
    { b: 'Sıfır donanım', a: 'Parmak izi/kart cihazı yok. Kurulum, bakım ve arıza maliyeti ortadan kalkar.' },
    { b: 'KVKK dostu', a: 'Biyometrik veri işlemez; özel nitelikli veri saklamanın getirdiği risk sıfırlanır.' },
    { b: 'Cihaz Bağı kilidi', a: 'Hesap tek telefona kilitlenir; başkasının yerine giriş teknik olarak imkânsız hâle gelir.' },
    { b: 'Konum doğrulama', a: 'GPS ile fabrika alanı teyidi; sahte konum algılayıcı bariyer.' },
    { b: 'Otomatik puantaj', a: 'Mesai, mola, fazla çalışma ve izinler otomatik hesaplanır, bordroya baz olur.' },
    { b: 'Vardiya planı', a: 'Çok vardiyalı üretimde çizelge ve fazla mesai tek ekranda yönetilir.' }
  ],
  ctaBaslik: 'Fabrikanızın mesai riskini sisteme devredin',
  ctaMetin: 'Donanım maliyeti ve yasal riski sıfırlayan cihazsız PDKS demosu için bize yazın.',
  ilgiliSorular: ['parmak-izi-ile-mesai-takibi-yasak-mi', 'baskasinin-yerine-kart-basmak-tazminat-hakki-var-mi', '150-personelli-fabrikada-mesai-nasil-takip-edilir'],
  ilgiliCozumler: ['insaat-santiyeleri-icin-personel-taseron-ve-zimmet-takibi', 'depo-ve-lojistik-icin-stok-ve-demirbas-zimmet-yonetimi']
}),

c({
  slug: 'hukuk-burolari-icin-gorev-atama-ve-evrak-zimmet-sistemi',
  nasilCalisir: ["Her dosya ve duruşma bir göreve bağlanır; sorumlu avukat/katip ve son tarih atanır.", "Devredilen evrak ve dosyalar zimmetle kayda geçer; kimde olduğu her an bellidir.", "Yaklaşan süreler ve duruşmalar otomatik hatırlatılır, atlanmaz.", "Tamamlanan işler ve evrak hareketleri raporlanır; denetim ve teftişte kayıt hazırdır."],
  sss: [
    { s: "Müvekkil evrakı kaybolursa sorumluluk nasıl belirlenir?", c: "Zimmet kaydı, evrağın en son kimde olduğunu tarih ve imzayla gösterir; bu hem iç sorumluluğu netleştirir hem olası bir uyuşmazlıkta belge olur." },
    { s: "Duruşma ve süre takibi nasıl yapılır?", c: "Her göreve son tarih girilir; sistem yaklaşan süreleri sorumlusuna otomatik hatırlatır, böylece hak düşürücü süreler kaçmaz." },
    { s: "Küçük bir büro için fazla ağır olmaz mı?", c: "Modül sade kurgulanmıştır; sadece görev, süre ve evrak zimmeti kullanılarak 2-3 kişilik bir büroda da pratik çalışır." }
  ],
  sektor: 'Hukuk & Müşavirlik',
  urun: 'sirket',
  baslik: 'Hukuk Büroları için Görev Atama ve Evrak Zimmet Sistemi',
  ozet: 'Müvekkil verisini WhatsApp riskinden, evrak trafiğini zimmet suçlaması riskinden koruyan izole görev atama ve dijital zimmet sistemi.',
  giris: [
    'Hukuk büroları, yeminli mali müşavirlikler ve denetim firmaları yoğun evrak trafiğiyle çalışır. Görevleri WhatsApp\'tan yürütmek kolay görünür ama hem KVKK hem TCK açısından ağır risk taşır. TEKNOPERS bu akışı sızdırmaz bir kurumsal sisteme taşır.'
  ],
  sorun: [
    'Müvekkil bilgileri, dava dosyaları, TC kimlik ve sağlık verileri çoğu büroda WhatsApp grupları üzerinden dolaşır.',
    'Adliye ve icra dairesi arasında taşınan orijinal evrakların kime, ne zaman teslim edildiği kayıt altına alınmaz.'
  ],
  kiskirtma: [
    'Sunucuları yurt dışında olan platformlarda özel nitelikli veri paylaşmak, KVKK\'nın veri güvenliği ve yurt dışına aktarım hükümlerini ihlal edebilir; Türk Ceza Kanunu\'nun haberleşmenin gizliliği ve verilerin hukuka aykırı ele geçirilmesi maddeleri kapsamına dahi girebilir. İşten ayrılan personel, gruptaki tüm müvekkil verisini yanında götürür.',
    'Evrakın kime teslim edildiğini ispat edememek, personeli haksız zimmet suçlamasıyla, büroyu ise müvekkile karşı tazminat davasıyla karşı karşıya bırakır.'
  ],
  cozum: [
    'Dava dosyaları ve haciz evrakları personele WhatsApp mesajıyla değil, izole ve şifreli "Görev Atama" modülü üzerinden dijital atanır. İletişim tamamen büroya özel hâle gelir.',
    'Fiziksel evrak teslimleri "Zimmet" modülüyle kayıt altına alınır: teslim anında fotoğraf çekilir, zaman ve konum damgası basılır, dijital onay alınır.',
    'İşten ayrılan personelin arşive erişimi tek tıkla kesilir; kurumsal hafıza ve müvekkil gizliliği güvenceye alınır.'
  ],
  ozellikler: [
    { b: 'İzole görev atama', a: 'Görevler büroya özel şifreli ekrandan atanır; WhatsApp trafiği ve veri sızıntısı biter.' },
    { b: 'Dijital zimmet tutanağı', a: 'Evrak teslimi fotoğraf + konum + zaman damgası + onay ile kayda geçer.' },
    { b: 'Erişim kontrolü', a: 'Ayrılan personelin tüm arşive erişimi anında kesilir.' },
    { b: 'İz kaydı', a: 'Kim, hangi dosyayı, ne zaman aldı; her hareket loglanır.' },
    { b: 'Konum doğrulamalı teslim', a: 'Adliye/icra teslimleri konumla teyit edilir.' },
    { b: 'KVKK uyumu', a: 'Veri, yetkilendirilmiş erişim katmanlarında korunur.' }
  ],
  ctaBaslik: 'Büronuzun bilgi akışını zırha kavuşturun',
  ctaMetin: 'İzole görev atama ve dijital zimmet modülünü görmek için bize yazın.',
  ilgiliSorular: ['whatsapp-ile-musteri-verisi-paylasmak-yasal-mi', 'evrak-zimmet-tutanagi-nasil-tutulur', 'ekipman-zimmet-takibi-nasil-yapilir'],
  ilgiliCozumler: ['isletmeler-icin-ekipman-ve-evrak-zimmet-takibi', 'depo-ve-lojistik-icin-stok-ve-demirbas-zimmet-yonetimi']
}),

c({
  slug: 'temizlik-sirketleri-icin-mobil-pdks-ve-saha-takibi',
  nasilCalisir: ["Personel gittiği lokasyonda telefonundan konum doğrulamalı giriş-çıkış yapar.", "Hangi ekip hangi binada kaç saat çalıştı otomatik kaydolur ve müşteri bazında ayrışır.", "Eksik giden veya erken ayrılan personel yöneticiye anında görünür.", "Ay sonunda lokasyon ve personel bazlı puantaj ile müşteri hakediş dökümü hazır olur."],
  sss: [
    { s: "Çok lokasyonlu ekiplerde kimin nerede olduğu nasıl takip edilir?", c: "Her giriş konumla damgalandığı için hangi personelin hangi binada olduğu anlık görünür; kağıt föyle mümkün olmayan bir netlik sağlar." },
    { s: "Müşteriye çalışma saatini ispatlayabilir miyim?", c: "Evet; lokasyon bazlı konumlu-saatli kayıt, müşteriye o ay kaç saat hizmet verildiğinin belgesidir ve fatura/hakediş anlaşmazlığını bitirir." },
    { s: "Personel telefonu yoksa ne olur?", c: "Ekip liderinin telefonundan toplu giriş veya ortak bir cihaz kullanılabilir; sistem tek cihazdan çok personel girişini destekler." }
  ],
  sektor: 'Temizlik Hizmetleri',
  urun: 'sirket',
  baslik: 'Temizlik Şirketleri için Mobil PDKS ve Saha Takip Sistemi',
  ozet: 'Farklı adreslere dağılmış temizlik personelini GPS ile konum doğrulamalı takip edin. Saha denetmeni ve ulaşım maliyeti olmadan.',
  giris: [
    'Temizlik firmalarında personel farklı AVM, site ve iş yerlerine dağılmıştır ve en büyük gider kalemi saha denetimidir. TEKNOPERS, "gitti mi, kaçta gitti" sorusunu telefondan konum doğrulamayla kesin biçimde yanıtlar.'
  ],
  sorun: [
    'Personel farklı adreslerde çalıştığı için işe gerçekten gidip gitmediği, kaçta başladığı denetlenemez.',
    'Denetim için saha denetmeni gezdirmek yüksek maliyet ve zaman kaybıdır.'
  ],
  kiskirtma: [
    'Denetlenemeyen saha demek, ödediğiniz mesainin gerçekten çalışılıp çalışılmadığını bilememek demektir. Müşteri, "personel gelmedi" dediğinde elinizde kanıt yoksa hem itibar hem sözleşme riski doğar.'
  ],
  cozum: [
    'Personel görev adresinde telefondan "Vardım" butonuna basar; GPS konumu görev noktasıyla otomatik eşleşir.',
    'Hangi bina, hangi saat aralığı çalışıldı tek ekranda görünür; saha denetmenine ve ulaşıma duyulan ihtiyaç sıfırlanır.',
    'Fazla mesai ve devamsızlık otomatik hesaplanır, müşteriye raporlanabilir.'
  ],
  ozellikler: [
    { b: 'Konumlu yoklama', a: '"Vardım" butonu GPS ile görev noktasına eşleşir.' },
    { b: 'Çok lokasyon', a: 'Dağınık adresler tek panelden yönetilir.' },
    { b: 'Denetmen maliyeti sıfır', a: 'Saha gezme ve ulaşım gideri ortadan kalkar.' },
    { b: 'Müşteriye rapor', a: 'Hangi noktada kim, kaçta çalıştı belgelenir.' },
    { b: 'Vardiya & rotasyon', a: 'Personel dağılımı ve nöbet planı kolayca kurulur.' },
    { b: 'Cihazsız', a: 'Sabit cihaz yok; her adreste telefonla çalışır.' }
  ],
  ctaBaslik: 'Sahayı gezmeden denetleyin',
  ctaMetin: 'Konum doğrulamalı mobil yoklama sistemini görmek için bize yazın.',
  ilgiliSorular: ['temizlik-personeli-takip-programi-nasil-olmali', 'gps-ile-personel-giris-cikis-takibi-nasil-yapilir', 'saha-personeli-nasil-takip-edilir'],
  ilgiliCozumler: ['guvenlik-sirketleri-icin-devriye-ve-nokta-kontrol', 'insaat-santiyeleri-icin-personel-taseron-ve-zimmet-takibi']
}),

c({
  slug: 'guvenlik-sirketleri-icin-devriye-ve-nokta-kontrol',
  nasilCalisir: ["Her nokta için vardiya çizelgesi kurulur; sabah/akşam/gece kapsaması net görünür.", "Güvenlik görevlisi devriye noktalarını telefonuyla (QR/NFC/konum) tarayarak tur kaydı bırakır.", "Atlanan tur veya boş kalan vardiya yöneticiye anında bildirilir.", "Fazla mesai, gece sayısı ve hakediş otomatik hesaplanır, bordroya baz olur."],
  sss: [
    { s: "Devriye turlarının yapıldığını nasıl ispatlarım?", c: "Her nokta tarandığında zaman ve konum damgası kaydolur; müşteriye o gece hangi turların kaçta atıldığı raporla sunulur." },
    { s: "7/24 bir nokta için kaç personel gerekir?", c: "En az 3 vardiya gerekir; izin ve rapor payıyla nokta başına 4-5 kişilik kadro sağlıklıdır. Sistem kapsama açığını önceden gösterir." },
    { s: "Gece vardiyası sınırlarına uyumu sağlar mı?", c: "Sistem kişi başı gece sayısını takip eder ve sürekli geceye kalan personeli işaretler; İş Kanunu'nun gece 7,5 saat sınırına uyumu kolaylaştırır." }
  ],
  sektor: 'Güvenlik Hizmetleri',
  urun: 'sirket',
  baslik: 'Güvenlik Şirketleri için Devriye ve Nokta Kontrol Sistemi',
  ozet: 'Nöbet ve devriye turlarını konum doğrulamalı kayıt altına alın. Kaçırılan turu ve gecikmeyi anında raporlayın.',
  giris: [
    'Güvenlik hizmetinde nöbetin gerçekten tutulduğunu ispat etmek esastır. TEKNOPERS, devriye turlarını konum ve zaman damgasıyla kayıt altına alarak hem caydırıcılık hem denetlenebilirlik sağlar.'
  ],
  sorun: [
    'Kağıt devriye defteri sonradan denetlenemez ve doldurulmuş gibi gösterilebilir.',
    'Turnike yalnızca kapı girişini kaydeder; saha içindeki devriyeyi göstermez.'
  ],
  kiskirtma: [
    'Tutulduğu ispatlanamayan bir nöbet, olası bir olayda hem güvenlik açığı hem sözleşme ihlali demektir. Müşteri kanıt istediğinde elinizde konumlu kayıt yoksa iş kaybı kaçınılmazdır.'
  ],
  cozum: [
    'Nöbet ve kontrol noktaları saatleriyle tanımlanır; personel her turda noktada telefondan giriş yapar, konum ve saat kaydedilir.',
    'Kaçırılan tur veya gecikme anında raporlanır; vardiya ve fazla mesai birlikte yönetilir.'
  ],
  ozellikler: [
    { b: 'Konumlu tur kontrol', a: 'Her devriye noktasında GPS doğrulamalı kayıt.' },
    { b: 'Kaçırılan tur uyarısı', a: 'Yapılmayan/geç yapılan tur anında görünür.' },
    { b: 'Zaman damgası', a: 'Her hareket saatiyle loglanır, ispat edilebilir.' },
    { b: 'Vardiya yönetimi', a: 'Nöbet çizelgesi ve fazla mesai tek ekranda.' },
    { b: 'Müşteriye rapor', a: 'Tutulan nöbetler belgelenir, güven verir.' },
    { b: 'Cihazsız', a: 'Ek donanım yok; personelin telefonu yeter.' }
  ],
  ctaBaslik: 'Tutulan her nöbeti kanıtlayın',
  ctaMetin: 'Devriye ve nokta kontrol sistemini görmek için bize yazın.',
  ilgiliSorular: ['guvenlik-personeli-devriye-takibi-nasil-yapilir', 'gps-ile-personel-giris-cikis-takibi-nasil-yapilir', 'vardiya-plani-nasil-yapilir'],
  ilgiliCozumler: ['temizlik-sirketleri-icin-mobil-pdks-ve-saha-takibi', 'fabrika-icin-cihazsiz-pdks-ve-personel-takibi']
}),

c({
  slug: 'insaat-santiyeleri-icin-personel-taseron-ve-zimmet-takibi',
  nasilCalisir: ["Her taşeron ve ekip ayrı tanımlanır; işçiler konumlu-saatli mesai başlatır.", "Puantaj taşeron bazında otomatik oluşur; her ekibin hakedişi ayrı görünür.", "Verilen ekipman ve malzeme zimmetle kayda geçer, iade takibi yapılır.", "Ay sonu taşeron hakedişi ve SGK prim günleri karşılaştırılır, uyuşmazlık kalmaz."],
  sss: [
    { s: "Taşeron hakedişi nasıl ayrışır?", c: "Her işçi bir taşerona/ekibe bağlıdır; puantaj otomatik olarak ekip bazında toplanır ve her taşeronun gün × yevmiye hakedişi ayrı çıkar." },
    { s: "Şantiyede kağıt föy neden yetmez?", c: "Kağıt föy kaybolur, sonradan doldurulur ve ihtilafta işçi lehine yorumlanır; konumlu-saatli dijital kayıt hem doğru hem davada delildir." },
    { s: "Ekipman kaybı nasıl önlenir?", c: "Verilen her alet zimmetle işçiye kaydedilir; iade edilmeyen ekipman ay sonunda net görünür ve hakedişten mahsup edilebilir." }
  ],
  sektor: 'İnşaat & Şantiye',
  urun: 'sirket',
  arac: '/araclar/puantaj-cetveli/', aracAd: 'Puantaj Cetveli Aracı',
  baslik: 'İnşaat Şantiyeleri için Personel, Taşeron ve Zimmet Takibi',
  ozet: 'Şantiyede kim, hangi taşeronda, kaçta işbaşı yaptı konumla teyit edin. Ekipman zimmetini fotoğraflı kayıt altına alın.',
  giris: [
    'Şantiyede kağıt föy kaybolur, imza taklit edilebilir ve taşeron ekipleri karışır. TEKNOPERS, hem personel-taşeron mesaisini konumla teyit eder hem de ekipman zimmetini dijitalleştirir.'
  ],
  sorun: [
    'Çok sayıda işçi ve taşeronun hangi şantiyede, kaçta çalıştığı takip edilemez.',
    'Pahalı ekipmanların kime zimmetlendiği kayıtlı değildir; kaybolduğunda sorumlu bulunamaz.'
  ],
  kiskirtma: [
    'Mesaisi ispatlanamayan işçi, hem hakediş ihtilafı hem olası iş davasında delilsizlik demektir. Zimmeti tutulmayan ekipman ise doğrudan zarardır ve haksız suçlamalara yol açar.'
  ],
  cozum: [
    'Şantiyeler tanımlanır; işçiler telefondan konum doğrulamalı giriş-çıkış yapar. Taşeron/ekip bazlı puantaj otomatik oluşur.',
    'Ekipman teslimi "Zimmet" modülüyle fotoğraf, konum ve onayla kayıt altına alınır.'
  ],
  ozellikler: [
    { b: 'Konumlu işbaşı', a: 'Hangi şantiyede, kaçta başlandı GPS ile teyit edilir.' },
    { b: 'Taşeron bazlı puantaj', a: 'Ekip/taşeron ayrımıyla otomatik hakediş.' },
    { b: 'Ekipman zimmeti', a: 'Demirbaş teslimi fotoğraflı ve konumlu kayda geçer.' },
    { b: 'Fazla mesai', a: 'Şantiyede fazla çalışma otomatik hesaplanır.' },
    { b: 'Delil niteliği', a: 'Konumlu-saatli kayıt olası davada kanıttır.' },
    { b: 'Cihazsız', a: 'Şantiyede bozulacak cihaz yok; telefonla çalışır.' }
  ],
  ctaBaslik: 'Şantiyenizi tek panelden yönetin',
  ctaMetin: 'Personel, taşeron ve zimmet takibini görmek için bize yazın.',
  ilgiliSorular: ['insaat-santiyesinde-personel-takibi-nasil-yapilir', 'taseron-personel-takibi-nasil-yapilir', 'ekipman-zimmet-takibi-nasil-yapilir'],
  ilgiliCozumler: ['fabrika-icin-cihazsiz-pdks-ve-personel-takibi', 'depo-ve-lojistik-icin-stok-ve-demirbas-zimmet-yonetimi']
}),

c({
  slug: 'depo-ve-lojistik-icin-stok-ve-demirbas-zimmet-yonetimi',
  nasilCalisir: ["Ürünler barkodla tanımlanır; giriş-çıkış ve sayım telefondan barkod okutularak yapılır.", "Stok anlık güncellenir; kritik seviyenin altına düşen ürün otomatik uyarı verir.", "Forklift, terminal gibi demirbaşlar personele zimmetle verilir ve takip edilir.", "Sayım farkları ve stok hareketleri raporlanır; kayıp ve fire görünür olur."],
  sss: [
    { s: "Depo sayımı ne kadar hızlanır?", c: "Barkod okutmayla sayım elle listeye göre kat kat hızlanır ve insan hatası düşer; sayım farkı anında raporlanır." },
    { s: "Demirbaş kimde, nasıl bilinir?", c: "Her demirbaş zimmetle bir personele kaydedilir; cihaz veya ekipmanın en son kimde olduğu tarihiyle görünür." },
    { s: "Küçük bir depoda barkod sistemi pahalı değil mi?", c: "Ek donanım gerekmez; personelin telefonu barkod okuyucu olarak çalışır, böylece maliyet minimumda kalır." }
  ],
  sektor: 'Depo & Lojistik',
  urun: 'sirket',
  baslik: 'Depo ve Lojistik için Stok ve Demirbaş Zimmet Yönetimi',
  ozet: 'Barkodlu stok giriş-çıkışı, OCR ile fatura okuma ve personele demirbaş zimmeti. Depo operasyonunu tek ekrandan yönetin.',
  giris: [
    'Depoda stok kaçağı, yanlış sayım ve kaybolan demirbaş doğrudan zarardır. TEKNOPERS, barkodlu stok yönetimini, OCR destekli fatura okumayı ve zimmet takibini tek sistemde birleştirir.'
  ],
  sorun: [
    'Ürün giriş-çıkışı elle tutulduğunda sayım tutmaz, kaçak fark edilmez.',
    'Fatura ve irsaliyeler manuel girildiğinde iş yükü artar, hata çoğalır.',
    'Depo ekipmanı ve demirbaşın kimde olduğu kayıtlı değildir.'
  ],
  kiskirtma: [
    'Takip edilmeyen stok, dönem sonunda açıklanamayan farklar ve gizli zarar demektir. Zimmeti tutulmayan demirbaş kaybolduğunda ne sorumlu bulunur ne de tazmin edilir.'
  ],
  cozum: [
    'Ürünler barkodla saniyede giriş-çıkış yapılır; kalan miktar anlık güncellenir, kritik seviye uyarısı verir.',
    'Fatura fotoğrafı OCR ile okunur, tedarikçi cari hesabına ve KDV dahil/hariç fiyatlandırmaya işlenir.',
    'Depo ekipmanı personele fotoğraflı ve onaylı zimmetlenir.'
  ],
  ozellikler: [
    { b: 'Barkodlu stok', a: 'Hızlı ve hatasız giriş-çıkış, anlık kalan miktar.' },
    { b: 'OCR fatura okuma', a: 'Fatura fotoğrafı saniyede cariye ve stoğa işlenir.' },
    { b: 'Demirbaş zimmeti', a: 'Ekipman teslimi fotoğraf + onayla kayda geçer.' },
    { b: 'Kritik stok uyarısı', a: 'Ürün bitmeden otomatik haber verir.' },
    { b: 'Cari entegrasyon', a: 'Tedarikçi borç-alacak takibi bir arada.' },
    { b: 'Sayım kolaylığı', a: 'Barkod okutarak fiili stok karşılaştırılır.' }
  ],
  ctaBaslik: 'Depo zararını görünür kılın',
  ctaMetin: 'Barkodlu stok, OCR fatura ve zimmet sistemini görmek için bize yazın.',
  ilgiliSorular: ['depo-stok-sayimi-nasil-yapilir', 'barkod-ile-stok-takibi-nasil-yapilir', 'ocr-ile-fatura-okuma-nedir'],
  ilgiliCozumler: ['uretim-ve-toptan-icin-teklif-cari-ve-stok-yonetimi', 'isletmeler-icin-ekipman-ve-evrak-zimmet-takibi']
}),

c({
  slug: 'uretim-ve-toptan-icin-teklif-cari-ve-stok-yonetimi',
  nasilCalisir: ["Müşteriye profesyonel teklif hazırlanır; onaylanınca siparişe dönüşür.", "Cari hesap otomatik işler; kim ne kadar borçlu, vadesi ne zaman net görünür.", "Stok siparişle bağlıdır; çıkan ürün stoktan düşer, kritik seviye uyarır.", "Tahsilat ve vade takibi yapılır; geciken alacaklar raporlanır."],
  sss: [
    { s: "Teklif hazırlamak neden hızlanır?", c: "Ürün ve fiyatlar sistemde tanımlı olduğundan teklif dakikalar içinde oluşur ve tek tıkla PDF/WhatsApp ile gönderilir." },
    { s: "Cari alacak takibi nasıl kolaylaşır?", c: "Her satış ve tahsilat carihe işlenir; vadesi gelen ve geçen alacaklar otomatik listelenir, unutulan tahsilat kalmaz." },
    { s: "Stok ile satış birbirine bağlı mı?", c: "Evet; onaylanan siparişte ürün stoktan otomatik düşer, böylece elde olmayan ürünü satma ve stok tutmama sorunu ortadan kalkar." }
  ],
  sektor: 'Üretim & Toptan Satış',
  urun: 'sirket',
  baslik: 'Üretim ve Toptan Satış için Teklif, Cari ve Stok Yönetimi',
  ozet: 'Hızlı teklif hazırlama, müşteri-tedarikçi cari takibi ve stok yönetimi bir arada. Satış ve ön muhasebeyi tek ekrandan yürütün.',
  giris: [
    'Üretim ve toptan satışta teklif hızı ve cari takibi doğrudan nakit akışını belirler. TEKNOPERS, teklif–sipariş–cari–stok döngüsünü tek sistemde toplar.'
  ],
  sorun: [
    'Teklifler Excel veya kağıtla hazırlanır; yavaş, dağınık ve takipsizdir.',
    'Kimin ne kadar borçlu olduğu (cari) net değildir; tahsilat unutulur.',
    'Stok ile satış ayrı yürüdüğünde eldeki mal ile satılan mal tutmaz.'
  ],
  kiskirtma: [
    'Geç verilen teklif kaçan sipariştir. Takip edilmeyen cari, tahsil edilmeyen alacak ve bozulan nakit akışı demektir. Bunlar büyümenizi sessizce durdurur.'
  ],
  cozum: [
    'Ürün ve fiyat listelerinden dakikalar içinde profesyonel teklif hazırlanır ve takip edilir.',
    'Her müşteri/tedarikçi için cari kart tutulur; borç-alacak anlık görünür, vadesi geçen alacaklar listelenir.',
    'Satış stoktan otomatik düşer; barkod ve OCR ile giriş hızlanır.'
  ],
  ozellikler: [
    { b: 'Hızlı teklif', a: 'Fiyat listesinden saniyede teklif; gönder ve takip et.' },
    { b: 'Cari takibi', a: 'Borç-alacak anlık; vadesi geçen alacak uyarısı.' },
    { b: 'Stok entegrasyonu', a: 'Satış stoktan otomatik düşer, sayım tutar.' },
    { b: 'OCR fatura', a: 'Alış faturaları fotoğrafla cariye işlenir.' },
    { b: 'KDV çoklu fiyat', a: 'KDV dahil/hariç fiyatlandırma bir arada.' },
    { b: 'Raporlar', a: 'Ciro, alacak ve stok tek bakışta.' }
  ],
  ctaBaslik: 'Teklif–cari–stok döngüsünü tek ekrana taşıyın',
  ctaMetin: 'Ön muhasebe ve satış yönetimini görmek için bize yazın.',
  ilgiliSorular: ['teklif-nasil-hazirlanir', 'cari-hesap-takibi-nasil-yapilir', 'on-muhasebe-programi-nedir'],
  ilgiliCozumler: ['depo-ve-lojistik-icin-stok-ve-demirbas-zimmet-yonetimi', 'fabrika-icin-cihazsiz-pdks-ve-personel-takibi']
}),

c({
  slug: 'isletmeler-icin-ekipman-ve-evrak-zimmet-takibi',
  nasilCalisir: ["Her ekipman, cihaz ve önemli evrak sisteme tanımlanır.", "Personele teslimde zimmet kaydı tutulur; kim, ne, ne zaman aldı bellidir.", "İade ve devir hareketleri kayda geçer; zimmet zinciri kopmaz.", "İşten ayrılışta personelin üzerindeki tüm zimmet tek ekranda görünür ve teslim alınır."],
  sss: [
    { s: "Zimmet tutanağı neden önemli?", c: "İmzalı zimmet, bir ekipman veya evrağın kimde olduğunu belgeler; kayıp, hasar veya haksız suçlama durumunda işverenin en güçlü savunmasıdır." },
    { s: "İşten çıkışta eksik teslim nasıl önlenir?", c: "Personelin üzerindeki tüm zimmetler tek ekranda listelenir; teslim edilmeyen kalem net görünür ve ilişik kesme buna göre yapılır." },
    { s: "Hangi işletmeler için uygundur?", c: "Ofis, atölye, saha ekibi fark etmeksizin cihaz, araç, kıyafet veya evrak zimmeti tutan her işletme için uygundur." }
  ],
  sektor: 'Tüm Sektörler · Zimmet',
  urun: 'sirket',
  baslik: 'İşletmeler için Ekipman ve Evrak Zimmet Takibi',
  ozet: 'Laptop, telefon, araç, kıymetli evrak… Kimde ne var? Zimmeti fotoğraf, konum ve dijital onayla kayıt altına alın.',
  giris: [
    'Zimmet takibi yalnızca hukuk bürolarının değil, demirbaşı olan her işletmenin sorunudur. TEKNOPERS, ekipman ve evrak zimmetini saniyeler içinde dijital tutanağa çevirir.'
  ],
  sorun: [
    'Laptop, telefon, araç, alet ve kıymetli evrak sözlü teslim edilir; kimde olduğu kayıtlı değildir.',
    'Bir şey kaybolduğunda ne sorumlu bulunur ne de kimin aldığı ispatlanır.'
  ],
  kiskirtma: [
    'Zimmeti tutulmayan her demirbaş, potansiyel bir zarar ve haksız suçlama kaynağıdır. Personel ayrıldığında üstündeki ekipmanın iade edilip edilmediği bile belirsizdir.'
  ],
  cozum: [
    'Teslim anında personelin telefonundan fotoğraf çekilir, konum ve zaman damgası basılır, dijital onay alınır.',
    'Kimde ne var tek ekranda görünür; iade edilmeyen zimmetler işaretlenir. Personel çıkışında zimmet kontrolü kolaylaşır.'
  ],
  ozellikler: [
    { b: 'Fotoğraflı tutanak', a: 'Teslim anı görüntüyle kayda geçer.' },
    { b: 'Konum + zaman damgası', a: 'Ne zaman, nerede teslim edildi belgelenir.' },
    { b: 'Dijital onay', a: 'Personel teslimi uygulamada onaylar.' },
    { b: 'Kimde ne var', a: 'Tüm zimmetler tek listede, anlık.' },
    { b: 'İade takibi', a: 'İade edilmeyen ekipman işaretlenir.' },
    { b: 'Çıkışta kontrol', a: 'Personel ayrılırken zimmet kolayca kapatılır.' }
  ],
  ctaBaslik: 'Kimde ne var, artık net',
  ctaMetin: 'Dijital zimmet modülünü görmek için bize yazın.',
  ilgiliSorular: ['ekipman-zimmet-takibi-nasil-yapilir', 'evrak-zimmet-tutanagi-nasil-tutulur'],
  ilgiliCozumler: ['hukuk-burolari-icin-gorev-atama-ve-evrak-zimmet-sistemi', 'depo-ve-lojistik-icin-stok-ve-demirbas-zimmet-yonetimi']
}),

c({
  slug: 'dis-klinikleri-icin-randevu-hasta-ve-seans-takibi',
  nasilCalisir: ["Hekim ve koltuk bazlı çakışmasız takvimde randevu oluşturulur.", "Hasta kartına tedavi geçmişi, kalan seans ve notlar işlenir.", "Randevudan önce otomatik WhatsApp/SMS hatırlatma gider; no-show düşer.", "Tedavi bakiyesi ve tahsilat takip edilir; ödeme geçmişi hasta kartında görünür."],
  sss: [
    { s: "No-show'u gerçekten azaltır mı?", c: "Randevudan bir gün önce giden otomatik hatırlatma, gelmeme oranını belirgin düşürür; boşalan koltuk için erken haber alınır." },
    { s: "Çok seanslı tedavide kalan seans nasıl takip edilir?", c: "Her tedavi bir pakete bağlanır; hastanın kaç seansı kaldığı otomatik sayılır ve 'kaç seansım vardı' tartışması biter." },
    { s: "Hasta verisi KVKK'ya uygun saklanır mı?", c: "Hasta ve tedavi verisi yetkili erişimle korunur; aydınlatma ve rıza akışı sistemle birlikte gelir." }
  ],
  sektor: 'Diş Klinikleri',
  urun: 'salon',
  arac: '/araclar/randevu-hatirlatma-mesaji/', aracAd: 'Randevu Hatırlatma Aracı',
  baslik: 'Diş Klinikleri için Randevu, Hasta ve Seans Takip Sistemi',
  ozet: 'Çok seanslı tedavilerde hasta geçmişi, kalan seans ve otomatik hatırlatma. No-show kaybını WhatsApp hatırlatmasıyla düşürün.',
  giris: [
    'Diş kliniklerinde tedaviler uzun ve çok seanslıdır; randevuya gelmeme (no-show) doğrudan gelir kaybıdır. TEKNOPERS, hekim ve koltuk bazlı takvimle hasta ve seans takibini tek ekrana taşır.'
  ],
  sorun: [
    'Hekim ve koltuk çakışmaları randevu düzenini bozar.',
    'Hastanın kaçıncı seansta olduğu, kalan bakiyesi ve sıradaki randevusu elle takip edilir.',
    'Randevuya gelmeyen hasta, boş kalan koltuk ve kayıp gelir demektir.'
  ],
  kiskirtma: [
    'Diş kliniğinde no-show pahalıdır: koltuk boş kalır, hekim zamanı boşa gider ve tedavi süreci uzar. Elle takipte hangi hastanın hangi seansta kaldığı karışır.'
  ],
  cozum: [
    'Hekim/koltuk bazlı çakışmasız takvim kurulur; her hastanın tedavi geçmişi ve kalan seansı otomatik izlenir.',
    'Otomatik WhatsApp/SMS hatırlatma no-show oranını düşürür. Tedavi paketi ve ödeme takibi bir arada yürür.'
  ],
  ozellikler: [
    { b: 'Koltuk bazlı takvim', a: 'Hekim ve koltuk çakışması engellenir.' },
    { b: 'Otomatik hatırlatma', a: 'WhatsApp/SMS ile no-show düşürülür.' },
    { b: 'Hasta kartı', a: 'Tedavi geçmişi ve notlar tek yerde.' },
    { b: 'Seans/paket takibi', a: 'Kalan seans otomatik sayılır.' },
    { b: 'Ödeme takibi', a: 'Tedavi bakiyesi ve tahsilat izlenir.' },
    { b: 'KVKK uyumu', a: 'Hasta verisi yetkili erişimle korunur.' }
  ],
  ctaBaslik: 'Boş koltuğu doldurun, hastayı takip edin',
  ctaMetin: 'Diş kliniği randevu ve seans sistemini görmek için bize yazın.',
  ilgiliSorular: ['dis-klinigi-randevu-programi-nasil-secilir', 'randevu-kacirma-no-show-nasil-onlenir', 'seans-paketi-takibi-nasil-yapilir'],
  ilgiliCozumler: ['guzellik-ve-estetik-merkezleri-icin-randevu-ve-seans-programi', 'kuafor-ve-berberler-icin-online-randevu-ve-crm']
}),

c({
  slug: 'guzellik-ve-estetik-merkezleri-icin-randevu-ve-seans-programi',
  nasilCalisir: ["Personel ve kabin bazlı takvimde randevu alınır; çakışma engellenir.", "Müşteri kartında geçmiş işlemler, paket ve kalan seans tutulur.", "Otomatik hatırlatma ve onay mesajları gönderilir.", "Paket satışı, kasa ve personel primi tek ekranda yönetilir."],
  sss: [
    { s: "Paket ve seans takibi nasıl yapılır?", c: "Müşteriye satılan paket sisteme işlenir; her ziyarette kalan seans otomatik düşer ve bitişe yakın yenileme hatırlatılır." },
    { s: "Personel primi nasıl hesaplanır?", c: "Her işlemin hangi personel tarafından yapıldığı kaydedilir; ay sonu ciro ve prim otomatik çıkar." },
    { s: "Randevu hatırlatması müşteri memnuniyetini artırır mı?", c: "Evet; zamanında hatırlatma hem no-show'u düşürür hem müşteriye kurumsal ve ilgili bir izlenim verir." }
  ],
  sektor: 'Güzellik & Estetik',
  urun: 'salon',
  arac: '/araclar/salon-karlilik-simulatoru/', aracAd: 'Salon Kârlılık Simülatörü',
  baslik: 'Güzellik ve Estetik Merkezleri için Randevu ve Seans Programı',
  ozet: 'Lazer, cilt bakımı gibi çok seanslı hizmetlerde paket takibi, otomatik hatırlatma ve müşteri geçmişi. Personel primi ve kasa bir arada.',
  giris: [
    'Güzellik ve estetik merkezlerinde hizmetler çoğunlukla paketlidir ve seans takibi ister. TEKNOPERS, randevu, paket, müşteri geçmişi ve kasayı tek ekranda toplar.'
  ],
  sorun: [
    'Peşin satılan paketlerde kalan seansın takibi elle karışır.',
    'Randevuya gelmeyen müşteri boş kalan zaman ve kayıp gelir demektir.',
    'Personel primi ve gün sonu kasa dağınık hesaplanır.'
  ],
  kiskirtma: [
    '"Kaç seansım kaldı" tartışması hem güveni hem zamanı yer. No-show ve takipsiz paket, doğrudan cironuzdan eksilir.'
  ],
  cozum: [
    'Paketler tanımlanır; her gelişte seans otomatik düşer, kalan görünür ve bitişe yaklaşınca yenileme hatırlatması gider.',
    'Otomatik hatırlatma no-show\'u azaltır; personel primi ve kasa tek ekranda yönetilir.'
  ],
  ozellikler: [
    { b: 'Paket/seans takibi', a: 'Kalan seans otomatik sayılır ve hatırlatılır.' },
    { b: 'Otomatik hatırlatma', a: 'WhatsApp/SMS ile no-show düşürülür.' },
    { b: 'Müşteri kartı', a: 'Geçmiş işlemler, tercihler, harcama.' },
    { b: 'Personel primi', a: 'Ciro bazlı prim otomatik hesaplanır.' },
    { b: 'Kasa & gün sonu', a: 'Gelir ve gider tek raporda.' },
    { b: 'Kampanya', a: 'Sadakat ve özel gün kampanyaları.' }
  ],
  ctaBaslik: 'Paket ve randevuyu tek ekrana taşıyın',
  ctaMetin: 'Güzellik merkezi randevu ve seans programını görmek için bize yazın.',
  ilgiliSorular: ['seans-paketi-takibi-nasil-yapilir', 'randevu-kacirma-no-show-nasil-onlenir', 'salon-personeli-primi-nasil-belirlenir'],
  ilgiliCozumler: ['dis-klinikleri-icin-randevu-hasta-ve-seans-takibi', 'kuafor-ve-berberler-icin-online-randevu-ve-crm']
}),

c({
  slug: 'kuafor-ve-berberler-icin-online-randevu-ve-crm',
  nasilCalisir: ["Personel bazlı takvimde online veya telefonla randevu alınır.", "Müşteri kartında ziyaret geçmişi, tercih ve harcama tutulur.", "Randevu öncesi otomatik hatırlatma gönderilir.", "Kasa, gün sonu raporu ve personel primi otomatik hesaplanır."],
  sss: [
    { s: "Online randevu nasıl çalışır?", c: "Müşteri uygun saati kendisi seçer; randevu takvime düşer ve size de bildirilir, telefon trafiği azalır." },
    { s: "Müşteri sadakati nasıl artırılır?", c: "Ziyaret geçmişi ve harcama kayıtlı olduğundan düzenli müşteriye özel hatırlatma ve teklif yapılabilir; geri dönüş artar." },
    { s: "Berber dükkanı için fazla mı gelir?", c: "Hayır; sadece takvim, müşteri kartı ve kasa kullanılarak tek kişilik bir dükkanda da sade çalışır." }
  ],
  sektor: 'Kuaför & Berber',
  urun: 'salon',
  arac: '/araclar/randevu-hatirlatma-mesaji/', aracAd: 'Randevu Hatırlatma Aracı',
  baslik: 'Kuaför ve Berberler için Online Randevu ve Müşteri Takip Sistemi',
  ozet: 'Çakışmasız randevu, otomatik hatırlatma ve müşteri geçmişi. No-show\'u düşürün, düzenli müşteriyi geri getirin.',
  giris: [
    'Kuaför ve berberlerde randevu düzeni ve müşteri sadakati cironun temelidir. TEKNOPERS, online randevu, hatırlatma ve müşteri takibini sade ve hızlı biçimde sunar.'
  ],
  sorun: [
    'Telefon trafiği yoğundur, çift randevu ve çakışma olur.',
    'Randevuya gelmeyen müşteri boş koltuk demektir.',
    'Düzenli müşterinin geçmişi ve tercihleri kayıtlı değildir.'
  ],
  kiskirtma: [
    'Boş kalan her koltuk kaçan gelirdir. Müşteriyi tanımadan, doğru zamanda geri çağıramazsınız; sadakat tesadüfe kalır.'
  ],
  cozum: [
    'Müşteri bağlantıdan boş saati seçer; randevu takvime düşer, çakışma olmaz.',
    'Otomatik hatırlatma no-show\'u azaltır; müşteri geçmişi ve harcaması tutulur, sadakat kampanyaları kurulur.'
  ],
  ozellikler: [
    { b: 'Online randevu', a: 'Müşteri kendi boş saatini seçer, çakışma engellenir.' },
    { b: 'Otomatik hatırlatma', a: 'WhatsApp/SMS ile gelmeyen azalır.' },
    { b: 'Müşteri CRM', a: 'Geçmiş, tercih ve harcama tek kartta.' },
    { b: 'Sadakat', a: 'Sık gelene özel kampanya ve puan.' },
    { b: 'Kasa & ciro', a: 'Günlük gelir ve gün sonu raporu.' },
    { b: 'Sade & hızlı', a: 'Yoğun salonda işi yavaşlatmaz.' }
  ],
  ctaBaslik: 'Koltuğu boş bırakmayın',
  ctaMetin: 'Online randevu ve müşteri takip sistemini görmek için bize yazın.',
  ilgiliSorular: ['kuafor-randevu-sistemi-nasil-kurulur', 'randevu-kacirma-no-show-nasil-onlenir', 'salon-musteri-takip-programi-ne-ise-yarar'],
  ilgiliCozumler: ['guzellik-ve-estetik-merkezleri-icin-randevu-ve-seans-programi', 'dis-klinikleri-icin-randevu-hasta-ve-seans-takibi']
}),

c({
  slug: 'veteriner-klinikleri-icin-randevu-ve-hasta-takip-sistemi',
  nasilCalisir: ["Randevu takvimine muayene ve işlem kaydı yapılır.", "Hasta (hayvan) ve sahip kartı birlikte tutulur; tedavi geçmişi işlenir.", "Aşı ve kontrol tarihine göre otomatik hatırlatma sahibe gider.", "İlaç stoğu ve tahsilat tek ekranda takip edilir."],
  sss: [
    { s: "Aşı hatırlatması neden önemli?", c: "Aşı ve kontrol, kliniğin düzenli gelir kaynağıdır; otomatik hatırlatma bu tekrar ziyaretlerin kaçmasını önler." },
    { s: "Hayvan ve sahip bilgisi birlikte mi tutulur?", c: "Evet; her hasta kartı sahibiyle eşleşir, tedavi geçmişi ve iletişim tek yerde olur, kayıt karışmaz." },
    { s: "İlaç stoğu takip edilebilir mi?", c: "Klinikte kullanılan ilaç ve malzeme stok modülüyle takip edilir; kritik seviyede uyarı gelir." }
  ],
  sektor: 'Veteriner Klinikleri',
  urun: 'salon',
  arac: '/araclar/randevu-hatirlatma-mesaji/', aracAd: 'Randevu Hatırlatma Aracı',
  baslik: 'Veteriner Klinikleri için Randevu ve Hasta Takip Sistemi',
  ozet: 'Hayvan ve sahip kaydını birlikte tutun, aşı ve kontrol hatırlatmalarını otomatikleştirin, no-show kaybını düşürün.',
  giris: [
    'Veteriner kliniklerinde hasta (hayvan) ve sahip bilgisini birlikte tutmak, aşı ve kontrol zamanını kaçırmamak esastır. TEKNOPERS, randevu, hasta kartı ve otomatik hatırlatmayı tek ekranda birleştirir.'
  ],
  sorun: [
    'Hayvanın tür, ırk, geçmiş tedavi ve aşı takvimi dağınık tutulur.',
    'Aşı ve kontrol zamanı hatırlatılmadığında hem hayvan sağlığı hem düzenli ziyaret aksar.',
    'Randevuya gelmeyen hasta boş kalan zaman demektir.'
  ],
  kiskirtma: [
    'Aşı hatırlatması yapılmayan bir klinik, düzenli gelir kaynağı olan kontrol ziyaretlerini kaybeder. Dağınık hasta kaydı, tedavi geçmişini takip etmeyi zorlaştırır.'
  ],
  cozum: [
    'Her hayvan için kart açılır: tür, ırk, geçmiş tedavi ve aşı takvimi bir arada tutulur.',
    'Aşı ve kontrol zamanı geldiğinde otomatik hatırlatma gider; randevu hatırlatması no-show\'u azaltır.'
  ],
  ozellikler: [
    { b: 'Hasta kartı', a: 'Tür, ırk, tedavi geçmişi ve aşı takvimi tek yerde.' },
    { b: 'Aşı/kontrol hatırlatma', a: 'Zamanı gelince otomatik bildirim, düzenli ziyaret sağlar.' },
    { b: 'Randevu takvimi', a: 'Çakışmasız randevu ve otomatik hatırlatma.' },
    { b: 'Sahip iletişimi', a: 'Sahip bilgisi ve geçmişi bir arada.' },
    { b: 'Ödeme & cari', a: 'Tedavi bakiyesi ve tahsilat takibi.' },
    { b: 'İlaç stoğu', a: 'Klinik stok takibiyle entegre.' }
  ],
  ctaBaslik: 'Aşı hatırlatmasıyla hastayı geri getirin',
  ctaMetin: 'Veteriner randevu ve hasta takip sistemini görmek için bize yazın.',
  ilgiliSorular: ['veteriner-klinigi-randevu-programi-nasil-olmali', 'randevu-kacirma-no-show-nasil-onlenir', 'randevu-hatirlatma-mesaji-ornekleri'],
  ilgiliCozumler: ['dis-klinikleri-icin-randevu-hasta-ve-seans-takibi', 'diyetisyen-ve-danisan-takip-sistemi']
}),

c({
  slug: 'diyetisyen-ve-danisan-takip-sistemi',
  nasilCalisir: ["Randevu takvimine görüşmeler işlenir; otomatik hatırlatma gider.", "Danışan kartında kilo, ölçü ve vücut analizi geçmişi tarih tarih tutulur.", "Beslenme planı ve seans notları karta bağlanır.", "Paket/seans kullanımı ve tahsilat takip edilir."],
  sss: [
    { s: "Danışan ilerlemesi nasıl gösterilir?", c: "Kilo ve ölçü geçmişi grafikle sunulur; danışan sonucu görünce motivasyon ve bağlılık artar." },
    { s: "Paket takibi nasıl yapılır?", c: "Örneğin 8 görüşmelik paket sisteme işlenir; her görüşmede kalan otomatik düşer ve bitişte yenileme hatırlatılır." },
    { s: "Sağlık verisi güvenli mi?", c: "Danışan verisi yetkili erişimle korunur ve KVKK aydınlatma/rıza akışıyla birlikte yönetilir." }
  ],
  sektor: 'Diyetisyen',
  urun: 'salon',
  arac: '/araclar/randevu-hatirlatma-mesaji/', aracAd: 'Randevu Hatırlatma Aracı',
  baslik: 'Diyetisyen ve Danışan Takip Sistemi',
  ozet: 'Danışanın kilo/ölçü ilerlemesini, paket kullanımını ve randevularını tek ekranda takip edin. No-show\'u otomatik hatırlatmayla düşürün.',
  giris: [
    'Diyetisyenlikte başarı, danışanın ilerlemesini düzenli takip etmeye bağlıdır. TEKNOPERS, randevunun yanı sıra kilo/ölçü geçmişini ve paket kullanımını izlemenizi sağlar.'
  ],
  sorun: [
    'Danışanın kilo ve ölçü geçmişi kağıtta dağınık tutulur.',
    'Peşin satılan görüşme paketlerinde kalan seans karışır.',
    'Randevuya gelmeyen danışan hem gelir hem takip kaybıdır.'
  ],
  kiskirtma: [
    'İlerlemesi düzenli takip edilmeyen danışan motivasyonunu ve devamını kaybeder. Takipsiz paket ve no-show doğrudan cironuzdan eksilir.'
  ],
  cozum: [
    'Her danışan için kart açılır; kilo/ölçü geçmişi ve görüşme notları kaydedilir.',
    'Paket takibiyle kalan görüşme otomatik sayılır; randevu hatırlatması no-show\'u azaltır.'
  ],
  ozellikler: [
    { b: 'Danışan kartı', a: 'Kilo/ölçü geçmişi ve notlar tek yerde.' },
    { b: 'İlerleme takibi', a: 'Sonuçları görmek devamı ve sadakati artırır.' },
    { b: 'Paket takibi', a: 'Kalan görüşme otomatik sayılır.' },
    { b: 'Randevu & hatırlatma', a: 'Çakışmasız takvim, otomatik hatırlatma.' },
    { b: 'Ödeme/cari', a: 'Paket ve tahsilat takibi.' },
    { b: 'Veri gizliliği', a: 'Danışan verisi yetkili erişimle korunur.' }
  ],
  ctaBaslik: 'Danışanın ilerlemesini görünür kılın',
  ctaMetin: 'Diyetisyen randevu ve danışan takip sistemini görmek için bize yazın.',
  ilgiliSorular: ['diyetisyen-randevu-ve-danisan-takip-programi', 'seans-paketi-takibi-nasil-yapilir', 'randevu-kacirma-no-show-nasil-onlenir'],
  ilgiliCozumler: ['pilates-ve-spor-studyolari-icin-uyelik-sistemi', 'guzellik-ve-estetik-merkezleri-icin-randevu-ve-seans-programi']
}),

c({
  slug: 'pilates-ve-spor-studyolari-icin-uyelik-sistemi',
  nasilCalisir: ["Grup ve özel ders takvimi kontenjanla kurulur.", "Üyelik ve paket sisteme işlenir; kalan ders ve bitiş tarihi takip edilir.", "Derse katılım (yoklama) kaydedilir.", "Üyelik bitişinden önce otomatik yenileme hatırlatması gönderilir."],
  sss: [
    { s: "Kalan ders ve üyelik bitişi nasıl takip edilir?", c: "Her üyeye tanımlı paketten katıldığı ders düşer; kalan ders ve bitiş tarihi otomatik görünür, 'dersim var mıydı' sorusu biter." },
    { s: "Yenileme oranı nasıl artar?", c: "Üyelik bitişi önceden hatırlatıldığında yenileme belirgin artar; sistem bunu otomatik yapar." },
    { s: "Kontenjan yönetimi var mı?", c: "Evet; her dersin kontenjanı tanımlıdır, dolan derse yeni kayıt engellenir ve bekleme yönetilebilir." }
  ],
  sektor: 'Pilates & Spor Stüdyoları',
  urun: 'salon',
  arac: '/araclar/randevu-hatirlatma-mesaji/', aracAd: 'Randevu Hatırlatma Aracı',
  baslik: 'Pilates ve Spor Stüdyoları için Üyelik ve Ders Takip Sistemi',
  ozet: 'Ders takvimi, üyelik/paket takibi ve yoklama tek ekranda. Üyelik bitişini hatırlatarak yenilemeyi artırın.',
  giris: [
    'Pilates ve spor stüdyolarında gelir, üyeliklerin düzenli yenilenmesine bağlıdır. TEKNOPERS, ders takvimini üyelik ve paket takibiyle birleştirir.'
  ],
  sorun: [
    'Üyenin kalan ders sayısı ve üyelik bitiş tarihi elle takip edilir, karışır.',
    'Ders kontenjanı ve yoklama dağınık yönetilir.',
    'Üyelik bitişini hatırlatmayınca yenileme kaçar.'
  ],
  kiskirtma: [
    'Bitişi hatırlatılmayan üyelik sessizce sona erer; kaçan her yenileme doğrudan gelir kaybıdır. Takipsiz kontenjan hem karmaşa hem boş ders demektir.'
  ],
  cozum: [
    'Grup ve özel ders takvimi kontenjanla kurulur; yoklama alınır.',
    'Üyelik ve paket takibiyle kalan ders otomatik görünür, bitişe yaklaşınca yenileme hatırlatması gider.'
  ],
  ozellikler: [
    { b: 'Ders takvimi', a: 'Grup/özel ders ve kontenjan yönetimi.' },
    { b: 'Üyelik takibi', a: 'Kalan ders ve bitiş tarihi otomatik.' },
    { b: 'Yoklama', a: 'Derse kim geldi kaydı.' },
    { b: 'Yenileme hatırlatma', a: 'Bitişe yakın otomatik bildirim.' },
    { b: 'Otomatik hatırlatma', a: 'Ders öncesi WhatsApp/SMS.' },
    { b: 'Ödeme/cari', a: 'Üyelik ve tahsilat takibi.' }
  ],
  ctaBaslik: 'Üyelik yenilemesini kaçırmayın',
  ctaMetin: 'Pilates üyelik ve ders takip sistemini görmek için bize yazın.',
  ilgiliSorular: ['pilates-studyosu-uyelik-takip-programi', 'seans-paketi-takibi-nasil-yapilir', 'randevu-kacirma-no-show-nasil-onlenir'],
  ilgiliCozumler: ['diyetisyen-ve-danisan-takip-sistemi', 'guzellik-ve-estetik-merkezleri-icin-randevu-ve-seans-programi']
}),

c({
  slug: 'mali-musavir-ve-muhasebe-ofisleri-icin-evrak-ve-surec-takibi',
  nasilCalisir: ["Her mükellef için beyanname ve evrak süreçleri göreve bağlanır.", "Gelen-giden evrak zimmetle kayda geçer; kimde olduğu bellidir.", "Beyan ve bildirim son tarihleri otomatik hatırlatılır.", "Tamamlanan işler ve eksik evrak mükellef bazında raporlanır."],
  sss: [
    { s: "Beyanname süreleri nasıl kaçmaz?", c: "Her sürece son tarih girilir; sistem yaklaşan beyanları sorumlusuna hatırlatır, ceza doğuran gecikmeler önlenir." },
    { s: "Mükellef evrakı takibi nasıl kolaylaşır?", c: "Gelen her evrak mükellefe ve sürece bağlanır; hangi belgenin eksik olduğu tek ekranda görünür." },
    { s: "Ofis içi iş dağılımı görünür mü?", c: "Evet; hangi personelin hangi mükellefte ne işi olduğu ve yükü raporlanır, iş takibi netleşir." }
  ],
  sektor: 'Mali Müşavir & Muhasebe Ofisleri',
  urun: 'sirket',
  baslik: 'Mali Müşavir ve Muhasebe Ofisleri için Evrak ve Süreç Takip Sistemi',
  ozet: 'Yüzlerce mükellefin evrakını, beyanname takvimini ve personel görevlerini tek sistemde toplayın. Takip kişilere değil, sisteme bağlansın.',
  giris: [
    'Bir muhasebe ofisi aynı anda yüzlerce mükellefin evrakını, son ödeme tarihini ve personel görevini yönetir. Vergi ve e-belge takibi ertelenemez; tarih, evrak ve sorumluluk dağınıksa risk büyür. TEKNOPERS bu takibi kişiye değil sisteme bağlar.'
  ],
  sorun: [
    'Mükellef evrakları e-posta, WhatsApp ve kağıt arasında dağınık dolaşır; hangi belge kimden geldi, kim işledi belirsizdir.',
    'Beyanname ve ödeme son tarihleri kişilerin hafızasına bağlıdır.',
    'Personele iş atama sözlü yapılır; bir çalışan ayrıldığında o mükelleflerin süreci havada kalır.'
  ],
  kiskirtma: [
    'Vergi takibi son güne bırakıldığında tek bir gecikme bile ceza ve mükellef kaybı demektir. Takip kişilere bağlıysa, o kişi izne çıktığında ya da işten ayrıldığında süreç çöker; sorumluluğun kimde olduğu bile tartışmalı hâle gelir.'
  ],
  cozum: [
    'Her mükellef için evrak ve görevler tek panelde toplanır; kim, hangi belgeyi, ne zaman aldı ve işledi kayıt altına alınır.',
    'Personele görevler izole "Görev Atama" ekranından atanır; sözlü talimat ve WhatsApp karmaşası biter.',
    'Evrak teslimi dijital zimmetle (fotoğraf, konum, onay) belgelenir; ayrılan personelin erişimi tek tıkla kesilir.'
  ],
  ozellikler: [
    { b: 'Mükellef bazlı panel', a: 'Her mükellefin evrakı ve görevi tek yerde.' },
    { b: 'Görev atama', a: 'Personele izole, takipli iş atama; kim ne yapıyor net.' },
    { b: 'Evrak zimmeti', a: 'Belge teslimi fotoğraf + konum + onayla kayda geçer.' },
    { b: 'Takip disiplini', a: 'Sorumluluk kişiye değil sisteme bağlanır.' },
    { b: 'Erişim kontrolü', a: 'Ayrılan personelin erişimi anında kesilir.' },
    { b: 'İz kaydı', a: 'Her belge ve görev hareketi loglanır.' }
  ],
  ctaBaslik: 'Muhasebe takibini sisteme bağlayın',
  ctaMetin: 'Evrak, görev ve süreç takibini görmek için bize yazın.',
  ilgiliSorular: ['vergi-ve-e-belge-takibi-nasil-yapilir', 'on-muhasebede-takip-disiplini-nasil-saglanir', 'mukellef-evrak-takibi-nasil-yapilir'],
  ilgiliCozumler: ['hukuk-burolari-icin-gorev-atama-ve-evrak-zimmet-sistemi', 'uretim-ve-toptan-icin-teklif-cari-ve-stok-yonetimi']
})
,

c({
  slug: 'otel-restoran-ve-kafeler-icin-personel-ve-vardiya-takibi',
  nasilCalisir: ["Yoğun ve sakin saatlere göre vardiya çizelgesi kurulur.", "Personel konum doğrulamalı giriş-çıkış yapar; part-time saatler net tutulur.", "Kapsama açığı (boş kalan vardiya) yöneticiye görünür.", "Fazla mesai ve hakediş otomatik hesaplanır, bordroya baz olur."],
  sss: [
    { s: "Part-time ve düzensiz vardiya nasıl takip edilir?", c: "Her personelin fiilî giriş-çıkışı konumla kaydedilir; part-time çalışanın saati net çıkar, eksik/fazla ödeme olmaz." },
    { s: "Yoğun saatlerde yeterli personel var mı, nasıl görülür?", c: "Vardiya çizelgesi her öğün için kapsamayı gösterir; açık kalan saat önceden fark edilir ve yedeklenir." },
    { s: "Bahşiş ve prim dağıtımı yapılabilir mi?", c: "Ciro ve personel kaydı tutulduğundan prim/bahşiş dağıtımı adil ve şeffaf yapılabilir." }
  ],
  sektor: 'Otel, Restoran & Kafe',
  urun: 'sirket',
  arac: '/araclar/puantaj-cetveli/', aracAd: 'Puantaj Cetveli Aracı',
  baslik: 'Otel, Restoran ve Kafeler için Personel ve Vardiya Takibi',
  ozet: 'Yoğun ve değişken vardiyalarda personel giriş-çıkışını konumla teyit edin; fazla mesai ve part-time saatleri otomatik hesaplayın.',
  giris: [
    'Otel, restoran ve kafelerde personel değişken vardiyalarla, çoğu zaman part-time çalışır. TEKNOPERS, giriş-çıkışı telefondan konum doğrulamayla kaydeder ve vardiya-fazla mesai hesabını otomatikleştirir.'
  ],
  sorun: [
    'Yoğun serviste kim kaçta geldi, kaçta çıktı takip edilemez.',
    'Part-time ve tam zamanlı karışır; saatler elle toplanır.',
    'Gece ve fazla mesai hesabı hataya açıktır.'
  ],
  kiskirtma: [
    'Elle tutulan mesai, hem eksik/fazla ödeme hem personel ihtilafı demektir. Yoğun dönemde bordro Excel hatalarıyla dolar.'
  ],
  cozum: [
    'Vardiyalar tanımlanır; personel işbaşında telefondan giriş yapar, konum ve saat kaydedilir.',
    'Part-time saat bazında, tam zamanlı gün bazında otomatik hesaplanır; fazla mesai ve gece çalışması eklenir.'
  ],
  ozellikler: [
    { b: 'Konumlu giriş', a: 'Personel işbaşında telefondan GPS ile giriş yapar.' },
    { b: 'Vardiya yönetimi', a: 'Sabah/akşam/gece çizelgesi ve kişi ihtiyacı.' },
    { b: 'Part-time saat', a: 'Saatlik çalışan otomatik hesaplanır.' },
    { b: 'Fazla mesai & gece', a: 'Zamlı ücretler otomatik işlenir.' },
    { b: 'Cihazsız', a: 'Sabit cihaz yok; telefon yeter.' },
    { b: 'Hatasız bordro', a: 'Ay sonu hakediş Excel hatası olmadan.' }
  ],
  ctaBaslik: 'Serviste kaybolmayan mesai takibi',
  ctaMetin: 'Otel/restoran personel ve vardiya sistemini görmek için bize yazın.',
  ilgiliSorular: ['restoran-personeli-vardiya-takibi-nasil-yapilir', 'part-time-personel-mesai-takibi-nasil-yapilir', 'vardiya-plani-nasil-yapilir'],
  ilgiliCozumler: ['market-ve-perakende-icin-stok-ve-personel-yonetimi', 'temizlik-sirketleri-icin-mobil-pdks-ve-saha-takibi']
}),

c({
  slug: 'nakliye-kargo-ve-filo-icin-saha-personel-ve-arac-zimmet-takibi',
  nasilCalisir: ["Şoför ve saha personeli konum doğrulamalı mesai başlatır.", "Her araç bir şoföre zimmetle bağlanır; kilometre ve teslim kaydı tutulur.", "Fazla mesai ve saha süresi otomatik puantaja işlenir.", "Araç iade, hasar ve yakıt anlaşmazlıkları zimmet kaydıyla çözülür."],
  sss: [
    { s: "Şoförün sahada olduğu nasıl doğrulanır?", c: "Konumlu mesai başlatma, şoförün nerede ve ne zaman çalışmaya başladığını gösterir; denetlenemeyen mesai sorunu biter." },
    { s: "Araç kimde, hasar kime ait bilinir mi?", c: "Her araç şoföre zimmetle kayıtlıdır; teslim ve iade tarihiyle görünür, hasar ve yakıt sorumluluğu netleşir." },
    { s: "Filo büyükse yönetilebilir mi?", c: "Evet; araç ve personel sayısı arttıkça da her aracın kimde olduğu ve durumu tek ekranda takip edilir." }
  ],
  sektor: 'Nakliye, Kargo & Filo',
  urun: 'sirket',
  arac: '/araclar/puantaj-cetveli/', aracAd: 'Puantaj Cetveli Aracı',
  baslik: 'Nakliye, Kargo ve Filo için Saha Personel ve Araç Zimmet Takibi',
  ozet: 'Şoför ve saha personelini konumla takip edin, araç ve ekipman zimmetini fotoğraflı kayıt altına alın.',
  giris: [
    'Nakliye ve kargoda ekip sürekli hareket hâlindedir ve araçlar personele zimmetlidir. TEKNOPERS, hem konumlu personel takibini hem araç zimmetini tek sistemde birleştirir.'
  ],
  sorun: [
    'Şoför ve saha personelinin nerede, kaçta işbaşı yaptığı görünmez.',
    'Araçların kime, hangi km\'de ve durumda teslim edildiği kayıtlı değildir.'
  ],
  kiskirtma: [
    'Konumsuz takip, denetlenemeyen mesai ve hakediş ihtilafı demektir. Zimmeti tutulmayan araç; hasar, yakıt ve iade anlaşmazlığına yol açar.'
  ],
  cozum: [
    'Personel işbaşında ve teslimat noktasında telefondan konum bildirir; görev ve saat kaydedilir.',
    'Araçlar plakayla zimmetlenir: teslim km\'si, fotoğrafı ve onayı kayda geçer, iade karşılaştırılır.'
  ],
  ozellikler: [
    { b: 'Konumlu takip', a: 'Şoför/saha personeli GPS ile teyit edilir.' },
    { b: 'Araç zimmeti', a: 'Plaka, km ve durum fotoğrafla kayda geçer.' },
    { b: 'Teslimat kaydı', a: 'Hangi görev, kaçta yapıldı görünür.' },
    { b: 'İade takibi', a: 'Araç iade km ve durumu karşılaştırılır.' },
    { b: 'Mesai & fazla çalışma', a: 'Otomatik hesaplanır.' },
    { b: 'Cihazsız', a: 'Ek donanım yok; telefon yeter.' }
  ],
  ctaBaslik: 'Sahayı ve filoyu tek panelden yönetin',
  ctaMetin: 'Nakliye personel ve araç zimmet sistemini görmek için bize yazın.',
  ilgiliSorular: ['sofor-ve-saha-personeli-nasil-takip-edilir', 'arac-zimmet-takibi-nasil-yapilir', 'gps-ile-personel-giris-cikis-takibi-nasil-yapilir'],
  ilgiliCozumler: ['isletmeler-icin-ekipman-ve-evrak-zimmet-takibi', 'temizlik-sirketleri-icin-mobil-pdks-ve-saha-takibi']
}),

c({
  slug: 'market-ve-perakende-icin-stok-ve-personel-yonetimi',
  nasilCalisir: ["Ürünler barkodla tanımlanır; stok giriş-çıkışı okutmayla yapılır.", "Kritik seviyenin altına düşen ürün otomatik sipariş uyarısı verir.", "Personel vardiya ve kasa devri kaydedilir.", "Stok farkı, kasa ve personel raporları gün sonunda hazır olur."],
  sss: [
    { s: "Raf boşalmadan sipariş nasıl verilir?", c: "Kritik stok seviyesi tanımlanır; ürün bu seviyeye inince sistem uyarır, böylece popüler ürün rafta bitmez." },
    { s: "Kasa ve vardiya devri nasıl takip edilir?", c: "Her vardiyada kasa açılış-kapanışı kaydedilir; açık/fazla net görünür ve sorumluluk vardiyaya bağlanır." },
    { s: "Küçük markette barkod pahalı değil mi?", c: "Personelin telefonu barkod okuyucu olarak çalışır; ek donanım gerekmediğinden maliyet düşüktür." }
  ],
  sektor: 'Market & Perakende',
  urun: 'sirket',
  baslik: 'Market ve Perakende için Stok ve Personel Yönetimi',
  ozet: 'Barkodlu stok, kritik seviye uyarısı, kasa gün sonu ve vardiya bazlı personel takibi tek ekranda.',
  giris: [
    'Market ve perakende işletmesinde çok sayıda ürün, kasa hareketi ve vardiyalı personel bir aradadır. TEKNOPERS, barkodlu stoğu, kasayı ve personel takibini tek sistemde toplar.'
  ],
  sorun: [
    'Yüzlerce ürünün girişi-çıkışı elle takip edilemez; kaçak ve raf boşluğu fark edilmez.',
    'Kasa açığı ve vardiya karmaşası gizli zarardır.'
  ],
  kiskirtma: [
    'Takipsiz stok, dönem sonunda açıklanamayan farklar demektir. Kasa ve vardiya kontrolsüzse, kayıp nereden çıktığı bile bilinmez.'
  ],
  cozum: [
    'Ürünler barkodla saniyede satılır/girer; stok anlık güncellenir, kritik seviye uyarısı verir.',
    'Kasa gün sonu nakit/kart ayrımıyla raporlanır; personel vardiya bazlı takip edilir.'
  ],
  ozellikler: [
    { b: 'Barkodlu stok', a: 'Hızlı satış ve giriş, anlık kalan miktar.' },
    { b: 'Kritik stok uyarısı', a: 'Biten ürün zamanında sipariş edilir.' },
    { b: 'Kasa gün sonu', a: 'Nakit/kart ayrımı ve fiili kasa karşılaştırması.' },
    { b: 'Vardiya takibi', a: 'Personel giriş-çıkış ve fazla mesai.' },
    { b: 'Kolay sayım', a: 'Barkodla fiili stok karşılaştırılır.' },
    { b: 'Raporlar', a: 'Ciro, ödeme türü ve stok tek bakışta.' }
  ],
  ctaBaslik: 'Stok ve kasayı kontrol altına alın',
  ctaMetin: 'Market/perakende stok ve personel sistemini görmek için bize yazın.',
  ilgiliSorular: ['markette-stok-takibi-nasil-yapilir', 'perakende-kasa-ve-vardiya-nasil-yonetilir', 'barkod-ile-stok-takibi-nasil-yapilir'],
  ilgiliCozumler: ['depo-ve-lojistik-icin-stok-ve-demirbas-zimmet-yonetimi', 'otel-restoran-ve-kafeler-icin-personel-ve-vardiya-takibi']
}),

c({
  slug: 'atolye-ve-orta-olcekli-uretim-icin-mesai-ve-vardiya-takibi',
  nasilCalisir: ["Vardiya çizelgesi istasyon ve hat bazında kurulur.", "Personel konum doğrulamalı giriş yapar; hangi istasyonda çalıştığı kaydolur.", "Vardiya, fazla mesai ve taşeron hakedişi otomatik hesaplanır.", "İstasyon bazlı çalışma ve verim raporlanır, bordroya baz olur."],
  sss: [
    { s: "50-200 kişilik atölyede mesai nasıl takip edilir?", c: "Personel telefonundan konumlu giriş yapar; pahalı biyometrik cihaza gerek kalmadan vardiya ve fazla mesai otomatik hesaplanır." },
    { s: "Hangi istasyonda kim çalıştı görülür mü?", c: "Evet; giriş istasyona bağlandığından üretim içindeki dağılım ve verim tek ekranda görünür." },
    { s: "Taşeron hakedişi ayrışır mı?", c: "Taşeron ve ekip bazlı puantaj otomatik oluşur; her ekibin hakedişi ayrı çıkar ve SGK günleriyle karşılaştırılır." }
  ],
  sektor: 'Atölye & Orta Ölçekli Üretim',
  urun: 'sirket',
  arac: '/araclar/puantaj-cetveli/', aracAd: 'Puantaj Cetveli Aracı',
  baslik: 'Atölye ve Orta Ölçekli Üretim için Mesai ve Vardiya Takibi',
  ozet: '50-200 personelli atölye ve üretim tesisleri için cihazsız, KVKK uyumlu konum doğrulamalı mesai takibi. Kart hilesine kapalı, çok istasyonlu.',
  giris: [
    '50 ile 200 arası personel çalıştıran atölyeler ve orta ölçekli üretim tesisleri, büyük fabrika bütçesi olmadan aynı yasal ve operasyonel risklerle karşılaşır. TEKNOPERS, bu ölçek için donanımsız, konum doğrulamalı bir mesai takibi sunar.'
  ],
  sorun: [
    'Çok istasyonlu üretimde personel farklı noktalarda çalışır; giriş-çıkış ve dağılım takip edilemez.',
    'Bu ölçekte biyometrik cihaz pahalı ve KVKK açısından riskli, kart sistemi ise suistimale açıktır.',
    'Vardiya, taşeron ve fazla mesai elle hesaplandığında hata ve ihtilaf çıkar.'
  ],
  kiskirtma: [
    'Orta ölçekli üretimde her ay elle tutulan mesai; eksik/fazla ödeme, hakediş tartışması ve olası davada delilsizlik demektir. Pahalı biyometrik cihaza yatırım yapmak ise hem bütçe hem KVKK riskidir.'
  ],
  cozum: [
    'Üretim bölüm ve istasyonlara ayrılır; personel çalıştığı noktada telefondan konum doğrulamalı giriş yapar.',
    '"Cihaz Bağı" ile kart hilesi engellenir; vardiya, taşeron bazlı hakediş ve fazla mesai otomatik hesaplanır, bordroya baz olur.'
  ],
  ozellikler: [
    { b: 'Sıfır donanım', a: '50-200 kişilik tesiste cihaz alma/bakım maliyeti yok.' },
    { b: 'KVKK dostu', a: 'Biyometrik veri işlemez; ceza riski taşımaz.' },
    { b: 'Cihaz Bağı kilidi', a: 'Kart/telefon hilesi teknik olarak engellenir.' },
    { b: 'İstasyon bazlı takip', a: 'Kim, hangi bölümde çalıştı görünür.' },
    { b: 'Taşeron & vardiya', a: 'Taşeron bazlı hakediş ve vardiya tek ekranda.' },
    { b: 'Otomatik bordro', a: 'Ay sonu hakediş Excel hatası olmadan.' }
  ],
  ctaBaslik: 'Fabrika bütçesi olmadan fabrika disiplinі',
  ctaMetin: 'Atölye ve orta ölçekli üretim için cihazsız PDKS demosu için bize yazın.',
  ilgiliSorular: ['50-200-personelli-atolyede-mesai-takibi-nasil-yapilir', 'cok-istasyonlu-uretimde-personel-takibi-nasil-yapilir', '150-personelli-fabrikada-mesai-nasil-takip-edilir'],
  ilgiliCozumler: ['fabrika-icin-cihazsiz-pdks-ve-personel-takibi', 'insaat-santiyeleri-icin-personel-taseron-ve-zimmet-takibi']
})

];

module.exports = { COZUMLER: COZUMLER, URUN: U };
