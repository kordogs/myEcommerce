import React, { useContext, useEffect, useState } from "react";
import Drawer from "../reusable/Drawer";
import ProductCardDrawer from "../non-reusable/productCardDrawer";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import Modal from "../Modal";

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
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );

  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error("UserContext is not available");
  }
  const { user, setUser, fetchData } = userContext;

  useEffect(() => {
    const fetchYourProduct = async () => {
      const response = await axios.get(
        `http://localhost:4000/yourProduct/${user?.id}`
      );
      setProduct(response.data);
    };
    fetchYourProduct();
  }, [user]);

  const deleteProduct = async (productId: string) => {
    const response = await axios.delete(
      `http://localhost:4000/deleteProduct/${productId}`
    );
    if (!response) {
      throw new Error("Cannot delete product");
    }
    setProduct((prevProducts) =>
      prevProducts.filter((product) => product._id !== productId)
    );
    fetchData();
  };

  return (
    <Drawer
      title="Your Product"
      id="your-product"
      items={
        <>
          {product?.length > 0
            ? product.map((product) => (
                <ProductCardDrawer
                  onclick={() => {
                    setSelectedProductId(product._id);
                    (
                      document.getElementById(
                        "delete-product"
                      ) as HTMLDialogElement
                    )?.showModal();
                  }}
                  title={product.productName}
                  category={product.category}
                  price={product.price}
                  image={product.image}
                  productId={product._id}
                />
              ))
            : null}
          <Modal
            svg=""
            id="delete-product"
            title="Delete Confirmation"
            description="are you sure you want to delete selected product/s?"
            onclick={() => {
              if (selectedProductId) {
                deleteProduct(selectedProductId);
              }
            }}
          />
        </>
      }
    />
  );
}
