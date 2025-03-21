import { Star, StarHalf } from "lucide-react";

export function useConvertRatingToStar() {
  const renderRating = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
        ))}
        {hasHalfStar && (
          <StarHalf className="h-4 w-4 fill-primary text-primary" />
        )}
        <span className="ml-2 text-sm text-muted-foreground">
          {rating.toFixed(1)}
        </span>
      </div>
    );
  };
  return { renderRating };
}
