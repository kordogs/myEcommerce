import React, { useContext, useEffect, useState } from "react";
import Drawer from "../reusable/Drawer";
import axios from "axios";
import ProductCardDrawer from "../non-reusable/productCardDrawer";
import Modal from "../Modal";
import { UserContext } from "../../context/UserContext";
import { CartContext } from "../../context/CartContext";
import { Product } from "../../interface/Product";

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
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error("!cartContext");
  }
  const { cartProducts } = cartContext;
  useEffect(() => {
    setProduct(cartProducts);
  }, [cartProducts]);

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
                  editable={false}
                  counterInput={true}
                  onclickEdit={() => {}}
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
