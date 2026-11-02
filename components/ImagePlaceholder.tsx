import TopographicPattern from "./TopographicPattern";

/**
 * Neutral fallback shown wherever a restaurant-managed image (Görseller
 * sheet or per-item gorsel_url) hasn't been filled in yet — never a
 * broken-image icon.
 */
export default function ImagePlaceholder({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-cream-card ${className}`}
    >
      <TopographicPattern opacity={0.25} className="text-teal-deep" />
    </div>
  );
}
