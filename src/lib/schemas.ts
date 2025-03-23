import { z } from "zod";

// Define a schema for the form
export const formSchemaAddProduct = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  description: z.string().optional(),
  price: z.string().optional(),
  category: z.string().optional(),
  numberInStock: z
    .preprocess(
      (val) => Number(val),
      z.number().min(0, {
        message: "Number in stock must be at least 0.",
      })
    )
    .optional(),
  rating: z.string().optional(),
  imageUrl: z.string().optional(),
  sku: z.string().optional(),
});
