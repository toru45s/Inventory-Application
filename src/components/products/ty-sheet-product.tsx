"use client";

import { useState } from "react";
import { TySheet } from "@/components/ui/ty-sheet";
import { Button } from "@/components/ui/shadcn/button";
import { TyDrawer } from "@/components/ui/ty-drawer";
import { useIsMobile } from "@/hooks/use-mobile";

import { TySheetProductContent } from "@/components/products/ty-sheet-product-content";

import type { Product } from "@/types/types";

type Props = {
  product: Product;
};

const TITLE = "Product Details";
const DESCRIPTION = "View and manage product information";

export function TySheetProduct(props: Props) {
  const { product } = props;
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  const ButtonOpen = <Button variant="outline">Show Detail</Button>;

  if (isMobile) {
    return (
      <TyDrawer
        open={open}
        onOpenChange={setOpen}
        title={TITLE}
        description={DESCRIPTION}
        triggerElement={ButtonOpen}
      >
        <TySheetProductContent product={product} />
      </TyDrawer>
    );
  }

  return (
    <TySheet
      open={open}
      onOpenChange={setOpen}
      title={TITLE}
      description={DESCRIPTION}
      triggerElement={ButtonOpen}
    >
      <TySheetProductContent product={product} />
    </TySheet>
  );
}
