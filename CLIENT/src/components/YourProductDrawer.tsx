import React, { useContext, useEffect, useState } from "react";
import Drawer from "./reusable/Drawer";
import ProductCardDrawer from "./non-reusable/productCardDrawer";
import axios from "axios";
import { UserContext } from "../UserContext";

interface Product {
  _id: string;
  productName: string;
  price: number;
  description: string;
  category: string;
  image: string;
  productId: string;
}

export default function YourProductDrawer() {
  const [product, setProduct] = useState<Product[]>([]);

  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error("UserContext is not available");
  }
  const { user, setUser } = userContext;

  useEffect(() => {
    const fetchYourProduct = async () => {
      const response = await axios.get(
        `http://localhost:4000/yourProduct/${user?.id}`
      );
      setProduct(response.data);
    };
    fetchYourProduct();
  }, [user]);

  return (
    <Drawer
      id="your-product"
      items={
        <>
          {product.length > 0
            ? product.map((product) => (
                <ProductCardDrawer
                  title={product.productName}
                  category={product.category}
                  price={product.price}
                  image={product.image}
                  productId={product._id}
                />
              ))
            : null}
        </>
      }
    />
  );
}
