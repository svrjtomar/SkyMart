import React from "react";
import { useRef } from "react";
import { mockProducts } from "../../Products";
import ProductCard from "./ProductCard";

const TopRated = () => {
  const topRatedProducts = [...mockProducts]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 10);

const scrollContainerRef = useRef(null);

    // 3. Create the function that performs the scrolling
    const scrollRight = () => {
      if (scrollContainerRef.current) {
        // Scrolls the container 300px to the right smoothly
        scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      }
    };

  return (
    <div className="relative group">
    <div
    ref={scrollContainerRef} 
    className="relative flex gap-3 overflow-x-auto pb-4 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth">
      {topRatedProducts.map(
        ({ id, title, price, imageUrl, rating, ratingCount, category }) => (
          <ProductCard
            key={id}
            id={id}
            title={title}
            price={price}
            imageUrl={imageUrl}
            rating={rating}
            ratingCount={ratingCount}
            category={category}
          />
          
        ),
      )}

      
     
    </div>

 <button  onClick={scrollRight} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/70 text-lime-400 border-lime-500/30 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black hover:text-lime-300 focus:outline-none hidden md:block  transition-all-400 ease-in-out">&rarr;</button>
  
    </div>
    
    
  );
};

export default TopRated;
