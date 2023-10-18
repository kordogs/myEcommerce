import React from "react";
import Card from "../components/Card";
import ProductCardM1 from "../components/ProductCardM1";

export default function ProductPage() {
  return (
    <div className="flex flex-col mt-4 justify-center items-center lg:mx-24 sm:mx-24">
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
        <Card
          productName="Penshoppe - dress"
          src="https://freepngimg.com/save/13420-dress-transparent/816x979"
          genre="Apparel"
          price={1200}
        />
        <Card
          productName="Nike -  shoes"
          src="https://freepngimg.com/save/27428-nike-shoes-transparent-background/800x587"
          genre="Apparel"
          price={4500}
        />
        <Card
          productName="Addidas - Shorts"
          src="https://clipart-library.com/image_gallery2/Shorts-PNG.png"
          genre="Apparel"
          price={650}
        />
        <Card
          productName="Penshoppe - Cap"
          src="https://freepngimg.com/save/37422-baseball-cap-transparent-image/1500x1437"
          genre="Apparel"
          price={299}
        />
        <Card
          productName="Winner - Skeleton"
          src="https://i.ebayimg.com/images/g/KtYAAOSwgcZiPRul/s-l400.jpg"
          genre="Apparel"
          price={299}
        />
        <Card
          productName="Penshoppe - dress"
          src="https://freepngimg.com/save/13420-dress-transparent/816x979"
          genre="Apparel"
          price={1200}
        />
        <Card
          productName="Nike -  shoes"
          src="https://freepngimg.com/save/27428-nike-shoes-transparent-background/800x587"
          genre="Apparel"
          price={4500}
        />
        <Card
          productName="Addidas - Shorts"
          src="https://clipart-library.com/image_gallery2/Shorts-PNG.png"
          genre="Apparel"
          price={650}
        />
        <Card
          productName="Penshoppe - Cap"
          src="https://freepngimg.com/save/37422-baseball-cap-transparent-image/1500x1437"
          genre="Apparel"
          price={299}
        />
        <Card
          productName="Winner - Skeleton"
          src="https://i.ebayimg.com/images/g/KtYAAOSwgcZiPRul/s-l400.jpg"
          genre="Apparel"
          price={299}
        />
      </div>
    </div>
  );
}
