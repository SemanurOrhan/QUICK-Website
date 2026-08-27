type TopographicPatternProps = {
  className?: string;
  opacity?: number;
  patternId?: string;
};

/**
 * Signature contour-line texture echoing the logo's topographic background.
 * Purely decorative — hidden from assistive tech.
 */
export default function TopographicPattern({
  className = "",
  opacity = 0.12,
  patternId = "kasuk-topo",
}: TopographicPatternProps) {
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={{ opacity }}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern
          id={patternId}
          width="320"
          height="320"
          patternUnits="userSpaceOnUse"
        >
          <g fill="none" stroke="currentColor" strokeWidth="1.25">
            <path d="M30,40 C5,55 0,90 25,105 C50,120 90,110 95,80 C100,50 60,20 30,40 Z" />
            <path d="M40,50 C25,60 22,80 38,92 C54,104 78,98 82,78 C86,58 60,38 40,50 Z" />
            <path d="M180,20 C150,30 145,70 175,90 C205,110 250,95 255,60 C260,25 215,5 180,20 Z" />
            <path d="M190,32 C170,40 168,64 188,78 C208,92 232,82 236,58 C240,34 213,22 190,32 Z" />
            <path d="M60,180 C25,190 20,230 55,250 C90,270 140,255 145,215 C150,175 100,168 60,180 Z" />
            <path d="M75,195 C55,202 52,222 68,234 C84,246 108,238 112,216 C116,194 98,186 75,195 Z" />
            <path d="M250,200 C225,208 220,240 245,258 C270,276 305,262 308,232 C311,202 278,190 250,200 Z" />
            <path d="M20,260 C5,268 3,285 15,295 C27,305 45,298 48,282 C51,266 38,250 20,260 Z" />
            <path d="M270,60 C255,66 253,82 265,90 C277,98 293,92 296,78 C299,64 288,52 270,60 Z" />
            <path d="M140,120 C120,128 116,150 134,164 C152,178 180,168 184,142 C188,116 165,110 140,120 Z" />
            <path d="M150,132 C138,137 136,150 147,158 C158,166 174,160 176,145 C178,130 165,125 150,132 Z" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
