import React, { ReactNode } from "react";

interface ModalButtonProps {
  className: string;
  id: string;
  children: ReactNode;
}

export default function ModalButton({
  className,
  id,
  children,
}: ModalButtonProps) {
  return (
    <div>
      <button
        className={className}
        onClick={() =>
          (document.getElementById(id) as HTMLDialogElement)?.showModal()
        }
      >
        {children}
      </button>
    </div>
  );
}
