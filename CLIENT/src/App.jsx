import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import Register from "./Register";
import IndexPage from "./IndexPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
}
