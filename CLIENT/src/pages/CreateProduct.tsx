import React from "react";
import { useNavigate } from "react-router-dom";

export default function CreateProduct() {
  const Navigate = useNavigate();

  return (
    <div className=" h-screen p-10 md:flex gap-5 justify-center">
      <div className="flex flex-col gap-2">
        <img
          src="https://i.pinimg.com/564x/e2/e6/99/e2e699d87be50abe0616ecc30fc2e616.jpg"
          alt=""
        />
        <input type="file" className="file-input file-input-bordered w-full" />
      </div>

      <div className="product-detail">
        <div className="container flex">
          <div>
            <span className=" font-bold text-lg">Product Name</span>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <span className=" font-bold text-lg">Price</span>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
        <div className="container flex flex-col">
          <span className=" font-bold text-lg">Description</span>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Type here"
          ></textarea>
        </div>
        <div className="container flex flex-col mb-2">
          <span className=" font-bold text-lg">Category</span>
          <select className="select select-bordered w-full">
            <option disabled selected>
              Select a Category
            </option>
            <option>Apparel</option>
            <option>Consumable</option>
          </select>
        </div>
        <div className="submit-button flex gap-1">
          <button className="btn" onClick={() => Navigate("/")}>
            Back
          </button>
          <button className="btn bg-blue-500">submit</button>
        </div>
      </div>
    </div>
  );
}
