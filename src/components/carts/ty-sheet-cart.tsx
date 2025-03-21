import { TySheet } from "@/components/ui/ty-sheet";
import { Button } from "@/components/ui/button";
import { TyHeading } from "@/components/ui/ty-heading";
import { TyLabel } from "@/components/ui/ty-label";
import { TyGrid } from "@/components/ui/ty-grid";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

import type { CartWithUserProducts } from "@/types/types";

type Props = {
  cart: CartWithUserProducts;
};

export function TySheetCart(props: Props) {
  const { cart } = props;
  console.log(cart);
  return (
    <TySheet
      title="Cart Details"
      description="View and manage cart information"
      triggerElement={<Button variant="outline">Show Detail</Button>}
    >
      <TyGrid gap="lg">
        <TyGrid gap="md">
          {cart.user ? (
            <>
              <TyHeading
                label={`${cart.user.firstname} ${cart.user.lastname}`}
                as="h3"
              />
              <TyGrid gap="sm">
                <TyLabel label="Email" value={cart.user.email} />
                <TyLabel label="Phone" value={cart.user.phone} />
                <TyLabel
                  label="Location"
                  value={`${cart.user.city}, ${cart.user.state} ${cart.user.zipcode}`}
                />
              </TyGrid>
            </>
          ) : (
            <TyHeading label="User information not available" as="h3" />
          )}
        </TyGrid>

        <Separator />

        <TyGrid gap="md">
          <TyHeading label="Products" as="h3" />

          <TyGrid gap="md">
            {cart.items.map((item) => (
              <div
                key={item.productId}
                className="grid gap-1 p-2 rounded-md bg-muted/50"
              >
                <div className="flex justify-between">
                  <span className="font-medium"> {item.product?.name}</span>
                  <Badge variant="outline">Qty: {item.quantity}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {item.product?.description}
                </p>
              </div>
            ))}
          </TyGrid>
        </TyGrid>
      </TyGrid>
    </TySheet>
  );
}
