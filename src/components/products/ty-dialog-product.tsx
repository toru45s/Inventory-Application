import { TyDialog } from "@/components/ui/ty-dialog";
import { Button } from "@/components/ui/button";

export function TyDialogProduct() {
  return (
    <TyDialog
      title="Create Product"
      description="Create a new product"
      triggerElement={<Button variant="outline">Create New Product</Button>}
    >
      content
    </TyDialog>
  );
}
