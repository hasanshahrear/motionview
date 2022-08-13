import { useRouter } from 'next/router';
import React from 'react';
import { useCart } from "react-use-cart";

const thankyou = () => {
    const { emptyCart } = useCart();

    const router = useRouter();
    return (
        <div className="flex h-screen w-full items-center justify-center flex-col p-10">
            <h1 className="text-[24px] lg:text-[44px] text-orange-500 text-center">Thank for buying with us. You order is confirm. We will contact you soon.</h1>
            <button onClick={()=> {emptyCart(), router.push("/")}} className="mx-auto px-7 py-2 bg-orange-500 text-white mt-10">Shop More</button>
        </div>
    )
}

export default thankyou