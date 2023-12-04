import React, { useContext, useEffect, useState } from "react";
import Drawer from "../reusable/Drawer";
import ProductCardDrawer from "../non-reusable/productCardDrawer";
import axios from "axios";
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

export default function FavoritesDrawer() {
  const [product, setProduct] = useState<Product[]>([]);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );
  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error("!userContext");
  }
  const { user } = userContext;

  useEffect(() => {
    const getFavoriteProduct = async () => {
      const response = await axios.get(`http://localhost:4000/getFavorites`);
      setProduct(response.data);
    };
    getFavoriteProduct();
  }, [user]);

  return (
    <Drawer
      id="favorites-drawer"
      items={
        <>
          {product?.length > 0
            ? product.map((product) => (
                <ProductCardDrawer
                  onclick={() => {
                    setSelectedProductId(product._id);
                    (
                      document.getElementById(
                        "delete-favorite-product"
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
            id="delete-favorite-product"
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
      title="Favorites"
    />
  );
}
