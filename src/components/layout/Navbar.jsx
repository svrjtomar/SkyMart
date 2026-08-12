import React from "react";
import BrandLogo from "../common/BrandLogo";
import { IconButton } from "../common/IconButton";
import { FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="nav w-screen h-auto flex justify-between items-center p-3 px-32">
      <div>
        <div>
          <BrandLogo />
        </div>
      </div>

      <div className="hidden md:flex gap-3 text-[var(--color-text-muted)]">
        <a className="hover:text-white active:text-lime-300" href="">Shop</a>
        <a className="hover:text-white active:text-lime-300" href="">Home</a>
        <a className="hover:text-white active:text-lime-300" href="">About</a>
      </div>

      <div className="flex justify-around gap-2">
        <div className="profile-badge">
          <IconButton className="flex gap-2">
            <div className="profile-pic size-7 bg-[var(--color-accent)] text-black font-bold rounded-lg ">
              S
            </div>
            Shiv
          </IconButton>
        </div>

        <IconButton>
          <FaShoppingCart className="text-xl" />
        </IconButton>
        <IconButton className="hover:bg-red-500/20 hover:border-red-500/30 hover:text-red-400 transition-all text-white/40">
          <FaSignOutAlt className="text-xl" />
        </IconButton>
        <IconButton className="lg:hidden">
         <MdOutlineMenu />
        </IconButton>
      </div>
    </div>
  );
};

export default Navbar;
