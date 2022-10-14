import React from "react";
import XIcon from "../icons/XIcon";

interface DrawerProps {
  children?: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (bool: boolean) => void;
}

export default function Drawer({ children, isOpen, setIsOpen }: DrawerProps) {
  return (
    <div
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <div
        className={
          "bg-gray-50 max-w-lg right-0 absolute h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <div className="relative w-screen max-w-lg pb-10 flex flex-col space-y-10 overflow-y-scroll h-full">
          <div
            className="flex flex-row justify-between items-center p-3 font-bold"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <p className="text-xl">Eteration</p>
            <XIcon className="ml-2" size={30} />
          </div>
          {children}
        </div>
      </div>
      <div
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></div>
    </div>
  );
}
