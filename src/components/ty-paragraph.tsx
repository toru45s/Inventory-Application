import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function TyParagraph(props: Props) {
  const { children, className } = props;

  return <p className={cn("leading-7", className)}>{children}</p>;
}
