import Navbar from "../components/Navbar";
import ProductPage from "./ProductPage";
import Footer from "../components/Footer";
// @ts-ignore
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { UserContext } from "../UserContext";

export default function IndexPage() {
  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error("meow");
  }
  const { user } = userContext;

  return (
    <>
      <Navbar />
      <ProductPage />
      <Footer />
    </>
  );
}
