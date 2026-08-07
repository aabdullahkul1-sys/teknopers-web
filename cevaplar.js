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

Hazır hatırlatma mesajı şablonları oluşturmak için aşağıdaki aracı kullanabilirsin.`

};

module.exports = { CEVAPLAR: CEVAPLAR };
