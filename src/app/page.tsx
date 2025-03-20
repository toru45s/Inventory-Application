import { Metadata } from "next";
import { TyHeading } from "@/components/ty-heading";
import { TyContainer } from "@/components/ty-container";
import { TyLink } from "@/components/ty-link";
import { TyDescriptionPage } from "@/components/ty-description-page";

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
