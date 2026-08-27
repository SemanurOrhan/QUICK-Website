import Image from "next/image";
import Link from "next/link";
import { getMenuItems, formatPrice, type MenuItem } from "@/lib/menu";
import { getSiteImages } from "@/lib/site-images";
import { getDishImage } from "@/lib/dish-images";
import { ADDRESS, HOURS, MAPS_URL } from "@/lib/contact";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import TopographicPattern from "@/components/TopographicPattern";

const FEATURED_NAMES = ["İskender", "Karışık Izgara", "Et Döner Porsiyon", "Yoğurtlu KAŞUK"];

export default async function Home() {
  const [items, siteImages] = await Promise.all([getMenuItems(), getSiteImages()]);

  const featured = FEATURED_NAMES.map((name) =>
    items.find((item) => item.urun_adi === name)
  ).filter((item): item is MenuItem => item !== undefined);

  const heroSrc = siteImages.hero_ana || "/hero-fallback.png";

  return (
    <main className="flex-1">
      <section className="relative flex min-h-[640px] items-end overflow-hidden sm:min-h-[720px]">
        <Image
          src={heroSrc}
          alt="Kaşuk Lokantası'nın taş cepheli girişi, akşam ışıklandırmasıyla"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/45 to-charcoal/10" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 pt-32 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-parchment/70">
            Konya · Geleneksel Esnaf Lokantası
          </p>
          <h1 className="mt-3 max-w-xl font-display text-4xl font-semibold text-parchment sm:text-5xl">
            Akşam Sofranız Kaşuk&apos;ta Hazır
          </h1>
          <p className="mt-4 max-w-lg font-sans text-parchment/85">
            Tarihi doku, geleneksel lezzetler... 100 çeşit tencere yemeği,
            hakiki et döner ve sıcacık bir kahvaltı sofrası sizi bekliyor.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/menu"
              className="rounded-full bg-bronze px-6 py-3 font-sans text-sm font-medium text-parchment transition-colors hover:bg-ember"
            >
              Menüyü Gör
            </Link>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-parchment/40 px-6 py-3 font-sans text-sm font-medium text-parchment transition-colors hover:border-parchment"
            >
              Yol Tarifi Al
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember">
          Hakkımızda
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-charcoal sm:text-4xl">
          Tarihi Doku, Geleneksel Lezzetler
        </h2>
        <p className="mt-5 font-sans text-base leading-relaxed text-charcoal/80 sm:text-lg">
          Konya&apos;nın kalbinde, taş cepheli tarihi bir mekânda
          kapılarımızı açıyoruz. 100 çeşit tencere yemeğinden hakiki et
          dönere, sıcacık bir kahvaltı sofrasından akşamın en güzel
          ızgaralarına kadar geleneksel esnaf lokantası kültürünü
          yaşatıyoruz.
        </p>
        <Link
          href="/hakkimizda"
          className="mt-6 inline-block font-sans text-sm font-medium text-teal-deep underline underline-offset-4 hover:text-bronze"
        >
          Hikayemizi Okuyun →
        </Link>
      </section>

      <section className="bg-cream-card py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="flex flex-col items-center text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember">
              Öne Çıkanlar
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-charcoal sm:text-4xl">
              Sofranın Yıldızları
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((item) => (
              <div
                key={item.urun_adi}
                className="overflow-hidden rounded-xl border border-charcoal/10 bg-parchment"
              >
                <div className="relative h-44">
                  {item.gorsel_url || getDishImage(item.urun_adi) ? (
                    <Image
                      src={item.gorsel_url || getDishImage(item.urun_adi)!}
                      alt={item.urun_adi}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    />
                  ) : (
                    <ImagePlaceholder className="h-full w-full" />
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-display text-lg font-semibold text-charcoal">
                    {item.urun_adi}
                  </h3>
                  <p className="mt-1 font-mono text-sm text-ember">
                    {formatPrice(item.fiyat)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
        <div className="flex flex-col items-center text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember">
            Mutfağımızdan
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-charcoal sm:text-4xl">
            Ocak Başında Hazırlananlar
          </h2>
          <p className="mt-3 max-w-xl font-sans text-charcoal/75">
            Her gün emekle hazırlanan lezzetlerden birkaç kare — güncel
            fiyatlar ve tam liste için menümüze göz atın.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { src: "/dishes/kasuk-bomba.png", alt: "Kaşuk Bomba" },
            { src: "/dishes/icli-kofte.png", alt: "İçli Köfte" },
            { src: "/dishes/mercimek-corbasi.png", alt: "Mercimek Çorbası" },
            { src: "/dishes/arabasi-corba.png", alt: "Arabaşı Çorba" },
          ].map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-[4/5] overflow-hidden rounded-xl"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(min-width: 640px) 25vw, 50vw"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-teal-deep py-20 text-parchment">
        <TopographicPattern opacity={0.1} />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-bronze">
            Bize Ulaşın
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Sizi Sofrada Görmek İçin Sabırsızlanıyoruz
          </h2>
          <p className="mt-4 font-sans text-parchment/80">{ADDRESS}</p>
          <p className="mt-1 font-sans text-parchment/80">{HOURS}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/iletisim"
              className="rounded-full bg-bronze px-6 py-3 font-sans text-sm font-medium text-parchment transition-colors hover:bg-ember"
            >
              İletişim Bilgileri
            </Link>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-parchment/40 px-6 py-3 font-sans text-sm font-medium text-parchment transition-colors hover:border-parchment"
            >
              Yol Tarifi Al
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
