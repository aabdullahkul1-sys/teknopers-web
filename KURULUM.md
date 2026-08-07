# TEKNOPERS Web Sitesi — Programatik SEO / SSR Motoru (teknopers.com.tr)

Bu paket, **teknopers.com.tr** (statik + Vercel) sitesine `/soru/<slug>` sayfaları
ekler. Sayfalar siteyle birebir aynı görünür (nav/footer/açık tema/Sora), Google'ın
AI Overview'a çıkarabileceği JSON-LD FAQ taşır ve **her sayfa ilgili hesaplama
aracına** (/araclar/...) iç link vererek trafiği dönüşüme taşır.

## Ne nereye
YENİ dosyalar (GitHub'da oluştur — teknopers-web deposu):
```
sorular.js               ← 69 hedef sorgu + araç/blog iç-link haritası (BÜYÜT)
api/soru.js              ← /soru/:slug ve /sorular (server-side AI + ISR)
api/sitemap.js           ← /sitemap-sorular.xml
lib/seo-motor.js         ← site tasarımıyla birebir şablon + JSON-LD
lib/ai-kopru.js          ← AI beyni (Gemini→Claude→Groq, uydurma kilidi)
lib/cache.js             ← Supabase önbellek (opsiyonel)
supabase-kurulum.sql     ← önbellek tablosu (opsiyonel)
```
DEĞİŞTİR (mevcut dosyanın üstüne yaz):
```
vercel.json              ← mevcut header'ların KORUNDU, sadece rewrites eklendi
robots.txt               ← mevcut + ikinci sitemap satırı
```
DOKUNULMAZ: index.html, blog*.html, araclar/*, sitemap.xml (statik olan), diğer her şey.

## Rotalar (deploy sonrası)
- `teknopers.com.tr/soru/kidem-tazminati-nasil-hesaplanir` → SSR sayfa
- `teknopers.com.tr/sorular` → hub (tüm sorular, kategorili)
- `teknopers.com.tr/sitemap-sorular.xml` → yeni sayfaların sitemap'i

## Ortam değişkenleri (Vercel → teknopers-web projesi → Settings → Environment Variables)
| Değişken | Zorunlu | Not |
|---|---|---|
| `GEMINI_API_KEY` | Evet* | Birincil model. *En az bir AI anahtarı şart.* |
| `GEMINI_MODEL` | Hayır | Varsayılan `gemini-2.5-flash` (çalışan model adını yaz). |
| `ANTHROPIC_API_KEY` / `GROQ_API_KEY` | Hayır | Yedek sağlayıcılar. |
| `SUPABASE_URL` / `SUPABASE_SERVICE_KEY` | Önerilir | Önbellek → benzersiz soru başına 1 AI çağrısı. |
| `SITE_URL` | Hayır | Varsayılan `https://teknopers.com.tr`. |
| `GA_ID` | Hayır | Varsayılan `G-8GBQE6QZP8` (siteninkiyle aynı). |

> Bu, ai. projesinden AYRI bir Vercel projesi. AI anahtarlarını BURAYA da eklemen gerekir.
> AI anahtarı yoksa /soru/ sayfaları 503+noindex döner (site geri kalanı etkilenmez).

## Supabase (opsiyonel ama önerilir)
1. SQL Editor → `supabase-kurulum.sql` → RUN.
2. Project URL + service_role → Vercel'e `SUPABASE_URL`, `SUPABASE_SERVICE_KEY`.

## Adımlar (telefon · GitHub web)
1. YENİ dosyaları oluştur, `vercel.json` + `robots.txt`'i değiştir.
2. Ortam değişkenlerini gir → Redeploy.
3. (Önerilir) Supabase kur.
4. Test: `/soru/kidem-tazminati-nasil-hesaplanir` (ilk açılış AI, yenileyince önbellek),
   `/sorular`, `/sitemap-sorular.xml`.
5. Search Console → Sitemaps → `sitemap-sorular.xml` gönder.

## Trafiği büyütmek
`sorular.js`'e satır ekle. Araç iç-linki için 5. parametreye eşleştir:
`q('yeni-slug','Soru?','Kategori', A.kidem, B.mesai)` → sayfa + sitemap + hub + araç CTA otomatik.
Slug: küçük harf, tireli, Türkçesiz (ı→i, ş→s, ğ→g, ü→u, ö→o, ç→c).
