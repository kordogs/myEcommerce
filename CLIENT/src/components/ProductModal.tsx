import React from "react";

export default function ProductModal() {
  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box product-card mx-auto w-96 rounded-3xl border p-7 shadow-lg">
        <img
          src="https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png"
          alt="Water Bottle"
          className="mx-auto mb-4 rounded-3xl border"
        />
        <div className="mb-2 text-xs">Code chuchu</div>
        <div className="name-price mb-2 flex items-center justify-between">
          <h1 className="text-lg font-bold">Water Bottle</h1>
          <span className="text-xl font-bold">Price</span>
        </div>
        <div className="mb-2 text-xs">DESCRIPTION</div>
        <p className="text-xs">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
          deleniti doloribus nostrum dolor ea delectus dolorum. Dicta amet totam
          nulla impedit nisi id aliquam minima quae vitae, quidem, qui adipisci?
        </p>
        <div className="product-button mt-5 flex justify-center gap-1">
          <button className="rounded-lg bg-blue-500 p-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
          <button className="rounded-lg bg-blue-500 p-2 text-white">
            ADD TO CART
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
