"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import { TyHeading } from "@/components/ui/ty-heading";
import { TyContainer } from "@/components/ui/ty-container";
import { TyDescriptionPage } from "@/components/ui/ty-description-page";

import { TyLink } from "@/components/ui/ty-link";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <TyHeading label="Something went wrong!" />
      <TyDescriptionPage>
        An error occurred. Please try again later.
      </TyDescriptionPage>
      <TyContainer>
        <TyContainer>
          <ul>
            <li>
              <TyLink href="/">Back to home page</TyLink>
            </li>
          </ul>
        </TyContainer>
      </TyContainer>
    </div>
  );
}
