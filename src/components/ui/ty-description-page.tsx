import { TyText } from "@/components/ui/ty-text";
type Props = {
  children: React.ReactNode;
};

export function TyDescriptionPage(props: Props) {
  const { children } = props;

  return <TyText className="mt-2 italic">{children}</TyText>;
}
