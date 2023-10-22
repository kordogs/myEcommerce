import React, { ReactEventHandler } from "react";

interface dropdownProps {
  items: string[];
  svg: React.ReactNode;
  itemSvg: React.ReactNode[];
  onClick: ReactEventHandler[];
}

export default function Dropdown({
  items,
  svg,
  onClick,
  itemSvg,
}: dropdownProps) {
  return (
    <div className="dropdown dropdown-end">
      <label
        tabIndex={0}
        className="btn bg-transparent border-0 rounded-full m-1"
      >
        {svg}
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {items.map((item, index) => (
          <li key={index} onClick={onClick[index]}>
            <a>
              {itemSvg[index]}
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
