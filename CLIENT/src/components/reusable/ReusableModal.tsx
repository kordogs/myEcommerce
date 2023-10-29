import React, { Children, ReactNode } from "react";
interface ReusableModalProps {
  id: string;
  children: ReactNode;
}

export default function ReusableModal({ id, children }: ReusableModalProps) {
  return (
    <div>
      <dialog id={id} className="modal">
        <div className="modal-box flex justify-center">{children}</div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
