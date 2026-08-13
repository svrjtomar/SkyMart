import React from "react";
import { mockProducts } from "../../Products";
import ProductCard from "./ProductCard";

const TopRated = () => {
  const topRatedProducts = mockProducts
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 10);
  return (
    <div className="flex gap-2 overflow-auto">
      {topRatedProducts.map(
        ({ id, title, price, imageUrl, rating, ratingCount, category }) => (
          <ProductCard
            key={id}
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
  );
};

export default TopRated;
