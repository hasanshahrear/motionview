import Link from "next/link";
import React from 'react';
import { AiOutlineClose } from "react-icons/ai";

const MobileMenu = ({nav, onClick}) => {
  return (
    <div className={ nav ? "md:hidden z-50 fixed left-0 top-0 w-full h-screen bg-black/70 " : "" } >
      <div className={ nav
            ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] bg-white  h-screen p-10 ease-in duration-500 flex flex-col justify-between"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-100 flex flex-col justify-between" } >
        <div className="flex justify-between w-full">
          <h2 className="text-3xl lg:text-4xl font-quicksand font-semibold">
            MV
          </h2>
          <div
            onClick={() => onClick()}
            className="rounded-full shadow-md  shadow-gray-400 p-3 cursor-pointer"
          >
            <AiOutlineClose size={25} />
          </div>
        </div>
        <ul className="my-10 flex flex-1 flex-col">
          <li className="py-3">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="py-3">
            <Link href="/profile">
              <a>Profile</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MobileMenu