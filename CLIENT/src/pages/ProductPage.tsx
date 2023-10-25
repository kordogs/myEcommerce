import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import ProductModal from "../components/ProductModal";
import axios from "axios";

interface Product {
  _id: string;
  productName: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default function ProductPage() {
  const [product, setProduct] = useState<Product[]>([]);

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
  }, []);

  return (
    <div className="flex flex-col mt-4 justify-center items-center lg:mx-24 sm:mx-24">
      <ProductModal />
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
            <button className="bg-blue-500 btn text-white hover:bg-blue-200">
              Shop now
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 w-full justify-center">
        {product.length > 0 &&
          product.map((product) => {
            return (
              <Card
                key={product._id}
                productName={product.productName}
                src={product.image}
                category={product.category}
                price={product.price}
              />
            );
          })}
      </div>
    </div>
  );
}
