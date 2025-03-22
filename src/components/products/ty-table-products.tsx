"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/shadcn/table";
import { Skeleton } from "@/components/ui/shadcn/skeleton";
import { TySheetProduct } from "@/components/products/ty-sheet-product";
import { useIsMobile } from "@/hooks/use-mobile";
import type { Product } from "@/types/types";

type Props = {
  products: Product[] | undefined;
};

export function TyTableProducts(props: Props) {
  const { products } = props;
  const [loading, setLoading] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (products) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [products]);

  return (
    <div className="w-full overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>

            {!isMobile && (
              <>
                <TableHead>Price</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Number-in-stock</TableHead>
              </>
            )}
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {loading
            ? Array.from({ length: 5 }).map((_, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Skeleton className="h-4 w-[80px]" />
                  </TableCell>

                  {!isMobile && (
                    <>
                      <TableCell>
                        <Skeleton className="h-4 w-[60px]" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="h-4 w-[100px]" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="h-4 w-[70px]" />
                      </TableCell>
                    </>
                  )}
                  <TableCell className="text-right">
                    <Skeleton className="h-4 w-[70px] ml-auto" />
                  </TableCell>
                </TableRow>
              ))
            : products?.length &&
              products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.name}</TableCell>

                  {!isMobile && (
                    <>
                      <TableCell>{product.price}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>{product.stock}</TableCell>
                    </>
                  )}
                  <TableCell className="text-right">
                    <TySheetProduct product={product} />
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </div>
  );
}
