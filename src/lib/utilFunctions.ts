export const firstLetterUpper = (s: string) =>
  s.charAt(0).toUpperCase() + s.slice(1);

type totalRatingTypes = (arr: { rating: number }[]) => number | null;

export const totalRating: totalRatingTypes = (arr) => {
  const rating = arr?.reduce((total, { rating }) => rating + total, 0);
  return rating ? Math.round(rating / arr.length) : null;
};
