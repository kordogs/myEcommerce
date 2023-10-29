import React from "react";
import Navbar from "../components/Navbar";

import ProductPage from "./ProductPage";
import Footer from "../components/Footer";

export default function IndexPage() {
  return (
    <>
      <Navbar />
      <ProductPage />
      <Footer />
    </>
  );
}
