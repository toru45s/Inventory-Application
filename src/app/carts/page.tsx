import { Metadata } from "next";
import { TyHeading } from "@/components/ui/ty-heading";
import { TyContainer } from "@/components/ui/ty-container";
import { TyDescriptionPage } from "@/components/ui/ty-description-page";
import { getCartsWithUser } from "@/actions/actions";
import { TyTableCarts } from "@/components/carts/ty-table-carts";

export const metadata: Metadata = {
  title: "Carts - Inventory Management Application",
};

export default async function Carts() {
  const carts = await getCartsWithUser();

  return (
    <div>
      <TyHeading label="Carts" />
      <TyDescriptionPage>
        This is the carts page. Here you can see all the carts that are
        available.
      </TyDescriptionPage>
      <TyContainer>
        <TyTableCarts carts={carts} />
      </TyContainer>
    </div>
  );
}
