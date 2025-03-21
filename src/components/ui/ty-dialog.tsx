import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
  title: string;
  description: string;
  triggerElement: React.ReactNode;
  children: React.ReactNode;
};

export function TyDialog(props: Props) {
  const { title, description, triggerElement, children } = props;

  return (
    <Dialog>
      <DialogTrigger asChild>{triggerElement}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
          <div className="flex flex-col space-x-4 px-4">{children}</div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
