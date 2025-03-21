import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type Props = {
  title: string;
  description: string;
  triggerElement: React.ReactNode;
  children: React.ReactNode;
};

export function TySheet(props: Props) {
  const { title, description, triggerElement, children } = props;

  return (
    <Sheet>
      <SheetTrigger asChild>{triggerElement}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col space-x-4 px-4">{children}</div>
      </SheetContent>
    </Sheet>
  );
}
