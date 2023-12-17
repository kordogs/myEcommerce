import axios from "axios";
import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function EditProduct() {
  const location = useLocation();
  const product = location.state.product;
  const Navigate = useNavigate();
  const productId = product._id;
  const [image, setImage] = useState<File | null>(product.image);
  const [imageUrl, setImageUrl] = useState(
    `http://localhost:4000/uploads/products/${product?.image}`
  );

  const [productName, setProductName] = useState(product.productName);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);
  const [category, setCategory] = useState(product.category);
  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error("Cannot find user");
  }
  const { user } = userContext;

  const createNewProduct = async (e: { preventDefault: () => void }) => {
    const formData = new FormData();
    if (image) {
      formData.append("image", image);
    }
    formData.append("productName", productName);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("category", category);
    if (user && user.id) {
      formData.append("sellerId", user.id);
    }

    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:4000/updateProduct/${productId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        Navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" h-screen p-10 md:flex gap-5 justify-center">
      <div className="flex flex-col gap-2">
        <img
          src={imageUrl}
          alt=""
          className="rounded-lg h-[564px] w-[564px] object-contain"
        />
        <input
          type="file"
          className="file-input file-input-bordered w-full"
          onChange={(e) => {
            if (e.target.files) {
              setImage(e.target.files[0]);
              setImageUrl(URL.createObjectURL(e.target.files[0]));
            }
          }}
        />
      </div>
      <div className="product-detail">
        <div className="container flex">
          <div>
            <span className=" font-bold text-lg">Product Name</span>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div>
            <span className=" font-bold text-lg">Price</span>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="container flex flex-col">
          <span className=" font-bold text-lg">Category</span>
          <select
            className="select select-bordered w-full"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled selected>
              Select a Category
            </option>
            <option value="Apparel">Apparel</option>
            <option value="Consumable">Consumable</option>
            <option value="Electronics">Electronics</option>
          </select>
        </div>
        <div className="container flex flex-col mb-2">
          <span className=" font-bold text-lg">Description</span>
          <textarea
            className="textarea textarea-bordered h-96"
            placeholder="Type here"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="submit-button flex gap-1">
          <button className="btn" onClick={() => Navigate("/")}>
            Back
          </button>
          <button className="btn bg-blue-500" onClick={createNewProduct}>
            submit
          </button>
        </div>
      </div>
    </div>
  );
}
