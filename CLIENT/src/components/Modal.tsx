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
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4 text-center">{description}</p>
          <div className="modal-action">
            <form method="dialog" className="flex gap-1">
              <button className="btn" onClick={onclick}>
                Confirm
              </button>
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
