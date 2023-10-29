import React, { useState } from "react";

function RealTime() {
  const [image, setImage] = useState(
    "https://i.pinimg.com/564x/e2/e6/99/e2e699d87be50abe0616ecc30fc2e616.jpg"
  );

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImage(e.target.result);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <img
        src={image}
        alt=""
        className="rounded-lg"
        style={{ maxWidth: "100%", maxHeight: "300px" }}
      />
      <input
        type="file"
        className="file-input file-input-bordered w-full"
        onChange={handleImageChange}
      />
    </div>
  );
}

export default RealTime;
