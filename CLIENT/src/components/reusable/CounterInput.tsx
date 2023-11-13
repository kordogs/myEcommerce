import React from "react";

const CustomNumberInput = () => {
  const decrement = (e) => {
    const btn = e.target.parentNode.parentElement.querySelector(
      'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value--;
    target.value = value;
  };

  const increment = (e) => {
    const btn = e.target.parentNode.parentElement.querySelector(
      'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value++;
    target.value = value;
  };

  return (
    <div className="custom-number-input w-20">
      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <button
          data-action="decrement"
          className=" text-gray-600 hover:text-gray-700 h-full w-10 rounded-l cursor-pointer outline-none"
          onClick={decrement}
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input
          className="outline-none focus:outline-none text-center w-4 font-semibold text-sm cursor-default flex items-center bg-transparent"
          value="0"
        />
        <button
          data-action="increment"
          className="text-gray-600 hover:text-gray-700 w-10 rounded-r cursor-pointer"
          onClick={increment}
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
};

export default CustomNumberInput;
