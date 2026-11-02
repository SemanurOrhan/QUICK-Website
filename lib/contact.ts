export const ADDRESS =
  "Örnek Mahallesi, Örnek Caddesi No:1, Selçuklu, Konya, Türkiye 42000";

export const HOURS = "Her gün 09:00–23:00";

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  ADDRESS
)}`;

export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS
)}&output=embed`;

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "YouTube", href: "https://youtube.com/" },
  { label: "X", href: "https://x.com/" },
] as const;
