import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import Drawer from "./Drawer";
import Logo from "./Logo";

export default function Navbar() {
  const Navigate = useNavigate();

  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error("UserContext is not available");
  }
  const { user, setUser } = userContext;

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap h-20 px-16 shadow-sm sticky top-0 z-50 bg-white">
        <div className="flex gap-1">
          <Logo />
          <form className="lg:border border-black-100 rounded-xl flex justify-center">
            <input
              placeholder="search"
              className="bg-transparent w-80 h-12 ps-3 hidden lg:flex"
            />
            <button className="flex justify-center items-center p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="grey"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </form>
        </div>

        {!user && (
          <div className="flex">
            <Link
              to={"/login"}
              className="rounded-lg border text-blue-600 p-2 border-blue-600 hover:bg-blue-600 hover:text-white"
            >
              Sign in
            </Link>
          </div>
        )}
        {user && (
          <div className="flex">
            <Link
              className="w-14 h-14 flex justify-center items-center"
              to={""}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </Link>
            <Link
              className="w-14 h-14 flex justify-center items-center"
              to={""}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </Link>
            <Drawer />
          </div>
        )}
      </nav>
    </>
  );
}
