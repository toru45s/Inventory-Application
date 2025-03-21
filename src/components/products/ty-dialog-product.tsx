import { TyDialog } from "@/components/ui/ty-dialog";
import { Button } from "@/components/ui/shadcn/button";
import { TyFormAddProduct } from "@/components/products/ty-form-add-product";

export function TyDialogProduct() {
  return (
    <TyDialog
      title="Create Product"
      description="Create a new product"
      triggerElement={<Button variant="outline">Add New Product</Button>}
    >
      <TyFormAddProduct />
    </TyDialog>
  );
}
