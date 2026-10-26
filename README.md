# Kaşuk Lokantası — Web Sitesi

Geleneksel bir esnaf lokantası için Next.js tabanlı tanıtım sitesi. Menü ve site görselleri bir Google Sheets dosyasından yönetilir; ekstra bir admin panel ya da veritabanına ihtiyaç duyulmaz.

## Geliştirme

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000)

## Ortam değişkenleri

`.env.local.example` dosyasını `.env.local` olarak kopyalayıp doldurun:

- `GOOGLE_SHEET_ID`, `MENU_SHEET_GID`, `IMAGES_SHEET_GID` — Google Sheets entegrasyonu. Boş bırakılırsa site `data/menu-seed.csv` içindeki örnek menüyü kullanır ve görseller için markaya uygun bir placeholder gösterir — hiçbir zaman boş kalmaz.
- `NEXT_PUBLIC_SITE_URL` — canlı alan adı (Open Graph/Twitter kartlarının doğru görsel/URL üretmesi için).

Menü veya görsel güncellemesi için restoranın kod veya yeniden deploy ile
uğraşması gerekmez: ilgili Google Sheet hücresini güncellemesi yeterli,
site en geç 5 dakika içinde otomatik yenilenir (ISR `revalidate: 300`).
