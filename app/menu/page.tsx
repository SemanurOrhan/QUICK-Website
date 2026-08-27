import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  getMenuItems,
  groupMenuByCategory,
  formatPrice,
  slugifyCategory,
  type MenuItem,
} from "@/lib/menu";
import { getSiteImages } from "@/lib/site-images";
import { getDishImage, getCategoryFallbackImage, PHOTOGRAPHED_DISH_NAMES } from "@/lib/dish-images";
import TopographicPattern from "@/components/TopographicPattern";

export const metadata: Metadata = {
  title: "Menü — Kaşuk Lokantası",
  description:
    "Kaşuk Lokantası menüsü: et yemekleri, köfteler, tavuk, sebzeli yemekler, pilavlar, mezeler ve tatlılar.",
};

const CATEGORY_IMAGE_KEYS: Record<string, string> = {
  "Et Yemekleri": "kategori_et",
  "Köfteli Yemekler": "kategori_kofte",
  "Tavuk Yemekleri": "kategori_tavuk",
  "Sebzeli Yemekler": "kategori_sebzeli",
  Pilavlar: "kategori_pilav",
  Mezeler: "kategori_meze",
  Tatlılar: "kategori_tatli",
};

export default async function MenuPage() {
  const [items, siteImages] = await Promise.all([getMenuItems(), getSiteImages()]);
  const categories = groupMenuByCategory(items);

  const photographed = PHOTOGRAPHED_DISH_NAMES.map((name) =>
    items.find((item) => item.urun_adi === name)
  ).filter((item): item is MenuItem => item !== undefined);

  return (
    <main className="flex-1">
      <section className="relative overflow-hidden bg-teal-deep py-16 text-parchment">
        <TopographicPattern opacity={0.12} />
        <div className="relative mx-auto max-w-6xl px-6 text-center sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-bronze">
            Kaşuk Lokantası
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            Menü
          </h1>
          <p className="mt-3 font-sans text-parchment/80">
            Geleneksel esnaf lokantası sofrası — tencere yemeklerinden
            ızgaraya, tatlıya kadar.
          </p>
        </div>
      </section>

      <nav
        aria-label="Kategoriler"
        className="sticky top-[65px] z-40 border-b border-charcoal/10 bg-parchment/95 backdrop-blur"
      >
        <div className="relative">
          <div className="scrollbar-hide mx-auto flex max-w-6xl gap-2 overflow-x-auto px-6 py-3 sm:px-8">
            {categories.map(({ kategori }) => (
              <a
                key={kategori}
                href={`#${slugifyCategory(kategori)}`}
                className="shrink-0 rounded-full border border-charcoal/15 px-4 py-1.5 font-sans text-sm text-charcoal/70 transition-colors hover:border-bronze hover:text-teal-deep"
              >
                {kategori}
              </a>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-parchment to-transparent sm:w-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-parchment to-transparent sm:w-10" />
        </div>
      </nav>

      {photographed.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 pt-14 sm:px-8">
          <div className="flex flex-col items-center text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember">
              Objektiften
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-charcoal">
              Fotoğraflarla Seçkiler
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {photographed.map((item) => (
              <a
                key={item.urun_adi}
                href={`#${slugifyCategory(item.kategori)}`}
                className="group block overflow-hidden rounded-2xl border border-charcoal/10 bg-cream-card transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={getDishImage(item.urun_adi)!}
                    alt={item.urun_adi}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                  />
                </div>
                <div className="flex items-center justify-between px-3 py-2.5">
                  <span className="font-mono text-[11px] uppercase tracking-wide text-charcoal/50">
                    {item.kategori}
                  </span>
                  <span className="font-mono text-sm font-semibold text-ember">
                    {formatPrice(item.fiyat)}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8">
        <div className="flex flex-col gap-12">
          {categories.map(({ kategori, items: categoryItems }) => {
            const imageKey = CATEGORY_IMAGE_KEYS[kategori];
            const imageUrl =
              (imageKey && siteImages[imageKey]) ||
              (imageKey && getCategoryFallbackImage(imageKey));

            return (
              <section
                key={kategori}
                id={slugifyCategory(kategori)}
                className="scroll-mt-32 rounded-2xl border border-charcoal/10 bg-cream-card p-6 sm:p-8"
              >
                {imageUrl && (
                  <div className="relative -mx-6 -mt-6 mb-6 h-40 overflow-hidden rounded-t-2xl sm:-mx-8 sm:-mt-8 sm:h-52">
                    <Image
                      src={imageUrl}
                      alt={kategori}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 1024px, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
                    <h2 className="absolute bottom-4 left-4 font-display text-2xl font-semibold uppercase tracking-wide text-parchment sm:text-3xl">
                      {kategori}
                    </h2>
                  </div>
                )}
                {!imageUrl && (
                  <h2 className="font-display text-2xl font-semibold uppercase tracking-wide text-teal-deep">
                    {kategori}
                  </h2>
                )}
                <ul className="mt-5 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
                  {categoryItems.map((item) => (
                    <li
                      key={item.urun_adi}
                      className="flex items-baseline gap-3"
                    >
                      <span className="font-display text-base italic text-teal-deep">
                        {item.urun_adi}
                        {item.aciklama && (
                          <span className="ml-1 font-sans text-sm not-italic text-charcoal/50">
                            ({item.aciklama})
                          </span>
                        )}
                      </span>
                      <span className="flex-1 border-b border-dotted border-charcoal/25" />
                      <span className="font-mono text-sm font-medium text-ember">
                        {formatPrice(item.fiyat)}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </div>

      <section className="relative overflow-hidden bg-teal-deep py-16 text-parchment">
        <TopographicPattern opacity={0.1} />
        <div className="relative mx-auto flex max-w-2xl flex-col items-center px-6 text-center sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-bronze">
            Aklınıza Takılan mı Var?
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
            Sofranızı Hazırlamaya Hazırız
          </h2>
          <Link
            href="/iletisim"
            className="mt-6 rounded-full bg-bronze px-6 py-3 font-sans text-sm font-medium text-parchment transition-colors hover:bg-ember"
          >
            Bize Ulaşın
          </Link>
        </div>
      </section>
    </main>
  );
}
