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
`Yıllık ücretli izin süresi, işçinin **kıdemine** göre belirlenir ve kanunda belirtilen süreler alt sınırdır; sözleşmeyle artırılabilir.

## Kıdeme göre izin

1. **1 – 5 yıl (5 dâhil):** 14 gün
2. **5 – 15 yıl:** 20 gün
3. **15 yıl ve üzeri:** 26 gün

Ek olarak: **18 yaşından küçük ve 50 yaşından büyük** işçilere yılda en az 20 gün izin verilir; yer altı işlerinde süreler 4'er gün artırılır. İzin, hafta tatili ile birlikte kesintisiz kullandırılır. Kişiye özel süreyi hesaplamak için ücretsiz [Yıllık İzin Hesaplama](https://teknopers.com.tr/araclar/yillik-izin-hesaplama/) aracını kullanabilirsiniz.

İzin hesabında işe giriş tarihi esas alınır ve her yıl yeni hak doğar; ilk yıl (deneme dâhil bir yıl) dolmadan yıllık izne hak kazanılmaz. Aynı işverene bağlı önceki çalışmalar kıdeme eklenir.`,

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
`İhbar tazminatı, bildirim süresine uyulmadan yapılan fesihlerde ödenir ve süresi işçinin **kıdemine** göre değişir. Bildirim süreleri kanunda haftalık olarak belirlenmiştir.

## Kıdeme göre bildirim süresi

1. **6 aydan az:** 2 hafta
2. **6 ay – 1,5 yıl:** 4 hafta
3. **1,5 – 3 yıl:** 6 hafta
4. **3 yıldan fazla:** 8 hafta

Bildirim süresine uymayan taraf, bu sürenin ücretini ihbar tazminatı olarak öder. Tutarı hesaplamak için ücretsiz [İhbar Tazminatı Hesaplama](https://teknopers.com.tr/araclar/ihbar-tazminati-hesaplama/) aracını kullanabilirsiniz.

İhbar tazminatı, kıdem tazminatından farklıdır: kıdem en az bir yıllık çalışmanın ardından belirli fesih hâllerinde ödenirken, ihbar yalnızca bildirim süresine uyulmadığında devreye girer. Bildirim süresi işletilerek yapılan fesihte ayrıca ihbar tazminatı doğmaz.`,

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
`İş Kanunu'na göre fazla çalışma süresi **yılda 270 saati** aşamaz. Haftalık 45 saati aşan çalışma fazla mesai sayılır ve her saati %50 zamlı ödenir.

## Bilinmesi gerekenler

1. **Yıllık sınır:** 270 saat (haftalara yayıldığında ortalama haftada ~5 saat).
2. **Onay:** fazla çalışma için işçinin yazılı onayı gerekir.
3. **Alternatif:** işçi, zamlı ücret yerine her fazla saat için 1,5 saat **serbest zaman** talep edebilir.

Sınırın aşılmaması için fazla mesainin kayıtlı tutulması önemlidir. Zamlı ücreti hesaplamak için ücretsiz [Fazla Mesai Hesaplama](https://teknopers.com.tr/araclar/fazla-mesai-hesaplama/) aracını kullanabilirsiniz.

270 saatlik sınır kişi başınadır ve yıl içinde takip edilmelidir; sınıra yaklaşan personel için ek çalışma yerine vardiya düzenlemesi gerekebilir. Onaysız veya sınır üstü fazla mesai, iş davalarında sık görülen bir ihtilaftır.`,

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
`Asgari ücretin işverene maliyeti, işçinin eline geçen net tutardan yüksektir; çünkü brüt asgari ücrete işveren SGK ve işsizlik primleri eklenir. Ayrıca varsa asgari ücret desteği bu maliyeti bir miktar düşürür.

## Maliyet neyden oluşur?

1. **Brüt asgari ücret** (işçi kesintileri bunun içinden yapılır).
2. **İşveren SGK payı** (yaklaşık %20,5; 5 puanlık teşvikle daha az).
3. **İşveren işsizlik payı** (%2).

2026 tutarları resmî olarak belirlendiğinde net rakam netleşir; oranlar ve destekler değişebildiği için güncel değerlerle hesaplamak gerekir. Doğru sonuç için ücretsiz [İşveren Maliyeti Hesaplama](https://teknopers.com.tr/araclar/isveren-maliyeti-hesaplama/) aracını kullanın.

Maliyeti düşüren asgari ücret desteği ve teşvikler her yıl yeniden düzenlenir; önceki yılın rakamıyla bütçe yapmak yanıltır. Kesin tutar, resmî asgari ücret ve prim oranları açıklandığında hesaplanmalıdır.`,

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
`Puantaj cetveli, her personelin ay boyunca hangi gün çalıştığını gösteren tablodur. Doğru bir cetvel hem bordronun hem SGK bildiriminin temelidir.

## Nasıl hazırlanır?

1. **Başlık:** işyeri, ay ve yıl yazılır.
2. **Personel listesi:** her satır bir çalışan.
3. **Günlük kodlama:** her gün için tam gün, yarım gün, izin, rapor, devamsız, hafta tatili gibi kodlar işlenir.
4. **Toplam:** çalışılan gün ve varsa hakediş satır satır hesaplanır.
5. **Lejant:** kullanılan kısaltmaların açıklaması eklenir.

Cetveli elle uğraşmadan hazırlamak, yevmiye/maaşla hakedişi otomatik hesaplamak ve Excel'e aktarmak için ücretsiz [Puantaj Cetveli](https://teknopers.com.tr/araclar/puantaj-cetveli/) aracını kullanabilirsiniz.

Cetvel ay sonunda toplu doldurulursa hem hata artar hem hafızaya dayanır; doğrusu devam durumunu her gün işlemektir. Konumlu dijital kayıt bunu otomatik yapar.`,

'excel-ile-puantaj-nasil-yapilir':
`Excel ile puantaj, bir tabloya personeli satır, günleri sütun yapıp her hücreye çalışma durumunu işlemekle olur. Küçük ekipler için başlangıç olarak iş görür ama sınırları vardır.

## Excel'in zorlukları

1. **Formül ve hata:** toplam ve hakediş formülleri elle kurulur, kolayca bozulur.
2. **Hile riski:** giriş saati kanıtlanamaz, sonradan doldurulabilir.
3. **Paylaşım:** dosya sürümleri karışır, ekipçe eşzamanlı çalışmak zordur.

Aynı işi tarayıcıda, otomatik toplayan ve hakedişi hesaplayan bir araçla daha hızlı ve hatasız yaparsınız: ücretsiz [Puantaj Cetveli](https://teknopers.com.tr/araclar/puantaj-cetveli/) aracı Excel'e de aktarır. Konumlu ve hilesiz kayıt için [PDKS ürününü](https://teknopers.com.tr/urun/pdks-personel-takip-sistemi) inceleyebilirsiniz.

Ekip büyüdükçe Excel'in sınırı belirginleşir: aynı dosyada birden çok kişi çalışamaz, sürümler karışır ve giriş saati kanıtlanamaz. Bu noktada online araç hem hız hem güvenilirlik sağlar.`,

'puantaj-programi-nasil-secilir':
`Puantaj programı seçerken, aracın yalnızca gün saymasına değil, **mesaiyi doğru ve hilesiz** kaydedip sonrasını (hakediş, izin, bordro) kolaylaştırmasına bakın.

## Nelere dikkat edilmeli?

1. **Konum doğrulamalı giriş:** personel yalnızca işyerindeyken mesai başlatabilmeli.
2. **Otomatik hesap:** çalışılan gün, fazla mesai ve hakediş kendiliğinden çıkmalı.
3. **İzin ve rapor takibi:** yıllık izin hakkı ve kullanımı görünmeli.
4. **Bordroya baz:** ay sonu veriler dışa aktarılabilmeli.
5. **Sabit fiyat:** personel sayısı ücreti artırmamalı.

Önce ücretsiz [Puantaj Cetveli](https://teknopers.com.tr/araclar/puantaj-cetveli/) aracıyla deneyebilir, otomatik ve GPS'li takip için TEKNOPERS'in [PDKS ürününü](https://teknopers.com.tr/urun/pdks-personel-takip-sistemi) inceleyebilirsiniz.

Seçimde ölçek de belirleyicidir: 5 kişilik bir işletmeyle 200 kişilik bir fabrikanın ihtiyacı aynı değildir. Küçük ekipte sadelik, büyük ekipte bölüm/vardiya bazlı raporlama ve toplu yönetim öne çıkar.`,

'saha-personeli-nasil-takip-edilir':
`Saha personeli tek bir yerde durmadığı için asıl soru "kim, nerede, ne zaman çalıştı ve görevini yaptı mı"dır. Sabit bir kapı cihazı bunu gösteremez.

## Nasıl takip edilir?

1. **Konumlu mesai:** personel sahadaki işine telefonundan konum teyidiyle başlar.
2. **Görev atama:** her göreve sorumlu ve son tarih atanır; personel tamamladığını işaretler.
3. **Konum/foto teyidi:** görevin yapıldığı zaman ve konumla, gerekirse fotoğrafla doğrulanır.
4. **Otomatik puantaj:** saha süresi ve fazla mesai kendiliğinden hesaplanır.

Böylece denetlenemeyen mesai ve "gitti mi gitmedi mi" tartışması biter. Saha ekipleri için TEKNOPERS'in [görev atama ve saha yönetimi ürününü](https://teknopers.com.tr/urun/gorev-atama-ve-saha-yonetimi) inceleyebilirsiniz.

Görev ve konum kaydının fotoğrafla desteklenmesi, yapılan işin kanıtını da oluşturur; özellikle montaj, bakım ve teslimatta 'yapıldı mı' sorusu böylece belgeyle yanıtlanır.`,

'insaat-santiyesinde-personel-takibi-nasil-yapilir':
`Şantiyede personel takibinin iki gerçeği vardır: işçiler farklı noktalara dağılır ve çoğu **yevmiyeli/taşeron** çalışır. Kağıt föy hem kaybolur hem de ay sonu hakediş tartışmasına yol açar.

## Nasıl yapılır?

1. **Konumlu-saatli giriş:** işçi şantiye alanındayken telefonundan mesai başlatır.
2. **Taşeron bazlı puantaj:** her ekip ayrı; hakediş ekip bazında otomatik toplanır.
3. **Zimmet:** verilen alet ve ekipman kayda geçer, iade takip edilir.
4. **SGK uyumu:** puantaj prim günleriyle karşılaştırılır.

Konumlu ve imzalı kayıt hem doğru hesaplama sağlar hem de olası davada delildir. Şantiye için [inşaat çözümünü](https://teknopers.com.tr/cozum/insaat-santiyeleri-icin-personel-taseron-ve-zimmet-takibi) ve ücretsiz [Puantaj Cetveli](https://teknopers.com.tr/araclar/puantaj-cetveli/) aracını inceleyebilirsiniz.

Şantiyede internet zayıf olabileceğinden sistemin çevrimdışı kayıt yapıp bağlantı gelince senkronlaması önemlidir; aksi hâlde saha kaydı kesintiye uğrar.`,

'temizlik-personeli-takip-programi-nasil-olmali':
`Temizlik şirketinde personel farklı binalara dağıldığı için asıl soru "kim, hangi lokasyonda, kaç saat çalıştı"dır. Program bu görünürlüğü sağlamalı ve müşteriye ispatlanabilir olmalıdır.

## Nasıl olmalı?

1. **Konum doğrulamalı giriş-çıkış:** personel gittiği binada telefonundan mesai başlatır.
2. **Lokasyon bazlı kayıt:** hangi ekip hangi müşteride kaç saat çalıştı otomatik ayrışır.
3. **Anlık takip:** eksik giden veya erken ayrılan personel yöneticiye anında görünür.
4. **Müşteri ispatı:** aylık lokasyon bazlı rapor, verilen hizmet saatinin belgesidir.

Bu, kağıt föyle mümkün olmayan bir netlik ve fatura/hakediş anlaşmazlığına son verir. Temizlik için [mobil PDKS ve saha çözümünü](https://teknopers.com.tr/cozum/temizlik-sirketleri-icin-mobil-pdks-ve-saha-takibi) inceleyebilirsiniz.

Çok müşterili şirketlerde raporun müşteri bazında ayrışması ayrıca değerlidir; her müşteriye kendi binasında verilen hizmetin saatini ayrı sunabilmek, fatura ve sözleşme yenilemede güçlü bir kozdur.`,

'guvenlik-personeli-devriye-takibi-nasil-yapilir':
`Güvenlikte iki şey ispatlanabilir olmalıdır: **görevlinin noktada olduğu** ve **devriye turlarının atıldığı**. Aksi halde müşteriye hizmet kanıtlanamaz ve boş kalan vardiya fark edilmez.

## Nasıl yapılır?

1. **Vardiya kapsaması:** her nokta için sabah/akşam/gece çizelgesi kurulur, açık kalan vardiya görünür.
2. **Devriye turu:** görevli noktaları telefonuyla (QR/NFC/konum) tarayarak tur kaydı bırakır.
3. **Atlanan tur uyarısı:** yapılmayan tur yöneticiye anında bildirilir.
4. **Müşteri raporu:** o gece hangi turların kaçta atıldığı zaman-konum damgasıyla raporlanır.

Bu kayıtlar hem hizmet ispatı hem de olası bir olayda delildir. Güvenlik için [devriye ve nokta kontrol çözümünü](https://teknopers.com.tr/cozum/guvenlik-sirketleri-icin-devriye-ve-nokta-kontrol) inceleyebilirsiniz.

Devriye kayıtları personel performansını da nesnelleştirir; kimin turları düzenli attığı, kimin atlamaları olduğu rakama döner. Bu hem müşteriye ispat hem iç değerlendirme sağlar.`,

'gps-ile-personel-giris-cikis-takibi-nasil-yapilir':
`GPS ile giriş-çıkış takibi, personelin mesaisini **doğru konumdayken** başlatıp bitirdiğini teyit etmeye dayanır. Böylece "işyerine gelmeden giriş yapma" veya başkasının yerine giriş engellenir.

## Nasıl yapılır?

1. **İşyeri/şantiye alanı tanımlanır:** giriş yalnızca bu alan içindeyken kabul edilir.
2. **Konumlu mesai başlatma:** personel telefonundan giriş yapar, konum damgalanır.
3. **Sahte konum bariyeri:** sahte GPS uygulamaları engellenir.
4. **Puantaja işleme:** giriş-çıkış otomatik puantaja ve fazla mesaiye yansır.

Konum yalnızca mesai başlat/bitir anında ve iş amacıyla alınır; sürekli takip yapılmaz, KVKK aydınlatma ve rıza akışıyla yürür. Cihazsız GPS'li takip için TEKNOPERS'in [PDKS ürününü](https://teknopers.com.tr/urun/pdks-personel-takip-sistemi) inceleyebilirsiniz.

Konumun yalnızca giriş-çıkış anında alındığını ve sürekli izleme olmadığını personele açıkça anlatmak, hem KVKK uyumu hem ekip güveni için önemlidir.`,

'cihazsiz-pdks-nedir':
`Cihazsız PDKS, personel devam takibini **kart veya parmak izi cihazı olmadan**, çalışanın kendi telefonu üzerinden konum doğrulamalı yapan sistemdir.

## Nasıl çalışır?

1. **Telefondan giriş:** personel, işyeri alanındayken uygulamadan mesai başlatır.
2. **Konum teyidi:** GPS ile işyerinde olduğu doğrulanır, sahte konum engellenir.
3. **Cihaz bağı:** giriş ilk telefona kilitlenir; "kartını arkadaşına verme" hilesi kapanır.
4. **Otomatik puantaj:** giriş-çıkış, mola ve fazla mesai kendiliğinden hesaplanır.

Donanım ve bakım maliyeti olmadığı, kuyruk ve hijyen sorunu yaşanmadığı için sabit cihazlara göre daha esnektir. Denemek için ücretsiz [Puantaj Cetveli](https://teknopers.com.tr/araclar/puantaj-cetveli/) aracını, tam çözüm için [PDKS ürününü](https://teknopers.com.tr/urun/pdks-personel-takip-sistemi) inceleyebilirsiniz.

Cihazsız yaklaşım küçük ekipten büyük fabrikaya ölçeklenir; donanım olmadığı için yeni şube veya saha açıldığında ek maliyet ve kurulum gerekmez, personel telefonuna uygulamayı kurup başlar.`,

'parmak-izi-cihazi-olmadan-mesai-takibi-nasil-olur':
`Parmak izi veya kart cihazı olmadan mesai takibi, personelin **kendi telefonundan konum doğrulamalı** giriş yapmasıyla olur. Bu yaklaşım hem donanım maliyetini kaldırır hem de hijyen ve kuyruk sorununu çözer.

## Nasıl çalışır?

1. **Telefondan giriş:** personel uygulamadan, işyeri alanındayken mesai başlatır.
2. **Cihaz bağı:** giriş ilk telefona kilitlenir; kart devri gibi "yerine giriş" engellenir.
3. **GPS teyidi:** konum doğrulamasıyla giriş güvence altına alınır.
4. **Otomatik puantaj:** giriş-çıkış, mola ve fazla mesai kendiliğinden hesaplanır.

Sabit bir kart cihazına göre daha esnek, daha ucuz ve hileye daha kapalıdır. Ücretsiz denemek için [Puantaj Cetveli](https://teknopers.com.tr/araclar/puantaj-cetveli/) aracını, tam çözüm için [PDKS ürününü](https://teknopers.com.tr/urun/pdks-personel-takip-sistemi) inceleyebilirsiniz.`,

'personel-gec-kalma-raporu-nasil-alinir':
`Geç kalma raporu, personelin işe başlama saatine göre **kaç kez ve ne kadar** geç kaldığını gösterir. Bu, hem adil bir değerlendirme hem de gerekirse tutanak için dayanak sağlar.

## Nasıl alınır?

1. **Vardiya saati tanımı:** her personelin/vardiyanın başlama saati tanımlanır.
2. **Konumlu giriş kaydı:** fiilî giriş saati otomatik kaydedilir.
3. **Geç kalma hesabı:** giriş ile vardiya saati arasındaki fark rapora işlenir.
4. **Dönemsel rapor:** ay içinde kim, kaç kez, toplam kaç dakika geç kaldı listelenir.

Bu rapor otomatik oluştuğunda değerlendirme rakama dayanır, "sürekli geç geliyor" tartışması nesnelleşir. Giriş-çıkışı ve raporları otomatik tutmak için TEKNOPERS'in [PDKS ürününü](https://teknopers.com.tr/urun/pdks-personel-takip-sistemi) inceleyebilirsiniz.`,

'vardiya-plani-nasil-yapilir':
`Vardiya planı, personelin hangi gün hangi zaman diliminde çalışacağını gösteren çizelgedir. İyi bir plan iki şeyi dengeler: **her vardiyada yeterli personel** ve **yasal sınırlara uyum** (gece 7,5 saat, haftalık 45 saat).

## Nasıl yapılır?

1. **Vardiya türleri:** sabah/akşam/gece gibi dilimler ve her birinde gereken kişi sayısı belirlenir.
2. **Dengeli dağıtım:** kişi başı gece ve fazla mesai yükü dengelenir, kimse üst üste geceye kalmaz.
3. **Kapsama kontrolü:** hiçbir gün bir vardiya boş kalmamalı.
4. **İzin ve rapor:** çizelgeye işlenmeli, açık kalan saat yedeklenmeli.

Bu planı hızlıca kurmak ve günlük kapsamayı görmek için ücretsiz [Vardiya Çizelgesi](https://teknopers.com.tr/araclar/vardiya-cizelgesi/) aracını kullanabilirsiniz.`,

'personel-izin-takibi-nasil-yapilir':
`İzin takibinin amacı, her personelin **hak ettiği, kullandığı ve kalan** iznini net tutmak ve talep sürecini kayıt altına almaktır. Elle tutulan izin, "kaç günüm kaldı" tartışmasına ve hatalı bakiyeye yol açar.

## Nasıl yapılır?

1. **Hak hesabı:** işe giriş tarihine ve kıdeme göre yıllık izin hakkı otomatik hesaplanır.
2. **Talep ve onay:** personel izin talep eder, yönetici onaylar; süreç kayıtlı olur.
3. **Bakiye:** kullanılan ve kalan izin her an görünür, puantajla tutarlı yürür.
4. **Belge:** onaylı izin kaydı, olası bir uyuşmazlıkta belgedir.

Yıllık izin hakkını görmek için ücretsiz [Yıllık İzin Hesaplama](https://teknopers.com.tr/araclar/yillik-izin-hesaplama/) aracını, izni personel takibiyle birlikte yürütmek için [PDKS ürününü](https://teknopers.com.tr/urun/pdks-personel-takip-sistemi) inceleyebilirsiniz.`,

'kucuk-isletmeler-icin-personel-takip-programi':
`Küçük işletmede birkaç kişilik ekip için pahalı bir sistem gerekmez; amaç, **kim ne zaman geldi-gitti** ve **ay sonu ne kadar çalıştı** sorusunu zahmetsiz yanıtlamaktır.

## Nasıl olmalı?

1. **Telefondan giriş:** personel kendi telefonundan konum teyidiyle mesai başlatır; kart cihazı gerekmez.
2. **Otomatik puantaj:** giriş-çıkış, izin ve fazla mesai otomatik toplanır.
3. **Basit izin takibi:** yıllık izin hakkı, kullanılan ve kalan izin görünür.
4. **Hakediş:** ay sonu çalışılan gün ve hakediş tek tıkla çıkar.

Fiyat işletme başınadır; personel sayısı arttıkça ücret artmaz. Ücretsiz başlamak için [Puantaj Cetveli](https://teknopers.com.tr/araclar/puantaj-cetveli/) aracını, tam çözüm için [PDKS ürününü](https://teknopers.com.tr/urun/pdks-personel-takip-sistemi) inceleyebilirsiniz.

Küçük ekipte en önemli beklenti kolay kurulum ve kullanımdır; birkaç kişilik işletme karmaşık yazılıma zaman ayıramaz. Telefondan çalışan sade bir araç en uygunudur.`,

'yillik-izin-ucreti-fesihte-nasil-odenir':
`İş sözleşmesi sona erdiğinde, işçinin **hak edip kullanmadığı** yıllık izin günleri ücrete çevrilerek ödenir. Bu, işçinin vazgeçemeyeceği bir haktır.

## Nasıl hesaplanır?

1. **Kullanılmayan gün:** hak edilen toplam izinden kullanılan izin düşülür.
2. **Esas ücret:** kalan gün, işçinin **son (fesih anındaki) çıplak brüt ücreti** üzerinden hesaplanır.
3. **Ödeme:** bu tutar fesihte diğer alacaklarla birlikte ödenir.

Kullanılmayan izin bakiyesinin doğru tutulması bu yüzden önemlidir. Hakkı hesaplamak için ücretsiz [Yıllık İzin Hesaplama](https://teknopers.com.tr/araclar/yillik-izin-hesaplama/) aracını, izin bakiyesini personel takibiyle yürütmek için [PDKS ürününü](https://teknopers.com.tr/urun/pdks-personel-takip-sistemi) kullanabilirsiniz.

Bu ödeme, işçi ister istifa etsin ister çıkarılsın yapılır; kullanılmayan izin hakkı fesihte muhakkak hesaplanır. İzin defterini düzenli tutmayan işveren, fesih anında beklenmedik bir yükle karşılaşabilir.`,

'gece-calismasi-ucreti-nasil-hesaplanir':
`Türk iş hukukunda gece çalışması için **otomatik bir ücret zammı yoktur**; gece çalışılan normal saatler normal ücretle ödenir. Zam, ancak süre sınırının aşılması hâlinde devreye girer.

## Nasıl işler?

1. **Gece süresi:** 20:00 – 06:00 arası kabul edilir.
2. **Süre sınırı:** işçi gece postasında 7,5 saatten fazla çalıştırılamaz.
3. **Fazla mesai:** 7,5 saati aşan gece çalışması fazla mesai sayılır ve %50 zamlı ödenir.

Yani gece ücreti farkı, çoğunlukla fazla mesai kuralından doğar. Zamlı tutarı hesaplamak için ücretsiz [Fazla Mesai Hesaplama](https://teknopers.com.tr/araclar/fazla-mesai-hesaplama/) aracını, gece dağılımını planlamak için [Vardiya Çizelgesi](https://teknopers.com.tr/araclar/vardiya-cizelgesi/) aracını kullanabilirsiniz.

Ayrıca gece çalışanların periyodik sağlık kontrolü ve 18 yaşından küçüklerin gece çalıştırılamaması gibi koruyucu kurallar vardır; bunlar ücret kadar uyum açısından da önemlidir.`,

'net-maastan-brut-maas-nasil-hesaplanir':
`Net maaştan brüte geçişte, işçinin eline geçen tutara **SGK işçi payı, işsizlik primi ve gelir/damga vergisi** eklenerek brüt bulunur. Bu, brütten nete hesabın tersidir ve elle yapması zordur çünkü vergi dilimi maaşa göre değişir.

## Mantığı

1. Net = Brüt − (SGK işçi payı + işsizlik + gelir vergisi + damga vergisi).
2. Belirli bir neti tutturmak için bu kesintiler geri eklenerek brüt aranır.
3. Asgari ücret düzeyinde gelir ve damga vergisi istisnası hesabı etkiler.

Doğru ve güncel rakam için elle uğraşmak yerine ücretsiz [Net–Brüt Maaş Hesaplama](https://teknopers.com.tr/araclar/net-brut-maas-hesaplama/) aracını kullanın; hem netten brüte hem brütten nete çevirir.`,

'brutten-nete-maas-nasil-hesaplanir':
`Brütten nete geçişte, brüt ücretten yasal kesintiler düşülerek işçinin eline geçecek net bulunur.

## Kesilen kalemler

1. **SGK işçi payı:** prime esas kazancın %14'ü.
2. **İşsizlik sigortası (işçi):** %1.
3. **Gelir vergisi:** kümülatif matraha göre %15'ten başlayan dilimlerde (asgari ücret tutarı istisna).
4. **Damga vergisi:** binde 7,59 (asgari ücrette istisna).

Kalan tutar net maaştır. Oranlar ve istisnalar yıldan yıla değişebildiği için doğru sonuç almak adına ücretsiz [Net–Brüt Maaş Hesaplama](https://teknopers.com.tr/araclar/net-brut-maas-hesaplama/) aracını kullanmanız en sağlıklısıdır.

Gelir vergisi kümülatif matraha bağlı olduğu için aynı brüt maaşın neti yıl içinde değişebilir; yılın sonuna doğru daha üst dilime girildiğinden net düşebilir. Oranlar ve istisnalar her yıl güncellendiğinden elle yapılan hesap kısa sürede eskir.`,

'bir-iscinin-isverene-toplam-maliyeti-nasil-hesaplanir':
`Bir işçinin işverene maliyeti, eline geçen net maaştan **çok daha fazladır**; net maaşın üstüne vergiler ve işveren primleri eklenir.

## Maliyet kalemleri

1. **Brüt ücret** (net + işçi SGK + işçi işsizlik + gelir/damga vergisi).
2. **İşveren SGK payı** (yaklaşık %20,5; teşvikle daha düşük).
3. **İşveren işsizlik payı** (%2).

Toplam maliyet = brüt + işveren primleri. Kabaca, net maaşın üzerine ciddi bir ek yük biner. Gerçek toplam maliyeti görmek için ücretsiz [İşveren Maliyeti Hesaplama](https://teknopers.com.tr/araclar/isveren-maliyeti-hesaplama/) aracını kullanın; güncel oranları mevzuattan teyit edin.

Bu doğrudan kalemlere ek olarak kıdem/ihbar tazminatı karşılığı, yıllık izin ve varsa yol-yemek gibi yan haklar da gerçek maliyeti artırır. Bu yüzden işe alım kararında net maaşa değil, toplam yıllık yüke bakmak gerekir.`,

'sgk-primi-nasil-hesaplanir':
`SGK primi, işçinin **prime esas kazancı** üzerinden hesaplanır ve bir kısmını işçi, bir kısmını işveren öder.

## Genel oranlar

1. **İşçi payı:** %14 SGK + %1 işsizlik = kazancın %15'i (maaştan kesilir).
2. **İşveren payı:** yaklaşık %20,5 SGK + %2 işsizlik; belirli şartlarda 5 puanlık teşvikle işveren SGK payı %15,5'e iner.
3. **Taban–tavan:** prim, asgari ücret (taban) ile SGK tavanı arasında hesaplanır.

Yani bir işçinin gerçek maliyeti brüt maaştan fazladır. İşveren üzerindeki toplam yükü görmek için ücretsiz [İşveren Maliyeti Hesaplama](https://teknopers.com.tr/araclar/isveren-maliyeti-hesaplama/) aracını kullanabilirsiniz. Güncel oranları mevzuattan teyit edin.

Prime esas kazanca yalnızca çıplak ücret değil, düzenli ödenen bazı ek ödemeler de girer; bu yüzden prim tabanı kimi zaman brüt maaştan yüksektir. Doğru taban, hatalı bildirimi ve cezayı önler.`,

'sgk-ise-giris-bildirgesi-nasil-verilir':
`SGK işe giriş bildirgesi, bir çalışanın **işe başlamadan önce** SGK'ya bildirilmesidir. Bu bildirim yapılmadan personel çalıştırmak idari para cezası doğurur.

## Genel adımlar

1. **Zamanlama:** bildirge, kural olarak işçinin işe başlamasından **en geç bir gün önce** verilir.
2. **Kanal:** bildirim SGK'nın e-Sigorta (işveren) sistemi üzerinden elektronik yapılır.
3. **Bilgiler:** işçinin kimlik, işe giriş tarihi ve meslek bilgisi girilir.
4. **Belge saklama:** onaylı bildirge özlük dosyasında tutulur.

Böylece hem yasal yükümlülük yerine gelir hem de olası bir denetimde kayıt hazır olur. Güncel süre ve ceza tutarları için SGK mevzuatını veya mali müşavirinizi teyit edin. Personel özlük ve giriş-çıkış takibini birlikte yürütmek için TEKNOPERS'in [PDKS ürününü](https://teknopers.com.tr/urun/pdks-personel-takip-sistemi) inceleyebilirsiniz.`,

'isten-cikis-kodlari-nelerdir':
`İşten çıkış kodları, bir çalışanın SGK'dan çıkışı yapılırken **çıkış nedenini** belirten standart kodlardır. Doğru kod, işsizlik ödeneği ve kıdem/ihbar tazminatı haklarını doğrudan etkiler.

## Sık kullanılanlardan bazıları

1. **İstifa** (işçinin kendi isteğiyle ayrılması).
2. **İşveren tarafından haklı/haksız fesih.**
3. **Belirli süreli sözleşmenin sona ermesi.**
4. **Emeklilik, askerlik, ölüm** gibi özel durumlar.

Yanlış kod hem işçinin hakkını hem işvereni riske atar; bu yüzden çıkış kodu dikkatle ve mevzuata uygun seçilmelidir. Güncel kod listesi ve doğru seçim için mali müşavirinizi teyit edin. Özlük ve çıkış süreçlerini düzenli tutmak için TEKNOPERS'in [PDKS ürününü](https://teknopers.com.tr/urun/pdks-personel-takip-sistemi) inceleyebilirsiniz.

Yanlış kod, işçinin işsizlik ödeneğini alamamasına veya işverenin haksız tazminat yüküyle karşılaşmasına yol açabilir; kod, gerçek fesih nedenine birebir uygun seçilmelidir.`,

'personel-primi-nasil-hesaplanir':
`Personel primi, sabit maaşın üstüne performansa göre eklenen ödemedir. Doğru kurgulandığında hem çalışanı motive eder hem de işverenin cirosuyla orantılı kalır.

## Yaygın prim yöntemleri

1. **Ciro yüzdesi:** çalışanın getirdiği cironun belirli bir yüzdesi.
2. **İşlem/satış başına:** her satış veya işlem için sabit tutar.
3. **Hedef primi:** aylık hedefe ulaşınca verilen ek ödeme.
4. **Kademeli prim:** hedef aşıldıkça artan oran.

Önemli olan kriterin **ölçülebilir ve şeffaf** olmasıdır; herkes primini nasıl hak ettiğini bilmeli. Prim senaryolarını denemek için ücretsiz [Personel Prim Hesaplama](https://teknopers.com.tr/araclar/personel-prim-hesaplama/) aracını kullanabilirsiniz.

Primin ne zaman ve hangi formülle ödeneceği baştan yazılı olmalı; sözlü ve değişken prim vaatleri ilerideki uyuşmazlıkların başlıca kaynağıdır. Şeffaf ve kayıtlı prim hem motivasyonu hem güveni korur.`,

'personel-prim-sistemi-nasil-kurulur':
`İyi bir prim sistemi üç şeyi sağlar: **adalet, ölçülebilirlik ve şeffaflık**. Belirsiz veya keyfî prim, motivasyonu artırmak yerine güveni bozar.

## Kurulum adımları

1. **Kriter belirle:** ciro, satış adedi, hedef veya kalite gibi net bir ölçüt seç.
2. **Ölçümü kayda bağla:** her çalışanın performansı otomatik ve doğru kaydedilmeli.
3. **Formülü yaz:** primin nasıl hesaplandığı herkese açık olmalı.
4. **Düzenli öde:** prim, dönem sonunda gecikmeden ve tutarlı ödenmeli.

Performansın kayıtlı olduğu bir sistemde prim otomatik ve tartışmasız çıkar. Senaryoları test etmek için [Personel Prim Hesaplama](https://teknopers.com.tr/araclar/personel-prim-hesaplama/) aracını kullanabilirsiniz.

Kurgu bir süre ölçülüp gözden geçirilmelidir; ilk hâli her zaman ideal olmaz. Ulaşılamayacak hedef motivasyonu kırar, çok kolay hedef ise primi maaşın sabit parçasına dönüştürür.`,

'deneme-suresi-en-fazla-ne-kadar-olabilir':
`4857 sayılı İş Kanunu'na göre iş sözleşmelerinde deneme süresi **en çok 2 ay** olarak kararlaştırılabilir; toplu iş sözleşmesiyle bu süre **4 aya** kadar uzatılabilir.

## Bilinmesi gerekenler

1. **Süre içinde fesih:** taraflar deneme süresi içinde sözleşmeyi ihbar süresi olmaksızın ve tazminatsız feshedebilir.
2. **Ücret ve haklar:** işçinin çalıştığı günlerin ücreti ve diğer hakları (SGK primi dâhil) saklıdır.
3. **Yazılı olması:** deneme süresi ancak sözleşmede kararlaştırılmışsa geçerlidir.

Yani deneme süresi işverene esneklik tanır ama işçinin çalışılan güne ait haklarını ortadan kaldırmaz. Bu genel bir bilgilendirmedir; somut durumda güncel mevzuatı ve bir hukukçuyu teyit edin. Personel giriş ve özlük takibini kolaylaştırmak için TEKNOPERS'in [PDKS ürününü](https://teknopers.com.tr/urun/pdks-personel-takip-sistemi) inceleyebilirsiniz.`,

'is-sozlesmesi-turleri-nelerdir':
`İş Kanunu'na göre iş sözleşmeleri, süresine ve çalışma biçimine göre farklı türlere ayrılır. Doğru türü seçmek, ilerideki fesih ve tazminat sonuçlarını belirler.

## Başlıca türler

1. **Belirsiz süreli:** en yaygın tür; bitiş tarihi yoktur.
2. **Belirli süreli:** objektif bir nedene bağlı, sonu belli sözleşme.
3. **Tam / kısmî zamanlı:** haftalık çalışma süresine göre.
4. **Deneme süreli:** ilk dönemi deneme olarak kararlaştırılan (en çok 2 ay, TİS ile 4 ay).
5. **Çağrı üzerine:** işçinin ihtiyaç halinde çağrıldığı esnek biçim.

Doğru tür seçimi için somut durumu bir hukukçu veya mali müşavirle değerlendirin. Personel özlük ve giriş takibini kolaylaştırmak için TEKNOPERS'in [PDKS ürününü](https://teknopers.com.tr/urun/pdks-personel-takip-sistemi) inceleyebilirsiniz.`,

'sgk-prim-gunu-nasil-hesaplanir':
`SGK'da bir ay **30 gün** kabul edilir; ayın 28, 30 veya 31 çekmesi bunu değiştirmez. Tam çalışan bir işçi için o ay 30 prim günü bildirilir.

## Nasıl belirlenir?

1. **Tam ay:** 30 gün.
2. **Eksik gün:** devamsızlık, ücretsiz izin veya rapor gibi nedenlerle çalışılmayan günler 30'dan düşülür.
3. **Eksik gün nedeni:** SGK'ya kodla (ör. 07 - puantaj) bildirilir; küçük işyerlerinde ekli puantajda imza gerekir.

Yani prim günü doğrudan puantaja dayanır. Prim günlerini doğru bildirmek için puantajın düzenli ve imzalı tutulması şarttır; ücretsiz [Puantaj Cetveli](https://teknopers.com.tr/araclar/puantaj-cetveli/) aracını kullanabilirsiniz.

Ay içinde işe giriş veya çıkış olduğunda o ayın prim günü çalışılan gün kadar bildirilir; tam ay çalışılmadığından 30 değil fiilî gün esas alınır.`,

'kuafor-randevu-sistemi-nasil-kurulur':
`Kuaförde randevu sistemi kurmak, dağınık telefon ve defter kaydını **tek bir dijital takvimde** toplamaktır. Kurulum sade olmalı ki günlük akışı yavaşlatmasın.

## Adımlar

1. **Çalışma saatleri:** personel bazlı uygunluk tanımlanır.
2. **Randevu kanalı:** online link ve/veya telefonla alınan randevu aynı takvime düşer.
3. **Otomatik hatırlatma:** randevu öncesi mesaj kurulur, no-show düşer.
4. **Müşteri kartı ve kasa:** geçmiş ve gün sonu ciro bağlanır.

Telefondan yönetilebilmeli ve fiyat işletme başına olmalıdır. Kurmak için TEKNOPERS'in [kuaför ve berber çözümünü](https://teknopers.com.tr/cozum/kuafor-ve-berberler-icin-online-randevu-ve-crm) inceleyebilir, hatırlatmaları [Randevu Hatırlatma aracıyla](https://teknopers.com.tr/araclar/randevu-hatirlatma-mesaji/) deneyebilirsiniz.

Sistemi kurarken mevcut müşteri listesini aktarmak önemlidir; geçmiş müşterilere ilk hatırlatmayı gönderdiğinizde sistemin değeri hemen görünür. Kurulum, günlük işi aksatmayacak şekilde kademeli yapılabilir.`,

'kuafor-randevu-programi-nasil-secilir':
`Kuaför randevu programı seçerken salonun günlük akışını kolaylaştıran özelliklere bakın: **online randevu**, **hatırlatma**, **müşteri kartı** ve **kasa**.

## Seçerken nelere bakılmalı?

1. **Online randevu:** müşteri uygun saati kendi seçebilmeli, telefon trafiği azalmalı.
2. **Otomatik hatırlatma:** no-show'u düşürmeli.
3. **Müşteri geçmişi:** ziyaret, tercih ve harcama tutulmalı; sadakat için hatırlatma yapılabilmeli.
4. **Personel primi ve gün sonu:** ciro ve prim otomatik hesaplanmalı.
5. **Telefondan yönetim ve sabit fiyat:** personel sayısı ücreti artırmamalı.

Bu kriterleri karşılayan bir sistem hem zaman kazandırır hem de müşteriyi geri getirir. Detay için TEKNOPERS'in [kuaför ve berber çözümünü](https://teknopers.com.tr/cozum/kuafor-ve-berberler-icin-online-randevu-ve-crm) inceleyebilirsiniz.

Ayrıca sistemin telefondan tam yönetilebilmesi kritiktir; salon sahibi çoğu zaman bilgisayar başında değil koltuk başındadır. Bilgisayar zorunluluğu olan bir sistem pratikte kullanılmaz.`,

'guzellik-salonu-randevu-programi-ozellikleri':
`Güzellik salonu randevu programında aranması gereken özellikler, salonun iki gelir kaynağını korur: **dolu takvim** ve **paket satışı**.

## Olması gereken özellikler

1. **Personel ve kabin bazlı takvim:** çakışma engellenir, gün planı net olur.
2. **Otomatik hatırlatma ve onay:** no-show düşer, koltuk boş kalmaz.
3. **Paket/seans takibi:** satılan paketten kalan seans otomatik düşer, yenileme hatırlatılır.
4. **Personel primi ve kasa:** her işlemin personeli kayıtlı; ciro ve prim otomatik çıkar.
5. **Müşteri kartı (KVKK):** geçmiş işlem ve tercih yetkili erişimle tutulur.

Bu özellikler bir arada olduğunda salon hem randevuyu hem de sadakati yönetir. Detay için TEKNOPERS'in [güzellik ve estetik çözümünü](https://teknopers.com.tr/cozum/guzellik-ve-estetik-merkezleri-icin-randevu-ve-seans-programi) inceleyebilirsiniz.`,

'berber-randevu-uygulamasi-nasil-olmali':
`Berber için randevu uygulaması sade olmalı: **hızlı randevu**, **otomatik hatırlatma** ve **basit kasa**. Karmaşık bir sistem, tek koltuklu bir dükkanda zaman kaybettirir.

## Nasıl olmalı?

1. **Online/telefon randevu:** müşteri uygun saati kendisi seçebilmeli, telefon trafiği azalmalı.
2. **Hatırlatma:** randevu öncesi mesajla gelmeme oranı düşmeli.
3. **Müşteri kartı:** düzenli müşterinin tercihi ve geçmişi tutulmalı.
4. **Kasa ve gün sonu:** günlük ciro ve varsa personel primi otomatik çıkmalı.

Telefondan yönetilebilmeli ve fiyat işletme başına olmalı. Berber ve kuaför için [online randevu ve CRM çözümünü](https://teknopers.com.tr/cozum/kuafor-ve-berberler-icin-online-randevu-ve-crm) inceleyebilir, hatırlatmaları [Randevu Hatırlatma aracıyla](https://teknopers.com.tr/araclar/randevu-hatirlatma-mesaji/) hemen deneyebilirsiniz.

Tek koltuklu dükkanlarda en önemli özellik sadeliktir; kurulum ve günlük kullanım birkaç dokunuşu geçmemelidir. Karmaşık bir sistem zaman kazandırmak yerine kaybettirir.`,

'online-randevu-sistemi-nasil-calisir':
`Online randevu sistemi, müşterinin **uygun saati kendisinin seçtiği** ve randevunun anında işletmenin takvimine düştüğü sistemdir. Telefon trafiğini azaltır ve mesai dışı da randevu almanızı sağlar.

## Nasıl çalışır?

1. **Uygunluk tanımı:** personel/kabin bazlı çalışma saatleri sisteme girilir.
2. **Müşteri seçimi:** müşteri boş bir saat seçer, bilgilerini bırakır.
3. **Anlık kayıt:** randevu takvime düşer, işletmeye ve müşteriye bildirim gider.
4. **Hatırlatma:** randevu öncesi otomatik mesajla no-show düşer.

Böylece randevu alma günün her saatine yayılır ve çakışma engellenir. Randevu ve müşteri takibini birlikte yürüten TEKNOPERS salon çözümlerini inceleyebilir, hatırlatmaları [Randevu Hatırlatma aracıyla](https://teknopers.com.tr/araclar/randevu-hatirlatma-mesaji/) hemen deneyebilirsiniz.

En büyük katkısı, işletme kapalıyken bile randevu alınabilmesidir; müşteri gece veya hafta sonu karar verdiğinde telefonu beklemeden yerini ayırır, böylece kaçan randevu azalır.`,

'salon-musteri-takip-programi-ne-ise-yarar':
`Salon müşteri takip programı, her müşterinin **geçmişini, tercihlerini, paketini ve harcamasını** bir arada tutar. Amaç, tek seferlik ziyaretçiyi düzenli müşteriye çevirmektir.

## Ne işe yarar?

1. **Müşteri kartı:** geçmiş işlemler ve tercihler kayıtlı olur.
2. **Sadakat:** düzenli müşteriye özel hatırlatma ve teklif yapılabilir.
3. **Paket/seans:** kalan seans ve yenileme takip edilir.
4. **Randevu ve hatırlatma:** no-show düşer, takvim dolu kalır.

Böylece salon sadece randevu değil, **müşteri ilişkisini** de yönetir. Detay için TEKNOPERS'in salon çözümlerini (ör. [kuaför ve berber](https://teknopers.com.tr/cozum/kuafor-ve-berberler-icin-online-randevu-ve-crm)) inceleyebilirsiniz.

Ayrıca müşteri kartındaki veriler hangi hizmetin çok tercih edildiğini ve kimin ne sıklıkla geldiğini gösterir; bu, kampanya ve stok kararlarını da yönlendirir. Mevcut bir müşteriyi elde tutmak, yeni müşteri kazanmaktan çok daha ucuzdur.`,

'musteri-sadakat-programi-nasil-kurulur':
`Salonda müşteri sadakat programı, tek seferlik ziyaretçiyi **düzenli müşteriye** çevirmek için kurulur. Temeli, müşteri geçmişinin kayıtlı olmasıdır.

## Nasıl kurulur?

1. **Müşteri kartı:** ziyaret, tercih ve harcama kaydedilir.
2. **Puan/indirim kurgusu:** belirli ziyaret veya harcamada ödül tanımlanır.
3. **Hatırlatma:** belirli süre gelmeyen müşteriye özel mesaj gider.
4. **Paket teşviki:** düzenli müşteriye paket ve yenileme önerilir.

Böylece müşteri geri gelmeye teşvik edilir ve boş kalan koltuk azalır. Müşteri geçmişi ve hatırlatmayı yöneten TEKNOPERS salon çözümlerini inceleyebilir, hatırlatma mesajlarını [Randevu Hatırlatma aracıyla](https://teknopers.com.tr/araclar/randevu-hatirlatma-mesaji/) oluşturabilirsiniz.

Sadakat kurgusu basit ama tutarlı olmalı; karmaşık puan sistemleri hem müşteriyi hem personeli yorar. En etkili yöntem çoğu zaman düzenli müşteriye zamanında hatırlatma ve küçük bir ayrıcalık sunmaktır.`,

'seans-paketi-takibi-nasil-yapilir':
`Seans paketi takibi, müşteriye satılan çok seanslı hizmette (ör. cilt bakımı, fizyoterapi, diş tedavisi) **kalan seansın** otomatik izlenmesidir. Elle tutulunca "kaç seansım kaldı" tartışması çıkar.

## Nasıl yapılır?

1. **Paket tanımı:** kaç seanslık paket satıldığı kaydedilir.
2. **Otomatik düşüm:** her ziyarette kalan seans bir azalır.
3. **Bitiş uyarısı:** paket bitmeye yakın yenileme hatırlatılır.
4. **Görünürlük:** müşteri ve işletme kalan seansı net görür.

Bu yapı hem güveni korur hem yenileme gelirini artırır. Paket ve randevuyu birlikte yöneten TEKNOPERS salon çözümlerini (ör. [güzellik ve estetik](https://teknopers.com.tr/cozum/guzellik-ve-estetik-merkezleri-icin-randevu-ve-seans-programi)) inceleyebilirsiniz.

Paketin son kullanma tarihi ve devir koşulları da baştan net olmalı; 'paketim yandı mı' türü tartışmaların önüne bu şeffaflık geçer. Kalan seansı müşteriye de gösterebilmek güveni artırır.`,

'guzellik-salonu-acma-maliyeti-ne-kadar':
`Güzellik salonu açma maliyeti; **konum, büyüklük, tadilat, cihaz ve ruhsat** kalemlerine göre büyük değişir. Sabit tek bir rakam vermek yanıltıcı olur; bileşenleri planlamak gerekir.

## Başlıca maliyet kalemleri

1. **Kira ve depozito** (semt ve metrekareye göre).
2. **Tadilat ve dekorasyon.**
3. **Cihaz ve ekipman** (yapılacak hizmete göre).
4. **Ruhsat, kayıt ve mesleki belgeler.**
5. **İlk dönem stok ve personel gideri.**

Bu kalemleri kendi rakamlarınızla toplayınca gerçekçi bir başlangıç bütçesi çıkar. Kalem kalem hesaplamak için ücretsiz [Salon Açma Maliyeti Hesaplama](https://teknopers.com.tr/araclar/salon-acma-maliyeti/) aracını kullanabilirsiniz.

Bu kalemlerin yanında ilk birkaç ayın kira, personel ve gider yükünü karşılayacak bir işletme sermayesi (nakit tampon) ayırmak şarttır; yeni işletmelerin en sık yaptığı hata bu tamponu atlamaktır.`,

'kuafor-acmak-icin-gerekli-belgeler-nelerdir':
`Kuaför veya berber dükkanı açarken hem işletme kaydı hem de mesleki yeterlilik belgeleri gerekir. Süreç ilçeye göre küçük farklar gösterse de ana belgeler benzerdir.

## Genellikle istenen belgeler

1. **İşyeri açma ve çalışma ruhsatı** (belediyeden).
2. **Vergi dairesi kaydı** ve imza sirküleri/beyanı.
3. **Ustalık veya mesleki yeterlilik belgesi.**
4. **Kira sözleşmesi** veya tapu.
5. **Kimlik ve gerekli sağlık/uygunluk belgeleri.**

Güncel ve tam liste için mutlaka bağlı olduğunuz **belediyeyi ve esnaf/meslek odasını** teyit edin. Açılış maliyetini planlamak için ücretsiz [Salon Açma Maliyeti Hesaplama](https://teknopers.com.tr/araclar/salon-acma-maliyeti/) aracını kullanabilirsiniz.

Belgeler tamamlanmadan faaliyete başlamak ruhsatsız çalışma cezası riskini doğurur; açılış öncesi belediyeden güncel kontrol listesini almak en güvenlisidir. Kiralık koltuk veya franchise modelinde ek sözleşmeler de gerekebilir.`,

'guzellik-salonu-ruhsati-nasil-alinir':
`Güzellik salonu açarken işyeri açma ve çalışma ruhsatı, bağlı bulunduğunuz belediyeden alınır. Süreç ilçeye göre küçük farklar gösterse de ana adımlar benzerdir.

## Genel adımlar

1. **İşletme kaydı:** vergi dairesi kaydı ve gerekli meslek belgeleri tamamlanır.
2. **Başvuru:** belediyeye işyeri açma ve çalışma ruhsatı başvurusu yapılır.
3. **Uygunluk:** mekânın sağlık, yangın ve imar koşullarına uygunluğu denetlenir.
4. **Belgeler:** kira sözleşmesi, ustalık/yeterlilik belgeleri ve kimlik evrakı sunulur.

Güncel liste ve ücretler için mutlaka bağlı olduğunuz belediyeyi ve meslek odasını teyit edin. Salon açılış maliyetini planlamak için ücretsiz [Salon Açma Maliyeti Hesaplama](https://teknopers.com.tr/araclar/salon-acma-maliyeti/) aracını kullanabilirsiniz.

Bazı hizmetler (ör. kalıcı makyaj, lazer) ek izin ve sağlık denetimi gerektirebilir; vereceğiniz hizmete göre ilave belge çıkabileceğinden başvuru öncesi kapsamı belediyeye sormak en güvenlisidir.`,

'salon-personeli-primi-nasil-belirlenir':
`Salonda personel primi genellikle **ciro veya işlem** üzerinden verilir; amaç, çalışanı daha çok müşteriye ve paket satışına teşvik etmektir.

## Yaygın yöntemler

1. **Ciro yüzdesi:** personelin getirdiği cironun belirli bir yüzdesi.
2. **İşlem başına:** her hizmet için sabit prim.
3. **Paket satış primi:** paket satışında ek prim.
4. **Hedef primi:** aylık hedefe ulaşınca verilen ödeme.

Önemli olan her işlemin **hangi personele ait olduğunun kayıtlı** olmasıdır; o zaman prim ay sonu otomatik ve tartışmasız çıkar. Prim senaryolarını denemek için ücretsiz [Personel Prim Hesaplama](https://teknopers.com.tr/araclar/personel-prim-hesaplama/) aracını, işlem-personel kaydı için TEKNOPERS salon çözümlerini kullanabilirsiniz.

Prim oranını belirlerken salonun kâr marjı gözetilmeli; çok yüksek prim çalışanı memnun etse de işletmeyi zorlar. Ciro yüzdesi genelde en dengeli yöntemdir, çünkü işletmenin geliriyle otomatik orantılı kalır.`,

'kuaforde-kasa-nasil-tutulur':
`Kuaförde kasa takibinin amacı, gün sonunda **ne kadar girdi, ne kadar çıktı ve kasa tutuyor mu** sorusunu net yanıtlamaktır. Deftere yazılan kasa hem karışır hem de personel bazında sorumluluk oluşturmaz.

## Nasıl tutulur?

1. **Her işlem kaydı:** yapılan hizmet, tutarı ve personeliyle kaydedilir.
2. **Ödeme türü:** nakit, kart ve paket kullanımı ayrışır.
3. **Gün sonu:** toplam ciro ve kasa devri otomatik çıkar.
4. **Fark kontrolü:** beklenen ile sayılan kasa arasındaki fark görünür.

Böylece kasa hem şeffaf olur hem de prim ve gün sonu raporu buradan beslenir. Randevu, kasa ve personeli birlikte yöneten [kuaför ve berber çözümünü](https://teknopers.com.tr/cozum/kuafor-ve-berberler-icin-online-randevu-ve-crm) inceleyebilirsiniz.

Kasa devrini vardiya veya personel bazında tutmak, açık/fazla durumunda sorumluluğu netleştirir; gün sonu farkın kimin vardiyasında oluştuğu böylece görünür olur.`,

'salon-gun-sonu-raporu-nasil-alinir':
`Salonda gün sonu raporu, o günün **cirosunu, işlem sayısını ve personel performansını** tek ekranda görmenizi sağlar; kasa ile tahsilatın tutarlılığını da kontrol eder.

## Neleri içermeli?

1. **Ciro ve işlem:** gün içi toplam gelir ve yapılan işlem sayısı.
2. **Personel bazlı dağılım:** her personelin cirosu ve prim esası.
3. **Ödeme türü:** nakit, kart ve varsa paket kullanımı ayrışmalı.
4. **Kasa kontrolü:** beklenen ile sayılan kasa arasındaki fark görünmeli.

Bu rapor otomatik oluştuğunda gün sonu kapanışı dakikalar sürer ve fark erken yakalanır. Randevu, kasa ve personeli birlikte yöneten bir sistemde bu rapor hazırdır; TEKNOPERS'in salon çözümlerini inceleyebilirsiniz.`,

'dis-klinigi-randevu-programi-nasil-secilir':
`Diş kliniği için program seçerken randevunun ötesine bakın: diş tedavisi **çok seanslıdır** ve her hastanın geçmişi, kalan seansı ve bakiyesi ayrı takip edilmelidir.

## Seçerken nelere bakılmalı?

1. **Hekim ve koltuk bazlı takvim:** çakışma engellenmeli.
2. **Hasta kartı:** tedavi geçmişi, radyografi ve notlar tutulmalı.
3. **Seans/paket takibi:** kalan seans otomatik sayılmalı.
4. **Otomatik hatırlatma:** no-show'u düşürmeli (boş koltuk pahalıdır).
5. **KVKK:** sağlık verisi yetkili erişimle korunmalı.

Bu kriterler bir arada olduğunda klinik hem takvimi hem hasta bakımını yönetir. Hatırlatmaları hemen denemek için [Randevu Hatırlatma aracını](https://teknopers.com.tr/araclar/randevu-hatirlatma-mesaji/), bütünleşik çözüm için TEKNOPERS'in [diş klinikleri çözümünü](https://teknopers.com.tr/cozum/dis-klinikleri-icin-randevu-hasta-ve-seans-takibi) inceleyebilirsiniz.

Ayrıca sistemin çok hekimli çalışmayı desteklemesi önemlidir; her hekimin kendi takvimi, hastaları ve performansı ayrı görünebilmeli, ortak bir karmaşaya dönüşmemelidir.`,

'diyetisyen-randevu-ve-danisan-takip-programi':
`Diyetisyen için doğru program, sadece randevu almanın ötesinde **danışanın sürecini** yönetmelidir: ölçüm geçmişi, beslenme planı ve paket takibi bir arada olmalı.

## Nasıl olmalı?

1. **Randevu ve hatırlatma:** görüşmeler çakışmadan planlanmalı, otomatik hatırlatmayla devamsızlık düşmeli.
2. **Danışan kartı:** kilo, ölçü ve vücut analizi geçmişi tarih tarih tutulmalı.
3. **Plan ve not:** beslenme planı ve seans notları karta bağlanmalı.
4. **Paket takibi:** görüşme paketinden kalan otomatik düşmeli.

Danışan ilerlemesini grafikle görünce bağlılık artar. Detay için TEKNOPERS'in [diyetisyen ve danışan takip çözümünü](https://teknopers.com.tr/cozum/diyetisyen-ve-danisan-takip-sistemi) inceleyebilir, hatırlatmaları [Randevu Hatırlatma aracıyla](https://teknopers.com.tr/araclar/randevu-hatirlatma-mesaji/) deneyebilirsiniz.

Online görüşme yapan diyetisyenler için sistemin uzaktan randevu ve dosya paylaşımını desteklemesi de önemlidir; danışan yüz yüze gelmeden süreç yürütülebilmelidir.`,

'pilates-studyosu-uyelik-takip-programi':
`Pilates ve reformer stüdyosunda asıl mesele **üyelik ve kalan ders takibi** ile **kontenjan yönetimidir**. Elle tutulan liste, "dersim var mıydı, kaç dersim kaldı" karışıklığına yol açar.

## Nasıl yapılır?

1. **Paket/üyelik tanımı:** her üyeye ders paketi tanımlanır.
2. **Yoklama ve düşüm:** katıldığı ders paketten otomatik düşer; kalan ders ve bitiş tarihi görünür.
3. **Kontenjan:** her dersin kontenjanı tanımlıdır; dolan derse kayıt engellenir, bekleme yönetilir.
4. **Yenileme hatırlatma:** üyelik bitişi önceden hatırlatılır, yenileme artar.

Bu yapı hem karışıklığı bitirir hem de yenileme gelirini korur. Detay için TEKNOPERS'in [pilates ve spor stüdyosu çözümünü](https://teknopers.com.tr/cozum/pilates-ve-spor-studyolari-icin-uyelik-sistemi) inceleyebilirsiniz.

Reformer gibi ekipmanlı derslerde kontenjan ayrıca kritiktir; alet sayısı sınırlı olduğundan derse kabul, boş alet sayısına göre otomatik sınırlanmalıdır.`,

'dovme-studyosu-randevu-sistemi-nasil-kurulur':
`Dövme ve piercing stüdyosunda randevular uzun sürelidir ve çoğu zaman **kapora** ile alınır; bu yüzden sistemin randevuyu, sanatçı takvimini ve müşteri iletişimini bir arada tutması gerekir.

## Nasıl kurulur?

1. **Sanatçı bazlı takvim:** her sanatçının uygunluğu ayrı; uzun seanslar çakışmadan planlanır.
2. **Kapora ve onay:** randevu kapora ile netleşir, gelmeme riski düşer.
3. **Otomatik hatırlatma:** seans öncesi hatırlatma ile no-show azalır.
4. **Müşteri kartı:** geçmiş çalışmalar, notlar ve iletişim tek yerde tutulur.

Bakım talimatı gibi mesajlar da otomatikleştirilebilir. Hatırlatma şablonları için [Randevu Hatırlatma aracını](https://teknopers.com.tr/araclar/randevu-hatirlatma-mesaji/), randevu ve müşteri takibini birlikte yürütmek için TEKNOPERS'in salon çözümünü inceleyebilirsiniz.`,

'veteriner-klinigi-randevu-programi-nasil-olmali':
`Veteriner kliniğinde randevu programı, muayeneyi planlamanın ötesinde **hasta geçmişini** ve **aşı/kontrol hatırlatmasını** yönetmelidir; asıl tekrar gelir buradadır.

## Nasıl olmalı?

1. **Randevu takvimi:** muayene ve işlemler çakışmadan planlanmalı.
2. **Hayvan + sahip kartı:** tedavi geçmişi sahibiyle eşleşmeli, kayıt karışmamalı.
3. **Aşı/kontrol hatırlatma:** tarihe göre sahibe otomatik mesaj gitmeli, tekrar ziyaret kaçmamalı.
4. **İlaç stoğu ve tahsilat:** klinik malzemesi ve ödeme tek ekranda takip edilmeli.

Bu yapı hem hasta bakımını iyileştirir hem de düzenli geliri korur. Detay için TEKNOPERS'in [veteriner çözümünü](https://teknopers.com.tr/cozum/veteriner-klinikleri-icin-randevu-ve-hasta-takip-sistemi) inceleyebilir, hatırlatmaları [Randevu Hatırlatma aracıyla](https://teknopers.com.tr/araclar/randevu-hatirlatma-mesaji/) deneyebilirsiniz.

Acil vakaların araya girebildiği bir alan olduğu için takvimde esneklik ve hızlı kayıt önemlidir; sistemin acil hasta eklemeyi kolaylaştırması günlük akışı rahatlatır.`,

'masaj-salonu-randevu-uygulamasi-nasil-secilir':
`Masaj ve SPA işletmesinde randevu uygulaması seçerken üç şeye bakın: **personel/oda çakışmasını** engellemesi, **no-show'u** azaltması ve **paket/seans** takibi yapabilmesi.

## Nelere dikkat edilmeli?

1. **Oda ve terapist bazlı takvim:** aynı anda iki randevu ya da dolu oda çakışması engellenmeli.
2. **Otomatik hatırlatma:** randevu öncesi WhatsApp/SMS ile gelmeme oranı düşürülmeli.
3. **Paket takibi:** seanslı paketlerde kalan seans otomatik sayılmalı.
4. **Müşteri kartı ve KVKK:** geçmiş, tercih ve iletişim yetkili erişimle tutulmalı.

Uygulama telefondan yönetilebilmeli ve fiyat işletme başına olmalı; personel sayısı ücreti artırmamalı. Hatırlatma mesajlarını hemen denemek için [Randevu Hatırlatma aracını](https://teknopers.com.tr/araclar/randevu-hatirlatma-mesaji/), bütünleşik çözüm için TEKNOPERS'in [güzellik ve estetik çözümünü](https://teknopers.com.tr/cozum/guzellik-ve-estetik-merkezleri-icin-randevu-ve-seans-programi) inceleyebilirsiniz.`,

'kucuk-isletmeler-icin-stok-takip-programi':
`Küçük işletmede stok takibi karmaşık olmak zorunda değil; amaç, **elde ne var, ne bitmek üzere** sorusunu her an yanıtlayabilmektir. Defterle tutulan stok hem güncel kalmaz hem de kayıp göstermez.

## Nasıl olmalı?

1. **Basit ürün kartı:** her ürün barkodla tanımlanır, telefonla okutulur.
2. **Giriş-çıkış:** alım ve satışta stok otomatik güncellenir.
3. **Kritik seviye uyarısı:** ürün azalınca sistem uyarır, popüler ürün rafta bitmez.
4. **Sayım ve fark:** düzenli sayımla kayıp ve fire erken görünür.

Ek cihaz gerekmez; personelin telefonu barkod okuyucu olur, böylece maliyet düşük kalır. Küçük işletme için [depo ve stok programını](https://teknopers.com.tr/urun/depo-stok-yonetim-programi) inceleyebilirsiniz.

En sık hata stoğu 'göz kararı' takip etmektir; bu, popüler ürün biterken raf parasının yavaş üründe bağlı kalmasına yol açar. Basit bir barkod takibi bu dengeyi görünür kılar.`,

'cari-hesap-takibi-nasil-yapilir':
`Cari hesap takibi, **kimden ne kadar alacağınız ve kime ne kadar borçlu olduğunuzu** her an net görmektir. Defterle tutulan cari, vadesi geçen alacağı ve unutulan tahsilatı gizler.

## Nasıl yapılır?

1. **Müşteri/tedarikçi kartı:** her cari için ayrı hesap açılır.
2. **Otomatik işleme:** her satış, alım ve tahsilat carihe düşer; bakiye kendiliğinden güncellenir.
3. **Vade takibi:** vadesi gelen ve geçen alacaklar otomatik listelenir.
4. **Ekstre:** müşteriye tek tıkla hesap ekstresi gönderilir.

Böylece "bu müşteri ne kadar borçlu, vadesi ne zaman" sorusu anında yanıtlanır ve tahsilat disiplini oturur. Cari, teklif ve satışı birlikte yürütmek için [satış, teklif ve cari programını](https://teknopers.com.tr/urun/satis-teklif-ve-cari-programi) inceleyebilirsiniz.`,

'on-muhasebe-programi-nedir':
`Ön muhasebe programı, bir işletmenin **günlük mali hareketlerini** (gelir, gider, cari, kasa, fatura) takip ettiği yazılımdır. Resmî beyanname işini değil, işletmenin kendi kayıt ve takibini kolaylaştırır.

## Neleri kapsar?

1. **Gelir-gider:** para giriş-çıkışı kaydedilir.
2. **Cari hesap:** kimden ne kadar alacak, kime ne kadar borç görünür.
3. **Kasa/banka:** nakit ve banka hareketleri izlenir.
4. **Fatura ve tahsilat:** kesilen fatura ve ödemeler takip edilir.

Resmî beyanı mali müşavirinizle yürütür, verileri kolayca aktarırsınız. Detay için TEKNOPERS'in [ön muhasebe programını](https://teknopers.com.tr/urun/on-muhasebe-programi) inceleyebilirsiniz.

Ön muhasebe, resmî (genel) muhasebeden farklıdır: resmî muhasebe beyanname, defter tasdiki ve mali tabloları kapsar ve mali müşavir yürütür. Ön muhasebe ise işletmenin günlük takibini kolaylaştırır ve müşavire temiz veri sağlar; ikisi birbirini tamamlar.`,

'fatura-ve-tahsilat-takibi-nasil-yapilir':
`Fatura ve tahsilat takibinin amacı, **kesilen faturanın ödenip ödenmediğini** ve vadesini gözden kaçırmamaktır. Takip edilmeyen fatura, geciken ve unutulan tahsilata dönüşür.

## Nasıl yapılır?

1. **Fatura kaydı:** kesilen her fatura carihe ve ilgili müşteriye bağlanır.
2. **Tahsilat işleme:** yapılan ödeme carihe düşer, bakiye güncellenir.
3. **Vade takibi:** vadesi gelen ve geçen faturalar otomatik listelenir.
4. **Hatırlatma:** geciken ödeme için müşteriye ekstre veya hatırlatma gönderilir.

Böylece nakit akışı görünür olur ve tahsilat disiplini oturur. Fatura, cari ve tahsilatı birlikte yürütmek için [satış, teklif ve cari programını](https://teknopers.com.tr/urun/satis-teklif-ve-cari-programi) inceleyebilirsiniz.

Tahsilatı hızlandırmanın en etkili yolu vadesi yaklaşan faturayı önceden hatırlatmaktır; geç ödemelerin çoğu unutkanlıktandır. Düzenli ekstre, alacağın takip edildiğini de gösterir.`,

'barkod-ile-stok-takibi-nasil-yapilir':
`Barkodla stok takibi, ürünlerin giriş-çıkış ve sayımını **okutarak** yapmaktır; elle liste tutmaya göre hem çok daha hızlı hem de çok daha az hatalıdır.

## Nasıl yapılır?

1. **Ürünü tanımla:** her ürüne barkod atanır (mevcut barkod da kullanılabilir).
2. **Telefonla okut:** giriş, çıkış ve sayımda ürün telefon kamerasıyla okutulur; ek cihaz gerekmez.
3. **Anlık güncelleme:** okutulan miktar stoğa işlenir, elle aktarma hatası olmaz.
4. **Kritik uyarı ve sayım farkı:** azalan ürün uyarılır, sayım farkı anında raporlanır.

Böylece stok her an güncel kalır ve kayıp erken yakalanır. Barkodlu stok ve zimmeti birlikte yürütmek için [depo ve stok yönetim programını](https://teknopers.com.tr/urun/depo-stok-yonetim-programi) inceleyebilirsiniz.`,

'kvkk-kucuk-isletmeler-icin-ne-gerektirir':
`KVKK (Kişisel Verilerin Korunması Kanunu), küçük işletmeler dâhil **kişisel veri işleyen herkesi** kapsar. Müşteri telefonu, personel özlük bilgisi veya randevu kaydı tutmak bile bu kapsamdadır.

## Temel yükümlülükler

1. **Aydınlatma:** kişilere hangi verinin neden işlendiği bildirilmeli.
2. **Açık rıza:** gereken hâllerde kişinin onayı alınmalı.
3. **Veri güvenliği:** veriler yetkisiz erişime karşı korunmalı.
4. **VERBİS:** belirli şartlarda sicil kaydı gerekebilir.

Yani "küçüğüz, bizi bağlamaz" doğru değildir. Verileri yetkili erişimle, aydınlatma ve rıza akışına uygun tutan bir sistem işi kolaylaştırır; TEKNOPERS çözümleri bu akışlarla birlikte gelir. Somut yükümlülük için bir hukukçuya danışın.

Uygulamada en sık atlanan nokta, personel özlük verileri ile eski müşteri kayıtlarının korunmasıdır; bunlar da kişisel veridir. Veriyi gereğinden uzun saklamamak ve yetkisiz erişime kapatmak temel adımdır.`,

'randevu-hatirlatma-mesaji-ornekleri':
`İyi bir randevu hatırlatma mesajı kısa, net ve nazik olmalı; tarih-saat, işletme adı ve gerekiyorsa iptal/erteleme yolunu içermelidir. İşte kullanabileceğiniz örnek kalıplar:

## Örnek mesajlar

1. **Hatırlatma:** "Merhaba [Ad], yarın saat [SS] [İşletme] randevunuzu hatırlatırız. Değişiklik için: [telefon]."
2. **Onay:** "Randevunuz [Tarih] [SS] için oluşturuldu. Görüşmek üzere!"
3. **Sonrası (teşekkür):** "Bizi tercih ettiğiniz için teşekkürler [Ad]. Görüşlerinizi bekleriz."
4. **Gelmeyen müşteri:** "Sizi özledik [Ad]. Yeni randevu için buradayız: [telefon]."

Bu mesajları sektöre ve tona göre otomatik üretmek için ücretsiz [Randevu Hatırlatma Mesajı Oluşturucu](https://teknopers.com.tr/araclar/randevu-hatirlatma-mesaji/) aracını kullanabilirsiniz; SMS karakter sayısını da gösterir.

Mesajda müşteriye 'siz' diye hitap etmek ve tek net eylem (onayla/ara) sunmak dönüşümü artırır; birden çok istek veya uzun metin, mesajın okunmadan geçilmesine yol açar.`,

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
`150 kişilik bir fabrikada kart veya parmak izi cihazı hem pahalıdır hem de sabah girişte kuyruk oluşturur; ayrıca kart devri ("arkadaşına verme") sorununu tam çözmez.

## Cihazsız yaklaşım

1. **Telefondan konumlu giriş:** her personel kendi telefonundan, fabrika sahasındayken mesai başlatır.
2. **Cihaz bağı:** giriş ilk telefona kilitlenir, başkasının yerine giriş engellenir.
3. **Bölüm/hat bazında puantaj:** çalışma otomatik ayrışır, vardiya ve fazla mesai kendiliğinden hesaplanır.
4. **Anlık görünürlük:** kim içeride, kim geç kaldı, hangi hatta kaç kişi var yönetici anında görür.

Donanım kurulumu olmadığı için genellikle 1 günde devreye girer. Kalabalık üretim için [fabrika çözümünü](https://teknopers.com.tr/cozum/fabrika-icin-cihazsiz-pdks-ve-personel-takibi) ve ücretsiz [Puantaj Cetveli](https://teknopers.com.tr/araclar/puantaj-cetveli/) aracını inceleyebilirsiniz.`,

'whatsapp-ile-musteri-verisi-paylasmak-yasal-mi':
`Müşteri veya müvekkile ait kişisel verileri (kimlik, sağlık, dava/işlem bilgisi) WhatsApp gibi sunucuları yurt dışında olan platformlar üzerinden paylaşmak **KVKK açısından risklidir** ve ihlal oluşturabilir.

## Neden riskli?

1. Veri sorumlusu, kişisel veriyi **uygun güvenlik düzeyinde** korumakla yükümlüdür; WhatsApp'ta erişim kayıtları tutulamaz, veri çıkışı kontrol edilemez.
2. Kişisel verinin **yurt dışına aktarımı** için ek şartlar gerekir; sunucuların yurt dışında olması bu yükümlülüğü doğurur.
3. Ekran görüntüsüyle veri sızdırılması engellenemez; işten ayrılan personel tüm geçmişi yanında götürür.

Özel nitelikli veriler söz konusu olduğunda, güvenli olmayan üçüncü taraf platformlara yükleme, ağır sonuçlar doğurabilir.

Doğru yol, iletişimi izole ve yetkilendirilmiş bir sisteme taşımaktır: TEKNOPERS görevleri büroya özel şifreli ekrandan atar. Kesin hukuki değerlendirme için bir uzmana danışın.`,

'evrak-zimmet-tutanagi-nasil-tutulur':
`Evrak zimmet tutanağı, önemli bir belgenin **kime, ne zaman** teslim edildiğini gösteren kayıttır. Özellikle hukuk bürosu, muhasebe ofisi ve resmî evrak yoğun işletmelerde kritiktir.

## Nasıl tutulur?

1. **Evrak tanımı:** belge ve dosya sisteme kaydedilir.
2. **Teslim kaydı:** kim aldı, ne zaman aldı, imza/onayla kayda geçer.
3. **İade takibi:** belgenin geri dönüşü izlenir.
4. **Delil:** kayıp veya anlaşmazlıkta tutanak belge niteliği taşır.

Böylece "evrak kimdeydi, nereye gitti" belirsizliği ortadan kalkar. Evrak ve ekipman zimmetini birlikte tutmak için TEKNOPERS'in [zimmet takip ürününü](https://teknopers.com.tr/urun/zimmet-takip-sistemi) inceleyebilirsiniz.

Özellikle ıslak imzalı asıl belgeler, mahkeme evrakı ve resmî yazışmalarda zimmet şarttır; bu belgelerin kaybı telafisi zor sonuçlar doğurur. Dijital zimmet, kimin ne zaman aldığını arşivler ve arama kolaylığı sağlar.`,

'ekipman-zimmet-takibi-nasil-yapilir':
`Ekipman (demirbaş) zimmet takibi, cihaz, alet ve donanımın **kimde olduğunu** belgelemektir. Kayıt tutulmazsa kayıp ve haksız suçlama kaçınılmazdır.

## Nasıl yapılır?

1. **Demirbaş tanımı:** her ekipman sisteme kaydedilir.
2. **Zimmet:** personele teslimde kim, ne, ne zaman aldı kaydedilir.
3. **İade/devir:** hareketler kayda geçer, zimmet zinciri kopmaz.
4. **Çıkış kontrolü:** işten ayrılışta üzerindeki tüm zimmet tek ekranda görünür.

İmzalı/onaylı zimmet kaydı, olası bir uyuşmazlıkta işverenin en güçlü belgesidir. Detay için TEKNOPERS'in [zimmet takip ürününü](https://teknopers.com.tr/urun/zimmet-takip-sistemi) inceleyebilirsiniz.

Özellikle laptop, telefon ve el terminali gibi taşınabilir cihazlarda zimmet kritiktir; kayda seri numarası ve teslim tarihi eklemek, kaybolan bir cihazın kimde olduğunu ileride tartışmasız gösterir.`,

'taseron-personel-takibi-nasil-yapilir':
`Taşeron personel takibinin özü, her ekibin çalışmasını **ayrı ve belgelenebilir** tutmaktır. Karışık tutulan puantaj, ay sonu "kim kaç gün çalıştı" tartışmasına ve hakediş anlaşmazlığına yol açar.

## Nasıl yapılır?

1. **Ekip bazlı tanım:** her taşeron ve ekip ayrı tanımlanır; işçiler o ekibe bağlanır.
2. **Konumlu-saatli puantaj:** işçi sahadayken mesai başlatır; kayıt hem doğru hem imzalı olur.
3. **Ekip bazlı hakediş:** puantaj otomatik olarak taşerona göre toplanır, her ekibin gün × yevmiye hakedişi ayrı çıkar.
4. **SGK karşılaştırma:** taşeron puantajı SGK prim günleriyle tutarlı yürür.

Konumlu ve imzalı kayıt, olası bir davada işverenin en güçlü delilidir. İnşaat ve şantiye için [taşeron ve zimmet çözümünü](https://teknopers.com.tr/cozum/insaat-santiyeleri-icin-personel-taseron-ve-zimmet-takibi) inceleyebilirsiniz.`,

'depo-stok-sayimi-nasil-yapilir':
`Depo sayımının iki düşmanı vardır: **yavaşlık** ve **insan hatası**. Elle listeyle yapılan sayım hem uzun sürer hem de fark nereden çıktı belirsiz kalır.

## Nasıl yapılır?

1. **Barkodla okutma:** her ürün telefonla okutulur; ek cihaz gerekmez, sayım kat kat hızlanır.
2. **Anlık güncelleme:** okutulan miktar stoğa işlenir, elle aktarma hatası olmaz.
3. **Fark raporu:** sistem stoğu ile fiili sayım arasındaki fark anında görünür.
4. **Kayıp/fire analizi:** düzenli sayımla hangi üründe sürekli fark olduğu ortaya çıkar.

Böylece sayım hem hızlanır hem de güvenilir olur, kayıp erken yakalanır. Depo sayımı ve zimmeti birlikte yürütmek için [depo ve stok yönetim programını](https://teknopers.com.tr/urun/depo-stok-yonetim-programi) inceleyebilirsiniz.`,

'ocr-ile-fatura-okuma-nedir':
`OCR ile fatura okuma, kağıt veya PDF bir faturanın fotoğrafından **tarih, tutar, KDV ve kalem** gibi bilgilerin otomatik okunup sisteme aktarılmasıdır. Amaç, elle veri girişini ve bundan doğan hataları ortadan kaldırmaktır.

## Nasıl çalışır?

1. **Görüntü alınır:** fatura telefonla fotoğraflanır veya PDF yüklenir.
2. **Alanlar okunur:** yazılım tarih, tutar, vergi ve satıcı bilgisini ayıklar.
3. **Kontrol edilir:** okunan veriler kullanıcıya gösterilir, gerekirse düzeltilir.
4. **Kaydedilir:** onaylanan fatura carihe ve gider kaydına işlenir.

Böylece yüzlerce faturayı elle girmek yerine dakikalar içinde işlersiniz. TEKNOPERS bu tür yapay zekâ destekli araçları iş akışına ekleyebilir; [ön muhasebe programını](https://teknopers.com.tr/urun/on-muhasebe-programi) inceleyebilirsiniz.`,

'teklif-nasil-hazirlanir':
`Profesyonel bir teklif hem hızlı hazırlanmalı hem de sonradan takip edilebilmelidir. Elle hazırlanan teklif hem zaman alır hem de "hangi müşteriye ne teklif ettim, onayladı mı" sorusunu belirsiz bırakır.

## Adımlar

1. **Ürün ve fiyatları tanımlayın:** sistemde tanımlı olunca teklif dakikalar içinde oluşur.
2. **Müşteri ve kalemleri seçin:** miktar ve indirimle birlikte toplam otomatik hesaplanır.
3. **Tek tıkla gönderin:** teklif PDF veya WhatsApp ile iletilir.
4. **Takip edin:** onaylanan teklif siparişe döner, stoktan düşer ve carihe işlenir.

Böylece teklif → sipariş → tahsilat tek akışta yürür, hiçbir teklif havada kalmaz. Bu akış için TEKNOPERS'in [satış, teklif ve cari programını](https://teknopers.com.tr/urun/satis-teklif-ve-cari-programi) inceleyebilirsiniz.`,

'vergi-ve-e-belge-takibi-nasil-yapilir':
`Vergi ve e-belge takibinde amaç, **son tarihleri kaçırmamak** ve **belgeleri düzenli tutmaktır**. Gecikmiş bir beyan ceza, kaybolmuş bir belge ise ihtilaf demektir.

## Nasıl yapılır?

1. **Takvim ve hatırlatma:** KDV, muhtasar ve diğer beyan tarihleri sisteme girilir, yaklaşınca hatırlatır.
2. **e-Fatura/e-Arşiv düzeni:** kesilen ve gelen belgeler carihe ve sürece bağlanır.
3. **Eksik belge kontrolü:** hangi mükellef veya işlem için belge eksik, tek ekranda görünür.
4. **Müşavire aktarım:** kayıtlar dışa aktarılarak resmi beyan mali müşavirle yürütülür.

Ön muhasebe düzeyinde bu takibi TEKNOPERS'in [ön muhasebe programı](https://teknopers.com.tr/urun/on-muhasebe-programi) ile tutar, resmi beyanı müşavirinizle yürütürsünüz. Güncel oran ve süreler için mevzuatı teyit edin.`,

'on-muhasebede-takip-disiplini-nasil-saglanir':
`Ön muhasebede asıl fayda kayıt tutmaktan değil, **düzenli ve eksiksiz** tutmaktan gelir. Dağınık kayıt, vadesi geçen alacağı ve unutulan gideri gizler.

## Disiplin nasıl kurulur?

1. **Anında kayıt:** her satış, gider ve tahsilat işlem anında girilir, biriktirilmez.
2. **Cari düzeni:** her müşteri/tedarikçi ayrı hesapta izlenir.
3. **Vade takibi:** vadesi gelen ve geçen alacaklar düzenli kontrol edilir.
4. **Dönemsel kontrol:** ay sonu kasa, cari ve fatura tutarlılığı gözden geçirilir.

Bu disiplin, resmî beyan öncesi mali müşavirinize temiz veri sağlar. Düzenli ön muhasebe için TEKNOPERS'in [ön muhasebe programını](https://teknopers.com.tr/urun/on-muhasebe-programi) inceleyebilirsiniz.

Disiplinin en zayıf halkası genelde küçük nakit harcamalardır; kaydedilmezse gider olduğundan düşük, kâr olduğundan yüksek görünür. Küçük gideri de anında girmek gerçek resmi verir.`,

'mukellef-evrak-takibi-nasil-yapilir':
`Muhasebe ofisinde mükellef evrak takibinin amacı, **hangi belgenin geldiğini, hangisinin eksik olduğunu** ve kimde olduğunu her an bilmektir. Kaybolan bir belge hem gecikme hem mükellefle güven sorunu demektir.

## Nasıl yapılır?

1. **Mükellef bazlı kayıt:** gelen her evrak ilgili mükellefe ve döneme bağlanır.
2. **Eksik belge takibi:** hangi mükellef için hangi belge eksik, tek ekranda görünür.
3. **Zimmet:** ofis içinde belgenin kimde olduğu kayıtlıdır.
4. **Süreçle bağ:** evrak, ilgili beyan/işlem süreciyle ilişkilendirilir.

Böylece "o fatura geldi mi, kimdeydi" belirsizliği ortadan kalkar. Detay için TEKNOPERS'in [mali müşavir çözümünü](https://teknopers.com.tr/cozum/mali-musavir-ve-muhasebe-ofisleri-icin-evrak-ve-surec-takibi) inceleyebilirsiniz.

Evrakın dijital kopyasını da sisteme eklemek, asıl belge ofis içinde dolaşırken bile işlemin yapılabilmesini sağlar; bu, hem hızı artırır hem de asıl belgenin yıpranmasını önler.`,

'e-fatura-ile-e-arsiv-arasindaki-fark-nedir':
`E-fatura ve e-arşiv fatura, kâğıt faturanın elektronik hâlleridir; temel fark **alıcının kim olduğudur**.

## Fark

1. **e-Fatura:** hem satıcının hem alıcının e-fatura sistemine **kayıtlı** olduğu durumlarda, sistemler arası elektronik olarak kesilir.
2. **e-Arşiv Fatura:** alıcı e-fatura kullanıcısı **değilse** (ör. nihai tüketici veya sisteme kayıtsız firma) kesilen elektronik faturadır.
3. **Ortak nokta:** ikisi de yasal olarak kâğıt faturayla aynı geçerliliğe sahiptir.

Yani hangisinin kesileceğini alıcının sisteme kayıtlı olup olmaması belirler. Ön muhasebe düzeyinde fatura ve cari takibini yürütmek için TEKNOPERS'in [ön muhasebe programını](https://teknopers.com.tr/urun/on-muhasebe-programi) inceleyebilirsiniz. Güncel zorunluluk sınırlarını mevzuattan teyit edin.

Hangi işletmenin e-fatura/e-arşiv kullanmak zorunda olduğu ciro ve sektöre göre belirlenir ve bu sınırlar zaman zaman düşürülür; kapsamda olup olmadığınızı güncel tebliğden veya müşavirinizden teyit edin.`,

'muhasebe-ofisi-icin-takip-programi-nasil-olmali':
`Bir mali müşavirlik/muhasebe ofisinde asıl risk hesap hatası değil, **süre ve evrak takibinin kaçmasıdır**: bir beyanname atlanırsa ceza doğar, bir belge kaybolursa mükellefle sorun yaşanır.

## Nasıl olmalı?

1. **Mükellef bazlı süreç:** her mükellefin beyanname ve bildirim süreçleri göreve bağlanmalı, sorumlusu belli olmalı.
2. **Süre hatırlatma:** beyan ve bildirim son tarihleri otomatik hatırlatılmalı, gecikme riski kalmamalı.
3. **Evrak zimmeti:** gelen-giden her belge mükellefe ve sürece bağlanmalı; hangi evrağın eksik olduğu tek ekranda görünmeli.
4. **İş yükü görünürlüğü:** hangi personelin hangi mükellefte ne işi olduğu raporlanmalı.

Böylece hem ceza doğuran gecikmeler önlenir hem de ofis içi iş dağılımı netleşir. Bu akışı kurmak için TEKNOPERS'in [mali müşavir çözümünü](https://teknopers.com.tr/cozum/mali-musavir-ve-muhasebe-ofisleri-icin-evrak-ve-surec-takibi) inceleyebilirsiniz.`,

'restoran-personeli-vardiya-takibi-nasil-yapilir':
`Restoran, kafe ve otelde vardiya takibinin iki zorluğu vardır: yoğun/sakin saatlere göre değişen kapasite ve çok sayıda part-time çalışan. Doğru sistem hem yeterli personelin olmasını hem de fazla mesainin kontrolünü sağlar.

## Nasıl yapılır?

1. **Vardiya çizelgesi** yoğun öğünlere göre kurulur; her servis için kaç kişi gerektiği baştan planlanır.
2. **Konum doğrulamalı giriş-çıkış** ile part-time çalışanın fiilî saati net tutulur; eksik veya fazla ödeme olmaz.
3. **Kapsama açığı** (boş kalan vardiya) önceden görünür ve yedeklenir.
4. **Fazla mesai ve hakediş** otomatik hesaplanır, bordroya baz olur.

Kağıt çizelge, bir çalışanın üst üste kapanışa kaldığını ya da bir servisin eksik personelle geçtiğini çoğu zaman gizler. Vardiyayı planlamak için ücretsiz [Vardiya Çizelgesi](https://teknopers.com.tr/araclar/vardiya-cizelgesi/) aracını kullanabilir, personel saatini ve hakedişi otomatik yürütmek için TEKNOPERS'in restoran çözümünü inceleyebilirsiniz.`,

'part-time-personel-mesai-takibi-nasil-yapilir':
`Part-time çalışanda ücret fiilî saate bağlı olduğu için mesainin **dakikası dakikasına doğru** tutulması gerekir; aksi hâlde eksik veya fazla ödeme olur.

## Nasıl yapılır?

1. **Konumlu giriş-çıkış:** çalışan işyerindeyken telefonundan başlatıp bitirir.
2. **Saat bazlı hesap:** çalışılan süre saat/dakika olarak otomatik toplanır.
3. **Vardiya esnekliği:** düzensiz günler ve saatler çizelgeye işlenir.
4. **Hakediş:** saatlik ücretle çarpılarak ödenecek tutar netleşir.

Kağıt föy, part-time çalışanın gerçek saatini çoğu zaman yanlış gösterir. Fiilî saati konumla ve otomatik tutmak için TEKNOPERS'in [PDKS ürününü](https://teknopers.com.tr/urun/pdks-personel-takip-sistemi) inceleyebilirsiniz.

Part-time çalışanın SGK günleri de fiilî çalışmaya göre bildirilir; bu yüzden saatlerin doğru tutulması yalnızca ücreti değil, prim bildirimini de etkiler. Eksik veya hatalı gün bildirimi hem işçiyi hem işvereni riske atar.`,

'sofor-ve-saha-personeli-nasil-takip-edilir':
`Şoför ve saha personelinin ortak sorunu **denetlenemeyen mesai**dir: kim, nerede, ne zaman çalışmaya başladı çoğu zaman belirsizdir. Bu hem maliyet hem güven sorunudur.

## Nasıl takip edilir?

1. **Konumlu mesai başlatma:** personel sahadaki işine telefonundan konum teyidiyle başlar.
2. **Araç zimmeti:** her araç bir şoföre kaydedilir; kilometre, teslim ve iade takip edilir.
3. **Fazla mesai:** saha süresi otomatik puantaja işlenir, elle föy tutulmaz.
4. **İhtilaf çözümü:** hasar, yakıt veya "sahaya gitti mi" tartışması kayıtla çözülür.

Böylece hem mesai doğru hesaplanır hem de araç ve teslim sorumluluğu netleşir. Şoför ve filo için [nakliye, kargo ve filo çözümünü](https://teknopers.com.tr/cozum/nakliye-kargo-ve-filo-icin-saha-personel-ve-arac-zimmet-takibi) inceleyebilirsiniz.`,

'arac-zimmet-takibi-nasil-yapilir':
`Araç zimmet takibi, her aracın **hangi personelde** olduğunu, ne zaman teslim edildiğini ve durumunu kayıt altına almaktır. Filoda en çok anlaşmazlık burada çıkar.

## Nasıl yapılır?

1. **Araç–şoför eşleşmesi:** her araç bir sürücüye zimmetle bağlanır.
2. **Teslim/iade kaydı:** teslim ve iade tarihi, kilometre ve durum kaydedilir.
3. **Hasar ve yakıt:** sorumluluk zimmet kaydıyla netleşir.
4. **Görünürlük:** hangi araç kimde, tek ekranda görünür.

Böylece "hasar kimden çıktı, araç kimdeydi" tartışması biter. Filo ve saha için TEKNOPERS'in [nakliye, kargo ve filo çözümünü](https://teknopers.com.tr/cozum/nakliye-kargo-ve-filo-icin-saha-personel-ve-arac-zimmet-takibi) inceleyebilirsiniz.

Zimmet kaydına ehliyet ve ruhsat bilgisini eklemek, trafik cezası ile HGS/OGS geçişlerinin doğru sürücüye yansıtılmasını da kolaylaştırır; böylece 'bu ceza kimin' tartışması ortadan kalkar.`,

'markette-stok-takibi-nasil-yapilir':
`Markette stok takibinin amacı, **rafın boş kalmaması** ve kaybın erken görülmesidir. Elle tutulan stok hem güncel kalmaz hem farkı gizler.

## Nasıl yapılır?

1. **Barkodla tanım:** her ürün barkodla kaydedilir, telefonla okutulur.
2. **Giriş-çıkış:** alım ve satışta stok otomatik güncellenir.
3. **Kritik seviye:** ürün azalınca sistem sipariş uyarısı verir.
4. **Sayım ve fark:** düzenli sayımla kayıp ve fire ortaya çıkar.

Ek cihaz gerekmez; personelin telefonu barkod okuyucu olur. Perakende için stok + personel + kasayı birlikte yöneten [market ve perakende çözümünü](https://teknopers.com.tr/cozum/market-ve-perakende-icin-stok-ve-personel-yonetimi) inceleyebilirsiniz.

Satış verisiyle stoğu birleştirince hangi ürünün hızlı, hangisinin yavaş döndüğü görünür; bu, raf düzeni ve sipariş miktarı kararlarını iyileştirir. Yavaş dönen üründe fazla stok, nakdi gereksiz bağlar.`,

'perakende-kasa-ve-vardiya-nasil-yonetilir':
`Perakende ve markette iki şey aynı anda yönetilmelidir: **kasa devri** ve **personel vardiyası**. İkisi birbirine bağlanmazsa açık/fazla kimin vardiyasında oldu belirsiz kalır.

## Nasıl yönetilir?

1. **Vardiya kaydı:** her personelin giriş-çıkışı ve hangi vardiyada olduğu tutulur.
2. **Kasa açılış-kapanış:** her vardiyada kasa devri kaydedilir; açık veya fazla net görünür ve sorumluluk vardiyaya bağlanır.
3. **Stok bağı:** satış stoktan düştüğü için gün sonu kasa ile stok tutarlılığı kontrol edilir.
4. **Gün sonu raporu:** ciro, kasa farkı ve personel performansı tek ekranda çıkar.

Bu yapı, "kasa neden açık verdi, hangi vardiyada oldu" tartışmasını bitirir. Perakende için stok + personel + kasayı birlikte yürüten [market ve perakende çözümünü](https://teknopers.com.tr/cozum/market-ve-perakende-icin-stok-ve-personel-yonetimi) inceleyebilirsiniz.`,

'50-200-personelli-atolyede-mesai-takibi-nasil-yapilir':
`50-200 kişilik atölyede biyometrik cihaz yatırımı hem maliyetli hem de bakım gerektirir; ayrıca çok vardiyalı ortamda tek kapı cihazı istasyon dağılımını göstermez.

## Cihazsız ve istasyon bazlı

1. **Telefondan konumlu giriş:** personel sahadayken mesai başlatır, pahalı cihaz gerekmez.
2. **İstasyon takibi:** giriş istasyona bağlanır; hangi hatta kim çalıştı ve verim görünür.
3. **Vardiya ve rotasyon:** çizelge hat bazında kurulur, kimse üst üste geceye kalmaz.
4. **Taşeron hakedişi:** ekip bazlı puantaj otomatik ayrışır.

Böylece hem mesai doğru hesaplanır hem de üretim içi darboğaz görünür olur. Detay için [atölye ve orta ölçekli üretim çözümüne](https://teknopers.com.tr/cozum/atolye-ve-orta-olcekli-uretim-icin-mesai-ve-vardiya-takibi) bakabilirsiniz.

Bu ölçekte raporlamanın bölüm ve vardiya bazında olması önemlidir; toplam rakam değil, hangi hattın ne kadar insan-saat tükettiği yönetime karar verdirir.`,

'cok-istasyonlu-uretimde-personel-takibi-nasil-yapilir':
`Çok istasyonlu üretimde tek bir kapı cihazı yetmez; asıl soru "kim, hangi istasyonda, ne kadar çalıştı"dır. Bu görünmeyince verim ve maliyet ölçülemez.

## Nasıl yapılır?

1. **Konumlu giriş** ile personel sahaya girişini telefonundan başlatır; pahalı biyometrik cihaz gerekmez.
2. **İstasyon bazlı kayıt:** çalışma istasyona bağlanır, üretim içindeki dağılım görünür olur.
3. **Vardiya ve fazla mesai** otomatik puantaja işlenir; hat kesintisiz dönerken rotasyon yönetilir.
4. **Taşeron hakedişi** ekip bazında ayrışır, SGK günleriyle karşılaştırılır.

Böylece hangi hattın ne kadar insan-saat tükettiği ve nerede darboğaz olduğu rakamla görünür. 50-200 kişilik üretim için [atölye ve orta ölçekli üretim çözümünü](https://teknopers.com.tr/cozum/atolye-ve-orta-olcekli-uretim-icin-mesai-ve-vardiya-takibi) inceleyebilirsiniz.`,

'yevmiye-nasil-hesaplanir':
`Yevmiye, bir işçinin bir günlük çalışması karşılığı aldığı ücrettir. İnşaat, tarım, temizlik gibi işlerde ücret çoğu zaman aylık değil yevmiye (gündelik) olarak belirlenir.

## Nasıl hesaplanır?

1. **Aylık ücretten:** aylık brüt ÷ 30 = günlük brüt. Bordroda ay her zaman 30 gün kabul edilir; ayın 28 veya 31 çekmesi sonucu değiştirmez.
2. **Saatlik ücretten:** günlük çalışma saati × saatlik ücret.
3. **Sözleşmede yevmiyeli çalışanda:** yevmiye zaten bellidir; ay sonu ödeme = çalışılan gün × yevmiye.

Örnek: 2026 asgari ücrette aylık brüt 33.030 TL ise günlük brüt yaklaşık **1.101 TL**'dir. Çalışılan günü hesaplayıp yevmiyeyle çarpmak için yukarıdaki **puantaj cetveli + hakediş** aracını kullanabilirsin; araç her personel için aylık hakedişi otomatik verir.`,

'isci-hakedisi-nasil-hesaplanir':
`Hakediş, bir işçiye dönem sonunda ödenmesi gereken toplam tutardır. Temeli puantajdır: önce çalışılan gün/süre bulunur, sonra ücretle çarpılır.

## Adımlar

1. **Puantajdan çalışılan günü** bul (tam gün 1, yarım gün 0,5).
2. **Yevmiye veya aylık ücretle** çarparak esas hakedişi bul.
3. **Fazla mesai** (%50 zamlı), **hafta tatili/UBGT çalışması** gibi zamlı kalemleri ekle.
4. **SGK primi ve gelir vergisini** kesip **net** tutara in.

İlk üç adımı yukarıdaki puantaj aracı otomatik yapar (yevmiyeyi girmen yeterli). Kesintili net rakam için ise net–brüt maaş aracını kullanabilirsin. İmzalı puantaj, olası bir hakediş ihtilafında en güçlü belgendir.

İmzalı ve konum teyitli puantaj burada belirleyicidir; ay sonu 'kaç gün çalıştım' tartışmasında yazılı kayıt, hem işçiyi hem işvereni koruyan tek nesnel dayanaktır.`,

'puantaj-kisaltmalari-ne-anlama-gelir':
`Türkiye'de puantaj için **hukuken zorunlu tek bir standart kısaltma yoktur**; kodlar işyerine ve sektöre göre değişir. Önemli olan, cetvelde bir "kod açıklama (lejant)" bulunmasıdır. En yaygın kullanılanlar:

- **T / Ç:** Tam gün çalışıldı
- **Y:** Yarım gün
- **HT:** Hafta tatili
- **RT:** Resmi / genel tatil (UBGT)
- **Yİ:** Yıllık ücretli izin
- **İ:** İzinli (mazeret / idari)
- **Üİ:** Ücretsiz izin
- **R:** Raporlu (istirahat)
- **X / D:** Devamsız (gelmedi)
- **FM:** Fazla mesai (ayrı saat sütunu)

Yukarıdaki puantaj aracında T, Y, İ, R, X, HT ve RT kodları kullanılır ve çalışılan gün otomatik toplanır. Farklı bir düzen kullanıyorsan çıktına kendi lejantını ekleyebilirsin.`,

'sgk-eksik-gun-bildirimi-nasil-yapilir':
`Bir ay içinde **30 günden az** çalışan sigortalının eksik gün nedeni SGK'ya bildirilmek zorundadır. Bildirim, aylık prim ve hizmet belgesi (MUHSGK) kapsamında yapılır.

## Özet

1. **Eksik gün nedenini kodla:** örneğin "07 - Puantaj Kayıtları", istirahat, ücretsiz izin, devamsızlık gibi.
2. **1-9 çalışanlı işyerlerinde** "07 - Puantaj" seçildiğinde, ekteki puantajda **sigortalının imzası zorunludur**.
3. **İmzasız veya tutarsız** bir belge geçersiz sayılabilir; primler re'sen (idarece) tahakkuk ettirilebilir.

Yani eksik gün bildiriminin dayanağı puantajdır ve puantajın **düzenli tutulup imzalatılması** şarttır. Aylık cetveli hızlıca hazırlamak için yukarıdaki puantaj aracını kullanabilirsin. Güncel kod ve süreç için SGK mevzuatını ya da mali müşavirini teyit et.`,

'vardiya-cizelgesi-nasil-hazirlanir':
`Vardiya çizelgesi, personelin ay boyunca hangi gün hangi vardiyada olacağını gösteren plandır. İyi bir çizelge iki şeyi birden sağlar: her vardiyada yeterli kişi bulunması (kapsama) ve yasal sınırların (gece 7,5 saat, haftalık 45 saat) korunması.

## Adımlar

1. **Vardiya türlerini** belirle (ör. sabah / akşam / gece) ve her vardiyada kaç kişi gerektiğini yaz.
2. **Personeli günlere dağıt;** kişi başı gece ve fazla mesai yükünü dengele, kimseyi üst üste geceye bırakma.
3. **Kapsama açığını** kontrol et: hiçbir gün bir vardiya boş kalmasın.
4. **İzin ve raporları** çizelgeye işle, açık kalan saatleri yedekle.

Yukarıdaki **vardiya çizelgesi aracı** ile her güne vardiyayı tıklayarak atar; günlük kapsamayı ve kişi başı gece sayısını anında görürsün. Bir vardiya bir günde boşsa araç bunu işaretler.`,

'gece-vardiyasi-kac-saat-olabilir':
`4857 sayılı İş Kanunu m.69'a göre bir işçi **gece postasında 7,5 saatten fazla çalıştırılamaz**. Bu sınır fazla mesaiyle dahi aşılamaz; gece çalışmasında fazla çalışma yaptırılamaz.

## Dikkat edilecekler

1. **Gece süresi** 20:00–06:00 arası kabul edilir.
2. İşçi **sürekli gece** vardiyasında tutulamaz; postalar düzenli değiştirilmelidir.
3. Gece/gündüz postası geçişinde çalışana yeterli dinlenme (uygulamada en az 11 saat) tanınmalıdır.
4. 18 yaşından küçükler gece çalıştırılamaz; periyodik sağlık kontrolü gerekir.

Çizelgede kişi başı gece sayısını takip etmek hem adalet hem uyum meselesidir. Yukarıdaki vardiya aracı gece sayısını her satırda otomatik gösterir. Güncel yönetmelik için mevzuatı teyit et.

Bu sınır işçi sağlığını korumaya yöneliktir ve denetimde katı uygulanır; gece postasını 7,5 saati aşacak şekilde kurmak, fazla mesai ödense bile mevzuata aykırıdır.`,

'7-24-noktada-kac-personel-gerekir':
`Kesintisiz (7/24) bir noktayı doldurmak için en az **3 vardiya** gerekir: sabah, akşam ve gece. Ancak yalnızca 3 kişiyle sürdürülemez.

## Neden 3 değil 4-5 kişi?

1. **Hafta tatili:** her çalışana haftada en az 1 gün kesintisiz dinlenme gerekir; o gün için yedek şart.
2. **Yıllık izin ve rapor:** kadro dar olduğunda bu günler açık kalır ve fazla mesaiye biner.
3. **Rotasyon:** kimsenin sürekli gecede kalmaması için değişim gerekir.

Pratikte kesintisiz bir nokta için **nokta başına 4-5 kişilik** bir kadro sağlıklıdır. Kadro planını ve kapsama açığını görmek için yukarıdaki vardiya çizelgesi aracını kullanabilirsin.

Kadro planlanırken yıllık izin ve olası istifalar da hesaba katılmalıdır; 'tam kadro' yalnızca herkes çalışırken yeter, bir-iki kişilik yedek pay olmadan noktalar açık kalır.`,

'taseron-hakedisi-nasil-hesaplanir':
`Taşeron hakedişi, bir alt işverenin (taşeronun) yaptığı iş karşılığı hak ettiği tutardır. Şantiyede çoğunlukla **ekip bazlı** hesaplanır ve asıl işverenin en çok ihtilaf yaşadığı kalemlerden biridir.

## Nasıl hesaplanır?

1. **Her taşeron/ekip için ayrı puantaj** tut; kimin kaç gün çalıştığı ekip bazında ayrışsın.
2. **Gün × yevmiye** (veya imalat işlerinde iş kalemi × birim fiyat) ile hakedişi bul.
3. **Avans, malzeme ve kesintileri** düş; ay sonu net hakedişe in.
4. **SGK prim günleriyle** karşılaştır; taşeron puantajı SGK bildirimiyle tutarlı olmalı.

Konumlu-saatli ve **imzalı** bir puantaj, ay sonu "kim ne kadar çalıştı" tartışmasını bitirir ve olası davada delildir. Ekip bazlı puantajı hızlıca tutmak için yukarıdaki araca ekip adını işyeri alanına yazarak başlayabilirsin.`,

'dis-klinigi-hasta-takip-programi-nasil-olmali':
`Diş kliniğinde "hasta takibi", randevunun ötesine geçer: tedavi çok seanslıdır ve her hastanın geçmişi, kalan seansı ve bakiyesi ayrı ayrı takip edilmelidir.

## Olması gerekenler

1. **Hasta kartı:** tedavi geçmişi, hekim notları, radyografi/dosya.
2. **Çok seanslı tedavi ve kalan seans** takibi (paket mantığı).
3. **Otomatik hatırlatma:** no-show diş kliniğinde pahalıdır; koltuk boş kalır.
4. **Tedavi bakiyesi ve tahsilat** takibi.
5. **KVKK'ya uygun** sağlık verisi saklama, yetkili erişim.

Hatırlatma mesajlarını hemen denemek için randevu hatırlatma aracını kullanabilirsin; hasta, seans ve ödemeyi bir arada yürüten bütünleşik klinik takibi için TEKNOPERS klinik modülü uygundur.

Ayrıca onam formları ve radyografi gibi belgelerin dijital saklanması, hem KVKK hem olası anlaşmazlık açısından önemlidir; kağıt arşiv kaybolur, dijital kayıt aranabilir kalır.`,

'dis-klinigi-randevu-programi-ucretsiz-mi':
`Piyasada iki ayrı şey "ücretsiz" diye karışır: **ücretsiz yardımcı araçlar** (randevu hatırlatma mesajı üreteci gibi) ile **tam klinik yazılımı**. Yardımcı araçlar ücretsiz olabilir; hasta, seans ve ödemeyi yöneten bütün bir sistemin ise bir maliyeti vardır.

## Karar verirken

1. **Deneme/ücretsiz başlangıç** sunan çözümleri tercih et; önce kendi kliniğinde test et.
2. Fiyatı genelde **klinik veya kullanıcı başına** aylık belirlenir; koltuk ve hekim sayısına göre değişir.
3. Asıl soru maliyet değil, **no-show düşüşü ve tahsilat disiplini**: bir dolu koltuk çoğu zaman aylık yazılım bedelini karşılar.

Ücretsiz hatırlatma aracını hemen kullanabilir, bütünleşik sistemi ise WhatsApp'tan bilgi alarak deneyebilirsin.`,

'veteriner-asi-hatirlatma-sistemi-nasil-kurulur':
`Veteriner kliniğinde asıl kayıp, tedaviden çok **kaçırılan kontrol ve aşı** ziyaretleridir. Aşı hatırlatması yapan klinik, düzenli gelir kaynağı olan tekrar ziyaretleri kaybetmez.

## Nasıl kurulur?

1. **Hasta (hayvan) + sahip kartı:** tür, yaş, geçmiş ve iletişim bilgisi bir arada.
2. **Aşı takvimi:** her aşının bir sonraki tarihi kayda bağlanır.
3. **Otomatik hatırlatma:** aşı/kontrol tarihine göre WhatsApp veya SMS ile sahibe uyarı.
4. **İlaç ve stok** entegrasyonu ile klinikte eksik kalmaz.

Hatırlatma mesajı şablonlarını hemen oluşturmak için randevu hatırlatma aracını kullanabilirsin; hasta kartı ve otomatik aşı hatırlatmasını bir arada yürütmek için TEKNOPERS veteriner modülü uygundur.

Hatırlatmayı tür ve yaşa göre kişiselleştirmek etkiyi artırır; yavru, yetişkin ve yaşlı hayvanın takvimi farklıdır, mesajın buna göre gitmesi sahibi harekete geçirir.`,

'diyetisyen-danisan-olcum-takibi-nasil-yapilir':
`Diyetisyende sonucu ve bağlılığı getiren şey, danışanın **ilerlemesinin görünür** olmasıdır. Ölçüm takibi yalnızca kilo değil, sürecin bütünüdür.

## Nasıl yapılır?

1. **Ölçüm geçmişi:** kilo, çevre ölçüleri ve vücut analizi tarih tarih kaydedilir.
2. **Grafikle gösterim:** danışan ilerlemesini görünce motivasyonu artar.
3. **Plan ve not:** her ölçüm, o dönemin beslenme planı ve notlarıyla eşleşir.
4. **Paket/seans:** görüşme paketinden kalan otomatik düşer.

Bu yapı hem sonucu iyileştirir hem danışanı bağlar. Ölçüm ve paket takibini randevuyla birlikte yürütmek için TEKNOPERS'in [diyetisyen ve danışan takip çözümünü](https://teknopers.com.tr/cozum/diyetisyen-ve-danisan-takip-sistemi) inceleyebilirsiniz.

Takibi yalnızca kilo üzerinden değil, çevre ölçüleri ve vücut kompozisyonu üzerinden yapmak daha doğrudur; kilo sabitken bile yağ/kas oranı iyileşebilir. Danışana bu bütünü göstermek, tek sayıya takılmasını önler.`

};

module.exports = { CEVAPLAR: CEVAPLAR };

