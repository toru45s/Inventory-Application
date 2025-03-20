import { Metadata } from "next";
import { TyHeading } from "@/components/ty-heading";
import { TyContainer } from "@/components/ty-container";
import { TyDescriptionPage } from "@/components/ty-description-page";

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
