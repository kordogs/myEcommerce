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

const useCartProducts = (user: any) => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    const getCartProduct = async () => {
      const response = await axios.get(`http://localhost:4000/getCart`);
      setProduct(response.data);
    };
    getCartProduct();
  }, [user]);

  return product;
};

export default useCartProducts;
