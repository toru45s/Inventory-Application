"use server";

import { convertDate } from "@/lib/utils";
import type { Product, Cart, User, CartWithUserProducts } from "@/types/types";

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

async function getProduct(id: number): Promise<Product | undefined> {
  return (await getData(`/mock/public/products/${id}`)) as Product | undefined;
}

async function getCartsWithUser(): Promise<CartWithUserProducts[] | undefined> {
  const carts = await getCarts();

  if (!carts) {
    return undefined;
  }

  const cartsIncludingUser = await Promise.all(
    carts.map(async (cart) => {
      const user = await getUser(cart.userId);

      const items = await Promise.all(
        cart.items.map(async (item) => {
          const product = await getProduct(item.productId);
          return {
            ...item,
            product,
          };
        })
      );

      return {
        ...cart,
        date: convertDate(cart.date),
        user,
        items,
      };
    })
  );
  return cartsIncludingUser as CartWithUserProducts[] | undefined;
}

export { getCartsWithUser, getProducts };
