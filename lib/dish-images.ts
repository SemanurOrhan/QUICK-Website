/**
 * Local fallback photography, keyed by the exact `urun_adi` in the menu
 * sheet. Empty by default in this template — add entries once you have
 * real dish photos. The Sheet's per-item `gorsel_url` (once filled in)
 * always takes precedence — see getDishImage().
 */
const DISH_IMAGES: Record<string, string> = {};

/** Local fallback category banners, keyed the same way as the Görseller sheet. */
const CATEGORY_IMAGES: Record<string, string> = {};

export function getDishImage(urunAdi: string): string | undefined {
  return DISH_IMAGES[urunAdi];
}

export function getCategoryFallbackImage(key: string): string | undefined {
  return CATEGORY_IMAGES[key];
}

/** Names (in menu order) featured with real photography on the menu page. */
export const PHOTOGRAPHED_DISH_NAMES = Object.keys(DISH_IMAGES);
