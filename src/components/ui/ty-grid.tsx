import { useMemo } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  gap?: "sm" | "md" | "lg";
  className?: string;
};

export function TyGrid(props: Props) {
  const { children, gap, className } = props;
  const classNames = useMemo(() => {
    switch (gap) {
      case "sm":
        return "gap-1";
      case "md":
        return "gap-2";
      case "lg":
        return "gap-4";
      default:
        return "";
    }
  }, [gap]);

  return <div className={cn("grid", className, classNames)}>{children}</div>;
}
