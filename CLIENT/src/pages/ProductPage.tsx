import React, { useContext, useEffect, useState } from "react";
import Card from "../components/reusable/Card";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import useFavoriteProducts from "../hooks/Favorites";
import useCartProducts from "../hooks/Cart";

interface Product {
  _id: string;
  productName: string;
  price: number;
  description: string;
  category: string;
  image: string;
  productId: string;
}

export default function ProductPage() {
  const [product, setProduct] = useState<Product[]>([]);
  const [isLoadingFavorites, setIsLoadingFavorites] = useState(true);

  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error("meow");
  }
  const { user } = userContext;
  // const productContext = useContext(ProductContext);
  // if (!productContext) {
  //   throw new Error("product undefined");
  // }
  // const { Product } = productContext;

  const Navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get("http://localhost:4000/getProduct");
        const product = response.data;
        setProduct(product);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [user]);

  const favorites = useFavoriteProducts(user);
  const cartItems = useCartProducts(user);

  useEffect(() => {
    if (favorites) {
      setIsLoadingFavorites(false);
    }
  }, [favorites]);

  return (
    <div className="flex flex-col mt-4 items-center lg:mx-24 sm:mx-24">
      <div
        className="w-full mb-5 bg-blue-50 rounded-xl"
        style={{
          backgroundImage:
            "url(https://cdn.shopify.com/s/files/1/0070/7032/files/ecommerce_20shopping_20cart.png?format=jpg&quality=90&v=1689527835)",
          backgroundRepeat: "unset",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="m-10 text-start text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-black">Welcome!</h1>
            <p className="mb-5 text-black">
              Welcome to myEcommerce, where your shopping dreams come to life!
              Your ultimate online destination for unbeatable deals, endless
              variety, and seamless shopping experiences. Dive into a world of
              convenience and style – your one-stop shop for all things fabulous
            </p>
            <a
              className="bg-blue-500 btn text-white hover:bg-blue-200"
              onClick={() => Navigate(`${!user ? "/login" : "/"}`)}
            >
              Shop now
            </a>
          </div>
        </div>
      </div>

      <section className="featured-categories w-full">
        <h1 className="text-start font-bold text-xl mb-5">
          Featured Categories
        </h1>
        <ul className="category-items flex overflow-x-auto"></ul>
      </section>
      {user ? (
        <div className="flex flex-wrap gap-3 w-full justify-center">
          {isLoadingFavorites ||
          !favorites ||
          favorites.length === -1 ||
          cartItems.length === -1 ? (
            <p>Loading...</p>
          ) : (
            product?.length > 0 &&
            product?.map((product) => {
              return (
                <Card
                  key={product._id}
                  productName={product.productName}
                  src={product.image}
                  category={product.category}
                  price={product.price}
                  description={product.description}
                  productId={product._id}
                  isFavorites={favorites?.some(
                    (favoriteProduct) => favoriteProduct._id === product._id
                  )}
                  isAddedToCart={cartItems?.some(
                    (cartProduct) => cartProduct._id === product._id
                  )}
                />
              );
            })
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
