import React from 'react'
import { LuSearch, LuChevronDown } from 'react-icons/lu';
import { useState } from 'react';


const FilterBar = ({searchTerm, setSearchTerm, 
  selectedCategory, setSelectedCategory, 
  selectedSort, setSelectedSort}) => {
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);
  
  

  const categories = ['All Categories', 'Electronics', 'Clothing', 'Furnitures', 'Home items', 'Sports', 'Accessories'];
  const sortOptions = ['Featured', 'Price: Low → High', 'Price: High → Low', 'Top Rated', 'Lowest Rated'];
  return (
    <div className="w-full flex justify-center flex-wrap md:flex-row items-center gap-4 md:p-3 bg-[#0a0a0a] border border-[#333333] rounded-2xl">
        <div className="relative md:flex-2 w-full">
            <LuSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm md:text-lg" />
         <input 
          type="text" 
          placeholder="Search products..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-[#1C1C1C] text-white pl-12 pr-4 py-1 md:py-3 rounded-xl border border-transparent focus:outline-none focus:border-[#444444] transition-colors"
        />
        </div>
    
        <div className="relative w-1/2 md:flex-1 md:56">
          {/* button for filter dropdown*/}
            <button 
          onClick={() => {
            setIsCategoryOpen(!isCategoryOpen);
            setIsSortOpen(false);
          }}

          className={`w-full flex justify-between items-center bg-[#1C1C1C] px-4 py-1 md:py-3 rounded-xl border transition-colors ${
            isCategoryOpen ? 'border-lime-500 ring-1 ring-lime-500' : 'border-transparent hover:border-[#444444]'
          }`}
        >
          <span className="text-white text-sm">{selectedCategory}</span>
          <LuChevronDown className={`text-gray-400 transition-transform duration-200 ${isCategoryOpen ? 'rotate-180' : ''}`} />
        </button>

        {isCategoryOpen && (
          <ul className="absolute top-full left-0 right-0 mt-2 bg-[#1C1C1C] border border-[#333333] rounded-xl overflow-hidden z-50 shadow-xl shadow-black/50">
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => {
                    setSelectedCategory(category);
                    setIsCategoryOpen(false); // Close menu after selection
                  }}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                    selectedCategory === category 
                      ? 'bg-lime-400 text-black font-bold' 
                      : 'text-gray-300 hover:bg-[#2A2A2A] hover:text-white'
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        )}

        </div>

       <div className="relative w-1/3 md:flex-1 md:w-56">
        <button 
          onClick={() => {
            setIsSortOpen(!isSortOpen);
            setIsCategoryOpen(false); // Close the other dropdown if it's open
          }}
          className={`w-full flex justify-between items-center bg-[#1a1a1a] px-4 py-1 md:py-3 rounded-xl border transition-colors ${
            isSortOpen ? 'border-lime-500' : 'border-transparent hover:border-[#444444]'
          }`}
        >
          <span className="text-white text-sm">{selectedSort}</span>
          <LuChevronDown className={`text-gray-400 transition-transform duration-200 ${isSortOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Sort Menu */}
        {isSortOpen && (
          <ul className="absolute top-full left-0 right-0 mt-1 bg-[#1a1a1a] border border-[#333333] z-50 shadow-xl">
            {sortOptions.map((option) => (
              <li key={option}>
                <button
                  onClick={() => {
                    setSelectedSort(option);
                    setIsSortOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                    selectedSort === option 
                      ? 'bg-[#cccccc] text-black' // The light gray active state from the screenshot
                      : 'text-white hover:bg-[#333333]'
                  }`}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  )
}

export default FilterBar