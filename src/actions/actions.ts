"use server";

import { convertDate } from "@/lib/utils";
import type { Product, Cart, User, CartWithUser } from "@/types/types";

async function getData(
  uri: string
): Promise<Product[] | Cart[] | User | undefined> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URI}${uri}`);
    if (!response.ok) {
      throw new Error(`response status: ${response.status}`);
    }

    const json = await response.json();

    return json;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("An unknown error occurred");
    }
  }
}

async function getCarts(): Promise<Cart[] | undefined> {
  return (await getData("/mock/public/carts")) as Cart[] | undefined;
}

async function getUser(id: number): Promise<User | undefined> {
  return (await getData(`/mock/public/users/${id}`)) as User | undefined;
}

async function getProducts(): Promise<Product[] | undefined> {
  return (await getData("/mock/public/products")) as Product[] | undefined;
}

async function getCartsWithUser(): Promise<CartWithUser[] | undefined> {
  const carts = await getCarts();

  if (!carts) {
    return undefined;
  }

  const cartsIncludingUser = await Promise.all(
    carts.map(async (cart) => {
      const user = await getUser(cart.userId);
      return {
        ...cart,
        date: convertDate(cart.date),
        user,
      };
    })
  );
  return cartsIncludingUser as CartWithUser[] | undefined;
}

export { getCartsWithUser, getProducts };
