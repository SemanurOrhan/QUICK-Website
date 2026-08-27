/**
 * Local fallback photography for real dishes we already have professional
 * shots of. Keyed by the exact `urun_adi` in the menu sheet. The Sheet's
 * per-item `gorsel_url` (once the owner fills it in) always takes
 * precedence — see getDishImage().
 */
const DISH_IMAGES: Record<string, string> = {
  "İskender": "/dishes/iskender.png",
  "Karışık Izgara": "/dishes/karisik-izgara.png",
  "Yoğurtlu KAŞUK": "/dishes/yogurtlu-kasuk.png",
  "İzmir Köfte": "/dishes/izmir-kofte.png",
  "Kuzu Şiş": "/dishes/kuzu-sis.png",
  "İncik Haşlama": "/dishes/incik-haslama.png",
  "Vişneli Kuzu Kavurma": "/dishes/visneli-kuzu-kavurma.png",
  "Dana Mutanca": "/dishes/dana-mutanca.png",
  "Et Döner Porsiyon": "/dishes/et-doner.png",
  "Ayva Tatlısı": "/dishes/ayva-tatlisi.png",
  "Kabak Tatlısı": "/dishes/kabak-tatlisi.png",
};

/** Local fallback category banners, keyed the same way as the Görseller sheet. */
const CATEGORY_IMAGES: Record<string, string> = {
  kategori_et: "/dishes/kategori-et.png",
  kategori_tavuk: "/dishes/kategori-tavuk.png",
  kategori_kofte: "/dishes/izmir-kofte.png",
  kategori_tatli: "/dishes/kabak-tatlisi.png",
};

export function getDishImage(urunAdi: string): string | undefined {
  return DISH_IMAGES[urunAdi];
}

export function getCategoryFallbackImage(key: string): string | undefined {
  return CATEGORY_IMAGES[key];
}

/** Names (in menu order) featured with real photography on the menu page. */
export const PHOTOGRAPHED_DISH_NAMES = Object.keys(DISH_IMAGES);
