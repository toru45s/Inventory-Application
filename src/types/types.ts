export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  sku: string;
  image_url: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type Cart = {
  userId: number;
  items: [
    {
      productId: number;
      quantity: number;
    }
  ];
  date: string;
  status: string;
};

export type User = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
  phone: string;
};

export type CartWithUser = Cart & { user: User | undefined };
