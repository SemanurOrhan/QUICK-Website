/**
 * Generic placeholder brand mark (a simple spoon glyph) — swap for the
 * restaurant's real logo once available.
 */
export default function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <ellipse cx="18" cy="16" rx="8" ry="10" />
      <path d="M18 26v16" />
    </svg>
  );
}
