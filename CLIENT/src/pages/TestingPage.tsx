import React, { useState } from "react";
import Drawer from "../components/reusable/Drawer";

export default function App() {
  const [inputVisible, setInputVisible] = useState(false);

  const toggleInput = () => {
    setInputVisible(!inputVisible);
  };

  return (
    <>
      <Drawer />
    </>
  );
}
