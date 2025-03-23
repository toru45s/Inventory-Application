"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/shadcn/select";

import { Input } from "@/components/ui/shadcn/input";
import { formSchemaAddProduct } from "@/lib/schemas";
import { TyGrid } from "@/components/ui/ty-grid";
import { TyRequired } from "@/components/ui/ty-required";
import { useDialogProduct } from "@/hooks/use-dialog-product";

import { CATEGORIES } from "@/lib/constants";

export function TyFormAddProduct() {
  const { onOpenChange } = useDialogProduct();

  const form = useForm<z.infer<typeof formSchemaAddProduct>>({
    resolver: zodResolver(formSchemaAddProduct),
    defaultValues: {
      name: "",
      price: "",
      category: "",
      description: "",
      numberInStock: 0,
      rating: "",
      imageUrl: "",
      sku: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchemaAddProduct>) => {
    onOpenChange(false);
    console.log(values);
    toast(`"${values.name}" has been created.`);
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
                <FormLabel>
                  Name
                  <TyRequired />
                </FormLabel>
                <FormControl>
                  <Input placeholder="Wireless Mouse" {...field} />
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
                <FormLabel>Price ($)</FormLabel>
                <FormControl>
                  <Input placeholder="29.99" {...field} min="0" />
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
                <Input
                  placeholder="Ergonomic wireless mouse with adjustable DPI settings and long battery life."
                  {...field}
                />
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
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {CATEGORIES.map(
                          (category: { value: string; label: string }) => (
                            <SelectItem
                              key={category.value}
                              value={category.value}
                            >
                              {category.label}
                            </SelectItem>
                          )
                        )}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
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
                  <Input placeholder="WMOUSE-001" {...field} />
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
                  <Input
                    type="number"
                    placeholder="shadcn"
                    {...field}
                    min="0"
                  />
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
                  <Input placeholder="4.5" {...field} />
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
                <Input placeholder="image url" {...field} />
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
