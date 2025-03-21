import { Metadata } from "next";

import { TyHeading } from "@/components/ui/ty-heading";
import { TyContainer } from "@/components/ui/ty-container";
import { Button } from "@/components/ui/button";

import { getProducts } from "@/actions/actions";
import { TyDescriptionPage } from "@/components/ui/ty-description-page";
import { TyTableProducts } from "@/components/products/ty-table-products";

export const metadata: Metadata = {
  title: "Products - Inventory Application",
};

export default async function Products() {
  const products = await getProducts();

  return (
    <div>
      <div className="flex justify-between items-center">
        <TyHeading label="Products" />
        <Button variant="outline">Create Product</Button>
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
