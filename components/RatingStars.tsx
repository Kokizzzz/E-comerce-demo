export default function RatingStars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;

  return (
    <div className="flex items-center gap-1" aria-label={`Rating ${rating}`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const idx = i + 1;
        const filled = idx <= full;
        const halfStar = idx === full + 1 && half;

        return (
          <span key={i} className="text-[#f0c14b] text-sm leading-none">
            {filled ? "★" : halfStar ? "⯨" : "☆"}
          </span>
        );
      })}
      <span className="text-xs text-gray-600 ml-1">{rating.toFixed(1)}</span>
    </div>
  );
}
