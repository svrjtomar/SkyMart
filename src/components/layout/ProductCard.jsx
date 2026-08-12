import React from "react";
import { LuShoppingBag } from "react-icons/lu";

const ProductCard = ({ imageUrl, title, price, rating }) => {
  return (
    <div className="mt-4 p-4 h-60 w-50 border rounded-2xl bg-gray-300 text-black hover:scale-[1.01] transition-transform duration-300 cursor-pointer flex flex-col justify-between">
      <div className="flex items-center justify-center h-full">
        <img className="object-contain h-full w-full" src={imageUrl} alt="" />
      </div>
      <div className="flex justify-between items-center gap-3 mt-2">
        <p className="font-bold truncate">{title}</p>
        <div className="size-10 hover:bg-lime-900">
          {" "}
          <LuShoppingBag />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
