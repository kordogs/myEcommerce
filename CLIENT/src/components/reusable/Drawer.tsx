import React, { ReactElement, ReactNode } from "react";
import ProductListItem from "../non-reusable/productCardDrawer";
import { useNavigate } from "react-router-dom";

interface drawerProps {
  id: string;
  items: ReactNode;
  title: string;
}

export default function Drawer({ id, items, title }: drawerProps) {
  const Navigate = useNavigate();

  return (
    <div>
      <div className="drawer drawer-end z-20">
        <input id={id} type="checkbox" className="drawer-toggle" />
        <label id="my-drawer-trigger" htmlFor={id} />
        <div className="drawer-content"></div>
        <div className="drawer-side">
          <label
            htmlFor={id}
            aria-label="close sidebar"
            className="drawer-overlay"
            onClick={() => Navigate("/")}
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <span className="font-bold text-lg mb-2">{title}</span>
            {items}
          </ul>
        </div>
      </div>
    </div>
  );
}
