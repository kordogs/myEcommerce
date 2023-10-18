import React from "react";
import Star from "./Star";
interface cardProps {
  src: string;
  productName: string;
  genre: string;
  price: number;
}

export default function Card({ src, productName, genre, price }: cardProps) {
  return (
    <div className="relative card rounded-lg w-60 bg-base-100 h-96 border hover:border-blue-500 hover:shadow-lg">
      <figure className="h-full">
        <span className="absolute flex justify-center items-center opacity-0 hover:opacity-100 gap-1 top-2 left-0 right-2 bottom-0 m-auto z-10">
          <button className="bg-base-100 w-8 h-8 flex items-center justify-center shadow-xl rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
          <button className="bg-base-100 w-8 h-8 flex items-center justify-center shadow-xl rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
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
          </button>
        </span>
        <span className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 text-xs font-bold uppercase rounded-se-lg">
          Sale
        </span>
        <img src={src} alt="Shoes" />
      </figure>
      <div className="m-5 flex flex-col gap-1">
        <p className="d font-thin text-xs">{genre}</p>
        <h2 className="card-title text-sm">{productName}</h2>
        <div className="rating-container flex my-2">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
        <div className="card-actions justify-between">
          <p className="text-sm">Php {price}</p>
          <button className="bg-blue-500 w-16 h-7 rounded-lg text-xs text-white flex items-center justify-center z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
