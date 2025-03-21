import { TySheet } from "@/components/ui/ty-sheet";
import { Button } from "@/components/ui/button";
import { Star, StarHalf } from "lucide-react";
import { TyHeading } from "@/components/ui/ty-heading";
import { TyText } from "@/components/ui/ty-text";
import Image from "next/image";

import type { Product } from "@/types/types";

type Props = {
  product: Product;
};

export function TySheetProduct(props: Props) {
  const { product } = props;
  // Function to render star ratings
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

  return (
    <TySheet
      title="Product Details"
      description="View and manage product information"
      triggerElement={<Button variant="outline">Show Detail</Button>}
    >
      <div className="relative w-[350px] h-[350px]">
        {false ? (
          <Image
            src={product.image_url}
            width={350}
            height={350}
            alt={product.name}
          />
        ) : (
          <div className="w-full h-full border border-gray-200 rounded-md  flex items-center justify-center">
            <span>No Image</span>
          </div>
        )}
      </div>

      <div className="py-4 flex flex-col space-y-4">
        <div className="flex flex-col">
          <TyHeading label={product.name} as="h3" />
          <TyText as="span" type="lg">
            ${product.price}
          </TyText>
          {renderRating(product.rating.rate)}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col">
            <h4 className="text-sm font-medium text-muted-foreground">
              Category
            </h4>
            <TyText as="p" type="md">
              {product.category}
            </TyText>
          </div>

          <div className="flex flex-col">
            <h4 className="text-sm font-medium text-muted-foreground">
              Number of stock
            </h4>
            <TyText as="span" type="md">
              {product.stock}
            </TyText>
          </div>

          <div className="flex flex-col">
            <h4 className="text-sm font-medium text-muted-foreground">SKU</h4>
            <TyText as="p" type="sm">
              {product.sku}
            </TyText>
          </div>
        </div>
      </div>
    </TySheet>
  );
}
