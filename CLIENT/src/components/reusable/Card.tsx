import React, { useContext, useState } from "react";
import Star from "../Star";
import ProductModal from "../ProductModal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import Modal from "../Modal";
import { animate, motion } from "framer-motion";
import ProductContext from "../../context/ProductContext";

interface cardProps {
  src: string;
  productName: string;
  category: string;
  price: number;
  description: string;
  key: string;
  productId: string;
  isFavorites: boolean;
  isAddedToCart: boolean;
}

export default function Card({
  src,
  productName,
  category,
  price,
  description,
  key,
  productId,
  isFavorites,
  isAddedToCart,
}: cardProps) {
  const productSrc = "http://localhost:4000/uploads/products/" + src;
  const Navigate = useNavigate();
  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error("!userContext");
  }
  const { fetchData, user } = userContext;
  const [favorite, setFavorite] = useState({ isFavorites });
  const [isAdded, setIsAdded] = useState({ isAddedToCart });

  const addToCart = async () => {
    await axios.post(`http://localhost:4000/addToCart/${productId}`);
    fetchData();
    setIsAdded({ isAddedToCart: true });
  };

  const addToFavorites = async () => {
    await axios.post(`http://localhost:4000/addToFavorites/${productId}`);
    fetchData();
    setFavorite({ isFavorites: true });
  };

  return (
    <>
      <div className="relative card rounded-lg w-60 bg-base-100 h-96 border hover:border-blue-500 hover:shadow-lg transition-all duration-500">
        <figure className="h-full">
          <span className="absolute flex justify-center items-center opacity-0 hover:opacity-100 gap-1 top-2 left-0 right-2 bottom-0 m-auto z-10 transition-all duration-200">
            <button
              className="bg-base-100 border justify-center shadow-xl rounded-lg text-xs p-2 text-gray-500"
              onClick={() =>
                (
                  document.getElementById(
                    `productModal-${productName}`
                  ) as HTMLDialogElement
                )?.showModal()
              }
            >
              preview
            </button>
            <button
              className="bg-base-100 border justify-center shadow-xl rounded-lg text-xs p-2 text-gray-500"
              onClick={() => Navigate(`/viewProduct/${productId}`)}
            >
              fullview
            </button>
          </span>
          <span className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 text-xs font-bold uppercase rounded-se-lg">
            Sale
          </span>
          <img
            src={productSrc}
            alt="Shoes"
            className="object-contain h-full w-full"
          />
        </figure>
        <div className="m-5 flex flex-col gap-1">
          <p className="d font-thin text-xs">{category}</p>
          <a className="card-title text-sm">{productName}</a>
          <div className="rating-container flex my-2">
            <div className="rating rating-xs">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
            </div>
          </div>
          <div className="card-actions justify-between items-center">
            <p className="text-sm">Php {price}</p>
            <div className="button-container flex gap-1">
              <motion.button
                className="flex items-center justify-center z-10 p-2"
                onClick={addToFavorites}
                whileTap={{ scale: 2 }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.1 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill={favorite.isFavorites ? "red" : "none"}
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </motion.button>
              <motion.button
                className="bg-blue-500 rounded-lg text-xs text-white flex items-center justify-center z-20 p-2"
                onClick={addToCart}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 2.0 }}
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                  animate={isAdded.isAddedToCart ? { rotate: 360 } : {}}
                  transition={{ duration: 0.3 }}
                >
                  {isAdded.isAddedToCart ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m6-6H6"
                    />
                  )}
                </motion.svg>
                {isAdded.isAddedToCart ? "Added" : "Add"}
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      <ProductModal
        id={`productModal-${productName}`}
        src={productSrc}
        productName={productName}
        category={category}
        price={price}
        description={description}
      />
    </>
  );
}
