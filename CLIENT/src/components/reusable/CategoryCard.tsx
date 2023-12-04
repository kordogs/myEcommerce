import React from "react";

export default function CategoryCard() {
  return (
    <li className="border p-10 rounded-lg justify-center items-center mr-5">
      <img
        src="https://freshcart.codescandy.com/assets/images/category/category-dairy-bread-eggs.jpg"
        alt=""
        className="mb-3"
      />
      <span className="text-gray-500">Consumables</span>
    </li>
  );
}
