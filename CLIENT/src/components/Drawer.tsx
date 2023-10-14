import Cookies from "js-cookie";
import React, { useContext } from "react";
import Modal from "./Modal";
import { UserContext } from "../UserContext";
import { useNavigate } from "react-router-dom";

export default function Drawer() {
  const Navigate = useNavigate();
  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error("UserContext is not available");
  }
  const { user, setUser } = userContext;

  const logout = () => {
    Cookies.remove("token");
    setUser(null);
    Navigate("/login");
  };

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer-4"
          className="drawer-button border rounded-full w-14 h-14 flex justify-center items-center bg-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-10"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <div className="user-container mb-3 flex gap-3">
            <button className="border border-black rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="flex flex-col">
              <a className="font-bold text-start">{user?.username}</a>
              <a className="text-sm text-gray-500">{user?.email}</a>
            </div>
          </div>
          <span className="border"></span>
          <li>
            <button
              onClick={() =>
                (
                  document.getElementById("my_modal_1") as HTMLDialogElement
                )?.showModal()
              }
            >
              Logout
            </button>
          </li>
        </ul>
        <Modal
          title="Notice!"
          description="Are you sure you want to logout?"
          onclick={logout}
        />
      </div>
    </div>
  );
}
