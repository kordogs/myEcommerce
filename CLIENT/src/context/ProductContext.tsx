import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

type Product = {
  image: string;
  productName: string;
  price: number;
  description: string;
  category: string;
  sellerId: string;
};

type ProductContextType = {
  Product: Product | null;
  setProduct: React.Dispatch<React.SetStateAction<Product | null>>;
};

export const ProductContext = createContext<ProductContextType | undefined>(
  undefined
);

export default function ProductContextProvider({ children }) {
  const [Product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get("http://localhost:4000/getProduct");
      setProduct(response.data);
    };
    fetchProduct();
  }, []);

  return (
    <ProductContext.Provider value={{ Product, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
}
