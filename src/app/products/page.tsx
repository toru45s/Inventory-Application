import { Metadata } from "next";

import { TyHeading } from "@/components/ui/ty-heading";
import { TyContainer } from "@/components/ui/ty-container";

import { getProducts } from "@/actions/actions";
import { TyDescriptionPage } from "@/components/ui/ty-description-page";
import { TyTableProducts } from "@/components/products/ty-table-products";
import { TyDialogProduct } from "@/components/products/ty-dialog-product";

export const metadata: Metadata = {
  title: "Products - Inventory Management Application",
};

export default async function Products() {
  const products = await getProducts();

  return (
    <div>
      <div className="flex justify-between items-center">
        <TyHeading label="Products" />
        <TyDialogProduct />
      </div>

      <TyDescriptionPage>
        This is the products page. Here you can see all the products that are
        available.
      </TyDescriptionPage>
      <TyContainer>
        <TyTableProducts products={products} />
      </TyContainer>
    </div>
  );
}
