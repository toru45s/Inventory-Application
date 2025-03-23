"use client";

import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { TyDrawer } from "@/components/ui/ty-drawer";
import { TySheet } from "@/components/ui/ty-sheet";
import { TySheetCartContent } from "@/components/carts/ty-sheet-cart-content";
import { Button } from "@/components/ui/shadcn/button";
import type { CartWithUserProducts } from "@/types/types";

type Props = {
  cart: CartWithUserProducts;
};

const TITLE = "Cart Details";
const DESCRIPTION = "View and manage cart information";

export function TySheetCart(props: Props) {
  const { cart } = props;
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  const ButtonOpen = <Button variant="outline">Show Detail</Button>;

  if (isMobile) {
    return (
      <TyDrawer
        title={TITLE}
        description={DESCRIPTION}
        triggerElement={ButtonOpen}
        open={open}
        onOpenChange={setOpen}
      >
        <TySheetCartContent cart={cart} />
      </TyDrawer>
    );
  }

  return (
    <TySheet
      title={TITLE}
      description={DESCRIPTION}
      triggerElement={ButtonOpen}
      open={open}
      onOpenChange={setOpen}
    >
      <TySheetCartContent cart={cart} />
    </TySheet>
  );
}
