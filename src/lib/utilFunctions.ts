export const firstLetterUpper = (s: string) =>
  s.charAt(0).toUpperCase() + s.slice(1);

type TotalRatingTypes = (arr: { rating: number }[]) => number | null;

export const totalRating: TotalRatingTypes = (arr) => {
  const total = arr?.reduce((t, { rating }) => rating + t, 0);
  return total ? Math.round(total / arr.length) : null;
};
