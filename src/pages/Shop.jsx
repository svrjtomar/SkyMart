import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { mockProducts } from '../Products'
import ProductCard from '../components/layout/ProductCard'
import FilterBar from '../components/layout/FilterBar'
import { useState } from 'react'
import { useFormState } from 'react-dom'


const Shop = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
    const [selectedSort, setSelectedSort] = useState('Featured');

    // helper function to convert price for sorting and also strip $ from it
  const getPriceNumber = (priceString)=> {
    return parseFloat(String(priceString).replace(/[^0-9.-]+/g, ""));
  }

  //processing (filter first, then sort)
  const processedProducts = mockProducts.filter((product)=> {
        //check category
        const matchesCategory = selectedCategory === 'All Categories' || product.category === selectedCategory;
        // search term
        const matchesSearch  = product.title.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
  })
  .sort((a, b) => {
    //handle sorting
    if(selectedSort === 'Price: Low → High') {
      return getPriceNumber(a.price) - getPriceNumber(b.price);
    }
    if(selectedSort === 'Price: High → Low') {
      return getPriceNumber(b.price) - getPriceNumber(a.price);
    }
    if(selectedSort === 'Top Rated') {
      return b.rating - a.rating;
    }
    if(selectedSort === 'Lowest Rated') {
      return a.rating - b.rating;
    }
    return 0;
  });


  return (
    <div className="bg-sky-dark min-h-screen text-white relative flex flex-col">
      <div className="sticky top-0 z-50 bg-[var(--color-bg-main)]">
        <Navbar />
      </div>
    <main className="grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative">

       <div className="">
        <p className='text-4xl font-bold text-center my-2'>All Products</p>
       </div>
      

        <div className="w-full lg:mt-3 mx-auto">
          <FilterBar 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedSort={selectedSort}
          setSelectedSort={setSelectedSort}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory} />
        </div>

        {<div className="mb-6">
          <span className="text-sm text-gray-400">
            {processedProducts.length} products found
          </span>
        </div>}
        {processedProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 place-items-center mb-5">
            {processedProducts.map((product) => (
              <div key={product.id} className="h-full">
                <ProductCard 
                  id={product.id}
                  imageUrl={product.imageUrl}
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                  category={product.category}
                  ratingCount={product.ratingCount}
                />
              </div>
            ))}
          </div>
        ) : (
          /* Empty State if search returns nothing */
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <p className="text-xl font-bold mb-2">No products found</p>
            <p className="text-sm">Try adjusting your search or filters.</p>
          </div>
        )}

      <div className="footer">
        <Footer />
      </div>
      </main>
    </div>
    
  )
}

export default Shop