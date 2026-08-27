export const ADDRESS =
  "Musalla Bağları Mahallesi, Ahmet Hilmi Nalçacı Caddesi, Ayişhanı Sitesi No:94/A, Selçuklu, Konya, Türkiye 42060";

export const HOURS = "Her gün 08:00–00:00";

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  ADDRESS
)}`;

export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS
)}&output=embed`;

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/kasuklokantasi" },
  { label: "YouTube", href: "https://youtube.com/@kasuklokantasi" },
  { label: "X", href: "https://x.com/KasukLokantasi" },
] as const;
