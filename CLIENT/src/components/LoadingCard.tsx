import React, { useState } from "react";

const LoadingCard = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* The modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-overlay absolute inset-0 bg-gray-500 opacity-75"></div>
          <div className="modal-container bg-transparent w-1/2 mx-auto rounded z-50">
            <div className="modal-content py-4 text-left px-6">
              <div className="flex justify-center items-center pb-3">
                <span className="loading loading-bars loading-lg"></span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoadingCard;
