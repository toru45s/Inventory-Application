import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span" | "small";
  type?: "lg" | "md" | "sm" | "muted";
};

export function TyText(props: Props) {
  const { children, className, type = "md", as: Component = "p" } = props;

  const classNames = {
    lg: "text-lg font-semibold",
    md: "text-base font-medium",
    sm: "text-sm font-medium leading-none",
    muted: "text-sm text-muted-foreground",
  };
  return (
    <Component className={cn(classNames[type], className)}>
      {children}
    </Component>
  );
}
