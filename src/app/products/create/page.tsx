import { Metadata } from "next";
import { TyHeading } from "@/components/ui/ty-heading";
import { TyContainer } from "@/components/ui/ty-container";
import { TyDescriptionPage } from "@/components/ui/ty-description-page";

export const metadata: Metadata = {
  title: "Products - Inventory Application",
};

export default async function Products() {
  return (
    <div>
      <TyHeading label="Products Create" />
      <TyDescriptionPage>
        This is the products create page. Here you can create a new product.
      </TyDescriptionPage>
      <TyContainer>forms</TyContainer>
    </div>
  );
}
