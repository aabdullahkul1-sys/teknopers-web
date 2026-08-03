# TEKNOPERS Web — SEO & Teknik İyileştirme Kaydı
**Tarih:** 3 Ağustos 2026

---

## Özet (dürüst değerlendirme)

Site zaten **çok iyi** durumdaydı — çoğu sitenin çok üzerinde. Analitik ve
doğrulama kodları **zaten 25 sayfanın tamamında doğru yerdeydi**; buraya
"eksik" diye eklenecek bir şey yoktu. Bu yüzden siteyi baştan yazmadım
(çalışan hesaplayıcıları bozma riski + telefondan gözden geçirilemez olurdu).
Bunun yerine, gerçekten eksik olan **teknik SEO boşluklarını** cerrahi
şekilde kapattım. Aşağıda tam liste var.

---

## İkinci tur — 3 Ağustos (senin talebin üzerine)

**1. `sameAs` — sosyal profiller eklendi.** `index.html` Organization şemasına
5 profil `sameAs` olarak eklendi (takip parametreleri temizlendi):
Instagram `@teknopers.saha`, Facebook, LinkedIn `/company/teknopers/`,
TikTok `@teknopers8`, Threads `@teknopers.saha`. Bu, Google'ın TEKNOPERS'i
tek bir "varlık" olarak tanıması için en etkili alanlardan biriydi.
*Not: Facebook linki paylaşım (`/share/…`) formatında; çalışır (yönlendirir),
ama ileride sabit sayfa URL'inle değiştirirsen marjinal olarak daha sağlam olur.*

**2. Müşteri yorumları (`#yorumlar` bölümü) kaldırıldı.** Ana sayfadaki
"Sahadan ve salondan geri bildirimler" bölümü tamamen silindi (5 yorum kartı +
"pilot/demo kullanıcılardan derlenmiştir" notu). Doğrulanamayan yorumların
güven/ceza riski taşımaması için. Bu bölüme menüden bağlantı olmadığı için
kırık bağlantı oluşmadı. (İlgili kullanılmayan CSS zararsız olduğu için bırakıldı.)
İleride gerçek, izinli ve doğrulanabilir referans topladıkça geri
ekleyebilirsin — ideali, müşterinin adı/işletmesiyle açık onayı olan yorumlardır.

---

## Yapılan değişiklikler

### 1. Breadcrumb (BreadcrumbList) yapısal verisi — Google'da SERP breadcrumb'ı için
Google'ın arama sonucunda "Ana Sayfa › Araçlar › [Araç Adı]" navigasyonunu
göstermesini sağlar; site yapısını daha iyi anlamasına yardım eder.
- **12 araç sayfasına** eklendi (fazla mesai, kıdem, ihbar, yıllık izin,
  net-brüt, işveren maliyeti, puantaj cetveli, personel prim, salon açma,
  randevu hatırlatma, resmi tatiller, salon kârlılık).
- **Araçlar ana sayfasına** (`/araclar/`) eklendi.
- **Blog listesine** (`blog.html`) eklendi.
- (Patron simülasyonunda zaten vardı.)
- Kapsam: **8 → 22 sayfa.**

### 2. Blog listesi şeması — `blog.html`
Daha önce blog.html'de **hiç yapısal veri yoktu.** Eklendi:
- `Blog` şeması (`@id: blog.html#blog`). **Önemli:** Blog yazılarının hepsi
  zaten bu kimliğe referans veriyordu ama tanım yoktu — artık graf tamamlandı.
- `BreadcrumbList` (Ana Sayfa › Blog).
- `ItemList` — 7 yazının tamamı sıralı listelendi.

### 3. Blog yazılarına tarih (`datePublished` / `dateModified`)
7 blog yazısında **tarih alanı eksikti.** Google, makale sonuçlarında tarihi
görünür şekilde gösterir ve tazelik/E-E-A-T sinyali olarak kullanır.
- `datePublished: 2026-08-02`, `dateModified: 2026-08-03` eklendi.
- ⚠️ **Kontrol et:** Gerçek yayın tarihi farklıysa bu değeri düzelt.

### 4. Araçlar ana sayfası — Araç listesi (ItemList)
Mevcut `CollectionPage` şemasına dokunmadan, **13 aracın tamamını** içeren
`ItemList` + `BreadcrumbList` eklendi. Google'ın araç koleksiyonunu bütün
olarak anlamasına yardım eder.

### 5. `og:url` etiketi (sosyal paylaşım kanonikleştirme)
7 blog yazısı + blog.html + whatsapp-onay sayfasında eksikti. WhatsApp/
LinkedIn/Facebook link önizlemelerinde doğru URL'yi garantiler.
- Kapsam: **artık 404 dışında tüm sayfalarda var** (404 zaten noindex).

### 6. `whatsapp-onay.html` — GERÇEK HATA düzeltildi
Dosyanın **en başında ` ```html ` ve en sonunda ` ``` `** (markdown kod
bloğu işaretleri) yanlışlıkla dosyanın içine kaydedilmişti. Yayında bu,
sayfanın tepesinde çöp metin olarak görünürdü. Temizlendi.
- Ayrıca `noindex, follow` eklendi (yönlendirme/teşekkür sayfası indekslenmemeli).
- `og:url` eklendi.

### 7. `patron-simulasyonu` — eksik ikon/manifest linkleri
`apple-touch-icon` ve `manifest` linkleri eksikti; eklendi. Artık 25 sayfanın
tamamında bu linkler var.

### 8. `site.webmanifest` zenginleştirildi (PWA kurulabilirlik sinyali)
`id`, `scope`, `orientation`, `categories`, `dir` alanları eklendi; maskable
ikon ayrı tanımlandı (güncel en iyi uygulama). Google kurulabilir PWA'ları
olumlu değerlendirir.

### 9. `sitemap.xml` tazelendi
Neredeyse tüm sayfalar değiştiği için 23 URL'nin `lastmod` değeri
**2026-08-03** olarak güncellendi — Google'a "içerik taze" sinyali.

---

## Değişmeyen (bilerek) — zaten sağlamdı

- **Google Analytics 4** (`G-8GBQE6QZP8`) — 25/25 sayfada, doğru yerde.
- **Google Search Console doğrulaması** (`oL2ri1b4a6M4V8Gg3lxedLUdWtLHEjcz9VKLOJ43VOU`) — 25/25 sayfada.
- **Güvenlik başlıkları** (`vercel.json`) — HSTS, X-Content-Type-Options vb. zaten var.
- **Görseller** — Tüm sitede tek `<img>` var ve tam optimize (alt + width/height +
  lazy). Görsellerin çoğu CSS/SVG olduğu için Core Web Vitals görsel tarafı
  temiz. Dokunmaya gerek yoktu.
- **Fontlar** — preconnect + preload + `display=swap` + noscript fallback zaten kurulu.
- **Canonical, Twitter Card, OG image, theme-color** — zaten tüm indekslenen
  sayfalarda vardı.

---

## Senin yapman gereken sonraki adımlar (sıfır maliyet)

### A. ✅ `sameAs` eklendi (3 Ağustos, ikinci tur — TAMAMLANDI)
Instagram, Facebook, LinkedIn, TikTok ve Threads profilleri Organization
şemasına `sameAs` olarak eklendi. Ekstra bir işlem gerekmiyor; sadece
yeni sosyal hesap açarsan bu diziye eklemeyi unutma.

### B. Google Search Console
1. Search Console → Sitemaps → `sitemap.xml`'i **yeniden gönder** (lastmod tazelendi).
2. Değişen sayfaları **"URL İnceleme → Dizine eklenmeyi iste"** ile hızlandır
   (özellikle `blog.html` ve araç sayfaları).
3. Zenginleştirme › **Breadcrumb** ve **SSS** raporlarını birkaç gün sonra kontrol et.

### C. Değerlendirme puanı (Review / AggregateRating) — gerçek yorum gelince
Google yıldız göstergesi çok tıklama getirir. **Uydurma yasak** (Google cezalandırır).
Lina gibi gerçek pilot kullanıcılardan yazılı referans/puan aldıkça
`SoftwareApplication` şemasına `aggregateRating` + `review` ekleyebilirsin.

### D. Ek ücretsiz arama motoru araçları
- **Bing Webmaster Tools** — Search Console'dan tek tıkla sitemap içe aktarılır.
- **Yandex Webmaster** — Türkiye trafiğinin bir kısmı için değerli.

### E. `sameAs` sonrası zengin sonuç testi
Değişiklikleri yayınladıktan sonra şu araçlarla doğrula:
- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema Markup Validator: https://validator.schema.org/

---

## Teknik not
Tüm JSON-LD blokları (48 adet) parse testinden geçti — **0 hata.** HTML yapısı
her sayfada bütün (tek head/body/html). Hiçbir çalışan hesaplayıcı koduna
dokunulmadı; değişiklikler yalnızca `<head>` meta/yapısal veri katmanında.
