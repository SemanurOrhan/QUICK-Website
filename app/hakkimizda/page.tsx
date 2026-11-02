import type { Metadata } from "next";
import Link from "next/link";
import TopographicPattern from "@/components/TopographicPattern";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Hakkımızda — Lezzet Durağı",
  description:
    "Lezzet Durağı'nın hikayesi: geleneksel esnaf lokantası kültürü ve sıcak, samimi bir sofra.",
};

const highlights = [
  {
    title: "100 Çeşit Tencere Yemeği",
    body: "Her gün ocak başında hazırlanan, ev sofralarını hatırlatan zengin bir tencere yemeği repertuvarı.",
  },
  {
    title: "Hakiki Et Döner",
    body: "Geleneksel usulde, katkısız ve hakiki et ile hazırlanan döner — İskender'den porsiyona kadar.",
  },
  {
    title: "Kahvaltı Sofrası",
    body: "Güne sıcacık ve doyurucu bir Anadolu kahvaltısıyla başlamak isteyenler için.",
  },
];

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="relative overflow-hidden bg-teal-deep py-16 text-parchment">
        <TopographicPattern opacity={0.12} />
        <div className="relative mx-auto max-w-6xl px-6 text-center sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-bronze">
            Lezzet Durağı
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            Hakkımızda
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember">
            Hikayemiz
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-charcoal sm:text-4xl">
            Tarihi Doku, Geleneksel Lezzetler
          </h2>
          <div className="mt-5 flex flex-col gap-4 font-sans text-base leading-relaxed text-charcoal/80 sm:text-lg">
            <p>
              Taş cepheli kemerli girişi ve ahşap detaylarıyla dikkat çeken
              tarihi bir mekânda, esnaf lokantası geleneğini yaşatıyoruz.
              Amacımız; sıcak, samimi bir atmosferde, ev sofralarının
              lezzetini bulabileceğiniz bir durak olmak.
            </p>
            <p>
              Mutfağımızda her gün ocak başında hazırlanan onlarca çeşit
              tencere yemeği, hakiki et döner ve ızgara çeşitleri sofranıza
              geliyor.
            </p>
            <p>
              İsmimizi taşıyan imza yemeğimiz{" "}
              <span className="font-medium text-teal-deep">
                Yoğurtlu Durak
              </span>
              , mutfağımızın geleneksel köklerine verdiğimiz önemin bir
              simgesi.
            </p>
          </div>
          <Link
            href="/menu"
            className="mt-8 inline-block rounded-full bg-bronze px-6 py-3 font-sans text-sm font-medium text-parchment transition-colors hover:bg-ember"
          >
            Menüyü İncele
          </Link>
        </div>

        <ImagePlaceholder className="relative h-72 rounded-2xl sm:h-96" />
      </section>

      <section className="bg-cream-card py-16">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-charcoal/10 bg-parchment p-6"
              >
                <h3 className="font-display text-lg font-semibold text-teal-deep">
                  {item.title}
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-charcoal/75">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <div className="flex flex-col items-center text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember">
            Sofra Kültürümüz
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-charcoal sm:text-4xl">
            Lezzet Durağı&apos;ndan Bir Kare
          </h2>
          <p className="mt-3 max-w-xl font-sans text-charcoal/75">
            Kalabalık sofralar, paylaşılan tabaklar... Birkaç fotoğrafla
            mekânımıza bir göz atın.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap items-start justify-center gap-6">
          <ImagePlaceholder className="aspect-[9/16] w-full max-w-xs rounded-2xl shadow-lg sm:max-w-sm" />
          <ImagePlaceholder className="aspect-[9/16] w-full max-w-xs rounded-2xl shadow-lg sm:max-w-sm" />
        </div>
      </section>
    </main>
  );
}
