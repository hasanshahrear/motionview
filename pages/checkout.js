import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useCart } from "react-use-cart";

const checkout = () => {
  const [login, setLogin] = useState('')

  useEffect(()=>{
    setLogin(localStorage.getItem('token'))
  },[])
  const router = useRouter();
  const {
    items,
    cartTotal,
  } = useCart();

  if(login == null){
    router.push('/login');
  }
  return (
    <div className="container mx-auto flex flex-col lg:flex-row py-10 h-screen p-10">
      <div className="mt-10 xs:basis-full  lg:basis-3/4 pr-10 mb-10 ">
        <h2 className="text-[34px]">Shopping Cart</h2>
        <table className="w-full">
          <thead className="text-base font-normal text-[#6B6B6B] border-b">
            <tr>
              <th className="p-2 whitespace-nowrap cartTh">
                <div className="font-semibold text-left">
                  Cart Details
                </div>
              </th>
              <th className="p-2 whitespace-nowrap hidden md:block cartTh">
                <div className="font-semibold text-left">
                  Price
                </div>
              </th>
              <th className="p-2 whitespace-nowrap cartTh">
                <div className="font-semibold text-center">
                  Subtotal
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {items.map(item => (
              <tr >
              <td className="p-2 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="w-12 h-12 mr-2">
                  <img className="mr-2" src={`https://idbdev.com/motion2/public/images/${item.image}`} height="50" width="70" />

                    </div>
                  <div className="flex flex-col">
                    <div className="font-medium text-gray-800 hidden md:block">
                      {item.name}
                    </div>
                    <div className="font-medium text-gray-800 block md:hidden">
                      {item.name}
                    </div>
                    <div className="flex flex-col">
                      <div>
                        Quantity: {item.quantity}
                      </div>
                      <div className="block md:hidden">
                        Price: {item.price}
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td className="p-2 whitespace-nowrap hidden md:block mt-4">
                <div className="text-left">
                  ৳ {item.price}
                </div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-lg text-center">
                  <span className="text-center w-1/5 font-medium text-sm">৳ {item.price * item.quantity}</span>
                </div>
              </td>
            </tr>
            
            ))}
            
          </tbody>
        </table>
      </div>

      <div className="flex xs:basis-full lg:basis-1/4 flex-col gap-5">
        
        <div className="bg-white p-5 items-center rounded-lg shadow-md border">
          <h5 className="text-center text-lg font-semibold text-[#6B6B6B] p-4">Select Payment Method</h5>
          <div className="flex justify-between items-center mt-3">
            <label className="" for="cod">
              <input className="text-purple-600 focus:ring-0" id="cod" name="payment" type="radio" />
              <span class="ml-2">Cash on Delivery</span>
            </label>
          </div>
        </div>

        <div className="bg-white p-5 items-center rounded-lg shadow-md border text-center">
          <h5 className="text-center text-lg font-semibold text-[#6B6B6B] p-4">Checkout Summary</h5>
          <div className="flex justify-between mt-3">
            <h6 className="">Sub Total</h6>
            <div className="">
              ৳ {cartTotal}
            </div>
          </div>
          <hr className="my-10" />
          <div className="flex justify-between mt-3">
            <h6 className="font-bold">Total</h6>
            <div className="font-bold">
              ৳ {cartTotal}
            </div>
          </div>
          <button onClick={()=> router.push("/thankyou")} className="mt-20 px-7 py-2 bg-orange-500 text-white">Confirm Order</button>

        </div>

      </div>
      
    </div>
  )
}

export default checkout