# TEKNOPERS — Tam Güncelleme (Ana sayfa + Motor sayfaları)

## Bu pakette ne var
Ana sayfa (önceki adım) + /urun, /cozum, /soru motor sayfaları artık AYNI özgün kimlikte:
soğuk beyaz zemin (krem değil), Bricolage Grotesque başlık, mono etiketler,
lacivert + altın (şirket) / **gül (salon)** ikili aksan. "Claude şablonu" hissi kalktı.

- Salon ürün ve salon çözüm sayfaları otomatik GÜL temasına geçer (`body.tema-salon`).
- Şirket ürün/çözüm ve tüm liste sayfaları ALTIN temada kalır.
- Nav (kutulu "T" logosu) ve footer ana sayfayla birebir; footer /urun/ sayfalarına link verir (SEO iç bağlantı).
- Font Sora → Bricolage Grotesque; tüm navy #0B1220'ye eşitlendi.

## GitHub'a yüklenecek dosyalar (mevcutların ÜZERİNE)
| Dosya | Konum |
|---|---|
| index.html | kök |
| urunler.js | kök |
| cevaplar.js | kök |
| vercel.json | kök (2 adet 301 yönlendirme içerir) |
| lib/seo-motor.js | lib/ |
| lib/urun-motor.js | lib/ |
| lib/cozum-motor.js | lib/ |

> Değişmeyen dosyalara (api/*, sorular.js, cozumler.js, blog, araclar…) DOKUNMA.

## Notlar
- Render fonksiyonlarının ürettiği class isimleri korundu; yalnız görünüm (renk/font/stil) değişti.
- Salon teması: `seo-motor.js`'te `body.tema-salon{--gold:...gül...}` — tek noktadan tüm alt kullanımları döndürür.
- Sayfa üretimi Node fonksiyonlarıyla olduğu için önizlemeler statik HTML olarak ekte; canlıda Vercel üretir.
