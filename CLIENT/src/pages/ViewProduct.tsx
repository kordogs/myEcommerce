import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

interface Product {
  _id: string;
  productName: string;
  price: number;
  description: string;
  category: string;
  image: string;
  productId: string;
}

export default function ViewProduct() {
  const Navigate = useNavigate();
  const [product, setProduct] = useState<Product>();
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(
        `http://localhost:4000/viewProduct/${id}`
      );
      const productData = await response.data;
      if (!productData) {
        alert("something wrong");
      }
      setProduct(productData);
    };
    fetchProduct();
  }, []);

  return (
    <>
      <div className=" h-screen p-10 md:flex gap-5 justify-center">
        <div className="flex flex-col gap-2">
          <img
            src={`http://localhost:4000/uploads/products/${product?.image}`}
            className="rounded-lg h-[564px] w-[564px] bg-gray-300"
            alt={"an image"}
          />
        </div>
        <div className="product-detail w-auto">
          <div className="container flex gap-56 mb-3">
            <div className="flex-col flex">
              <span className=" font-bold text-lg text-gray-500">Product</span>
              <span className=" font-bold text-lg">{product?.productName}</span>
            </div>
            <div className="flex flex-col">
              <span className=" font-bold text-lg text-gray-500">Price</span>
              <span className=" font-bold text-lg">php {product?.price}</span>
            </div>
          </div>
          <div className="container flex flex-col mb-3">
            <span className=" font-bold text-lg text-gray-500">Category</span>
            <span className=" font-bold text-lg">{product?.category}</span>
          </div>
          <div className="container flex flex-col mb-2">
            <span className=" font-bold text-lg text-gray-500">
              Description
            </span>
            <p className="max-w-[588px]">{product?.description}</p>
          </div>

          <div className="buttons flex gap-1">
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Select Quantity
              </option>
              <option>1</option>
              <option>2</option>
            </select>
            <button className="btn bg-blue-500 text-white">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
