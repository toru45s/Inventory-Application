import { TySheet } from "@/components/ui/ty-sheet";
import { Button } from "@/components/ui/button";
import { TyText } from "@/components/ui/ty-text";
import { TyHeading } from "@/components/ui/ty-heading";
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
      <div className="grid gap-4">
        {cart.user ? (
          <div className="grid gap-2">
            <TyHeading
              label={`${cart.user.firstname} ${cart.user.lastname}`}
              as="h3"
            />
            <div className="flex flex-col gap-2 text-sm">
              <div>
                <span className="text-muted-foreground">Email:</span>{" "}
                {cart.user.email}
              </div>
              <div>
                <span className="text-muted-foreground">Phone:</span>{" "}
                {cart.user.phone}
              </div>
              <div className="md:col-span-2">
                <span className="text-muted-foreground">Location:</span>{" "}
                {cart.user.city}, {cart.user.state} {cart.user.zipcode}
              </div>
            </div>
          </div>
        ) : (
          <TyText as="p" type="lg">
            User information not available
          </TyText>
        )}

        <Separator />

        <div className="grid gap-2">
          <TyHeading label="Products" as="h3" />

          <div className="space-y-3">
            {cart.items.map((item) => (
              <div
                key={item.productId}
                className="grid gap-1 p-2 rounded-md bg-muted/50"
              >
                <div className="flex justify-between">
                  <span className="font-medium"> {item.product.name}</span>
                  <Badge variant="outline">Qty: {item.quantity}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {item.product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TySheet>
  );
}
