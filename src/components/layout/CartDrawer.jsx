import React from 'react';
import { LuX, LuTrash2, LuShoppingCart } from 'react-icons/lu';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { isCartOpen, closeCart, cartItems, removeFromCart } = useCart();
  console.log("Drawer thinks isCartOpen is:", isCartOpen);

  // Helper to convert price strings to numbers for the subtotal
  const getPriceNumber = (priceString) => {
    return parseFloat(String(priceString).replace(/[^0-9.-]+/g, ""));
  };

  const subtotal = cartItems.reduce((total, item) => {
    return total + (getPriceNumber(item.price) * item.quantity);
  }, 0);

  return (
    <>


      <div
        onClick={closeCart}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      />


      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-[#111111] border-l border-[#333333] z-50 flex flex-col transition-transform duration-500 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >


        <div className="flex justify-between items-center p-6 border-b border-[#222222]">
          <h2 className="text-xl font-bold text-white">Your Cart</h2>
          <button
            onClick={closeCart}
            className="p-2 text-gray-400 hover:text-white hover:bg-[#222222] rounded-full transition-colors focus:outline-none"
          >
            <LuX size={24} />
          </button>
        </div>


        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <LuShoppingCart size={48} className="mb-4 opacity-20" />
              <p>Your cart is currently empty.</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.title} className="flex gap-4 items-center bg-[#1C1C1C] p-3 rounded-xl border border-[#333333]">
                <img src={item.imageUrl} alt={item.title} className="w-16 h-16 object-cover rounded-lg bg-[#2A2A2A]" />
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-white line-clamp-1">{item.title}</h4>
                  <p className="text-lime-500 font-semibold text-sm">{item.price}</p>
                  <p className="text-xs text-gray-400 mt-1">Qty: {item.quantity}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                >
                  <LuTrash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>


        {cartItems.length > 0 && (
          <div className="p-6 border-t border-[#222222] bg-[#161616]">
            <div className="flex justify-between items-center mb-4 text-white">
              <span className="font-bold">Subtotal</span>
              <span className="text-xl font-bold text-lime-500">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-500 mb-4">Shipping and taxes calculated at checkout.</p>
            <button className="w-full py-4 rounded-xl bg-lime-400 text-black font-bold text-lg hover:bg-lime-500 transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}