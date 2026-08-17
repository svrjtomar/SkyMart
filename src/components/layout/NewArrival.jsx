import React from 'react'
import { mockProducts } from '../../Products';
import ProductCard from './ProductCard';

const NewArrivals = () => {

     const newArrivals = mockProducts.slice(0,10);
  return (
    <div className='flex gap-3 overflow-x-auto pb-4 pt-2 px-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
       {newArrivals.map(({id, title, price, imageUrl, rating, ratingCount, category})=> (
        <ProductCard key={id} id={id} title={title} price={price} imageUrl={imageUrl} rating={rating} ratingCount={ratingCount} category={category} />
       ))} 
    </div>
  )
}

export default NewArrivals