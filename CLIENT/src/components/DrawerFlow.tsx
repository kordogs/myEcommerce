import React, { useState } from "react";

const DrawerFLow = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDrawer}
        className="px-4 py-2 bg-blue-500 text-white"
      >
        Toggle Drawer
      </button>
      {isOpen && (
        <div className="absolute top-0 right-0 w-64 h-full bg-gray-200 p-4 overflow-auto">
          <button
            onClick={toggleDrawer}
            className="px-4 py-2 bg-red-500 text-white"
          >
            Close
          </button>
          <div className="mt-4">
            {/* Content of the drawer */}
            <p>Your content here</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DrawerFLow;
