import React, { useContext, useEffect, useState } from "react";
import Drawer from "../reusable/Drawer";
import ProductCardDrawer from "../non-reusable/productCardDrawer";
import axios from "axios";
import Modal from "../Modal";
import { UserContext } from "../../context/UserContext";
import { FavoriteProductsContext } from "../../context/FavoriteContext";
import { Product } from "../../interface/Product";

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
  const favoriteContext = useContext(FavoriteProductsContext);
  if (!favoriteContext) {
    throw new Error("!favoriteContext");
  }
  const { favoriteProducts } = favoriteContext;

  useEffect(() => {
    setProduct(favoriteProducts);
  }, [favoriteProducts]);

  const deleteProduct = async (productId: string) => {
    const response = await axios.delete(
      `http://localhost:4000/deleteFavorites/${productId}`
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
                  editable={false}
                  counterInput={true}
                  onclickEdit={() => {}}
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
