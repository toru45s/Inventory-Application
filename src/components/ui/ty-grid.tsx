import { useMemo } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  gap?: "sm" | "md" | "lg";
  cols?: 2;
  className?: string;
};

export function TyGrid(props: Props) {
  const { children, gap, cols, className } = props;
  const classNames = useMemo(() => {
    const classes = [];

    switch (cols) {
      case 2:
        classes.push("grid-cols-2");
        break;
      default:
        classes.push("grid-cols-1");
        break;
    }

    switch (gap) {
      case "sm":
        classes.push("gap-1");
        break;
      case "md":
        classes.push("gap-2");
        break;
      case "lg":
        classes.push("gap-4");
        break;

      default:
        break;
    }

    return classes.join(" ");
  }, [gap, cols]);

  return <div className={cn("grid", className, classNames)}>{children}</div>;
}
