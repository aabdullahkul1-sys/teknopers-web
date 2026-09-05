# TEKNOPERS — Demo & Dikey Sayfalar · Kurulum (güncel)

Model: şirket adı → uygulamanın kendi Supabase'inde **gerçek 15 günlük** demo;
süre dolunca giriş otomatik kapanır. Kontrol mevcut CEO panellerinde. Ödeme yok,
süre sonunda kullanıcı iletişime geçer.

## İki ayrı repo — karıştırma
- Kök dosyalar → **teknopers-web** (teknopers.com.tr)
- `SALON-uygulamasi/` → **TeknopersSalon** (salon.teknopers.com.tr) — asla teknopers-web'e koyma

## Sıra (deploy güvenliği)
1) ERP tarafı canlı olmalı: `/api/kurucu/giris` ve `/api/kurucu/sirket` uçları çalışıyor olsun.
2) SALON: Supabase'de `SALON-uygulamasi/SQL/demo-trial-lock.sql` → RUN.
3) SALON: `api/auth.js` + `api/superadmin.js` → üzerine yaz (deploy).
4) teknopers-web → Vercel env: `SUPER_PIN` (ERP ile aynı), `TEKNOPERS_MASTER_KEY` (Salon ile aynı).
   (İstersen `DEMO_GUN` ile süreyi değiştir; varsayılan 15.)
5) teknopers-web → kök dosyaları push et.

Yanlış sırada gitse funnel WhatsApp'a düşer (lead kaybolmaz), sert kırılma olmaz.

## Deploy sonrası ilk test
- Bir `/soru/...`, bir `/cozum/...`, bir tekil `/urun/zimmet-takip-sistemi` aç → render + schema gözle.
- `teknopers.com.tr/demo-talep` → işletme adı → Şirket & Saha → kod+PIN çıkmalı → erp.teknopers.com.tr'ye gir.
- Aynısını Salon & Randevu ile → salon.teknopers.com.tr.

## Notlar
- `SUPER_PIN` / `TEKNOPERS_MASTER_KEY` uygulamalardakiyle AYNI olmazsa demo açılmaz (en sık hata).
- Rate-limit best-effort (serverless bellek); yoğun kötüye kullanımda Vercel Firewall/captcha eklenebilir.
