"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import { TyHeading } from "@/components/ty-heading";
import { TyParagraph } from "@/components/ty-paragraph";
import { TyContainer } from "@/components/ty-container";

export default function Error({
  error,
  reset,
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
      <TyParagraph>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard d
      </TyParagraph>
      <TyContainer>
        <button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </TyContainer>
    </div>
  );
}
