import Link from "next/link";
import { useRouter } from "next/router";
import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "react-use-cart";



const DesktopMenu = ({onClick}) => {
    const {isEmpty, totalUniqueItems } = useCart();
    const router = useRouter();

    return (
        <div className="navbar hidden md:block w-full">
            <ul className="flex justify-end">
            <li className="menu-class">
                <Link href="/">
                    <a className={router.asPath == "/" ? "active" : ""}>Home</a>
                </Link>
            </li>
            <li className="menu-class">
                <Link href="/profile">
                    <a className={router.asPath == "/profile" ? "active" : ""}>Profile</a>
                </Link>
            </li>
            <li>
                <button onClick={() => onClick()} className="relative" >
                    <IoCartOutline size={36} /> 
                    <span className="absolute -top-3 left-6 bg-gray-200 h-8 w-8 rounded-full flex items-center justify-center">{isEmpty ? 0 : totalUniqueItems}</span>
                </button>
                </li>
            </ul>
        </div>
    )
}

export default DesktopMenu