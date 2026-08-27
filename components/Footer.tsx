import Image from "next/image";
import Link from "next/link";
import TopographicPattern from "./TopographicPattern";
import { InstagramIcon, YoutubeIcon, XIcon } from "./SocialIcons";
import { ADDRESS, HOURS, MAPS_URL, SOCIAL_LINKS } from "@/lib/contact";

const quickLinks = [
  { href: "/", label: "Anasayfa" },
  { href: "/menu", label: "Menü" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

const SOCIAL_ICONS = {
  Instagram: InstagramIcon,
  YouTube: YoutubeIcon,
  X: XIcon,
} as const;

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-teal-deep text-parchment">
      <TopographicPattern opacity={0.1} />

      <div className="relative mx-auto max-w-6xl px-6 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Kaşuk Lokantası"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="font-display text-lg font-semibold">
                Kaşuk Lokantası
              </span>
            </div>
            <p className="mt-3 font-sans text-sm text-parchment/70">
              Akşam Sofranız Kaşuk&apos;ta Hazır
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-bronze">
              İletişim
            </h3>
            <p className="mt-3 font-sans text-sm leading-relaxed text-parchment/80">
              {ADDRESS}
            </p>
            <p className="mt-2 font-sans text-sm text-parchment/80">
              {HOURS}
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block font-sans text-sm font-medium text-bronze underline-offset-4 hover:underline"
            >
              Yol Tarifi Al
            </a>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-bronze">
              Sayfalar
            </h3>
            <ul className="mt-3 flex flex-col gap-2">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-sans text-sm text-parchment/80 hover:text-parchment"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-bronze">
              Sosyal Medya
            </h3>
            <div className="mt-3 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ label, href }) => {
                const Icon = SOCIAL_ICONS[label];
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-parchment/25 text-parchment/80 transition-colors hover:border-bronze hover:text-bronze"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-parchment/15 pt-6 sm:flex-row">
          <p className="font-mono text-xs text-parchment/50">
            © {new Date().getFullYear()} Kaşuk Lokantası. Tüm hakları
            saklıdır.
          </p>
          <CartSilhouette />
        </div>
      </div>
    </footer>
  );
}

function CartSilhouette() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 32"
      className="h-5 w-10 text-parchment/30"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M2 24h4l3-9h14l2 9h4M2 24v-3a2 2 0 0 1 2-2h9M25 24h14M43 15l6 2 4 4v3h-6" />
      <circle cx="12" cy="27" r="2.5" />
      <circle cx="34" cy="27" r="2.5" />
      <circle cx="49" cy="27" r="2.5" />
      <path d="M9 15h14v-4H11z" />
    </svg>
  );
}
