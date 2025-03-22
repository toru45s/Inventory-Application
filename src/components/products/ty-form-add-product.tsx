"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/shadcn/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/shadcn/form";
import { Input } from "@/components/ui/shadcn/input";
import { formSchemaAddProduct } from "@/lib/schemas";
import { TyGrid } from "../ui/ty-grid";
import { useDialogProduct } from "@/hooks/use-dialog-product";

export function TyFormAddProduct() {
  const { onOpenChange } = useDialogProduct();

  const form = useForm<z.infer<typeof formSchemaAddProduct>>({
    resolver: zodResolver(formSchemaAddProduct),
    defaultValues: {
      name: "",
      price: 0,
      category: "",
      description: "",
      numberInStock: 0,
      rating: 0,
      imageUrl: "",
      sku: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchemaAddProduct>) => {
    toast("Product has been created.");
    console.log(values);
  };

  const onCancel = () => {
    onOpenChange(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <TyGrid cols={2} gap="lg">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </TyGrid>
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <TyGrid cols={2} gap="lg">
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sku"
            render={({ field }) => (
              <FormItem>
                <FormLabel>SKU</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </TyGrid>
        <TyGrid cols={2} gap="lg">
          <FormField
            control={form.control}
            name="numberInStock"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number in stock</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rating</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </TyGrid>
        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image URL</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <TyGrid cols={2} gap="lg">
          <Button type="submit">Submit</Button>

          <Button onClick={onCancel} type="button" variant="secondary">
            Cancel
          </Button>
        </TyGrid>
      </form>
    </Form>
  );
}
