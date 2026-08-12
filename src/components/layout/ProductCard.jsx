import React from "react";
import { LuShoppingBag } from "react-icons/lu";

const ProductCard = ({ imageUrl, title, price, rating, category, ratingCount }) => {
  return (
    <div className=" relative mt-4 overflow-hidden w-60 border rounded-2xl  text-black hover:scale-[1.01] transition-transform duration-300">
      <div className="absolute top-1 left-1 px-2 py-1 border rounded-3xl bg-gray-500/50 text-white text-xs">{category}</div>
      
      <div className="flex items-center justify-center h-48 bg-gray-300">
        <img className="object-contain w-full h-full" src={imageUrl} alt="" />
      </div>


   <div className="p-3 flex flex-col gap-3">
  
  {/* Top Row: Category and Rating */}
  <div className="flex justify-between items-center">
    <p className="text-xs text-gray-600 font-bold">{category}</p>
    <p className="text-xs text-gray-500">Avg Rating: {rating} ({ratingCount})</p>
  </div>

  {/* Middle: Title with Truncation */}
  <h4 className="text-white/70 font-bold text-sm line-clamp-2 h-10" title={title}>
    {title}
  </h4>

  {/* Bottom Row: Price and Action */}
  <div className="flex justify-between items-center mt-1">
    <p className="text-lime-500 text-2xl font-bold">{price}</p>
    
    {/* Converted to a semantic <button> with hover state */}
    <button className="px-5 h-8 rounded-xl bg-lime-400 text-black flex justify-center items-center gap-1 hover:bg-lime-500 transition-colors focus:ring-2 focus:ring-lime-300 cursor-pointer">
      <LuShoppingBag />
      <span className="text-sm font-bold">Add</span>
    </button>
  </div>
  
</div>
    </div>
  );
};

export default ProductCard;
