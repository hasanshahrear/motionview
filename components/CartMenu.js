
import React, { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { useCart } from "react-use-cart";

import Link from 'next/link';
import { IoAddOutline, IoRemoveOutline, IoTrash } from 'react-icons/io5';


const CartMenu = ({cart, onClick}) => {
    const [login, setLogin] = useState(true);
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal,
      } = useCart();
   
  return (
    <div className={ cart ? "z-50 fixed right-0 top-0 w-full h-screen bg-black/70 " : "" } >
        <div className={  cart ? "fixed right-0 top-0 w-[100%] sm:w-[80%] md:w-[45%] lg:w-[450px] bg-white  h-screen p-5 ease-in duration-500 flex flex-col" : "fixed right-[-100%] top-0 p-5 ease-in duration-100 flex flex-col" }>
            <div className="relative h-full">
                <div className="flex justify-end w-full">
                    <div
                        onClick={()=> onClick() }
                        className="rounded-full shadow-md  shadow-gray-400 p-3 cursor-pointer"
                    >
                        <AiOutlineClose size={25} />
                    </div>
                </div>

                <div className="flex justify-between w-full mt-10 border-gray-500 border-b pb-3">
                    <h1 className="text-base font-semibold">Shopping Cart</h1>
                    <h2 className="text-base font-semibold text-orange-500">{isEmpty ? 0 : totalUniqueItems} Items</h2>
                </div>
                
                {/* Cart Menu Start  */}
                
                {
                    items.map(item => 
                        <div key={item.id} className="flex justify-between w-full  py-3 items-center">
                            <div className="flex">
                                <div className="flex flex-col">
                                    <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}><IoAddOutline  size={25}/></button>
                                    <input type="text" placeholder={item.quantity} className="w-[30px]"/>
                                    <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}><IoRemoveOutline size={25}/></button>
                                </div>
                                <div>
                                    <img className="mr-2" src={`https://idbdev.com/motion2/public/images/${item.image}`} height="50" width="70" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium">{item.name}</p>
                                    <div>
                                        <h6 className="text-orange font-semibold">
                                            ৳ {item.price  * item.quantity}
                                            <small className="text-[#999999]">(৳ {item.price} x {item.quantity} )</small>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">  
                               <button onClick={()=> removeItem(item.id)}><IoTrash size={25} /></button>
                            </div>
                        </div>
                    )
                }
                
                {/* Cart Menu End */}


                {/* Price Summery Start */}
                {
                    isEmpty ? <div className="h-full flex justify-center items-center">
                        <h2 className="text-orange-400 text-[18px]">Your shopping bag is empty. Start shopping</h2>
                    </div> :
                    <div className="absolute bottom-0 w-full text-center">
                        <div className="flex justify-evenly">
                            <div>
                            <h6>Sub Total</h6>
                            </div>
                            <div>৳{cartTotal}</div>
                        </div>
                        <div className="border-t-2 border-dashed my-3 bg-white"></div>
                        <div className="flex justify-evenly">
                            <div>
                            <h6>Total</h6>
                            </div>
                            <div className="font-semibold">৳{cartTotal}</div>
                        </div>
                        <Link href={login ? '/checkout' : '/login'}>
                            <button onClick={()=>onClick()}  className="bg-orange-600 px-10 lg:px-28  text-white rounded-lg font-bold text-lg py-2 shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 mt-10">Checkout</button>
                        </Link>
                    </div>
                }
                
                {/* Price Summery End */}

            </div>
        
        </div>
    </div>
  )
}

export default CartMenu