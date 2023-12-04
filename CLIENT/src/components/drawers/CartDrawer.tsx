import React, { useContext, useEffect, useState } from "react";
import Drawer from "../reusable/Drawer";
import axios from "axios";
import ProductCardDrawer from "../non-reusable/productCardDrawer";
import Modal from "../Modal";
import { UserContext } from "../../context/UserContext";

interface Product {
  _id: string;
  productName: string;
  price: number;
  description: string;
  category: string;
  image: string;
  productId: string;
}

export default function CartDrawer() {
  const [product, setProduct] = useState<Product[]>([]);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );
  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error("user undefined");
  }
  const { user, fetchData } = userContext;

  useEffect(() => {
    const getFavoriteProduct = async () => {
      const response = await axios.get("http://localhost:4000/getCart");
      setProduct(response.data);
    };
    getFavoriteProduct();
  }, [user]);

  const deleteProduct = async (productId: string) => {
    const response = await axios.delete(
      `http://localhost:4000/deleteCart/${productId}`
    );
    if (!response) {
      throw new Error("Cannot delete product");
    }
    setProduct((prevProducts) =>
      prevProducts.filter((product) => product._id !== productId)
    );
  };
  return (
    <Drawer
      id="cart-drawer"
      items={
        <>
          {product?.length > 0
            ? product.map((product) => (
                <ProductCardDrawer
                  onclick={() => {
                    setSelectedProductId(product._id);
                    (
                      document.getElementById(
                        "delete-cart-product"
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
            id="delete-cart-product"
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
      title="Cart"
    />
  );
}
