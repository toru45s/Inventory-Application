import Image from "next/image";
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
  price: number;
  category: string;
  stock: number;
  imageUrl: string;
  sku: string;
  rating: {
    rate: number;
    count: number;
  };
  children: React.ReactNode;
};

export function TySheet(props: Props) {
  const {
    title,
    description,
    price,
    category,
    stock,
    sku,
    imageUrl,
    rating,
    children,
  } = props;

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <Image src={imageUrl} width={350} height={350} alt={title} />
          <SheetDescription>{description}</SheetDescription>
          <SheetDescription>CAD: {price}</SheetDescription>
          <SheetDescription>Category: {category}</SheetDescription>
          <SheetDescription>Number of stocks: {stock}</SheetDescription>

          <SheetDescription>
            Rate: {rating.rate} ({rating.count})
          </SheetDescription>
          <SheetDescription>SKU: {sku}</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
