import React, { ChangeEventHandler, useState } from "react";

interface ButtonWithSlidingInputProps {
  buttonName: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler;
  type: React.HTMLInputTypeAttribute;
}

export default function ButtonWithSlidingInput({
  buttonName,
  placeholder,
  value,
  onChange,
  type,
}: ButtonWithSlidingInputProps) {
  const [inputVisible, setInputVisible] = useState(false);

  const toggleInput = () => {
    setInputVisible(!inputVisible);
  };

  return (
    <div className="flex justify-center items-center">
      <button
        className={`bg-slate-100 p-3 ${
          inputVisible ? "rounded-full" : "rounded"
        } transform transition-transform duration-200 ${
          inputVisible ? "-translate-x-2" : "translate-x-0"
        }`}
        onClick={toggleInput}
      >
        {(inputVisible && (
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="25"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        )) ||
          (!inputVisible && buttonName)}
      </button>
      {inputVisible && (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="input input-bordered input-md w-full max-w-xs"
        />
      )}
    </div>
  );
}
