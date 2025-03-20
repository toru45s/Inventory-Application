import Link from "next/link";
import { TyHeading } from "@/components/ty-heading";
import { TyContainer } from "@/components/ty-container";
import { TyParagraph } from "@/components/ty-paragraph";
export default function NotFound() {
  return (
    <div>
      <TyHeading label="Not Found" />
      <TyParagraph>Could not find requested resource</TyParagraph>
      <TyContainer>
        <Link href="/">Return Home</Link>
      </TyContainer>
    </div>
  );
}
