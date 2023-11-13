import React from "react";
import CounterInput from "../reusable/CounterInput";
import { title } from "process";
import { Navigate, useNavigate } from "react-router-dom";

interface productCardDrawerProps {
  title: string;
  category: string;
  price: number;
  image: string;
  productId: string;
}

export default function productCardDrawer({
  ...productCardDrawer
}: productCardDrawerProps) {
  const Navigate = useNavigate();

  return (
    <div className="rounded-lg border p-2 inline-flex justify-center items-center shadow-sm">
      <img
        src={`http://localhost:4000/uploads/products/${productCardDrawer.image}`}
        alt="Product Image"
        className=" h-20 w-20 mr-4 cursor-pointer"
        onClick={() => Navigate(`viewProduct/${productCardDrawer.productId}`)}
      />
      <div className="flex flex-col justify-between">
        <div className="">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="font-bold">{productCardDrawer.title}</span>
              <span className="text-xs">{productCardDrawer.category}</span>
            </div>
            <div className="text-gray-600">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center  gap-2">
          <span className="font-bold text-lg">
            PHP {productCardDrawer.price}
          </span>
          <CounterInput />
        </div>
      </div>
    </div>
  );
}
