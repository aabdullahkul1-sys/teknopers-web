-- ============================================================================
-- TEKNOPERS AI · SEO YANITI KALICI ÖNBELLEĞİ
-- Supabase → SQL Editor → yapıştır → RUN.  (Tamamen ADDITIVE; mevcut şemaya dokunmaz.)
-- ============================================================================
-- Amaç: Bir soru bir kez AI'a sorulur, cevabı buraya yazılır. Sonraki tüm
-- istekler (Google botu dahil) buradan okur → AI çağrısı ≈ benzersiz soru başına 1.

create table if not exists public.ai_soru_cache (
  slug        text primary key,
  soru        text not null,
  cevap       text not null,
  saglayici   text,
  guncelleme  timestamptz not null default now()
);

create index if not exists ai_soru_cache_guncelleme_idx
  on public.ai_soru_cache (guncelleme desc);

-- RLS açık kalsın. Yazma/okuma yalnızca SUNUCUDAKİ service_role anahtarıyla yapılır
-- (RLS'i baypas eder). Public/anon için POLİTİKA AÇMIYORUZ — tarayıcıdan yazılamaz.
alter table public.ai_soru_cache enable row level security;

-- ── (opsiyonel) İçeriği elle görmek/temizlemek için ──
-- select slug, saglayici, guncelleme, left(cevap, 80) as onizleme
--   from public.ai_soru_cache order by guncelleme desc;
--
-- Bir sorunun cevabını sıfırlamak (bir sonraki ziyarette yeniden üretilir):
-- delete from public.ai_soru_cache where slug = 'yillik-izin-nasil-hesaplanir';
--
-- Tüm önbelleği temizlemek (ör. mevzuat güncellemesi sonrası hepsini tazele):
-- truncate table public.ai_soru_cache;
