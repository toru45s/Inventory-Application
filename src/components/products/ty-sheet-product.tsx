import { TySheet } from "@/components/ui/ty-sheet";
import { Button } from "@/components/ui/button";
import { TyHeading } from "@/components/ui/ty-heading";
import { TyText } from "@/components/ui/ty-text";
import { TyLabel } from "@/components/ui/ty-label";
import { TyGrid } from "@/components/ui/ty-grid";
import { useConvertRatingToStar } from "@/hooks/use-convert-rating-to-star";

import Image from "next/image";

import type { Product } from "@/types/types";

type Props = {
  product: Product;
};

export function TySheetProduct(props: Props) {
  const { product } = props;
  const { renderRating } = useConvertRatingToStar();

  return (
    <TySheet
      title="Product Details"
      description="View and manage product information"
      triggerElement={<Button variant="outline">Show Detail</Button>}
    >
      <TyGrid gap="lg">
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
        <TyGrid gap="lg">
          <TyGrid gap="sm">
            <TyGrid>
              <TyHeading label={product.name} as="h3" />
              <TyText as="span" type="lg">
                ${product.price}
              </TyText>
              {renderRating(product.rating.rate)}
            </TyGrid>
            <TyGrid>
              <TyText as="p" type="sm">
                {product.description}
              </TyText>
            </TyGrid>
          </TyGrid>

          <TyGrid gap="sm">
            <TyLabel label="Category" value={product.category} />
            <TyLabel label="Number of stock" value={`${product.stock}`} />
            <TyLabel label="SKU" value={product.sku} />
          </TyGrid>
        </TyGrid>
      </TyGrid>
    </TySheet>
  );
}
