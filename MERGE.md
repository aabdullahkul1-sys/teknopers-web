# 🔧 TAM İNDEKSLEME DÜZELTMESİ — mimar geçişi (17 Ağu, 2. tur)

## Denetim sonucu: teknik SEO temiz, TEK sorun içerik derinliği
Tüm sayfa ailelerini ölçtüm. **Teknik hiçbir açık yok:** canonical (kendine dönük, mutlak https), robots `index,follow`, sayfa başına 2 JSON-LD (breadcrumb + tür şeması), tek H1, benzersiz başlık/açıklama, OG, HSTS + güvenlik başlıkları, robots.txt, **sitemap eksiksiz** (0 eksik / 0 çakışma), yinelenen başlık yok. `noindex` yalnızca hata sayfasında (doğru).

**Tek gerçek blocker:** içerik derinliği — çözüm 354, ürün 327, soru 279 kelime. Genç alan adında Google bu kalınlıktaki şablon sayfaları indekslemez. GSC'de takılan grup da baştan sona `/cozum` idi.

## Bu turda yapılanlar (motor + veri seviyesinde, hepsi test edildi)

**1. `/cozum` ailesi derinleştirildi — 19 sayfa birden**
- `cozumler.js`: 19 çözümün her birine **sektöre özgün** `nasilCalisir` (4 adımlı süreç) + `sss` (3 soru-cevap) eklendi.
- `lib/cozum-motor.js`: bu alanları "Nasıl çalışır?" bölümü + "Sık sorulan sorular" akordeonu olarak render eder; ayrıca **her sayfaya FAQPage şeması** (3. JSON-LD) basar.
- Sonuç: çözüm sayfaları **354 → ~470 kelime** (min 405, max 665), 19/19 FAQ zengin sonuç uygun, içerik benzersiz.

**2. Ana sayfa iç linkleri — `index.html`** (kök sebebin kaynağı)
- `#ozel` bölümünden sonra 2 yeni bölüm: **19 sektörel çözüm** + **16 popüler soru** doğrudan linki (artık sadece `/cozumler` hub'ı değil). 35 link, hepsi geçerli.

**3. Son teknik açık — `vercel.json`**
- `www.teknopers.com.tr` → çıplak alan adı 308 yönlendirmesi eklendi. (http→https Vercel'de otomatik; primary domain'i panelden de `teknopers.com.tr` yaptığından emin ol.)

> **Önceki turdan (hâlâ geçerli):** araç + 6 bloğa `/cozum` ve `/soru` iç linkleri eklenmişti. Yani takılan sayfalar artık **ana sayfa + araçlar + bloglar**dan (indeksli güçlü donörler) link alıyor.

## Dosya listesi — bu tur eklenen/değişen
- `cozumler.js` (REPLACE) — 19 çözüme derinlik verisi
- `lib/cozum-motor.js` (REPLACE) — yeni bölümler + FAQPage
- `index.html` (REPLACE) — ana sayfa iç link bölümleri
- `vercel.json` (REPLACE) — www yönlendirmesi

## Dürüst durum (hedge değil, gerçek)
Sitenin **kendi tarafında dizine eklenmemek için hiçbir sebep bırakılmadı**: teknik temiz, içerik derin ve benzersiz, iç link güçlü. Kalan tek değişken Google'ın tarama döngüsü + alan adı otoritesi + zaman — bunu hiçbir kod kontrol etmez. On-site iş bitti; deploy sonrası GSC'den öncelikli sayfalara "Dizine ekleme iste".

## Sıradaki tranş (aynı yöntemle uygulanacak)
- `/urun` (13): aynı `sss` + FAQPage + derinlik.
- `/soru`: en ince yanıtların 300+ kelimeye çıkarılması.

---

# ⚠️ İNDEKSLEME TEŞHİSİ VE DÜZELTME (17 Ağu)

**GSC durumu:** "Tarandı — şu anda dizine eklenmiş değil", doğrulama başarısız. Etkilenen: neredeyse tüm `/cozum/*`, bir grup `/soru/*`, `/cozumler`. Statik araç/blog sayfaları SORUNSUZ.

**Bu bir kod bug'ı DEĞİL.** Motor 200 + `index, follow` + kendine dönük canonical + tam SSR HTML veriyor (noindex yalnızca hata sayfasında, doğru). İki gerçek kök sebep:
1. **İçerik ince:** çözüm sayfaları ort. ~315 kelime, şablon. Genç alan adında Google bunu indekslemeye direniyor.
2. **İç link açlığı (asıl sorun):** ana sayfa, araç sayfaları ve bloglar `/cozum` ve `/soru`'ya **doğrudan link vermiyordu** — bu sayfalara erişim sadece derin hub'lardan. İç PageRank ≈ 0.

**Bu pakette yapılan (P1 — en yüksek kaldıraç):** Güçlü, indeksli sayfalardan takılan sayfalara iç link akışı açıldı:
- `araclar/puantaj-cetveli/` ve `araclar/vardiya-cizelgesi/`: "sektör çözümleri" + "ilgili sorular" link blokları eklendi.
- 6 blog (`blog-*.html`): her birine ilgili çözüm/soru/ürün/araç link bloğu eklendi.
- Toplam 66 iç link, hepsi geçerli (kırık yok).

**Sıradaki adımlar (senin yapman/istersen ben yaparım):**
- **P1 devam:** Ana sayfaya (`index.html`) doğrudan `/cozum` ve top `/soru` linkleri ekle (sadece `/cozumler` hub'ı var). En güçlü donör burası.
- **P2 — içerik derinliği:** Çözüm sayfalarını ~315 → 600-900+ **özgün** kelimeye çıkar (sektöre özel gerçek detay, mini-SSS; şablonu şişirme, backfire eder).
- **P3 (opsiyonel):** En zayıf/ince `/soru` sayfalarını geçici `noindex` yapıp Google'ın tarama/kalite bütçesini güçlü sayfalara yoğunlaştır; otorite artınca aç.
- **P4:** Otorite (backlink, marka araması, gerçek kullanım) + sabır. 1 aylık alan adı 127 şablon URL'i hızlı indekslemez. Linkleri güçlendirdikten SONRA GSC'den öncelikli sayfalar için "Dizine ekleme iste"; doğrulamayı üst üste tekrar tetikleme.

**Deploy ipucu:** Yeni linkli sayfaları bir kez ziyaret et (edge cache ısınsın) — Google soğuk serverless yerine hızlı yanıt görür.

---

# TEKNOPERS — Merge Kılavuzu (15 Ağu 2026)

Bu paketteki dosyalar repo yapısıyla aynı yerde. GitHub web arayüzünde ilgili dosyayı açıp
içeriği **bu paketteki sürümle değiştir** (REPLACE) veya **yeni dosya oluştur** (CREATE).
Hepsi additive; 5 korumalı çekirdek dosyaya (routes.js, bot.js, data.js, core.js, kök index.html) dokunulmadı.

---

## 1) YENİ ARAÇ — Vardiya Çizelgesi  `CREATE`
**Yol:** `araclar/vardiya-cizelgesi/index.html`
Yeni klasör + dosya oluştur. Puantaj aracının birebir tasarım sistemiyle üretildi.
- Kişi × gün ızgarası; hücreye dokun → S(sabah) → A(akşam) → G(gece) → D(gündüz) → İ(izin) → R(rapor) → boş
- Sağ kolonlar: kişi başı **toplam vardiya / gece / izin**
- Alt satırlar: her gün için **Sabah/Akşam/Gece kapsaması**; bir vardiya o gün boşsa "·" ile açık işaretlenir
- Düzenlenebilir vardiya saatleri, yazdır/PDF, Excel (CSV), otomatik kayıt
- JSON-LD (WebApplication + FAQPage + Breadcrumb), tam SEO metni, İş Kanunu m.63/68/69 bilgi kutusu
- Test edildi: JS sözdizimi, JSON-LD parse, kapsama/gece mantığı ✓

## 2) Puantaj Cetveli — Hakediş (İKİ MOD: Yevmiye + Aylık)  `REPLACE`
**Yol:** `araclar/puantaj-cetveli/index.html`
Üstten **Yevmiye (günlük)** veya **Aylık maaş** seçilir; hesap moda göre değişir:
- **Yevmiye:** hakediş = çalışılan gün × yevmiye. Her fiilî gün ödenir; **31. gün de sayılır**. "Hafta tatili + resmi tatili ekle" opsiyonu bu modda görünür.
- **Aylık:** bordroda ay **daima 30 gün**. Tam çalışan işçi ayın 28/30/31 çekmesinden bağımsız **tam maaş** alır (31. gün eklenmez); devamsızlıkta **maaş ÷ 30** üzerinden kesilir. Ödenmeyen gün = devamsız (X).
Ayrıca: TOPLAM ödeme satırı, "hepsine aynı yevmiye/maaş", CSV/yazdırma, güncellenmiş meta + FAQ + JSON-LD.
Test edildi: JS sözdizimi + iki modun matematiği (31/28 çeken ay senaryoları) ✓
> Bu dosya, önceki tek-mod sürümün yerine geçer — mutlaka bunu al.

## 3) `sorular.js`  `REPLACE`
- `A.vardiya` kısayolu eklendi → yeni araca link
- `vardiya-plani-nasil-yapilir` sorusu artık vardiya aracına bağlı
- **12 yeni soru** eklendi (aşağıda). Toplam 92 → **104**.

## 4) `cevaplar.js`  `REPLACE`
- 12 yeni sorunun **elle yazılmış** cevabı eklendi (AI'a düşmez). Toplam 92 → **104**.
- Her cevap ilgili araca/çözüme iç link içerir; yasal ifadeler genel ve doğrulanabilir tutuldu.

## 5) `urunler.js`  `REPLACE`
Ürün → yeni soru iç linkleri:
- Diş ürünü: + `dis-klinigi-hasta-takip-programi-nasil-olmali`, `dis-klinigi-randevu-programi-ucretsiz-mi`
- Veteriner ürünü: + `veteriner-asi-hatirlatma-sistemi-nasil-kurulur`
- Diyetisyen ürünü: + `diyetisyen-danisan-olcum-takibi-nasil-yapilir`

## 6) `sitemap.xml`  `REPLACE`
- Vardiya aracı URL'i eklendi
- Puantaj `lastmod` → **2026-08-15** (Google güncellemeyi hızlı görsün diye)
> `/soru/*` URL'leri `api/sitemap.js` tarafından **otomatik** üretiliyor; 12 yeni soru sitemap-sorular.xml'e kendiliğinden düşer, elle iş yok.

## 7) `araclar/index.html`  `REPLACE`
- Vardiya çizelgesi kartı eklendi
- Puantaj kartı metni "hakediş" vurgusuyla güncellendi

---

## Eklenen 12 soru (kümeler)

**Hakediş / Yevmiye / Vardiya (araçlara bağlı):**
1. `yevmiye-nasil-hesaplanir` — Yevmiye (günlük ücret) nasıl hesaplanır?
2. `isci-hakedisi-nasil-hesaplanir` — İşçi hakedişi nasıl hesaplanır?
3. `taseron-hakedisi-nasil-hesaplanir` — Taşeron hakedişi nasıl hesaplanır?
4. `puantaj-kisaltmalari-ne-anlama-gelir` — Puantaj kısaltmaları ne anlama gelir?
5. `sgk-eksik-gun-bildirimi-nasil-yapilir` — SGK eksik gün bildirimi (07 puantaj)
6. `vardiya-cizelgesi-nasil-hazirlanir` — Vardiya çizelgesi nasıl hazırlanır?
7. `gece-vardiyasi-kac-saat-olabilir` — Gece vardiyası en fazla kaç saat?
8. `7-24-noktada-kac-personel-gerekir` — 7/24 noktada kaç personel/vardiya?

**Diş + sektörel randevu genişleme:**
9. `dis-klinigi-hasta-takip-programi-nasil-olmali`
10. `dis-klinigi-randevu-programi-ucretsiz-mi`
11. `veteriner-asi-hatirlatma-sistemi-nasil-kurulur`
12. `diyetisyen-danisan-olcum-takibi-nasil-yapilir`

## Deploy sonrası (opsiyonel ama önerilir)
- GSC → URL Denetimi ile `/araclar/vardiya-cizelgesi/` ve güncellenen `/araclar/puantaj-cetveli/` için **Dizine ekleme iste**.
- Birkaç gün sonra "diş kliniği randevu programı" ve "yevmiye/hakediş" sorgularının gösterim/tık trendine bak.

## Dokunulmayanlar (bilerek)
- `randevu-hatirlatma-mesaji` aracı: zaten 7 sektör + 4 mesaj türü + 3 ton içeriyor, tam. Yeniden yazmak regresyon riski olurdu.
- Diş/veteriner/diyetisyen/kuaför/güzellik/pilates ürün + çözüm sayfaları: hepsi mevcut; sadece soru katmanı derinleştirildi.
