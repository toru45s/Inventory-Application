import { Metadata } from "next";
import { TyHeading } from "@/components/ui/ty-heading";
import { TyContainer } from "@/components/ui/ty-container";
import { TyLink } from "@/components/ui/ty-link";
import { TyDescriptionPage } from "@/components/ui/ty-description-page";

export const metadata: Metadata = {
  title: "Inventory Application",
  description: "This is an inventory application",
};

export default function Home() {
  return (
    <div>
      <TyHeading label="Home" />
      <TyDescriptionPage>
        Welcome to the Inventory Management App!
      </TyDescriptionPage>
      <TyContainer>
        <ul>
          <li>
            <TyLink href="/products">Products page</TyLink>
          </li>
          <li>
            <TyLink href="/carts">Carts page</TyLink>
          </li>
        </ul>
      </TyContainer>
    </div>
  );
}
