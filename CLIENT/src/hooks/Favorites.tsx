import { useState, useEffect } from "react";
import axios from "axios";

interface Product {
  _id: string;
  productName: string;
  price: number;
  description: string;
  category: string;
  image: string;
  productId: string;
}

const useFavoriteProducts = (user: any) => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    const getFavoriteProduct = async () => {
      const response = await axios.get(`http://localhost:4000/getFavorites`);
      setProduct(response.data);
    };
    getFavoriteProduct();
  }, [user]);

  return product;
};

export default useFavoriteProducts;
