"use client";
import { TyDialog } from "@/components/ui/ty-dialog";
import { Button } from "@/components/ui/shadcn/button";
import { TyFormAddProduct } from "@/components/products/ty-form-add-product";
import { TyDrawer } from "@/components/ui/ty-drawer";
import { useDialogProduct } from "@/hooks/use-dialog-product";
import { useIsMobile } from "@/hooks/use-mobile";

const TITLE = "Create Product";
const DESCRIPTION = "Create a new product";

export function TyDialogProduct() {
  const { open, onOpenChange } = useDialogProduct();
  const isMobile = useIsMobile();

  const ButtonOpen = <Button variant="outline">Add New Product</Button>;

  if (isMobile) {
    return (
      <TyDrawer
        open={open}
        onOpenChange={onOpenChange}
        title={TITLE}
        description={DESCRIPTION}
        triggerElement={ButtonOpen}
      >
        <TyFormAddProduct />
      </TyDrawer>
    );
  }

  return (
    <TyDialog
      open={open}
      onOpenChange={onOpenChange}
      title={TITLE}
      description={DESCRIPTION}
      triggerElement={ButtonOpen}
    >
      <TyFormAddProduct />
    </TyDialog>
  );
}
