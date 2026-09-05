-- ============================================================================
-- TeknopersSalon · DEMO TRIAL KİLİDİ (15 gün otomatik)
-- Supabase → SQL Editor → RUN. Additive; mevcut salonları etkilemez (NULL = süresiz).
-- ============================================================================
alter table public.salons add column if not exists trial_ends timestamptz;

-- Nasıl çalışır:
--  • trial_ends = NULL  → normal salon (süre kilidi yok, eskisi gibi).
--  • trial_ends dolu    → demo hesabı; o tarih geçince api/auth.js girişi reddeder.
-- create_salon çağrısına trial_days:15 gönderilirse trial_ends = now()+15 gün yazılır.
