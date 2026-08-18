import React from "react";
import { LuShoppingBag, LuMinus, LuPlus } from "react-icons/lu";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ProductCard = ({
  id,
  imageUrl,
  title,
  price,
  rating,
  category,
  ratingCount,
}) => {

  const { addToCart, decreaseQuantity, cartItems } = useCart();

  const cartItem = cartItems.find((item) => item.id === id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleAddInitial = (e) => {
    e.preventDefault(); 
    addToCart({ id, imageUrl, title, price });
  };

  const handleAddToCart = (e) => { 
    e.preventDefault();
    addToCart({id, imageUrl, title, price});

  }
  return (
    <div className="group relative flex flex-col w-48 md:w-60 shrink-0 border border-[#333333] rounded-2xl overflow-hidden transition-all duration-300 snap-start cursor-pointer">
      <div className="absolute top-2 left-2 z-10 px-2 py-1  rounded-3xl bg-black/60 backdrop-blur-sm border border-white/10 text-white text-[10px] font-bold uppercase">
        {category}
      </div>
      <Link to={`/product/${id}`} className="flex flex-col grow">

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

          
          {/* 4. THE CONDITIONAL BUTTON RENDERING */}
        {quantity === 0 ? (
          // State A: Not in cart yet -> Show standard "Add" button
          <button 
            onClick={handleAddInitial}
            className="h-9 px-4 rounded-xl bg-lime-400 text-black flex justify-center items-center gap-2 hover:bg-lime-500 transition-colors"
          >
            <LuShoppingBag size={16} />
            <span className="text-sm font-bold hidden sm:block">Add</span>
          </button>
        ) : (
          // State B: Already in cart -> Show the - / + controller
          <div className="h-9 flex items-center bg-[#2A2A2A] rounded-xl border border-[#444444] overflow-hidden">
            
            {/* Minus Button */}
            <button 
              onClick={(e) => { e.preventDefault(); decreaseQuantity(id); }}
              className="w-8 h-full flex items-center justify-center text-white hover:bg-[#333333] hover:text-lime-400 transition-colors"
            >
              <LuMinus size={14} />
            </button>
            
            {/* Quantity Display */}
            <span className="w-8 text-center text-sm font-bold text-white">
              {quantity}
            </span>
            
            {/* Plus Button */}
            <button 
              onClick={(e) => { e.preventDefault(); addToCart({ id, imageUrl, title, price }); }}
              className="w-8 h-full flex items-center justify-center text-white hover:bg-[#333333] hover:text-lime-400 transition-colors"
            >
              <LuPlus size={14} />
            </button>
            
          </div>
        )}
        </div>
      </div>
      </Link>
    </div>
  );
};

export default ProductCard;
