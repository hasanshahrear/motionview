import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import CartMenu from "./CartMenu";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Header = () => {
  
  const [nav, setNav] = useState(false);
  const [cart, setCart] = useState(false);

  const cartHandleClick = () =>{
    setCart(!cart);
  }
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <header className="h-[80px] xl:h-[108px] w-full shadow-md  z-50 bg-white">
      <nav className="container mx-auto h-full flex items-center justify-between pr-3 pl-3">
        {/* Logo Start */}
        <div className="nav-brand">
          <h2 className="text-3xl lg:text-4xl font-quicksand font-semibold">
            MotionView
          </h2>
        </div>
        {/* End Logo */}
        {/* Desktop Menu Start */}
        <DesktopMenu onClick={cartHandleClick} />

        
        <div className="flex md:hidden  justify-end w-full m-2">
          <AiOutlineMenu size={25} onClick={handleClick} />
        </div>
        <div className="flex md:hidden  justify-end m-3">
          <IoCartOutline size={25} onClick={cartHandleClick} />
        </div>
        {/* Desktop Menu End */}


        {/* Mobile Menu Start */}
        <MobileMenu nav={nav} onClick={handleClick} />
        {/* Mobile Menu End  */}

        {/* Cart Menu Start */}
        <CartMenu cart={cart} onClick={cartHandleClick} />
        {/* Cart Menu End */}
      </nav>
    </header>
  );
};

export default Header;
