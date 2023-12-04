import React, { ReactEventHandler, ReactNode } from "react";

interface ModalProps {
  title: string;
  description: string;
  onclick: ReactEventHandler;
  id: string;
  svg: ReactNode;
}

export default function Modal({
  title,
  description,
  onclick,
  id,
  svg,
}: ModalProps) {
  return (
    <div>
      <dialog id={id} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg flex gap-2 items-center">
            {svg}
            {title}
          </h3>
          <p className="py-4 text-center">{description}</p>
          <div className="flex justify-end">
            <form method="dialog" className="flex gap-1">
              <button
                className="btn rounded-lg bg-red-500 text-white"
                onClick={onclick}
              >
                Confirm
              </button>
              <button className="btn rounded-lg">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
