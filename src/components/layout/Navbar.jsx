import React from "react";
import { useState, useEffect } from "react";
import BrandLogo from "../common/BrandLogo";
import { IconButton } from "../common/IconButton";
import { FaAddressBook, FaHome, FaShoppingCart, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { useCart } from "../../context/CartContext";
import { NavLink, useNavigate } from "react-router-dom";
import { LuShoppingCart, LuX } from 'react-icons/lu';
import { FaShop } from "react-icons/fa6";


const Navbar = () => {
  const navigate = useNavigate();

  const { cartTotalItems, openCart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenueOpen] = useState(false);

const [user, setUser] = useState(null);

useEffect(() => {
  const session = localStorage.getItem('activeSessionData');
  if(session) {
    setUser(JSON.parse(session))
    console.log(session)
  }
},[]);

const handleLogout = () => {
  localStorage.removeItem('activeSessionData');
  setUser(null)
  navigate('/login');
}

  return (
    <div className="nav w-full h-auto flex justify-between items-center p-3 md:px-15">
      <div>
        <div>
          <BrandLogo />
        </div>
      </div>


      <div className="hidden md:flex gap-5 text-[var(--color-text-muted)] text-sm font-bold">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `transition-colors ${isActive
              ? "text-lime-500 font-bold"
              : "text-white hover:text-lime-400"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/shop"
          className={({ isActive }) =>
            `transition-colors ${isActive
              ? "text-lime-500 font-bold"
              : "text-white hover:text-lime-400"
            }`
          }
        >
          Shop
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `transition-colors ${isActive
              ? "text-lime-500 font-bold"
              : "text-white hover:text-lime-400"
            }`
          }
        >
          About
        </NavLink>

      </div>

      <div className="flex justify-around gap-2">
        <div className="profile-badge hidden md:flex ">
          <IconButton className="flex gap-2">
            <div className="profile-pic size-7 bg-[var(--color-accent)] text-black font-bold rounded-lg ">
             {user ? user.name.slice(0,1) : "G"}
            </div>
           {user ? user.name : "Guest"}
          </IconButton>
        </div>

        <button onClick={openCart}
          className="rounded-xl border border-gray-300/20 p-2 cursor-pointer">
          <div className="relative text-white hover:text-lime-500 transition-colors">
            <LuShoppingCart size={24} />

            {/* Only show the badge if there are items in the cart */}
            {cartTotalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-lime-500 text-black text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartTotalItems}
              </span>
            )}
          </div>
        </button>
        <IconButton  className="hidden md:flex hover:bg-red-500/20 hover:border-red-500/30 hover:text-red-400 transition-all text-white/40">
          <FaSignOutAlt onClick={handleLogout} className="text-xl" />
        </IconButton>
        <IconButton className="lg:hidden">
          <MdOutlineMenu onClick={() => setIsMobileMenueOpen(!isMobileMenuOpen)} />
        </IconButton>

        {/* Mobile menu section */}

        <div
          onClick={() => setIsMobileMenueOpen(false)}
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-500 ease-in-out ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        </div>

        <div className={`fixed h-full w-1/3 bg-[#111111] z-50 right-0 top-0 transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex justify-between p-3">
            <LuX size={24} onClick={() => setIsMobileMenueOpen(false)} />
            <h3 className="font-bold">Menu</h3>

          </div>
          <div className="h-1 w-full bg-gray-500"></div>
          <div className="p-4 grow flex flex-col">
         
         <div className="flex gap-3 items-center">
           <FaHome /> <NavLink
          to="/"
          className={({ isActive }) =>
            `transition-colors ${isActive
              ? "text-lime-500 font-bold"
              : "font-semibold text-gray-300"
            }`
          }
        >
         Home
        </NavLink></div> 

       <div className="flex gap-3 items-center">
           <FaShop /> <NavLink
          to="/shop"
          className={({ isActive }) =>
            `transition-colors ${isActive
              ? "text-lime-500 font-bold"
              : "font-semibold text-gray-300"
            }`
          }
        >
         Shop
        </NavLink></div> 

        <div className="flex gap-3 items-center">
           <FaAddressBook /> <NavLink
          to="/about"
          className={({ isActive }) =>
            `transition-colors ${isActive
              ? "text-lime-500 font-bold"
              : "font-semibold text-gray-300"
            }`
          }
        >
         About
        </NavLink></div> 

          <div className="flex gap-3 items-center">
           <FaSignInAlt /> 
           {user ? (
           
            <div className="flex items-center gap-4 border-l border-[#333333] pl-6 ml-2">
              
              <button 
                onClick={handleLogout}
                className="text-white hover:text-red-400 transition-colors font-semibold"
              >
                Logout
                <span className="text-sm text-gray-400">Hi, {user.name}</span>
              </button>
            </div>
          ) : (
            
            <NavLink 
              to="/login" 
              onClick={() => setIsMobileMenueOpen(false)}
              className={({ isActive }) => 
                `transition-colors hover:text-lime-400 ${isActive ? "text-lime-500 font-bold" : ""}`
              }
            >
              Login
            </NavLink>
          )}
           </div> 
          </div>
        </div>


        {/* Mobile menu section ends*/}
      </div>
    </div>
  );
};

export default Navbar;
