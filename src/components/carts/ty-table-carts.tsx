"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

import type { CartWithUser } from "@/types/types";
import { TySheetCart } from "@/components/carts/ty-sheet-cart";

type Props = {
  carts: CartWithUser[] | undefined;
};

export function TyTableCarts(props: Props) {
  const { carts } = props;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (carts) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [carts]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">User Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Number of items</TableHead>
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
            ))
          : carts?.length &&
            carts?.map((cart, index) => (
              <TableRow key={index}>
                <TableCell>
                  {cart.user
                    ? `${cart.user?.firstname} ${cart.user?.lastname}`
                    : "No user"}
                </TableCell>
                <TableCell>{cart.date}</TableCell>
                <TableCell>{cart.status}</TableCell>
                <TableCell>{cart.items.length}</TableCell>
                <TableCell className="text-right">
                  <TySheetCart cart={cart} />
                </TableCell>
              </TableRow>
            ))}
      </TableBody>
    </Table>
  );
}
