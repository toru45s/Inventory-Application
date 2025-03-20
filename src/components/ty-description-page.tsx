import { TyParagraph } from "@/components/ty-paragraph";
type Props = {
  children: React.ReactNode;
};

export function TyDescriptionPage(props: Props) {
  const { children } = props;

  return <TyParagraph className="mt-2 italic">{children}</TyParagraph>;
}
