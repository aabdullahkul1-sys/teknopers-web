/**
 * cevaplar.js — TEKNOPERS · MANUEL (elle yazılmış) CEVAPLAR
 * ==============================================================================
 * Bir sorunun slug'ına buraya cevap yazarsan, o sayfa AI'a GİTMEZ — senin metnin
 * basılır. Buraya yazmadığın sorular AI ile üretilir (anahtar varsa) ya da boş kalır.
 *
 * BİÇİM (lib/seo-motor.js HTML'e çevirir):
 *   • Boş satır = paragraf   • **kalın** = vurgu
 *   • Satır başında "1. " = numaralı liste   • "- " = madde   • "## " = ara başlık
 * SLUG, sorular.js'teki ile birebir aynı olmalı.
 *
 * NOT: Aşağıdaki rakamlar 2026 içindir (kıdem tavanı Temmuz 2026 dönemi). Oranlar
 * her yıl/dönem değişir; güncellenmesi gereken yerler **kalın** yazıldı.
 */
'use strict';

var CEVAPLAR = {

'kidem-tazminati-nasil-hesaplanir':
`Kıdem tazminatı, aynı işverene bağlı en az **1 yıl** çalışmış bir işçiye, iş sözleşmesi kanunda sayılan hâllerde sona erdiğinde ödenir. Her **tam çalışma yılı** için **30 günlük giydirilmiş brüt ücret** tutarındadır (1475 sayılı İş Kanunu m.14, hâlen yürürlükte).

## Nasıl hesaplanır?

1. **Çalışma süresini** bul: işe giriş ile çıkış arasındaki toplam süre (tam yıl + artık günler).
2. **Giydirilmiş brüt ücreti** belirle: çıplak brüt maaşa düzenli yan haklar (yol, yemek, ikramiye) eklenmiş hâli.
3. **Formül:** (giydirilmiş brüt ücret ÷ 365) × toplam çalışma günü. Yani her tam yıl için bir aylık brüt, artık günler için oransal.

## 2026 tavanı ve vergi

Kıdeme esas ücretin bir **üst sınırı (tavan)** vardır; ücret bunu aşsa da hesap tavandan yapılır. **1 Temmuz – 31 Aralık 2026 dönemi için tavan 73.729,87 TL**'dir (belirleyici, sözleşmenin sona erdiği tarih). Kıdem tazminatından yalnızca **damga vergisi** (binde 7,59) kesilir; gelir vergisi ve SGK primi kesilmez.

Kendi durumun için saniyeler içinde hesaplamak istersen aşağıdaki aracı kullan. Bağlayıcı hesap için mali müşavirinize (SMMM) danışın; oranlar değişebilir.`,

'2026-kidem-tazminati-tavani-ne-kadar':
`**2026 yılının ikinci yarısı (1 Temmuz – 31 Aralık 2026) için kıdem tazminatı tavanı 73.729,87 TL**'dir. Yılın ilk yarısında (1 Ocak – 30 Haziran 2026) tavan **64.948,77 TL** idi.

## Tavan ne işe yarar?

Kıdem tazminatı, her tam yıl için 30 günlük giydirilmiş brüt ücret üzerinden hesaplanır. Ancak bu ücretin bir üst sınırı vardır: işçinin ücreti tavandan yüksek olsa bile, hesap **tavan tutarı** üzerinden yapılır.

## Bilinmesi gerekenler

1. Tavan her yıl **Ocak ve Temmuz** aylarında güncellenir.
2. Hangi tavanın geçerli olacağını **iş sözleşmesinin sona erdiği tarih** belirler (ödeme tarihi değil).
3. Ücreti tavanın altında olan işçilerde tavan devreye girmez; hesap gerçek ücret üzerinden yapılır.

Güncel tutarla kendi hesabını yapmak için aşağıdaki aracı kullanabilirsin. Kesin hesap için mali müşavirinize (SMMM) danışın.`,

'yillik-izin-nasil-hesaplanir':
`Yıllık ücretli izin, işyerinde en az **1 yılını** dolduran her çalışanın hakkıdır ve süresi **kıdeme göre** belirlenir (4857 sayılı İş Kanunu m.53).

## Kıdeme göre izin süreleri

1. **1 – 5 yıl** arası (5 dahil): yılda **14 gün**
2. **5 – 15 yıl** arası: yılda **20 gün**
3. **15 yıl ve üzeri**: yılda **26 gün**

18 yaşından küçük ve 50 yaşından büyük çalışanlarda izin, kıdemi ne olursa olsun **20 günden az olamaz**. Bu süreler yasal alt sınırdır; sözleşmeyle artırılabilir.

## İzin ücreti ve kullanım

İzin ücreti, çalışanın brüt ücreti üzerinden **(brüt aylık ÷ 30) × izin günü** olarak hesaplanır ve izne çıkmadan önce peşin ödenir. İzin bölünerek kullanılabilir, ancak bir parçası **10 günden az olamaz**. İşten ayrılırken kullanılmayan izinler ücret olarak ödenir.

Kalan izin gününü ve ücretini hesaplamak için aşağıdaki aracı kullan. Ayrıntı için mali müşavirinize (SMMM) danışın.`,

'yillik-izin-kac-gun':
`Yıllık izin süresi çalışanın **kıdemine** göre değişir (4857 sayılı İş Kanunu m.53):

1. **1 – 5 yıl** arası çalışanlar: **14 gün**
2. **5 – 15 yıl** arası çalışanlar: **20 gün**
3. **15 yıl ve üzeri** çalışanlar: **26 gün**

## Önemli kurallar

- İzne hak kazanmak için işyerinde en az **1 yıl** çalışmış olmak gerekir.
- **18 yaşından küçük** ve **50 yaşından büyük** çalışanların izni 20 günden az olamaz.
- Bu süreler yasal alt sınırdır; iş sözleşmesi veya toplu sözleşmeyle artırılabilir, azaltılamaz.
- Ulusal bayram ve genel tatil günleri izin süresinden **sayılmaz**.

Kendi kıdemine göre gününü görmek için aşağıdaki hesaplama aracını kullanabilirsin.`,

'10-gun-yillik-izin-ucreti-nasil-hesaplanir':
`10 günlük yıllık izin ücreti şu formülle bulunur: **(brüt aylık ücret ÷ 30) × 10**.

## Örnek hesap

Brüt aylık ücreti 33.030 TL olan bir çalışan için:
- Günlük brüt ücret: 33.030 ÷ 30 = **1.101 TL**
- 10 günlük izin ücreti: 1.101 × 10 = **11.010 TL (brüt)**

## Bilinmesi gerekenler

1. İzin ücreti, çalışanın **izne çıktığı dönemdeki** brüt ücreti üzerinden hesaplanır.
2. Bu tutar, çalışan izne **çıkmadan önce peşin** ödenmelidir (4857 m.57).
3. Ücretten yasal kesintiler (SGK, gelir vergisi) normal maaşta olduğu gibi yapılır; izin ücreti ek bir vergi doğurmaz, normal ücretin bir parçasıdır.

Kendi ücretine göre hesaplamak için aşağıdaki aracı kullan. Kesin bordro için mali müşavirinize (SMMM) danışın.`,

'ihbar-tazminati-kac-gun':
`İhbar (bildirim) süresi, çalışanın **kıdemine** göre belirlenir (4857 sayılı İş Kanunu m.17):

1. **6 aydan az** çalışan: **2 hafta**
2. **6 ay – 1,5 yıl** arası: **4 hafta**
3. **1,5 – 3 yıl** arası: **6 hafta**
4. **3 yıldan fazla** çalışan: **8 hafta**

## İhbar süresi ile tazminat ilişkisi

Bu süreler, taraflardan biri sözleşmeyi feshedeceğinde diğerine **önceden haber verme** süresidir. İşveren bu süreye uymadan işçiyi çıkarırsa, süre kadar **ihbar tazminatı** öder. Aynı şekilde işçi haber vermeden işi bırakırsa işverene ihbar tazminatı ödemekle yükümlü olabilir.

Bu süreler sözleşmeyle **artırılabilir** ama azaltılamaz.

İhbar tazminatının TL karşılığını hesaplamak için aşağıdaki aracı kullanabilirsin.`,

'ihbar-tazminati-nasil-hesaplanir':
`İhbar tazminatı, kıdeme göre belirlenen **bildirim süresi kadar** giydirilmiş brüt ücrettir. Formül: **önel süresi (gün) × günlük giydirilmiş brüt ücret**.

## Kıdeme göre önel süreleri

1. 6 aydan az: 2 hafta (14 gün)
2. 6 ay – 1,5 yıl: 4 hafta (28 gün)
3. 1,5 – 3 yıl: 6 hafta (42 gün)
4. 3 yıldan fazla: 8 hafta (56 gün)

## Örnek

3 yıldan fazla kıdemi olan, günlük giydirilmiş brüt ücreti 1.500 TL olan bir işçi için: 56 gün × 1.500 = **84.000 TL (brüt)**.

## Kıdem tazminatından farkı

İhbar tazminatından **gelir vergisi ve damga vergisi** kesilir. Kıdem tazminatında ise sadece damga vergisi kesilir; işte bu, iki tazminat arasındaki en önemli farktır.

Kendi durumun için hesaplamak istersen aşağıdaki aracı kullan. Kesin hesap için mali müşavirinize (SMMM) danışın.`,

'fazla-mesai-ucreti-nasil-hesaplanir':
`Fazla mesai (fazla çalışma), haftalık **45 saati aşan** çalışmadır ve her saati için normal saatlik ücretin **%50 fazlası** (1,5 katı) ödenir (4857 sayılı İş Kanunu m.41).

## Nasıl hesaplanır?

1. **Normal saatlik ücreti** bul: aylık brüt ücret ÷ 225. (225 = 30 gün × 7,5 saat)
2. **Fazla mesai saat ücreti:** normal saatlik ücret × 1,5.
3. **Toplam:** fazla mesai saat ücreti × yapılan fazla saat.

## Örnek

Aylık brüt ücreti 33.030 TL olan bir çalışan için:
- Normal saatlik ücret: 33.030 ÷ 225 = **146,80 TL**
- Fazla mesai saati: 146,80 × 1,5 = **220,20 TL**
- 10 saat fazla mesai: 220,20 × 10 = **2.202 TL (brüt)**

## Kurallar

- Yıllık fazla çalışma **270 saati** aşamaz.
- Fazla çalışma için işçinin **onayı** gerekir.
- İşçi, zamlı ücret yerine her fazla saat için **1,5 saat serbest zaman** kullanmayı seçebilir.

Kendi rakamını hesaplamak için aşağıdaki aracı kullan. Kesin bordro için mali müşavirinize (SMMM) danışın.`,

'fazla-mesai-saatlik-ucret-nasil-bulunur':
`Fazla mesainin saatlik ücreti, **normal saatlik ücretin 1,5 katıdır**. Önce normal saatlik ücreti bulman gerekir: **aylık brüt ücret ÷ 225**.

## Adım adım

1. Aylık brüt ücreti al.
2. 225'e böl → normal saatlik ücret. (225 sayısı, ayda 30 gün × günde 7,5 saatten gelir.)
3. Sonucu 1,5 ile çarp → fazla mesai saat ücreti.

## Örnek

Aylık brüt 33.030 TL ise:
- Normal saatlik: 33.030 ÷ 225 = **146,80 TL**
- Fazla mesai saati: 146,80 × 1,5 = **220,20 TL**

Not: Haftalık çalışma süresi sözleşmeyle 45 saatin altında belirlendiyse, 45 saate kadar olan ek çalışma "fazla sürelerle çalışma" sayılır ve **1,25 katı** ödenir; 45 saati aşan kısım ise 1,5 kattır.

Farklı ücretler için otomatik hesaplamak istersen aşağıdaki aracı kullanabilirsin.`,

'fazla-mesai-yillik-siniri-kac-saat':
`Bir işçiye yılda en fazla **270 saat** fazla mesai yaptırılabilir (4857 sayılı İş Kanunu m.41).

## Sınır hakkında bilinmesi gerekenler

1. Bu sınır **kişi başınadır** ve bir takvim yılını kapsar.
2. Sınırın aşılması, işçinin fazla çalışma **ücretini almasını engellemez** — yani 270 saati aşan çalışma da ücretlendirilir; sınır işvereni bağlayan bir üst kuraldır.
3. Fazla çalışma yaptırmak için her yıl işçinin **yazılı onayı** alınmalıdır.
4. **Fazla sürelerle çalışma** (haftalık 45 saatin altında kararlaştırılan sürenin üstü) bu 270 saatlik sınıra dahil değildir; ayrı değerlendirilir.

Sağlık nedeniyle bazı işlerde ve gece çalışmasında ek sınırlamalar bulunur.

Fazla mesai ücretini hesaplamak için aşağıdaki aracı kullanabilirsin.`,

'resmi-tatilde-calisan-iscinin-ucreti-nasil-hesaplanir':
`Ulusal bayram ve genel tatil (resmî tatil) günlerinde çalışma zorunlu değildir. İşçi **çalışmasa da** o günün ücreti tam ödenir. **Çalışırsa**, çalıştığı her gün için **bir günlük ücreti daha** ödenir (2429 sayılı Kanun ve 4857 m.47).

## Yani nasıl hesaplanır?

1. Resmî tatilde çalışılmazsa: o gün için **1 günlük ücret** (zaten ödenir).
2. Resmî tatilde çalışılırsa: normal 1 günlük ücrete ek olarak **1 günlük ücret daha** → o gün için toplam **2 yevmiye**.

## Örnek

Günlük brüt ücreti 1.101 TL olan bir işçi resmî tatilde çalışırsa, o gün için: 1.101 + 1.101 = **2.202 TL (brüt)** hak eder.

## Not

Resmî tatil çalışması, haftalık 45 saati aşıyorsa ayrıca fazla çalışma hükümleri de gündeme gelebilir. Bu durumların kesin hesabı için mali müşavirinize (SMMM) danışın.

Hangi günlerin resmî tatil olduğunu görmek için aşağıdaki takvim aracını kullanabilirsin.`,

'hafta-tatili-ucreti-nasil-hesaplanir':
`İşçi, yedi günlük bir zaman dilimi içinde kesintisiz en az **24 saat** hafta tatili hakkına sahiptir. İşçi bu günde **çalışmasa bile** bir günlük ücreti tam olarak ödenir (4857 sayılı İş Kanunu m.46).

## Hafta tatilinde çalışılırsa

Hafta tatili genellikle haftalık 45 saatlik çalışmanın tamamlanmasının ardından gelir. Bu nedenle hafta tatilinde yapılan çalışma çoğu durumda **fazla çalışma** sayılır ve saati **%50 zamlı** (1,5 katı) ödenir. Ayrıca hak edilen bir günlük tatil ücreti de korunur.

## Özet

1. Çalışılmayan hafta tatili: **1 günlük ücret** (peşin hak).
2. Çalışılan hafta tatili: tatil ücretine ek olarak, çalışılan saatler **fazla çalışma** olarak 1,5 kat ödenir.

Bu durumun kesin hesabı, haftalık toplam çalışma süresine bağlı olduğundan mali müşavirinize (SMMM) danışmanız önerilir. Fazla mesai tutarını hesaplamak için aşağıdaki aracı kullanabilirsin.`,

'asgari-ucretin-isverene-maliyeti-2026':
`2026 yılında asgari ücret **brüt 33.030 TL**, net **28.075,50 TL**'dir. Ancak işverene maliyeti nettten yüksektir; çünkü brüt ücrete ek olarak **işveren SGK ve işsizlik sigortası payları** eklenir.

## Maliyet nasıl oluşur?

1. **Brüt ücret:** 33.030 TL
2. **İşveren SGK payı:** brütün yaklaşık %20,5'i (düzenli ödeme yapan işverenlerde 5 puanlık indirimle ~%15,5)
3. **İşveren işsizlik sigortası payı:** brütün %2'si

## Yaklaşık toplam

5 puanlık indirim uygulanan bir işverende asgari ücretin aylık toplam maliyeti **yaklaşık 38.800 TL** civarındadır. İndirim uygulanmadığında bu tutar daha yüksek olur.

Kesin rakam; teşviklere, indirimlere ve işçinin durumuna göre değişir. Net maliyeti kendi işletmen için görmek istersen aşağıdaki aracı kullan; bağlayıcı hesap için mali müşavirinize (SMMM) danışın.`,

'puantaj-nasil-tutulur':
`Puantaj, her personelin **gün gün çalışma durumunun** kaydıdır: tam gün mü çalıştı, yarım gün mü, izinli mi, raporlu mu, fazla mesai yaptı mı? Ay sonunda bu kayıtlar toplanır ve **bordronun (maaş hesabının) temeli** olur.

## Nasıl tutulur?

1. **Personel listesini** hazırla.
2. Her gün, her personelin durumunu işaretle: çalıştı / izinli / raporlu / devamsız / resmî tatil.
3. **Giriş-çıkış saatlerini** ve varsa **fazla mesaiyi** yaz.
4. Eksik günleri ve geç kalmaları not et.
5. Ay sonunda toplamları çıkar → hak edilen ücret, kesintiler ve fazla mesai netleşir.

## Neden önemli?

Doğru puantaj, **doğru maaş** demektir. Yanlış tutulan puantaj, eksik/fazla ödemeye ve işçiyle anlaşmazlığa yol açar. Ayrıca olası bir iş davasında **kanıt** niteliği taşır.

Eskiden kağıt veya Excel ile tutulurdu; bugün **GPS'li dijital puantaj** ile personel kendi telefonundan konum doğrulamalı giriş yapıyor, cetvel otomatik doluyor. Hazır bir puantaj cetveli için aşağıdaki aracı kullanabilirsin.`,

'randevu-kacirma-no-show-nasil-onlenir':
`"No-show", müşterinin randevusuna **haber vermeden gelmemesidir**. Boş kalan koltuk doğrudan kayıp gelir demektir. Birkaç basit yöntemle no-show oranı ciddi biçimde düşürülebilir.

## Etkili yöntemler

1. **Otomatik hatırlatma gönder:** randevudan 24 saat önce SMS veya WhatsApp ile hatırlatma, en güçlü önlemdir.
2. **Onay iste:** müşteriden "geliyorum" teyidi al; teyit vermeyen randevuları serbest bırak.
3. **Kapora / ön ödeme:** özellikle uzun veya pahalı işlemlerde küçük bir ön ödeme, gelmeme oranını düşürür.
4. **No-show geçmişini tut:** sürekli gelmeyen müşterileri işaretle, onlara ön ödemeli randevu uygula.
5. **Bekleme listesi oluştur:** iptal olan slotu listedeki başka müşteriye anında öner.

## Sonuç

Otomatik hatırlatma + onay sistemi çoğu işletmede no-show'u belirgin biçimde azaltır ve takvimin dolu kalmasını sağlar.

Hazır hatırlatma mesajı şablonları oluşturmak için aşağıdaki aracı kullanabilirsin.`,

'puantaj-cetveli-nasil-hazirlanir':
`Puantaj cetveli, bir ay boyunca her personelin gün gün çalışma durumunu gösteren tablodur. Satırlarda personel adları, sütunlarda ayın günleri yer alır; her hücreye o günün durumu işlenir.

## Nasıl hazırlanır?

1. Üst kısma **ay/yıl ve işyeri** bilgisini yaz.
2. Sol sütuna **personel adlarını** sırala.
3. Üst satıra **1'den ay sonuna** günleri diz.
4. Her güne bir kod işle: T (tam), Y (yarım), İ (izinli), R (raporlu), X (devamsız), FM (fazla mesai saati).
5. Sağ tarafta **toplamları** al: çalışılan gün, fazla mesai, eksik gün.
6. Ay sonunda **imza/onay** bölümü ekle.

Bu toplamlar bordronun temelidir. Hazır ve otomatik dolan bir cetvel için aşağıdaki aracı kullanabilirsin.`,

'excel-ile-puantaj-nasil-yapilir':
`Excel'de puantaj; satırlara personel, sütunlara ayın günleri konularak ve her güne bir durum kodu yazılarak yapılır. Toplamlar TOPLA/EĞERSAY formülleriyle otomatik alınır.

## Adımlar

1. A sütununa personel adları, 1. satıra günleri (1-31) yaz.
2. Her hücreye kod gir (1 = tam gün, 0,5 = yarım, İ, R gibi).
3. Yan sütunda **=TOPLA()** ile çalışılan günü hesapla.
4. Fazla mesai için ayrı bir sütun tut.

Excel esnektir ama hata payı yüksektir, konum doğrulaması yoktur ve saha ekibinde telefonla giriş için uygun değildir. Ekip büyüdükçe GPS'li dijital puantaj daha güvenlidir. Hazır bir şablon için aşağıdaki aracı kullanabilirsin.`,

'puantaj-programi-nasil-secilir':
`İyi bir puantaj programında şunlar olmalı: telefondan konum doğrulamalı giriş, fazla mesai/izin/rapor takibi, otomatik ay sonu raporu ve bordroya doğrudan baz olacak veri.

## Seçerken bak

1. **Cihaz gerektiriyor mu?** Modern çözümlerde telefon yeterlidir, PDKS cihazı şart değildir.
2. **Konum (GPS) doğrulaması** var mı? Saha ekipleri için kritiktir.
3. Fazla mesai ve izinleri **otomatik** hesaplıyor mu?
4. Rapor PDF/Excel olarak alınabiliyor mu?
5. **Fiyat** kişi başı mı, sabit mi?

TEKNOPERS cihazsız, GPS'li ve sabit fiyatlıdır; yüz okuma veya kartlı cihazlara alternatiftir. Denemek için WhatsApp'tan yazabilirsin.`,

'saha-personeli-nasil-takip-edilir':
`Saha personeli ofis dışında çalıştığı için en pratik yöntem, telefondan **konum doğrulamalı giriş-çıkış**tır. Personel işe başlarken ve biterken telefonundan butona basar; sistem konumu ve saati kaydeder.

## Yöntemler

1. **GPS'li mobil giriş** (en yaygın, cihaz gerekmez).
2. Şantiye/lokasyon bazlı gruplama.
3. Anlık "kim, nerede" görünümü.
4. Fazla mesai ve devamsızlık otomatik hesaplanır.

Kağıt imza föyü ve telefonla arama yöntemleri hataya ve suistimale açıktır. TEKNOPERS, saha ekipleri için bu takibi cihazsız ve tek ekranda sunar. Ayrıntı için saha personel takibi rehberimize bakabilirsin.`,

'insaat-santiyesinde-personel-takibi-nasil-yapilir':
`Şantiyede personel takibinin en doğru yolu, her işçinin telefonundan **konum doğrulamalı giriş-çıkış** yapmasıdır. Böylece kim, hangi şantiyede, saat kaçta işe başladı net olur.

## Nasıl kurulur?

1. Şantiyeleri sisteme tanımla.
2. İşçiler telefondan giriş/çıkış yapar; GPS konumu kaydedilir.
3. Puantaj otomatik dolar, fazla mesai hesaplanır.
4. Taşeron/ekip bazlı raporlama alınır.

Şantiyede kağıt föy kaybolur, imza taklit edilebilir; konumlu dijital kayıt hem doğrudur hem de olası bir davada kanıt niteliği taşır. TEKNOPERS bunu cihaz olmadan sağlar.`,

'temizlik-personeli-takip-programi-nasil-olmali':
`Temizlik personeli birden çok lokasyonda dağınık çalıştığından, program telefondan **konum doğrulamalı giriş-çıkış** ve lokasyon bazlı takip sunmalıdır.

## Olması gerekenler

1. Her personel gittiği adreste telefondan giriş yapar; GPS konumu doğrular.
2. Hangi bina/müşteri, hangi saat aralığı çalışıldı görünür.
3. Vardiya ve rotasyon planı.
4. Fazla mesai ve devamsızlık otomatik.

Böylece "geldi mi, kaçta geldi" tartışması biter. TEKNOPERS cihazsızdır ve çok lokasyonlu ekipler için uygundur.`,

'guvenlik-personeli-devriye-takibi-nasil-yapilir':
`Güvenlik personelinin nöbet ve devriye takibi, belirli noktalarda telefondan **konum doğrulamalı kayıt** (tur kontrol) ile yapılır.

## Yöntem

1. Nöbet/kontrol noktalarını ve saatlerini tanımla.
2. Personel her turda noktada telefondan giriş yapar; konum ve saat kaydedilir.
3. Kaçırılan tur veya gecikme raporu alınır.
4. Vardiya planı ve fazla mesai birlikte yönetilir.

Kağıt devriye defteri sonradan denetlenemez; konumlu dijital kayıt hem caydırıcıdır hem de raporlanabilir. TEKNOPERS bu takibi cihaz olmadan sunar.`,

'gps-ile-personel-giris-cikis-takibi-nasil-yapilir':
`GPS'li giriş-çıkış takibinde personel, işe başlarken ve biterken kendi telefonundan butona basar; sistem o anki konumu ve saati kaydeder. Böylece PDKS cihazına gerek kalmaz.

## Nasıl çalışır?

1. Personelin telefonuna uygulama/bağlantı tanımlanır.
2. İşyeri konumu belirlenir.
3. Giriş/çıkışta konum doğrulanır; belirlenen alanın dışındaysa uyarı verilir.
4. Puantaj ve fazla mesai otomatik hesaplanır.

Avantajı: cihaz maliyeti yoktur, saha ekiplerinde çalışır ve suistimal zordur. Ayrıntı için PDKS nedir rehberine bakabilirsin.`,

'cihazsiz-pdks-nedir':
`PDKS (Personel Devam Kontrol Sistemi), çalışanların giriş-çıkışını kaydeden sistemdir. **Cihazsız PDKS**, parmak izi/yüz okuma/kart cihazı olmadan, personelin kendi telefonundan konum doğrulamalı giriş yapmasıyla çalışan modern yöntemdir.

## Klasik PDKS'ten farkı

1. Cihaz alma, kurma ve bakım maliyeti **yoktur**.
2. Saha ve çok lokasyonlu ekiplerde çalışır; cihaz gibi tek noktaya bağlı değildir.
3. **Konum (GPS) doğrulaması** suistimali önler.
4. Puantaj otomatik dolar.

Cihazlı PDKS tek kapıda işe yarar; cihazsız PDKS her yerde çalışır. TEKNOPERS cihazsız PDKS sunar. Ayrıntı için PDKS nedir rehberine bakabilirsin.`,

'parmak-izi-cihazi-olmadan-mesai-takibi-nasil-olur':
`Parmak izi cihazı olmadan mesai takibi, personelin telefonundan **konum doğrulamalı giriş-çıkış** yapmasıyla olur. Cihaz almaya gerek kalmaz.

## Nasıl?

1. İşyeri konumu tanımlanır.
2. Personel telefondan giriş/çıkış yapar; GPS konumu ve saat kaydedilir.
3. Belirlenen alanın dışındaki girişler işaretlenir.
4. Puantaj, fazla mesai ve devamsızlık otomatik hesaplanır.

Hijyen (ortak temas yok), maliyet (cihaz yok) ve saha uyumu açısından avantajlıdır. TEKNOPERS bunu sağlar. Ayrıntı için PDKS nedir rehberine bakabilirsin.`,

'personel-gec-kalma-raporu-nasil-alinir':
`Geç kalma raporu, her personelin işe giriş saatini beklenen mesai başlangıcıyla karşılaştırarak alınır. Dijital sistemde bu otomatiktir.

## Nasıl?

1. Mesai başlangıç saatini tanımla.
2. Sistem her girişte gecikmeyi (dakika) hesaplar.
3. Personel/tarih bazlı toplam gecikme raporu üretilir.
4. Sık geç kalanlar listelenir.

Elle takip zordur ve tartışma yaratır; konumlu-saatli dijital kayıt nesnel bir rapor verir. TEKNOPERS geç kalma ve devamsızlığı otomatik raporlar.`,

'vardiya-plani-nasil-yapilir':
`Vardiya planı, personeli gün ve saat dilimlerine (sabah/akşam/gece) dengeli dağıtan çizelgedir. İyi bir plan yasal dinlenme sürelerine uyar ve kimsenin üst üste ağır vardiyada kalmamasını sağlar.

## Adımlar

1. **İhtiyaç:** her vardiyada kaç kişi gerekli?
2. Personeli ve kısıtlarını (izin, tercih) listele.
3. Haftalık çizelgeyi oluştur; gece vardiyası sonrası yeterli dinlenme bırak.
4. Fazla mesai ve hafta tatilini gözet.
5. Herkese bildir.

Çakışma ve boşlukları önlemek için dijital çizelge pratiktir. TEKNOPERS vardiya ile puantajı birlikte yönetir.`,

'personel-izin-takibi-nasil-yapilir':
`İzin takibi, her personelin hak ettiği yıllık izin ile kullandığı izni karşılaştırarak **kalan izni** göstermektir. Kıdeme göre hak edilen gün (14/20/26) baz alınır.

## Nasıl?

1. Her personelin işe giriş tarihini gir; kıdem, dolayısıyla hak edilen izin belli olur.
2. Kullanılan izinleri işle.
3. Kalan izin otomatik hesaplanır.
4. İzin talep ve onay akışını yürüt.

Elle tutulan izin defteri karışır; dijital takip kalan izni anlık gösterir. Kalan izni hesaplamak için aşağıdaki yıllık izin aracını kullanabilirsin.`,

'kucuk-isletmeler-icin-personel-takip-programi':
`Küçük işletme için ideal personel programı; kurulumu kolay, cihaz gerektirmeyen, telefondan konum doğrulamalı giriş sunan ve sabit fiyatlı olmalıdır.

## Nelere dikkat?

1. **Cihaz şart mı?** Olmasın — telefon yeter.
2. Puantaj, izin, fazla mesai otomatik mi?
3. Rapor alınabiliyor mu?
4. **Fiyat** kişi başı mı, sabit mi? Küçük ekipte sabit fiyat avantajdır.
5. Kullanımı basit mi?

TEKNOPERS küçük işletmeler için cihazsız, sabit fiyatlı ve telefon tabanlıdır. Ayrıntı için PDKS nedir rehberine bakabilirsin.`,

'yillik-izin-ucreti-fesihte-nasil-odenir':
`İş sözleşmesi sona erdiğinde, çalışanın kullanmadığı yıllık izin günleri ücrete çevrilerek ödenir (4857 sayılı İş Kanunu m.59). Formül: **(son brüt aylık ücret ÷ 30) × kullanılmayan izin günü**.

## Nasıl hesaplanır?

1. Hak edilen toplam izni bul (kıdeme göre birikmiş).
2. Kullanılan izni çıkar → kalan gün.
3. Son brüt ücretin günlüğü ile çarp.

## Örnek

Kalan 12 gün, brüt 33.030 TL → günlük 1.101 TL → 12 × 1.101 = **13.212 TL brüt**.

Bu ödemeden SGK primi kesilmez; gelir ve damga vergisi kesilir. Kesin hesap için mali müşavirinize (SMMM) danışın. Kalan izni bulmak için aşağıdaki aracı kullanabilirsin.`,

'gece-calismasi-ucreti-nasil-hesaplanir':
`Gece çalışması (20.00–06.00 arası) için kanunda otomatik bir ek zam yoktur; gece saat ücreti gündüzle aynıdır. Ancak gece çalışması günde **7,5 saati aşamaz**; aşan kısım fazla çalışma sayılıp %50 zamlı ödenir (4857 sayılı İş Kanunu m.69 ve m.41).

## Yani

1. Normal gece mesaisi: saat ücreti = gündüz saat ücreti.
2. 7,5 saati aşan gece çalışması: aşan saatler **1,5 kat**.

## Örnek

Saatlik 146,80 TL, gece 9 saat çalışıldıysa 1,5 saat fazladır: 146,80 × 1,5 × 1,5 = **330,30 TL** ek ödeme.

Sözleşme veya toplu sözleşme daha yüksek gece zammı öngörebilir. Kesin hesap için mali müşavirinize (SMMM) danışın. Fazla mesai aracını kullanabilirsin.`,

'net-maastan-brut-maas-nasil-hesaplanir':
`Net maaştan brüte geçmek için, nete eklenen yasal kesintiler (SGK işçi payı %14, işsizlik %1, gelir vergisi, damga vergisi) geriye doğru hesaplanır. Elle yapmak zordur çünkü gelir vergisi dilimi maaşa göre değişir.

## Mantık

Brüt ücret = net + SGK (%14) + işsizlik (%1) + gelir vergisi + damga vergisi.

2026'da asgari ücret gelir vergisinden istisna olduğundan, düşük maaşlarda kesinti oranı daha düşüktür.

## Pratik

Kesinti oranları dilime göre değiştiği için bir hesap makinesi kullanmak en doğrusudur. Aşağıdaki net-brüt aracıyla saniyede çevirebilirsin. Bordroda kesin tutar için mali müşavirinize (SMMM) danışın.`,

'brutten-nete-maas-nasil-hesaplanir':
`Brütten nete geçmek için brüt ücretten yasal kesintiler düşülür: SGK işçi payı %14, işsizlik sigortası %1, gelir vergisi (dilime göre) ve damga vergisi (binde 7,59).

## Adımlar

1. Brütten SGK %14 ve işsizlik %1'i düş → gelir vergisi matrahına ulaş.
2. Gelir vergisini dilime göre hesapla (asgari ücret istisnası düşülür).
3. Damga vergisini düş.
4. Kalan tutar = net ücret.

## Örnek

2026 brüt asgari ücret 33.030 TL → net **28.075,50 TL**.

Gelir vergisi dilimi maaş arttıkça yükseldiğinden, yüksek maaşlarda net oranı düşer. Aşağıdaki net-brüt aracıyla otomatik hesapla. Kesin bordro için mali müşavirinize (SMMM) danışın.`,

'bir-iscinin-isverene-toplam-maliyeti-nasil-hesaplanir':
`Bir işçinin işverene maliyeti = brüt ücret + işveren SGK payı (yaklaşık %20,5, indirimle ~%15,5) + işveren işsizlik payı (%2). Yani işçinin eline geçen netten belirgin biçimde yüksektir.

## Hesap

1. Brüt ücreti al.
2. İşveren SGK payını ekle (brüt × ~%15,5–20,5, teşvike göre).
3. İşveren işsizlik payını ekle (brüt × %2).

## Örnek

2026 asgari brüt 33.030 TL → 5 puanlık indirimle toplam maliyet yaklaşık **38.800 TL**. Net 28.075 TL alan işçi, işverene yaklaşık 38.800 TL'ye mal olur.

Kendi rakamın için işveren maliyeti aracını kullanabilirsin. Kesin hesap için mali müşavirinize (SMMM) danışın.`,

'sgk-primi-nasil-hesaplanir':
`SGK primi, brüt ücret üzerinden hesaplanır. Toplam prim oranı yaklaşık **%37,5'tir**: işçiden %14 + %1 işsizlik, işverenden ~%20,5 + %2 işsizlik. Emeklilik, genel sağlık ve kısa vadeli sigorta primlerini içerir.

## Dağılım

1. **İşçi payı:** brüt × %14 (emeklilik + sağlık) + %1 işsizlik.
2. **İşveren payı:** brüt × ~%20,5 + %2 işsizlik (düzenli ödeyende 5 puan indirim).

## Örnek

Brüt 33.030 TL → işçi SGK kesintisi yaklaşık 4.955 TL, işveren payı yaklaşık 7.432 TL (indirimsiz).

Prim, brüt asgari ücretin altında ve SGK tavanının üstünde farklı hesaplanır. Kesin hesap için mali müşavirinize (SMMM) danışın. İşveren maliyeti aracını kullanabilirsin.`,

'sgk-ise-giris-bildirgesi-nasil-verilir':
`İşe giriş bildirgesi, bir çalışanı işe başlamadan **en geç bir gün önce** SGK'ya bildirmektir. e-Bildirge veya e-Devlet üzerinden yapılır.

## Adımlar

1. İşyerinin SGK işyeri sicil numarası ve e-Bildirge şifresi olmalı.
2. SGK e-Bildirge sistemine gir.
3. "Sigortalı İşe Giriş" bölümünden çalışanın TC, ad ve işe başlama tarihini gir.
4. Onayla ve çıktısını sakla.

İnşaat gibi bazı işlerde bildirim süresi farklı olabilir. Geç bildirim idari para cezası doğurur. Süreç ve istisnalar için mali müşavirinize (SMMM) danışın.`,

'isten-cikis-kodlari-nelerdir':
`İşten çıkış kodu, SGK'ya bir çalışanın işten ayrılma sebebini bildiren numaradır. Seçilen kod, işçinin kıdem/ihbar tazminatı ve işsizlik maaşı hakkını doğrudan etkiler.

## Sık kullanılan kodlar

1. **Kod 4** — Belirsiz süreli sözleşmenin işveren tarafından haklı sebep olmadan feshi.
2. **Kod 3** — İşçinin istifası (genellikle tazminat doğurmaz).
3. **Kod 8** — İşe devamsızlık nedeniyle fesih.
4. **Kod 5** — Belirli süreli sözleşmenin sona ermesi.

Yanlış kod, işçinin işsizlik maaşını ve tazminatını etkilediği için hak kaybına ve ihtilafa yol açar. Doğru kod seçimi için mali müşavirinize (SMMM) danışın.`,

'personel-primi-nasil-hesaplanir':
`Personel primi, çalışanı hedefe veya performansa göre ödüllendiren ek ödemedir. En yaygın yöntemler: ciro yüzdesi, hedef başına sabit tutar, satış adedi üzerinden pay veya puan sistemi.

## Yaygın modeller

1. **Ciro primi:** kişinin getirdiği cironun %X'i.
2. **Hedef primi:** aylık hedef tutturulursa sabit ödül.
3. **Adet primi:** satılan/yapılan iş başına tutar.
4. **Kademeli prim:** hedefin üstüne çıktıkça artan oran.

İyi bir prim adil ve ölçülebilir olmalı, keyfi olmamalıdır. Prim ücretin bir parçasıysa SGK'ya tabi olabilir; bunun için mali müşavirinize (SMMM) danışın. Prim tutarını hesaplamak için personel prim aracını kullanabilirsin.`,

'personel-prim-sistemi-nasil-kurulur':
`Adil bir prim sistemi kurmak için önce **ölçülebilir bir hedef** belirlenir, sonra hedefe ulaşınca ödenecek tutar/oran netleştirilir ve herkese yazılı olarak duyurulur.

## Adımlar

1. **Amaç:** neyi teşvik ediyorsun? (satış, hız, kalite)
2. **Ölçüt:** ciro mu, adet mi, hedef mi? Objektif olmalı.
3. **Oran/tutar:** hedef başına ne kadar ödenecek?
4. **Kademe:** üst performansı ayrıca ödüllendir.
5. **Şeffaflık:** kim, nasıl, ne kazanacak yazılı olsun.
6. **Takip:** prim hesabını düzenli ve doğru yap.

Belirsiz prim motivasyonu düşürür. TEKNOPERS prim ve performansı takip etmene yardımcı olur. Tutar için personel prim aracını kullanabilirsin.`,

'deneme-suresi-en-fazla-ne-kadar-olabilir':
`İş sözleşmesinde deneme süresi en fazla **2 aydır**. Toplu iş sözleşmesiyle bu süre **4 aya** kadar uzatılabilir (4857 sayılı İş Kanunu m.15).

## Bilinmesi gerekenler

1. Deneme süresi içinde taraflar sözleşmeyi **bildirimsiz ve tazminatsız** feshedebilir.
2. Ancak işçinin **çalıştığı günlerin ücreti ve SGK primleri** tam olarak ödenir.
3. Deneme süresi sözleşmede **yazılı** belirtilmelidir; yazılmazsa geçersiz sayılır.
4. Deneme süresi kıdeme dahildir.

Özel durumlar için mali müşavirinize (SMMM) veya bir iş hukuku uzmanına danışın.`,

'is-sozlesmesi-turleri-nelerdir':
`İş sözleşmeleri; süre, çalışma biçimi ve düzenlenişine göre türlere ayrılır. En temel ayrım, sözleşmenin belirli mi belirsiz süreli mi olduğudur.

## Başlıca türler

1. **Belirsiz süreli:** en yaygın; bitiş tarihi yoktur, iş güvencesi hükümleri uygulanır.
2. **Belirli süreli:** işin niteliği süreliyse (proje, sezon) yapılır; objektif neden gerekir.
3. **Kısmi süreli (part-time):** haftalık çalışma, tam sürenin altındadır.
4. **Çağrı üzerine çalışma:** iş oldukça çağrılan model.
5. **Deneme süreli:** başında deneme kaydı bulunan sözleşme.

Yanlış tür seçimi (örneğin sürekli bir işe belirli süreli sözleşme) ileride tazminat ihtilafı doğurur. Doğru tür için mali müşavir veya iş hukuku uzmanına danışın.`,

'sgk-prim-gunu-nasil-hesaplanir':
`SGK prim günü, bir ayda çalışan için SGK'ya bildirilen gün sayısıdır. Tam ay çalışan bir işçi için, ay kaç gün olursa olsun **30 gün** bildirilir.

## Kurallar

1. Tam ay çalışan: **30 gün** (Şubat dahil, aylar 30 kabul edilir).
2. Ay içinde işe giren/çıkan: fiilen çalıştığı gün kadar.
3. Eksik gün (rapor, ücretsiz izin, devamsızlık): 30'dan düşülür ve **eksik gün nedeni** bildirilir.

## Örnek

20 gün çalışıp 10 gün ücretsiz izin kullanıldıysa 20 gün bildirilir, eksik gün kodu girilir.

Prim günü emeklilik ve sağlık haklarını etkilediğinden doğru bildirim önemlidir. Kesin durum için mali müşavirinize (SMMM) danışın.`,

'kuafor-randevu-sistemi-nasil-kurulur':
`Kuaför randevu sistemi kurmak için üç şeye karar verirsin: müşteri kendisi mi randevu alsın yoksa personel mi girsin, hatırlatma hangi kanaldan gitsin (WhatsApp/SMS), ve hangi bilgiler tutulsun.

## Adımlar

1. Hizmet ve süre listesini çıkar (saç kesimi 30 dk, boya 90 dk…).
2. Personel ve çalışma saatlerini tanımla.
3. Randevu takvimini kur (çakışma engelli).
4. Otomatik hatırlatma ayarla; bu no-show'u düşürür.
5. Müşteri geçmişi ve ödeme takibi ekle.

TEKNOPERS Salon bunların tümünü tek ekranda sunar; kurulum dakikalar sürer. Denemek için WhatsApp'tan yazabilirsin. Ayrıntı için no-show rehberine bakabilirsin.`,

'kuafor-randevu-programi-nasil-secilir':
`İyi bir kuaför randevu programında şunlar olmalı: çakışmasız takvim, otomatik WhatsApp/SMS hatırlatma, personel bazlı görünüm, müşteri geçmişi ve kasa takibi.

## Seçerken sor

1. **Otomatik hatırlatma** var mı? No-show'u en çok bu düşürür.
2. Personel ve hizmet süreleri ayarlanıyor mu?
3. Müşteri geçmişi ve harcaması tutuluyor mu?
4. Kasa ve gün sonu raporu var mı?
5. **Fiyat** koltuk başı mı, sabit mi?

TEKNOPERS Salon bunları sabit fiyatla sunar. WhatsApp'tan deneyebilirsin. Ayrıntı için no-show rehberine bakabilirsin.`,

'guzellik-salonu-randevu-programi-ozellikleri':
`Güzellik salonu randevu programında bulunması gereken temel özellikler: çakışmasız randevu takvimi, otomatik hatırlatma, seans/paket takibi, personel primi ve kasa yönetimi.

## Olmazsa olmazlar

1. **Randevu takvimi:** personel ve hizmete göre, çakışma engelli.
2. **Otomatik hatırlatma:** WhatsApp/SMS ile no-show önleme.
3. **Paket/seans takibi:** kalan seansları otomatik say.
4. **Müşteri kartı:** geçmiş işlemler, harcama, notlar.
5. **Kasa ve rapor:** gün sonu, gelir, personel primi.

TEKNOPERS Salon bu özelliklerin tümünü içerir. Denemek için WhatsApp'tan yazabilirsin.`,

'berber-randevu-uygulamasi-nasil-olmali':
`Berber için randevu uygulaması basit ve hızlı olmalıdır: birkaç dokunuşla randevu, otomatik hatırlatma ve müşteri geçmişi. Karmaşık uygulamalar yoğun berberde işi yavaşlatır.

## İdeal özellikler

1. Hızlı randevu girişi (hem personel hem müşteri girebilsin).
2. WhatsApp/SMS hatırlatma → gelmeyen müşteri azalır.
3. Sık gelen müşterilerin geçmişi ve tercihleri.
4. Kasa ve günlük ciro.
5. Sabit fiyat.

TEKNOPERS Salon berberler için sade ve hızlıdır. WhatsApp'tan deneyebilirsin. Ayrıntı için no-show rehberine bakabilirsin.`,

'online-randevu-sistemi-nasil-calisir':
`Online randevu sistemi, müşterinin bir bağlantı üzerinden uygun saati seçip randevu almasını sağlar; işletme takvimi anlık güncellenir ve çakışma olmaz.

## Nasıl işler?

1. İşletme; hizmet, süre ve müsait saatleri tanımlar.
2. Müşteri bağlantıyı açar ve boş saati seçer.
3. Randevu takvime düşer; hem müşteriye hem işletmeye onay/hatırlatma gider.
4. No-show'u azaltmak için otomatik hatırlatma, gerekirse kapora eklenir.

Böylece telefon trafiği azalır, randevular düzene girer. TEKNOPERS Salon online randevu ve hatırlatmayı birlikte sunar. Ayrıntı için no-show rehberine bakabilirsin.`,

'salon-musteri-takip-programi-ne-ise-yarar':
`Salon müşteri takip programı; her müşterinin geçmiş işlemlerini, harcamasını, tercihlerini ve kalan paket/seansını tek yerde tutar. Böylece müşteriyi tanır ve doğru zamanda geri çağırırsın.

## Ne sağlar?

1. **Müşteri kartı:** geçmiş hizmetler, kullanılan ürün, notlar.
2. **Harcama/cari:** kim ne kadar harcadı, borcu var mı.
3. **Paket takibi:** kalan seans otomatik.
4. **Geri kazanım:** uzun süredir gelmeyenlere hatırlatma.
5. **Sadakat:** sık gelen müşteriye özel kampanya.

Sonuç: daha fazla tekrar ziyaret ve gelir. TEKNOPERS Salon bunu sunar. Ayrıntı için seans paketi takibi rehberine bakabilirsin.`,

'musteri-sadakat-programi-nasil-kurulur':
`Salonda sadakat programı, sık gelen müşteriyi ödüllendirerek geri dönüşü artırır. En yaygın modeller: puan biriktirme, X ziyarette 1 bedava ve özel indirim günleri.

## Adımlar

1. **Model seç:** puan mı, ziyaret sayısı mı, harcama eşiği mi?
2. **Ödülü belirle:** indirim, bedava hizmet veya ürün.
3. Müşteri geçmişinden kimin uygun olduğunu takip et.
4. Doğum günü/özel gün mesajları ekle.
5. Basit tut; müşteri kolayca anlasın.

Takip programı olmadan sadakat sistemini elle yürütmek zordur. TEKNOPERS Salon müşteri geçmişi ve kampanyayı birlikte tutar. Ayrıntı için seans paketi takibi rehberine bakabilirsin.`,

'seans-paketi-takibi-nasil-yapilir':
`Seans paketi takibi, müşterinin peşin aldığı çok seanslı paketten (örneğin 10 seans lazer) kaçını kullandığını ve kaçının kaldığını izlemektir. Her gelişte bir seans düşülür.

## Nasıl?

1. Paketi tanımla (ad, toplam seans, ücret).
2. Müşteriye paketi ata.
3. Her ziyarette seansı düş; kalan otomatik görünür.
4. Paket bitişine yaklaşınca müşteriye hatırlat (yenileme fırsatı).

Elle takip karışır ve "kaç seansım kaldı" tartışması çıkar. Dijital takip hem sana hem müşteriye netlik verir. TEKNOPERS Salon paket ve seansı otomatik sayar. Ayrıntı için seans paketi takibi rehberine bakabilirsin.`,

'guzellik-salonu-acma-maliyeti-ne-kadar':
`Güzellik salonu açma maliyeti; konum, büyüklük ve hizmet türüne göre değişir. Ana kalemler: kira depozitosu, tadilat/dekorasyon, ekipman, ruhsat/kuruluş, ilk ürün stoğu ve birkaç aylık işletme gideridir.

## Başlıca kalemler

1. **Kira + depozito:** genelde 2-3 aylık kira peşin.
2. **Tadilat/dekorasyon:** metrekareye göre değişken.
3. **Ekipman:** koltuk, ayna, cihazlar (hizmete göre).
4. **Ruhsat/kuruluş:** işyeri açma ruhsatı, vergi, muhasebe.
5. **İlk stok:** kullanılacak ürünler.
6. **İşletme sermayesi:** ilk 3 ay kira, maaş ve giderler.

Kendi bütçeni kalem kalem görmek için salon açma maliyeti aracını kullanabilirsin.`,

'kuafor-acmak-icin-gerekli-belgeler-nelerdir':
`Kuaför veya berber açmak için temel belgeler: mesleki yeterlilik (ustalık/kalfalık) belgesi, işyeri açma ve çalışma ruhsatı, vergi levhası ve hijyen/sağlık şartlarının karşılanmasıdır.

## Genel liste

1. **Ustalık veya mesleki yeterlilik belgesi** (işletme sahibi veya çalışan için).
2. **İşyeri açma ve çalışma ruhsatı** (belediyeden).
3. **Vergi mükellefiyeti** ve levhası.
4. **Esnaf/ticaret sicil kaydı.**
5. **Hijyen belgesi** ve sağlık şartları.

Gereksinimler ilçe belediyesine göre küçük farklar gösterir; başvurmadan önce bağlı olduğun belediyeye danış. Açılış bütçen için salon açma maliyeti aracını kullanabilirsin.`,

'guzellik-salonu-ruhsati-nasil-alinir':
`Güzellik salonu ruhsatı (işyeri açma ve çalışma ruhsatı), bağlı olunan belediyeye başvurularak alınır. Mekânın sağlık, hijyen ve imar şartlarını karşılaması gerekir.

## Adımlar

1. Vergi dairesinde mükellefiyet aç, sicil kaydını yaptır.
2. Belediyeye ruhsat başvurusu yap (kira sözleşmesi/tapu, kimlik, ustalık belgesi ile).
3. Mekân; sağlık, hijyen ve yangın şartları için denetlenir.
4. Uygunsa ruhsat düzenlenir.

Sınıflandırma ve istenen evrak ilçeye göre değişebilir; net liste için bağlı belediyene danış. Açılış bütçesi için salon açma maliyeti aracını kullanabilirsin.`,

'salon-personeli-primi-nasil-belirlenir':
`Salon personeli primi genellikle yapılan iş veya getirilen ciro üzerinden belirlenir. Kuaför/güzellik sektöründe en yaygın model, personelin ürettiği cironun bir yüzdesidir.

## Yaygın modeller

1. **Ciro yüzdesi:** personelin yaptığı işlerin cirosunun %X'i (örneğin %30-40).
2. **Hizmet başı prim:** her işlem için sabit tutar.
3. **Hedef primi:** aylık ciro hedefi tutarsa ek ödül.
4. **Ürün satış primi:** sattığı bakım ürününden pay.

Adil ve şeffaf olması personeli motive eder. Prim ücretin bir parçasıysa SGK'ya tabi olabilir; mali müşavirinize (SMMM) danışın. Prim tutarını hesaplamak için personel prim aracını kullanabilirsin.`,

'kuaforde-kasa-nasil-tutulur':
`Kuaförde kasa tutmak, günlük gelir ve giderleri düzenli kaydetmektir: hangi hizmetten ne kadar girdi, nakit/kart ayrımı ve gün sonunda kasada ne kalması gerektiği.

## Nasıl?

1. Her işlemi anında kaydet (hizmet, tutar, ödeme türü).
2. Nakit ve kart gelirini ayır.
3. Giderleri (ürün, kira payı, prim) yaz.
4. Gün sonunda beklenen kasa ile fiili kasayı karşılaştır.
5. Açık veya fazla varsa nedenini bul.

Elle defterde hata ve kaçak olur; dijital kasa gün sonu raporunu otomatik verir. TEKNOPERS Salon kasa ve raporu birlikte tutar.`,

'salon-gun-sonu-raporu-nasil-alinir':
`Gün sonu raporu; o günkü toplam ciroyu, işlem sayısını, nakit/kart dağılımını ve personel bazlı üretimi tek ekranda gösterir. Dijital sistemde tek dokunuşla alınır.

## İçermesi gerekenler

1. Günlük toplam ciro.
2. Nakit / kart / diğer ödeme dağılımı.
3. İşlem ve randevu sayısı.
4. Personel bazlı ciro ve prim.
5. Gider ve net kasa.

Elle çıkarmak zaman alır ve hatalıdır; sistemli takip, günü kapatırken saniyede rapor verir. TEKNOPERS Salon gün sonu raporunu otomatik üretir.`,

'dis-klinigi-randevu-programi-nasil-secilir':
`Diş kliniği randevu programı; tedavilerin uzun ve çok seanslı olması nedeniyle güçlü bir takvim ve hatırlatma özelliği istemelidir. Hasta geçmişi ve tedavi takibi de önemlidir.

## Nelere dikkat?

1. Hekim ve koltuk bazlı çakışmasız takvim.
2. Otomatik randevu hatırlatma (no-show diş kliniğinde pahalıdır).
3. Hasta kartı: tedavi geçmişi, kalan seans.
4. Tedavi paketi ve ödeme takibi.
5. KVKK'ya uygun hasta verisi saklama.

TEKNOPERS klinik modülü bu ihtiyaçları karşılar. Ayrıntı için diş kliniği randevu programı rehberine bakabilirsin.`,

'diyetisyen-randevu-ve-danisan-takip-programi':
`Diyetisyen için ideal program, randevunun yanı sıra danışanın **ilerlemesini** (kilo, ölçü, seans notları) ve **paket/seans** kullanımını takip etmelidir.

## Olması gerekenler

1. Randevu takvimi ve otomatik hatırlatma.
2. Danışan kartı: kilo/ölçü geçmişi, notlar.
3. Paket takibi (örneğin 8 görüşmelik paket) — kalan otomatik.
4. Ödeme ve cari takibi.
5. KVKK'ya uygun sağlık verisi saklama.

Danışan ilerlemesini görmek hem sonuç hem sadakat getirir. TEKNOPERS randevu ve paket takibini birlikte sunar. Ayrıntı için seans paketi takibi rehberine bakabilirsin.`,

'pilates-studyosu-uyelik-takip-programi':
`Pilates stüdyosu için program, ders takvimi ile birlikte **üyelik/paket** takibine odaklanmalıdır: üyenin kalan ders sayısı, üyelik bitiş tarihi ve yoklama.

## Olması gerekenler

1. Grup ve özel ders takvimi, kontenjan yönetimi.
2. Üyelik ve paket takibi (kalan ders, bitiş tarihi).
3. Yoklama (derse kim geldi).
4. Otomatik hatırlatma ve yenileme uyarısı.
5. Ödeme ve cari takibi.

Üyelik bitişini önceden hatırlatmak yenilemeyi artırır. TEKNOPERS paket ve randevuyu birlikte tutar. Ayrıntı için seans paketi takibi rehberine bakabilirsin.`,

'dovme-studyosu-randevu-sistemi-nasil-kurulur':
`Dövme stüdyosunda seanslar uzun ve genellikle kaporalı olduğundan, randevu sistemi **kapora/ön ödeme** ve net süre yönetimini desteklemelidir.

## Adımlar

1. Sanatçı bazlı takvim, uzun seanslara uygun.
2. Kapora ile randevu (no-show'u ve boş günü önler).
3. Müşteri kartı: tasarım notları, geçmiş işler.
4. Otomatik hatırlatma.
5. Kasa ve gelir takibi.

Kaporalı randevu ve hatırlatma dolu takvimi korur. TEKNOPERS Salon bunu sunar. Ayrıntı için no-show rehberine bakabilirsin.`,

'veteriner-klinigi-randevu-programi-nasil-olmali':
`Veteriner kliniği programı, hasta (hayvan) ve sahip kaydını birlikte tutmalıdır; ayrıca **aşı/kontrol hatırlatması** kritik bir özelliktir.

## Olması gerekenler

1. Randevu takvimi ve hatırlatma.
2. Hasta kartı: tür, ırk, geçmiş tedavi, aşı takvimi.
3. Sahip bilgisi ve iletişim.
4. Otomatik aşı/kontrol hatırlatması (geri dönüşü artırır).
5. Ödeme, cari ve ilaç stoğu.

Aşı hatırlatması hem hayvan sağlığını korur hem düzenli ziyaret sağlar. TEKNOPERS randevu, müşteri ve hatırlatmayı birlikte sunar. Ayrıntı için no-show rehberine bakabilirsin.`,

'masaj-salonu-randevu-uygulamasi-nasil-secilir':
`Masaj/SPA salonu uygulaması, oda ve terapist bazlı çakışmasız takvim ile paket/seans takibi sunmalıdır. Seanslar uzun olduğundan hatırlatma önemlidir.

## Nelere dikkat?

1. Terapist ve oda bazlı takvim.
2. Otomatik hatırlatma (no-show'u düşürür).
3. Paket/seans takibi (örneğin 10 seans).
4. Müşteri tercihleri ve geçmişi.
5. Kasa ve gün sonu raporu.

TEKNOPERS Salon bu ihtiyaçları tek ekranda karşılar. Ayrıntı için seans paketi takibi rehberine bakabilirsin.`,

'kucuk-isletmeler-icin-stok-takip-programi':
`Küçük işletme için stok programı basit olmalıdır: ürün giriş-çıkışı, kalan miktar, kritik seviye uyarısı ve barkodla hızlı işlem. Karmaşık kurumsal sistemlere gerek yoktur.

## Olması gerekenler

1. **Ürün kartı:** ad, birim, alış/satış fiyatı.
2. **Giriş-çıkış ve kalan miktar** (anlık).
3. **Kritik stok uyarısı** (bitmeden haber verir).
4. **Barkod** ile hızlı ekleme/çıkarma.
5. Basit rapor: en çok satan, azalan stok.

TEKNOPERS stok, cari ve satışı tek ekranda birlikte tutar. Denemek için WhatsApp'tan yazabilirsin.`,

'cari-hesap-takibi-nasil-yapilir':
`Cari hesap takibi, müşteri ve tedarikçilerle olan **borç-alacak** durumunu izlemektir: kim sana ne kadar borçlu, sen kime ne kadar borçlusun.

## Nasıl?

1. Her müşteri/tedarikçi için cari kart aç.
2. Her satış, tahsilat ve ödemeyi işle.
3. Bakiye otomatik güncellensin (borç/alacak).
4. Vadesi geçen alacakları takip et.
5. Ekstre (hesap dökümü) alabil.

Elle defterde bakiye karışır, tahsilat unutulur. Dijital cari, kimden ne alacağını net gösterir. TEKNOPERS cari ve tahsilatı birlikte tutar. WhatsApp'tan deneyebilirsin.`,

'on-muhasebe-programi-nedir':
`Ön muhasebe programı; bir işletmenin günlük para akışını (satış, tahsilat, ödeme, fatura, stok, cari) takip eden yazılımdır. Resmi muhasebeden (mali müşavirin tuttuğu) farklı olarak işin günlük işleyişini yönetir.

## Ne yapar?

1. Gelir-gider ve kasa takibi.
2. Müşteri/tedarikçi cari (borç-alacak).
3. Fatura ve tahsilat kaydı.
4. Stok takibi.
5. Basit raporlar (ciro, alacak, kâr).

Ön muhasebe işi günlük kontrol etmeni sağlar; resmi beyannameler için yine mali müşavirinle çalışırsın. TEKNOPERS ön muhasebe ihtiyaçlarını karşılar. WhatsApp'tan deneyebilirsin.`,

'fatura-ve-tahsilat-takibi-nasil-yapilir':
`Fatura ve tahsilat takibi, kestiğin faturaların ödenip ödenmediğini ve vadesi gelenleri izlemektir. Amaç, alacağın takipte kalması ve nakit akışının bozulmamasıdır.

## Nasıl?

1. Her faturayı cariyle ilişkilendir (kim, ne kadar, vade).
2. Tahsil edildikçe işaretle.
3. Vadesi geçen ödenmemiş faturaları listele.
4. Müşteriye hatırlatma yap.
5. Nakit akışı raporu al.

Takip edilmeyen fatura, unutulan alacak demektir. TEKNOPERS fatura, cari ve tahsilatı birlikte tutar. WhatsApp'tan deneyebilirsin.`,

'barkod-ile-stok-takibi-nasil-yapilir':
`Barkodla stok takibi, ürünleri barkod okutarak hızlı ve hatasız giriş-çıkış yapmaktır. Elle ürün arama derdi biter, sayım hızlanır.

## Nasıl çalışır?

1. Her ürüne barkod tanımla (mevcut barkod ya da kendin bas).
2. Mal girişinde okut → stok artar.
3. Satış/çıkışta okut → stok düşer.
4. Sayımda okutarak fiili stoğu karşılaştır.
5. Kritik seviye uyarısı al.

Barkod, özellikle çok ürünlü işletmede hata ve zaman kaybını azaltır. TEKNOPERS barkodlu stok giriş/çıkışını destekler. WhatsApp'tan deneyebilirsin.`,

'kvkk-kucuk-isletmeler-icin-ne-gerektirir':
`KVKK (Kişisel Verilerin Korunması Kanunu), müşteri ve çalışan verisi tutan her işletmeyi bağlar — küçük işletmeler dahil. Temel gereklilik: veriyi hukuka uygun toplamak, güvenli saklamak ve gerektiğinde aydınlatma/rıza almaktır.

## Küçük işletme için temel adımlar

1. **Aydınlatma metni:** müşteriye hangi verisini neden aldığını bildir.
2. **Rıza:** gereken durumlarda (örneğin pazarlama mesajı) açık rıza al.
3. **Güvenli saklama:** verileri korumalı ortamda tut, herkese açık bırakma.
4. **VERBİS:** belirli eşikleri aşan işletmeler kayıt yaptırır.
5. **Silme:** amacı biten veriyi sil.

Yükümlülükler işletmenin büyüklüğüne ve tuttuğu veriye göre değişir; net durum için bir hukuk/uyum uzmanına danışın. TEKNOPERS, verileri KVKK'ya uygun saklamana yardımcı olur.`,

'randevu-hatirlatma-mesaji-ornekleri':
`İyi bir randevu hatırlatma mesajı kısa, net ve nazik olur; tarih-saat, yer ve iptal/erteleme seçeneği içerir. En etkilisi, randevudan **24 saat önce** gönderilenidir.

## Örnek mesajlar

1. "Merhaba [İsim], yarın saat [14:00] [Salon] randevunuzu hatırlatırız. Gelemeyecekseniz lütfen bize yazın. İyi günler!"
2. "[İsim] Bey/Hanım, [gün] [saat] randevunuz onaylandı. Değişiklik için bu numaradan bize ulaşabilirsiniz."
3. "Randevunuza 2 saat kaldı. [Salon] sizi bekliyor. Adres: [konum bağlantısı]"

Kişiye **ismiyle** hitap etmek ve kolay bir iptal seçeneği sunmak no-show oranını düşürür. Hazır şablon üretmek için aşağıdaki randevu hatırlatma aracını kullanabilirsin.`,

'parmak-izi-ile-mesai-takibi-yasak-mi':
`Parmak izi, yüz tanıma gibi biyometrik sistemlerle mesai takibi, KVKK açısından **yüksek riskli** kabul edilir. Kişisel Verileri Koruma Kurulu, çalışanın **açık rızası olsa dahi** bu tür sistemleri çoğu durumda hukuka uygun bulmamaktadır.

## Neden bu kadar riskli?

1. Parmak izi ve yüz geometrisi **özel nitelikli ve geri döndürülemez** veridir; bir şifre gibi değiştirilemez.
2. İşçi ile işveren arasındaki güç dengesizliği nedeniyle, çalışanın verdiği rızanın **özgür iradeyi** yansıtmadığı kabul edilebilir.
3. Daha az müdahaleci alternatifler (mobil uygulama, kart, konum doğrulama) varken biyometrik veri işlemek **ölçülülük ilkesine** aykırı görülebilir.

Bu ihlaller, işletmeler için **milyonlarca liraya varan** idari para cezası riski doğurur.

En güvenli yol, biyometrik veri hiç işlemeyen bir sisteme geçmektir: TEKNOPERS, personelin kendi telefonundan konum doğrulamalı giriş yapmasını sağlar, hiçbir biyometrik veri saklamaz. Not: Spesifik karar ve güncel ceza tutarları için bir hukuk uzmanına danışın.`,

'baskasinin-yerine-kart-basmak-tazminat-hakki-var-mi':
`Evet. İşyerinde bulunmayan bir çalışanın yerine başkasının kart basması ("buddy punching"), Yargıtay içtihatlarına göre **doğruluk ve bağlılığa aykırı** ağır bir ihlaldir ve genellikle **haklı fesih** (tazminatsız işten çıkarma) sebebi sayılır.

## Bilinmesi gerekenler

1. İşyerinde olmayan birini çalışıyor gibi göstermek, işvereni yanıltmadır; çalışmayan birine ücret ödenmesi başlı başına zarar kabul edilir.
2. Yüksek mahkeme, bu eylemde işverenin ekstra somut bir zarara uğramasını çoğu kez **şart koşmaz**.
3. Sadece kartını veren değil, **arkadaşının yerine kartı okutan** çalışan da aynı oranda kusurlu bulunabilir.

Ancak bu hakkı kullanabilmek için suistimalin **dijital ve kesin delille** ispatlanması gerekir. TEKNOPERS'in "Cihaz Bağı" özelliği, hesabı tek telefona kilitleyerek bu hileyi teknik olarak imkânsız hâle getirir. Kesin hukuki değerlendirme için bir iş hukuku uzmanına danışın.`,

'150-personelli-fabrikada-mesai-nasil-takip-edilir':
`150 personelli bir fabrikada mesai takibinin en güvenli yolu, cihaz gerektirmeyen **konum doğrulamalı mobil PDKS**'tir. Personel kendi telefonundan giriş yapar; sistem konumu ve saati kaydeder, puantaj otomatik oluşur.

## Neden cihazsız yöntem?

1. **KVKK riski yok:** biyometrik cihaz (parmak izi/yüz tanıma) yüksek ceza riski taşır; mobil konum doğrulama bu riski taşımaz.
2. **Kart hilesi yok:** hesap tek telefona kilitlendiği için başkasının yerine giriş yapılamaz.
3. **Donanım maliyeti yok:** yüzlerce kişilik tesiste cihaz alma, kurma ve bakım gideri ortadan kalkar.
4. **Vardiya ve fazla mesai** otomatik hesaplanır; ay sonu 150 kişilik bordro Excel hatası olmadan hazırlanır.

Kalabalık tesislerde elle veya kartla takip hem yavaş hem hataya açıktır. TEKNOPERS bu ölçekteki fabrikalar için tasarlanmıştır. Puantaj cetvelini denemek için aşağıdaki aracı kullanabilirsin.`,

'whatsapp-ile-musteri-verisi-paylasmak-yasal-mi':
`Müşteri veya müvekkile ait kişisel verileri (kimlik, sağlık, dava/işlem bilgisi) WhatsApp gibi sunucuları yurt dışında olan platformlar üzerinden paylaşmak **KVKK açısından risklidir** ve ihlal oluşturabilir.

## Neden riskli?

1. Veri sorumlusu, kişisel veriyi **uygun güvenlik düzeyinde** korumakla yükümlüdür; WhatsApp'ta erişim kayıtları tutulamaz, veri çıkışı kontrol edilemez.
2. Kişisel verinin **yurt dışına aktarımı** için ek şartlar gerekir; sunucuların yurt dışında olması bu yükümlülüğü doğurur.
3. Ekran görüntüsüyle veri sızdırılması engellenemez; işten ayrılan personel tüm geçmişi yanında götürür.

Özel nitelikli veriler söz konusu olduğunda, güvenli olmayan üçüncü taraf platformlara yükleme, ağır sonuçlar doğurabilir.

Doğru yol, iletişimi izole ve yetkilendirilmiş bir sisteme taşımaktır: TEKNOPERS görevleri büroya özel şifreli ekrandan atar. Kesin hukuki değerlendirme için bir uzmana danışın.`,

'evrak-zimmet-tutanagi-nasil-tutulur':
`Evrak zimmet tutanağı, bir belgenin kime, ne zaman ve hangi durumda teslim edildiğini kayıt altına alan belgedir. Amaç, evrakın izini kaybetmemek ve olası bir kayıpta sorumluyu netleştirmektir.

## İçermesi gerekenler

1. **Evrakın tanımı** (ne olduğu, dosya/no).
2. **Teslim eden ve teslim alan** kişi.
3. **Tarih ve saat.**
4. **İmza veya dijital onay.**
5. Mümkünse teslim anının **fotoğrafı**.

Kağıt tutanaklar kaybolur ve sonradan doldurulabilir. En güvenlisi, teslim anında fotoğraf, konum ve zaman damgasıyla dijital kayıt almaktır. TEKNOPERS'in zimmet modülü bunu saniyeler içinde yapar; evrak ve ekipman teslimi fotoğraflı ve onaylı biçimde kayda geçer.`,

'ekipman-zimmet-takibi-nasil-yapilir':
`Ekipman (demirbaş) zimmet takibi, laptop, telefon, araç, alet gibi kıymetlerin kimde olduğunu kayıt altına almaktır. Böylece kayıp durumunda sorumlu bulunur ve personel çıkışında iade kontrol edilebilir.

## Nasıl yapılır?

1. Her demirbaşı **kayıt altına al** (ad, seri no, değer).
2. Teslim anında **kime, ne zaman** verildiğini yaz.
3. Teslimi **fotoğraf ve onayla** belgele.
4. **Kimde ne var** listesini güncel tut.
5. İade edilmeyen zimmetleri işaretle; çıkışta kontrol et.

Sözlü teslim ve kağıt defter kayba ve haksız suçlamaya açıktır. TEKNOPERS'in zimmet modülü, teslim anını fotoğraf + konum + zaman damgası + dijital onayla kayda geçirir ve tüm zimmetleri tek listede gösterir.`,

'taseron-personel-takibi-nasil-yapilir':
`Taşeron personel takibinin en pratik yolu, her işçinin telefonundan **konum doğrulamalı giriş-çıkış** yapması ve puantajın **taşeron/ekip bazlı** ayrılmasıdır.

## Nasıl yapılır?

1. Taşeronları ve ekipleri sisteme tanımla.
2. İşçiler şantiyede/lokasyonda telefondan giriş yapar; GPS konumu kaydedilir.
3. Puantaj **taşeron bazında** otomatik oluşur; her taşeronun hakedişi ayrı görünür.
4. Fazla mesai ve devamsızlık otomatik hesaplanır.

Taşeron ekiplerinin karıştığı sahalarda kağıt föy kaybolur ve hakediş ihtilafı çıkar. Konumlu-saatli dijital kayıt hem doğru hem de olası davada delildir. TEKNOPERS bunu cihaz olmadan sağlar. Puantaj cetvelini denemek için aşağıdaki aracı kullanabilirsin.`,

'depo-stok-sayimi-nasil-yapilir':
`Depo stok sayımı, sistemdeki kayıtlı miktar ile raftaki **fiili miktarı** karşılaştırmaktır. En hızlı ve hatasız yöntem barkod okutarak yapılan sayımdır.

## Adımlar

1. Sayım öncesi giriş-çıkışları **güncelle**.
2. Ürünleri **barkod okutarak** say (elle listeye göre çok daha hızlı ve hatasız).
3. Sistemdeki miktar ile fiili miktarı **karşılaştır**.
4. **Farkları** (fire, kayıp, hatalı giriş) tespit et ve nedenini araştır.
5. Düzeltmeleri işle, sayım raporunu sakla.

Elle sayım uzun sürer ve hata payı yüksektir. TEKNOPERS'te barkodla sayım yaparak fiili stoğu saniyeler içinde karşılaştırabilir, kritik seviye uyarısıyla da stok bitmeden haberdar olabilirsin.`,

'ocr-ile-fatura-okuma-nedir':
`OCR (Optik Karakter Tanıma) ile fatura okuma, bir faturanın **fotoğrafını çekerek** üzerindeki bilgileri (tedarikçi, tutar, KDV, kalemler) otomatik olarak sisteme aktarmaktır. Elle veri girişini ortadan kaldırır.

## Ne sağlar?

1. Fatura fotoğrafı saniyeler içinde **okunur ve kaydedilir**.
2. Tutar ve KDV **tedarikçi cari hesabına** işlenir.
3. Kalemler **stoğa** eklenebilir; KDV dahil/hariç fiyatlandırma yapılır.
4. Kağıt fiş ve irsaliye kaybolma derdi azalır.

Manuel giriş hem yavaştır hem hatalıdır. TEKNOPERS'in OCR destekli modülü, fatura fotoğrafını okuyarak ön muhasebe ve stok iş yükünü ciddi biçimde azaltır. Denemek için WhatsApp'tan yazabilirsin.`,

'teklif-nasil-hazirlanir':
`Profesyonel bir teklif; ürün/hizmet kalemlerini, birim fiyatları, toplam tutarı, geçerlilik süresini ve ödeme koşullarını net biçimde içerir. Hızlı hazırlanması, kaçan siparişi önler.

## İçermesi gerekenler

1. **Müşteri ve firma** bilgileri.
2. **Kalemler:** ürün/hizmet, miktar, birim fiyat, tutar.
3. **KDV ve genel toplam.**
4. **Geçerlilik süresi** ve ödeme/teslim koşulları.
5. Teklif no ve tarih (takip için).

Teklifi Excel veya kağıtla hazırlamak yavaştır ve takibi zordur. TEKNOPERS'te fiyat listesinden dakikalar içinde teklif hazırlar, gönderir ve durumunu (bekliyor/onaylandı) takip edebilirsin. Onaylanan teklif doğrudan siparişe ve cariye dönüşür.`,

'vergi-ve-e-belge-takibi-nasil-yapilir':
`Vergi ve e-belge takibi, mükelleflerin beyanname ve elektronik belge (e-fatura, e-arşiv, e-defter) yükümlülüklerini son ödeme tarihlerine göre izlemektir. Amaç, hiçbir tarihi kaçırmamaktır.

## Nasıl yapılır?

1. Her mükellef için **yükümlülük türlerini** ve son tarihlerini tanımla.
2. Yaklaşan tarihler için **otomatik hatırlatma** kur.
3. Gelen/eksik e-belgeleri **mükellef bazında** işaretle.
4. Sorumlu personeli **göreve ata**, tamamlananı kapat.

Onlarca mükellefi elle takvimde izlemek risklidir; bir tarih kaçması ceza doğurur. TEKNOPERS, takibi kişiye değil sisteme bağlar: mükellef, görev ve son tarih tek panelde görünür. Güncel mevzuat ve tarihler için mali müşavir bilgisiyle çalışın.`,

'on-muhasebede-takip-disiplini-nasil-saglanir':
`Ön muhasebede takip disiplini; her işin bir **sorumlusu**, bir **son tarihi** ve bir **durumu** olmasıyla sağlanır. Dağınık takip, unutulan tahsilat ve kaçan tarih demektir.

## Nasıl sağlanır?

1. İşleri (fatura, tahsilat, beyan, evrak) **göreve** dönüştür.
2. Her göreve **sorumlu ve son tarih** ata.
3. Yaklaşan tarihlerde **otomatik hatırlatma** al.
4. Tamamlananı kapat, bekleyeni **tek ekranda** izle.
5. Vadesi geçen alacak ve eksik evrakı **listele**.

Excel ve kağıt not, kişiye bağımlıdır ve o kişi olmayınca kopar. TEKNOPERS, ön muhasebe akışını görev ve hatırlatmayla disipline eder.`,

'mukellef-evrak-takibi-nasil-yapilir':
`Mükellef evrak takibi, hangi mükelleften hangi evrakın (fatura, dekont, bordro, sözleşme) geldiğini ve hangisinin eksik olduğunu izlemektir. Evrak trafiğinin yoğun olduğu ofislerde kritiktir.

## Nasıl yapılır?

1. Her mükellef için **beklenen evrak listesi** oluştur.
2. Gelen evrakı **teslim kaydıyla** işaretle (kim, ne zaman getirdi).
3. **Eksik evrakı** görünür kıl ve mükellefe hatırlat.
4. Evrakı ilgili döneme ve göreve bağla.

Kağıt üzerinde "geldi mi gelmedi mi" tartışması hem zaman hem hata kaynağıdır. TEKNOPERS'in evrak/zimmet mantığı, teslimi fotoğraf ve kayıtla belgeler; eksik evrak tek bakışta görünür.`,

'e-fatura-ile-e-arsiv-arasindaki-fark-nedir':
`E-fatura ve e-arşiv fatura, ikisi de elektronik faturadır; temel fark **kime kesildiğidir**. E-fatura, karşı tarafın da **e-fatura sistemine kayıtlı** olduğu durumlarda (mükelleften mükellefe) kesilir. E-arşiv fatura ise **e-fatura kullanıcısı olmayanlara** ve nihai tüketicilere kesilir.

## Özet fark

1. **E-fatura:** alıcı da e-fatura kullanıcısıdır; belge sistem üzerinden alıcıya iletilir.
2. **E-arşiv:** alıcı e-fatura kullanıcısı değildir; belge elektronik düzenlenir, alıcıya e-posta/çıktı ile verilir.
3. Her ikisi de yasal olarak geçerli elektronik belgedir; kağıt fatura yerine geçer.

Hangi belgenin ne zaman kesileceği ve güncel zorunluluk sınırları GİB düzenlemelerine tabidir; kesin durum için mali müşavirinize danışın.`,

'muhasebe-ofisi-icin-takip-programi-nasil-olmali':
`Bir mali müşavir/muhasebe ofisi programı; **mükellef bazlı görev, son tarih ve evrak takibi** ile personel görev dağılımını tek ekranda toplamalıdır. Çünkü ofis aynı anda yüzlerce mükellefin işini yürütür.

## Olması gerekenler

1. **Mükellef bazlı takip:** her mükellefin yükümlülüğü ve son tarihi.
2. **Görev atama:** hangi personel, hangi mükellefin işini yapıyor.
3. **Otomatik hatırlatma:** yaklaşan beyan/ödeme tarihleri.
4. **Evrak takibi:** gelen/eksik evrak, teslim kaydı.
5. **İzole iletişim:** müvekkil/mükellef verisi WhatsApp yerine güvenli sistemde.

TEKNOPERS bu takibi kişiye değil sisteme bağlar; tarih, evrak ve sorumluluk kaybolmaz. Denemek için WhatsApp'tan yazabilirsin.`,

'restoran-personeli-vardiya-takibi-nasil-yapilir':
`Restoran, kafe ve otel gibi işletmelerde personel yoğun ve değişken vardiyalarla çalışır; en pratik yol telefondan **konum doğrulamalı giriş-çıkış** ve otomatik vardiya/fazla mesai hesabıdır.

## Nasıl yapılır?

1. Vardiyaları (sabah/akşam/gece) ve kişi ihtiyacını tanımla.
2. Personel işbaşında telefondan giriş yapar; konum ve saat kaydedilir.
3. Fazla mesai ve gece çalışması **otomatik** hesaplanır.
4. Part-time ve tam zamanlı ayrı izlenir.

Yoğun serviste kağıt föy ve sözlü takip karışır. TEKNOPERS, vardiya ve puantajı tek ekrana taşır; ay sonu bordro hatasız çıkar. Puantaj cetvelini denemek için aşağıdaki aracı kullanabilirsin.`,

'part-time-personel-mesai-takibi-nasil-yapilir':
`Part-time (kısmi süreli) personelde mesai, **saat bazında** takip edilir; giriş-çıkış saatleri kaydedilir ve ücret çalışılan saate göre hesaplanır.

## Nasıl yapılır?

1. Personeli **part-time** olarak tanımla, saatlik ücretini gir.
2. Her mesaide telefondan giriş-çıkış yapılır; süre otomatik hesaplanır.
3. Ay sonunda **toplam saat** ve hak ediş otomatik çıkar.
4. Fazla çalışma varsa ayrıca işlenir.

Part-time takibinde en sık hata, saatlerin elle toplanmasıdır. TEKNOPERS giriş-çıkışı saatiyle kaydeder ve toplamı otomatik verir; öğrenci/yarı zamanlı ekiplerde idealdir. Aşağıdaki puantaj aracını kullanabilirsin.`,

'sofor-ve-saha-personeli-nasil-takip-edilir':
`Şoför ve saha personeli sürekli hareket hâlinde olduğundan, takip telefondan **konum doğrulamalı giriş-çıkış** ve teslimat/görev kaydıyla yapılır.

## Nasıl yapılır?

1. Personel işbaşında ve teslimat noktasında telefondan **konum bildirir**.
2. Hangi görev/teslimat, kaçta yapıldı kaydedilir.
3. Zimmetli **araç ve ekipman** takip edilir.
4. Mesai ve fazla çalışma otomatik hesaplanır.

Sahadaki ekibi telefonla arayarak denetlemek sürdürülemez. TEKNOPERS, konumlu giriş ve görev kaydıyla "kim, nerede, ne yaptı" sorusunu net yanıtlar. Puantaj aracını aşağıdan kullanabilirsin.`,

'arac-zimmet-takibi-nasil-yapilir':
`Araç zimmet takibi, bir aracın (plaka) hangi personele, hangi kilometrede ve hangi durumda teslim edildiğini kayıt altına almaktır. Filo ve nakliyede kritiktir.

## Nasıl yapılır?

1. Aracı **plaka ve bilgileriyle** tanımla.
2. Teslimde **kime, ne zaman, kaç km'de** verildiğini yaz; fotoğrafla belgele.
3. İadede km ve durumu **karşılaştır**.
4. Kimde hangi araç var **tek listede** görünür.

Sözlü teslim, hasar ve yakıt anlaşmazlığına yol açar. TEKNOPERS'in zimmet modülü aracı fotoğraf, konum ve onayla kayda geçirir; iade takibini kolaylaştırır. Denemek için WhatsApp'tan yazabilirsin.`,

'markette-stok-takibi-nasil-yapilir':
`Markette stok takibi, ürünlerin giriş-çıkışını ve raf miktarını izlemektir. Çok sayıda ürün olduğundan en hızlı yöntem **barkodla** çalışmaktır.

## Nasıl yapılır?

1. Ürünleri **barkodla** tanımla (alış/satış fiyatı ile).
2. Satış ve mal girişinde barkod okut; stok **otomatik** güncellensin.
3. **Kritik seviye uyarısı** ile biten ürünü zamanında sipariş et.
4. Sayımda barkod okutarak fiili stoğu **karşılaştır**.

Elle stok takibi markette imkânsıza yakındır; kaçak ve raf boşluğu fark edilmez. TEKNOPERS barkodlu stokla giriş-çıkışı hızlandırır ve farkı görünür kılar. Denemek için WhatsApp'tan yazabilirsin.`,

'perakende-kasa-ve-vardiya-nasil-yonetilir':
`Perakende işletmede kasa ve vardiya yönetimi; günlük gelir-giderin kaydı, nakit/kart ayrımı ve personelin vardiya bazlı takibiyle sağlanır.

## Nasıl yapılır?

1. Her satışı **anında** kaydet; nakit ve kartı ayır.
2. Gün sonunda **beklenen kasa** ile fiili kasayı karşılaştır.
3. Personeli **vardiya** bazlı izle; giriş-çıkış ve fazla mesai otomatik.
4. Gün sonu **raporunu** al (ciro, ödeme türü, personel).

Kasa açığı ve vardiya karmaşası, takipsiz işletmenin sessiz zararıdır. TEKNOPERS kasa, stok ve personel takibini tek ekranda birleştirir. Denemek için WhatsApp'tan yazabilirsin.`,

'50-200-personelli-atolyede-mesai-takibi-nasil-yapilir':
`50 ila 200 personelli bir atölye veya orta ölçekli üretim tesisinde mesai takibinin en pratik yolu, cihaz gerektirmeyen **konum doğrulamalı mobil PDKS**'tir. Bu ölçekte biyometrik cihaz hem pahalı hem KVKK açısından risklidir; kart sistemi ise "başkasının yerine basma" hilesine açıktır.

## Nasıl yapılır?

1. **Bölüm/istasyonları** ve vardiyaları sisteme tanımla.
2. Personel işbaşında telefondan giriş yapar; GPS konumu ve saat kaydedilir.
3. **Cihaz Bağı** ile hesap tek telefona kilitlenir, kart hilesi engellenir.
4. Vardiya, fazla mesai ve taşeron bazlı hakediş **otomatik** hesaplanır.

Bu ölçekte elle veya kartla takip hem yavaş hem hataya açıktır. TEKNOPERS, orta ölçekli üretim için donanım maliyeti ve yasal riski sıfırlar. Puantaj cetvelini denemek için aşağıdaki aracı kullanabilirsin.`,

'cok-istasyonlu-uretimde-personel-takibi-nasil-yapilir':
`Çok istasyonlu (çok tezgâhlı) üretimde personel farklı noktalarda çalıştığından, takip **bölüm/istasyon bazlı** ve konum doğrulamalı yapılmalıdır.

## Nasıl yapılır?

1. Üretim hattını **bölüm ve istasyonlara** ayır.
2. Personel çalıştığı noktada telefondan giriş yapar; konumu doğrulanır.
3. Hangi personel, hangi istasyonda, ne kadar çalıştı **görünür** olur.
4. Vardiya ve fazla mesai otomatik hesaplanır, bordroya baz olur.

Sabit bir kapı cihazı yalnızca girişi kaydeder; üretim içindeki dağılımı göstermez. Konumlu mobil takip, "kim nerede çalışıyor" sorusunu net yanıtlar. TEKNOPERS bunu cihaz olmadan sağlar; puantaj aracını aşağıdan kullanabilirsin.`

};

module.exports = { CEVAPLAR: CEVAPLAR };
