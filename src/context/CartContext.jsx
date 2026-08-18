import React, { Children } from 'react'
import { createContext, useContext, useState } from 'react'


const CartContext = createContext();

//custom hook
export const useCart = () => {
    return useContext(CartContext);
}

// provider element
export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
console.log("Current Cart State:", { cartItems, isCartOpen });

    const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

const addToCart = (product) => {
    setCartItems((prevItems) => {
     const existingItem = prevItems.find((item) => item.id === product.id);
     if(existingItem) {
        return prevItems.map((item) => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } 
        : item
    );
     }
     return [...prevItems, { ...product, quantity: 1 }];
    })
}

const decreaseQuantity = (id) => {
  setCartItems((prevItems) => {
    const existingItem = prevItems.find((item) => item.id === id)

     if (existingItem?.quantity === 1) {
        return prevItems.filter((item) => item.id !== id);
      }
      return prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
  })
  
}

const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  //for the Navbar badge
  const cartTotalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ 
        cartItems,
         addToCart,
         removeFromCart,
         cartTotalItems,
         decreaseQuantity,
         isCartOpen,   
        openCart,  
        closeCart }}>
      {children}
    </CartContext.Provider>
  );

}