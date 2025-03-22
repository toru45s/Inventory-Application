import { z } from "zod";

export const formSchemaAddProduct = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  price: z.preprocess(
    (val) => Number(val),
    z.number().min(0, {
      message: "Price must be at least 0.",
    })
  ),
  category: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  numberInStock: z.preprocess(
    (val) => Number(val),
    z.number().min(0, {
      message: "Number in stock must be at least 0.",
    })
  ),
  rating: z.preprocess(
    (val) => Number(val),
    z.number().min(0, {
      message: "Rating must be at least 0.",
    })
  ),
  imageUrl: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  sku: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});
