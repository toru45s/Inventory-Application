import Link from "next/link";
import { TyHeading } from "@/components/ui/ty-heading";
import { TyContainer } from "@/components/ui/ty-container";
import { TyDescriptionPage } from "@/components/ui/ty-description-page";

export default function NotFound() {
  return (
    <div>
      <TyHeading label="Not Found" />
      <TyDescriptionPage>
        The page you are looking for does not exist.
      </TyDescriptionPage>

      <TyContainer>
        <Link href="/">Return Home</Link>
      </TyContainer>
    </div>
  );
}
