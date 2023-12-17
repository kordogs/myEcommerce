import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../interface/Product";
import { UserContext } from "./UserContext";

interface FavoriteProductsContextProps {
  favoriteProducts: Product[];
  setFavoriteProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const FavoriteProductsContext = createContext<
  FavoriteProductsContextProps | undefined
>(undefined);

export const FavoriteProductsProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);

  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error("!userContext");
  }
  const { user } = userContext;

  useEffect(() => {
    const getFavoriteProduct = async () => {
      const response = await axios.get(`http://localhost:4000/getFavorites`);
      setFavoriteProducts(response.data);
    };
    getFavoriteProduct();
  }, [user]);

  return (
    <FavoriteProductsContext.Provider
      value={{ favoriteProducts, setFavoriteProducts }}
    >
      {children}
    </FavoriteProductsContext.Provider>
  );
};
