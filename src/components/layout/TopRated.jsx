import React from 'react'
import { mockProducts } from "../../Products";
import ProductCard from "./ProductCard";

const TopRated = () => {

    const topRatedProducts = mockProducts.slice(0,4);
  return (
    <div className='flex gap-6 overflow-x-auto pb-4 pt-2 px-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
       {topRatedProducts.map(({id, title, price, imageUrl, rating, ratingCount, category})=> (
        <ProductCard key={id} title={title} price={price} imageUrl={imageUrl} rating={rating} ratingCount={ratingCount} category={category} />
       ))} 
    </div>
  )
}

export default TopRated