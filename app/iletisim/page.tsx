import type { Metadata } from "next";
import Image from "next/image";
import { ADDRESS, HOURS, MAPS_URL, MAPS_EMBED_URL, SOCIAL_LINKS } from "@/lib/contact";
import { InstagramIcon, YoutubeIcon, XIcon } from "@/components/SocialIcons";
import TopographicPattern from "@/components/TopographicPattern";

export const metadata: Metadata = {
  title: "İletişim — Kaşuk Lokantası",
  description:
    "Kaşuk Lokantası'na ulaşın: adres, çalışma saatleri, yol tarifi ve sosyal medya hesapları.",
};

const SOCIAL_ICONS = {
  Instagram: InstagramIcon,
  YouTube: YoutubeIcon,
  X: XIcon,
} as const;

export default function ContactPage() {
  return (
    <main className="flex-1">
      <section className="relative overflow-hidden bg-teal-deep py-16 text-parchment">
        <TopographicPattern opacity={0.12} />
        <div className="relative mx-auto max-w-6xl px-6 text-center sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-bronze">
            Kaşuk Lokantası
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            İletişim
          </h1>
          <p className="mt-3 font-sans text-parchment/80">
            Sorularınız ve rezervasyon talepleriniz için bize ulaşın.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="font-display text-2xl font-semibold text-charcoal">
            Adres &amp; Çalışma Saatleri
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-charcoal/80">
            {ADDRESS}
          </p>
          <p className="mt-3 font-sans text-base text-charcoal/80">{HOURS}</p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block rounded-full bg-bronze px-6 py-3 font-sans text-sm font-medium text-parchment transition-colors hover:bg-ember"
          >
            Yol Tarifi Al
          </a>

          <h2 className="mt-10 font-display text-2xl font-semibold text-charcoal">
            Sosyal Medya
          </h2>
          <div className="mt-4 flex items-center gap-3">
            {SOCIAL_LINKS.map(({ label, href }) => {
              const Icon = SOCIAL_ICONS[label];
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/15 text-charcoal/70 transition-colors hover:border-bronze hover:text-bronze"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="relative h-40 overflow-hidden rounded-2xl border border-charcoal/10 sm:h-48">
            <Image
              src="/outside-3.png"
              alt="Kaşuk Lokantası'nın gündüz görünümü — tanınması kolay taş cephe"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="h-72 overflow-hidden rounded-2xl border border-charcoal/10 sm:h-96 lg:flex-1">
            <iframe
              title="Kaşuk Lokantası konumu"
              src={MAPS_EMBED_URL}
              className="h-full w-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
