import React from "react";
import { LuShoppingBag } from "react-icons/lu";
import { useCart } from "../../context/CartContext";

const ProductCard = ({
  id,
  imageUrl,
  title,
  price,
  rating,
  category,
  ratingCount,
}) => {

  const { addToCart } = useCart();
  const handleAddToCart = () => { 
    console.log("Adding to cart:", { id, imageUrl, rating, title, price });
    addToCart({id, imageUrl, title, price});

  }
  return (
    <div className="group relative flex flex-col w-48 md:w-60 shrink-0 border border-[#333333] rounded-2xl overflow-hidden transition-all duration-300 snap-start cursor-pointer">
      <div className="absolute top-2 left-2 z-10 px-2 py-1  rounded-3xl bg-black/60 backdrop-blur-sm border border-white/10 text-white text-[10px] font-bold uppercase">
        {category}
      </div>

      <div className="relative w-full aspect-4/3 bg-[#2A2A2A] ">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={imageUrl}
          alt={title}
        />
      </div>

      <div className="p-4 flex flex-col gap-2 grow">
        {/* Top Row: Category and Rating */}
        <div className="flex justify-between items-center text-xs text-gray-400">
          <span>⭐ {rating}</span>
          <span>({ratingCount})</span>
        </div>

       <h4 className="text-white font-bold text-sm line-clamp-2 h-10" title={title}>
          {title}
        </h4>

        
        <div className="flex justify-between items-center mt-auto">
          <p className="text-lime-500 text-lg md:text-xl font-bold">{price}</p>

          
          <button 
          onClick={handleAddToCart}
          className="px-4 h-9 rounded-xl bg-lime-400 text-black flex justify-center items-center gap-1 hover:bg-lime-500 transition-colors focus:ring-2 focus:ring-lime-300 cursor-pointer">
            <LuShoppingBag />
            <span className="text-sm font-bold hidden sm:block">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
