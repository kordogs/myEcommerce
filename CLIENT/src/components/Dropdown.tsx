import React, { ReactEventHandler } from "react";

interface dropdownProps {
  items: string[];
  svg: React.ReactNode | string;
  itemSvg: React.ReactNode[];
  onClick: ReactEventHandler[];
  badge: number[];
}

export default function Dropdown({
  items,
  svg,
  onClick,
  itemSvg,
  badge,
}: dropdownProps) {
  return (
    <div className="dropdown dropdown-end">
      <label
        tabIndex={0}
        className="btn bg-transparent border-0 rounded-full m-1 p-1"
      >
        {typeof svg === "string" ? (
          <div className="avatar online">
            <div className="w-10 rounded-full">
              <img src={svg} alt="" />
            </div>
          </div>
        ) : (
          svg
        )}
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
              <span className="absolute bg-red-500 text-white px-1 right-2 top-2 badge">
                {badge}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
