import { Metadata } from "next";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TyHeading } from "@/components/ty-heading";
import { TyContainer } from "@/components/ty-container";
import { TyDescriptionPage } from "@/components/ty-description-page";

export const metadata: Metadata = {
  title: "Carts - Inventory Application",
};

export default function Carts() {
  return (
    <div>
      <TyHeading label="Carts" />
      <TyDescriptionPage>
        This is the carts page. Here you can see all the carts that are
        available.
      </TyDescriptionPage>
      <TyContainer>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TyContainer>
    </div>
  );
}
