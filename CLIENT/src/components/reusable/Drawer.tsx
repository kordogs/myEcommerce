import React, { ReactElement, ReactNode } from "react";
import ProductListItem from "../non-reusable/productCardDrawer";

interface drawerProps {
  id: string;
  items: ReactNode;
}

export default function Drawer({ id, items }: drawerProps) {
  return (
    <div>
      <div className="drawer drawer-end">
        <input id={id} type="checkbox" className="drawer-toggle" />
        <label id="my-drawer-trigger" htmlFor="your-product" />

        <div className="drawer-content"></div>
        <div className="drawer-side">
          <label
            htmlFor={id}
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <span className="font-bold text-lg mb-2">Your Product</span>
            {items}
          </ul>
        </div>
      </div>
    </div>
  );
}
