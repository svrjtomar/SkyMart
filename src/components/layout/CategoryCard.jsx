import React from "react";

const CategoryCard = ({ imageUrl, title, count }) => {
  return (
    <div className="mt-8 p-4 border rounded-2xl bg-gray-300 text-black hover:scale-101 cursor-pointer">
      <div className="drop-shadow-xl p-2">
        <img className="drop-shadow-2xl size-40" src={imageUrl} alt="" />
      </div>
      <div className="flex justify-between gap-3 ">
        <p className="font-bold">{title}</p>
        <p>{count}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
