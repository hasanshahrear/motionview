import Image from 'next/image';
import React from 'react';
import { IoCartOutline } from 'react-icons/io5';

const Product = (props) => {
  console.log(props)
  const {image, name, sale_price, regular_price, stock} = props
  const{ addItem} = props.addItem
  const {pr} = props.pr
  console.log(pr)

  let imgUrl = `https://idbdev.com/motion2/public/images/${image}`;
  
  return (
    <div className="rounded-lg bg-slate-50 overflow-hidden shadow-lg" >
        
        <Image src={imgUrl} height="350" width="350" />
        <div className="p-4 flex justify-between items-center">
            <div>
                <h2 className="text-xl font-semibold">{name}</h2>
                <p className="text-lg text-black font-semibold">৳{sale_price} <span className="text-sm line-through text-gray-500">৳{regular_price}</span></p>
            </div>
            <div>
                {stock ?  <button onClick={() => addItem(pr)}> <IoCartOutline size={35} /> </button> : <p className="text-red-500">Stock Out</p>}
            </div>
        </div>
    </div>
  )
}

export default Product