import React, { ReactEventHandler } from "react";

interface ModalProps {
  title: string;
  description: string;
  onclick: ReactEventHandler;
}

export default function Modal({ title, description, onclick }: ModalProps) {
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>

            {title}
          </h3>
          <p className="py-4 text-center">{description}</p>
          <div className="modal-action">
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
