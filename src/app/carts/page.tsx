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
import { TyDescriptionPage } from "@/components/ty-description-page";
import { getCartsWithUser } from "@/actions/actions";

export const metadata: Metadata = {
  title: "Carts - Inventory Application",
};

export default async function Carts() {
  const carts = await getCartsWithUser();

  return (
    <div>
      <TyHeading label="Carts" />
      <TyDescriptionPage>
        This is the carts page. Here you can see all the carts that are
        available.
      </TyDescriptionPage>
      <TyContainer>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">User Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Number of items</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {carts?.map((cart, index) => (
              <TableRow key={index}>
                <TableCell>
                  {cart.user
                    ? `${cart.user?.firstname} ${cart.user?.lastname}`
                    : "No user"}
                </TableCell>
                <TableCell>{cart.date}</TableCell>
                <TableCell>{cart.status}</TableCell>
                <TableCell className="text-right">
                  {cart.items.length}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TyContainer>
    </div>
  );
}
