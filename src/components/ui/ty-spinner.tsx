import type React from "react";
import { cn } from "@/lib/utils";

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "secondary" | "destructive";
}

export function TySpinner({
  size = "md",
  variant = "default",
  className,
  ...props
}: SpinnerProps) {
  return (
    <div
      className={cn(
        "animate-spin rounded-full border-2 border-current border-t-transparent",
        {
          "h-4 w-4 border-[2px]": size === "sm",
          "h-6 w-6 border-[2px]": size === "md",
          "h-8 w-8 border-[3px]": size === "lg",
          "h-12 w-12 border-[4px]": size === "xl",
        },
        {
          "text-primary": variant === "default",
          "text-secondary": variant === "secondary",
          "text-destructive": variant === "destructive",
        },
        className
      )}
      {...props}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
