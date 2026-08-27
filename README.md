# Kaşuk Lokantası — Web Sitesi

Konya'da geleneksel bir esnaf lokantası olan Kaşuk Lokantası için Next.js
tabanlı tanıtım sitesi. Menü ve site görselleri bir Google Sheets dosyasından
yönetilir; ekstra bir admin panel ya da veritabanı yoktur.

## Geliştirme

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) adresini açın.

## Ortam değişkenleri

`.env.local.example` dosyasını `.env.local` olarak kopyalayıp doldurun:

- `GOOGLE_SHEET_ID`, `MENU_SHEET_GID`, `IMAGES_SHEET_GID` — Google Sheets
  entegrasyonu (bkz. proje kökündeki `CLAUDE.md` Bölüm 5). Boş bırakılırsa
  site `data/menu-seed.csv` içindeki örnek menüyü kullanır ve görseller için
  markaya uygun bir placeholder gösterir — hiçbir zaman boş/kırık kalmaz.
- `NEXT_PUBLIC_SITE_URL` — canlı alan adı (Open Graph/Twitter kartlarının
  doğru görsel/URL üretmesi için). Vercel'de production alan adı belli
  olduğunda ayarlanmalı.

## Vercel'e deploy

Proje ek yapılandırma gerektirmez — Vercel varsayılan Next.js ayarlarını
kullanır (`vercel.json` gerekmez):

1. Depoyu Vercel'e bağlayın (GitHub/GitLab/Bitbucket veya `vercel` CLI ile).
2. Vercel proje ayarlarından yukarıdaki ortam değişkenlerini girin.
3. Deploy edin. `npm run build` production build'i doğrulamak için yerelde
   de çalıştırılabilir.

Menü veya görsel güncellemesi için restoranın kod veya yeniden deploy ile
uğraşması gerekmez: ilgili Google Sheet hücresini güncellemesi yeterli,
site en geç 5 dakika içinde otomatik yenilenir (ISR `revalidate: 300`).
