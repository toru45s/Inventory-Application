"use server";

export async function getProducts() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URI}/mock/public/products`
    );
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
