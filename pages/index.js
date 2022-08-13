import Head from 'next/head';
import Image from 'next/image';
import { IoCartOutline } from 'react-icons/io5';
import { useCart } from "react-use-cart";
import HomeSlider from '../components/HomeSlider';

export default function Home({data}) {

  const products = data.data;
  const { addItem } = useCart();

  return (
    <>
      <Head>
        <title>MotionView</title>
        <meta name="description" content="This is a next and tailwind project task by MotionView" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeSlider />

      <div className="container mx-auto p-20 rounded-lg flex flex-col">
        <h1 className="text-center text-3xl font-semibold uppercase">Product List</h1>
        <div className="flex flex-wrap gap-6 mt-10 justify-center">
          {
            products.map(product =>{
                return(
                  <div key={product.id} className="rounded-lg bg-slate-50 overflow-hidden shadow-lg" >
                    <Image src={`https://idbdev.com/motion2/public/images/${product.image}`} height="350" width="350" />
                    <div className="p-4 flex justify-between items-center">
                        <div>
                            <h2 className="text-xl font-semibold">{product.name}</h2>
                            <p className="text-lg text-black font-semibold">৳{product.sale_price} <span className="text-sm line-through text-gray-500">৳{product.regular_price}</span></p>
                        </div>
                        <div>
                          {/* <button onClick={() => addItem(product)}>Add to cart</button> */}
                            {product.stock ?  <button onClick={() => addItem({id: product.id, price: product.sale_price, name: product.name, image:product.image})}> <IoCartOutline size={35} /> </button> : <p className="text-red-500">Stock Out</p>}
                        </div>
                    </div>
                </div>
                )
            })
          }
        </div>
      </div>
    </>
  )
}


export async function getServerSideProps(){
 
  try{
    const response = await fetch('https://idbdev.com/motion2/public/api/product-is-here-caught-me');
    const data = await response.json();
    
    return{
        props: {
            data,
        }
    }
  } catch(error){
    console.log(error)
  }
  
  
}