import { TySheet } from "@/components/ui/ty-sheet";
import { Button } from "@/components/ui/button";

import type { CartWithUser } from "@/types/types";

type Props = {
  cart: CartWithUser;
};

export function TySheetCart(props: Props) {
  const { cart } = props;

  return (
    <TySheet
      title="Cart Details"
      description="View and manage cart information"
      triggerElement={<Button variant="outline">Show Detail</Button>}
    >
      Content
    </TySheet>
  );
}
