/* ============================================================================
 * videolar.js — TEKNOPERS EĞİTİM VİDEOLARI LİSTESİ
 * ============================================================================
 * /egitim sayfası bu listeden beslenir. YENİ VİDEO EKLEMEK için ilgili grubun
 * "videolar" dizisine tek satır ekleyip mp4'ü /videolar/... altına yükle. Bitti.
 *
 * DOSYALARI NEREYE KOYACAKSIN (GitHub web · sürükle-bırak):
 *   depo kökünde  /videolar/  klasörü aç, içine şu 3 klasörü olduğu gibi at:
 *     videolar/1-TeknoPersSalon/...mp4
 *     videolar/2-Personel-Saha-Yonetim/...mp4
 *     videolar/3-AI-Asistan/...mp4
 *   (Dosya adları aşağıdaki "src" ile birebir aynı olmalı.)
 *
 * Bir video henüz yüklenmediyse sayfa onu "Yakında" olarak gösterir; kırık
 * oynatıcı çıkmaz. Yani listeye şimdiden ekleyip mp4'ü sonra atabilirsin.
 * ========================================================================== */
window.TEKNOPERS_VIDEOLAR = [
  {
    id: 'salon',
    baslik: 'TeknoPersSalon — Sektörel Tanıtımlar',
    aciklama: 'Randevu, müşteri ve paket yönetiminin sektörünüzdeki hali.',
    aksan: 'rose',
    videolar: [
      { src: '/videolar/1-TeknoPersSalon/TeknoPersSalon-Kuafor-Guzellik.mp4', baslik: 'Kuaför & Güzellik', etiket: 'Randevu · paket · kasa' },
      { src: '/videolar/1-TeknoPersSalon/TeknoPersSalon-Dis-Klinik.mp4',      baslik: 'Diş Kliniği',       etiket: 'Hasta · seans · hatırlatma' },
      { src: '/videolar/1-TeknoPersSalon/TeknoPersSalon-Diyetisyen.mp4',      baslik: 'Diyetisyen',        etiket: 'Danışan · program · takip' },
      { src: '/videolar/1-TeknoPersSalon/TeknoPersSalon-Pilates.mp4',         baslik: 'Pilates & Spor',    etiket: 'Ders · üyelik · yoklama' },
      { src: '/videolar/1-TeknoPersSalon/TeknoPersSalon-Dovme-Piercing.mp4',  baslik: 'Dövme & Piercing',  etiket: 'Randevu · ön ödeme · portföy' },
      { src: '/videolar/1-TeknoPersSalon/TeknoPersSalon-Veteriner.mp4',       baslik: 'Veteriner',         etiket: 'Hasta · aşı · hatırlatma' }
    ]
  },
  {
    id: 'saha',
    baslik: 'Personel & Saha Yönetimi',
    aciklama: 'Cihazsız konumlu PDKS, puantaj, stok, cari ve yönetici paneli.',
    aksan: 'gold',
    videolar: [
      { src: '/videolar/2-Personel-Saha-Yonetim/TEKNOPERS-Personel-Puantaj.mp4', baslik: 'Personel & Puantaj', etiket: 'Giriş-çıkış · hakediş' },
      { src: '/videolar/2-Personel-Saha-Yonetim/TEKNOPERS-Saha-Yonetimi.mp4',     baslik: 'Saha Yönetimi',     etiket: 'GPS · görev · ziyaret' },
      { src: '/videolar/2-Personel-Saha-Yonetim/TEKNOPERS-Depo-Stok-Cari.mp4',    baslik: 'Depo · Stok · Cari', etiket: 'Barkod · sayım · tahsilat' },
      { src: '/videolar/2-Personel-Saha-Yonetim/TEKNOPERS-Yonetici-Panel.mp4',    baslik: 'Yönetici Paneli',   etiket: 'Özet · onay · anlık durum' },
      { src: '/videolar/2-Personel-Saha-Yonetim/TEKNOPERS-Rapor-Ayarlar.mp4',     baslik: 'Rapor & Ayarlar',   etiket: 'PDF/Excel · roller' }
    ]
  },
  {
    id: 'ai',
    baslik: 'TEKNOPERS AI Asistan',
    aciklama: 'İşletme verinize sorular sorun, asistan yanıtlasın.',
    aksan: 'gold',
    videolar: [
      { src: '/videolar/3-AI-Asistan/TEKNOPERS-AI-Asistan.mp4', baslik: 'AI Asistan', etiket: 'Doğal dille sorgu' }
    ]
  },
  {
    id: 'ekran-kayitlari',
    baslik: 'Ekran Kayıtları · Adım Adım',
    aciklama: 'Kurulum ve günlük kullanım kayıtları. Yeni kayıtlar buraya eklenecek.',
    aksan: 'gold',
    videolar: [
      /* Ekran kaydı eklemek için örnek satır (mp4'ü /videolar/ekran-kayitlari/ altına at):
      { src: '/videolar/ekran-kayitlari/kurulum-ilk-adimlar.mp4', baslik: 'Kurulum — ilk adımlar', etiket: 'Hesap · işletme · personel' },
      */
    ]
  }
];
