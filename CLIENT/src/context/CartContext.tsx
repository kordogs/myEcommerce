import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";
import { Product } from "../interface/Product";

interface CartContextProps {
  cartProducts: Product[];
  getCartProduct: () => Promise<void>;
}

export const CartContext = createContext<CartContextProps | undefined>(
  undefined
);

export const CartProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [cartProducts, setCartProduct] = useState<Product[]>([]);
  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error("user undefined");
  }
  const { user } = userContext;

  const getCartProduct = async () => {
    const response = await axios.get("http://localhost:4000/getCart");
    setCartProduct(response.data);
  };

  useEffect(() => {
    getCartProduct();
  }, [user]);

  return (
    <CartContext.Provider value={{ cartProducts, getCartProduct }}>
      {children}
    </CartContext.Provider>
  );
};
