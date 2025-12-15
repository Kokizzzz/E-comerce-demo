function hashString(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

export function demoRating(id: string) {
  const h = hashString(id);
  const rating = 3.6 + (h % 15) / 10; // 3.6 -> 5.0
  const rounded = Math.min(5, Math.round(rating * 10) / 10);
  const reviews = 80 + (h % 1900);
  return { rating: rounded, reviews };
}

export function demoDeal(id: string) {
  const h = hashString(id);
  const percent = [10, 15, 20, 25, 30, 35, 40][h % 7];
  const isDeal = (h % 3) !== 0;
  return { isDeal, percent };
}

export function demoFlags(id: string) {
  const h = hashString(id);
  const bestSeller = (h % 5) === 0;  // ~20%
  const prime = (h % 2) === 0;       // ~50%
  return { bestSeller, prime };
}
