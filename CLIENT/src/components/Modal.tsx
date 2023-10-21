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
          <h3 className="font-bold text-lg flex gap-2 items-center mb-6">
            <svg
              height={20}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <polygon points="491.176,256 323.723,128.652 336.851,217.928 140.291,217.928 140.291,296.697 336.851,296.697 323.723,383.348 "></polygon>{" "}
                <path d="M391.039,65.641H73.337v380.718h317.703v52.513H46.718c-14.501,0-25.894-11.755-25.894-26.256V39.385 c0-14.501,11.393-26.256,25.894-26.256h344.321V65.641z"></path>{" "}
                <path d="M499.124,245.551L331.671,118.202c-4.248-3.231-10.027-3.568-14.622-0.856s-7.091,7.936-6.315,13.215l10.917,74.239H139.928 c-7.249,0-12.766,5.878-12.766,13.128v78.769c0,7.251,5.516,13.128,12.766,13.128h181.656l-10.841,71.555 c-0.801,5.285,1.683,10.53,6.281,13.257c2.073,1.23,4.389,1.838,6.698,1.838c2.812,0,5.611-0.902,7.949-2.679l167.453-127.348 c3.264-2.483,5.18-6.348,5.18-10.449C504.304,251.899,502.388,248.034,499.124,245.551z M341.555,353.293l8.276-54.629 c0.574-3.782-0.532-7.626-3.026-10.526c-2.493-2.9-6.128-4.569-9.954-4.569H153.419v-52.513h183.433 c3.815,0,7.441-1.659,9.935-4.546c2.493-2.887,3.608-6.716,3.052-10.492l-8.447-57.435L469.488,256L341.555,353.293z"></path>{" "}
                <path d="M390.677,433.231H86.465V78.769h304.212c7.249,0,13.491-5.878,13.491-13.128V13.128c0-7.251-6.24-13.128-13.491-13.128 H46.718C25.001,0,7.696,17.668,7.696,39.385v433.231C7.696,494.332,25.001,512,46.718,512h343.959 c7.249,0,13.491-5.877,13.491-13.128v-52.513C404.168,439.108,397.928,433.231,390.677,433.231z M377.911,485.744H46.718 c-7.239,0-12.766-5.889-12.766-13.128V39.385c0-7.239,5.527-13.128,12.766-13.128h331.193v26.256H72.974 c-7.249,0-12.766,5.877-12.766,13.128v380.718c0,7.251,5.516,13.128,12.766,13.128h304.937V485.744z"></path>{" "}
              </g>
            </svg>
            {title}
          </h3>
          <p className="py-4 text-center">{description}</p>
          <div className="modal-action">
            <form method="dialog" className="flex gap-1">
              <button
                className="btn rounded-full bg-red-500 text-white"
                onClick={onclick}
              >
                Confirm
              </button>
              <button className="btn rounded-full">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}