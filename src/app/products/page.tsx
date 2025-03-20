import { Metadata } from "next";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TyHeading } from "@/components/ty-heading";
import { TyContainer } from "@/components/ty-container";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { TySheet } from "@/components/ty-sheet";
import { getProducts } from "@/actions/actions";
import { TyDescriptionPage } from "@/components/ty-description-page";

export const metadata: Metadata = {
  title: "Products - Inventory Application",
};

export default async function Products() {
  const products = await getProducts();

  return (
    <div>
      <div className="flex justify-between items-center">
        <TyHeading label="Products" />
        <Button variant="outline">Create Product</Button>
      </div>

      <TyDescriptionPage>
        This is the products page. Here you can see all the products that are
        available.
      </TyDescriptionPage>
      <TyContainer>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Number-in-stock</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products
              ? products?.length &&
                products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">
                      {product.name}
                    </TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell className="text-right">
                      <TySheet
                        title={product.name}
                        price={product.price}
                        category={product.category}
                        description={product.description}
                        stock={product.stock}
                        imageUrl={product.image_url}
                        sku={product.sku}
                        rating={product.rating}
                      >
                        <Button variant="outline">Show Detail</Button>
                      </TySheet>
                    </TableCell>
                  </TableRow>
                ))
              : Array.from({ length: 5 }).map((_, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Skeleton className="h-4 w-[80px]" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-4 w-[60px]" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-4 w-[100px]" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-4 w-[70px]" />
                    </TableCell>
                    <TableCell className="text-right">
                      <Skeleton className="h-4 w-[70px] ml-auto" />
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TyContainer>
    </div>
  );
}
