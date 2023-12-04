import Login from "./auth/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./auth/Register";
import IndexPage from "./pages/IndexPage";
import React from "react";
import UserContextProvider from "./context/UserContext";
import CreateProduct from "./pages/CreateProduct";
import TestingPage from "./pages/TestingPage";
import ViewProduct from "./pages/ViewProduct";
import ProductContextProvider from "./context/ProductContext";

export default function App() {
  return (
    <>
      <UserContextProvider>
        <ProductContextProvider>
          <Routes>
            <Route index element={<IndexPage />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="newProduct" element={<CreateProduct />} />
            <Route path="testing" element={<TestingPage />} />
            <Route path="viewProduct/:id" element={<ViewProduct />} />
          </Routes>
        </ProductContextProvider>
      </UserContextProvider>
    </>
  );
}
