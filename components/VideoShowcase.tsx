"use client";

import Image from "next/image";
import { useState } from "react";

export default function VideoShowcase({
  poster,
  src,
  alt,
}: {
  poster: string;
  src: string;
  alt: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-[9/16] w-full max-w-xs overflow-hidden rounded-2xl bg-charcoal shadow-lg sm:max-w-sm">
      {playing ? (
        <video
          src={src}
          controls
          autoPlay
          playsInline
          preload="none"
          className="h-full w-full object-cover"
        >
          Tarayıcınız video oynatmayı desteklemiyor.
        </video>
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`${alt} — videoyu oynat`}
          className="group absolute inset-0 h-full w-full"
        >
          <Image
            src={poster}
            alt={alt}
            fill
            className="object-cover"
            sizes="(min-width: 640px) 384px, 320px"
          />
          <div className="absolute inset-0 bg-charcoal/25 transition-colors group-hover:bg-charcoal/35" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-parchment/95 text-teal-deep shadow-md transition-transform group-hover:scale-105">
              <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
          <span className="absolute bottom-4 left-4 right-4 font-sans text-sm font-medium text-parchment">
            Kaşuk&apos;u Keşfedin
          </span>
        </button>
      )}
    </div>
  );
}
