import React from "react";
import { categories } from "../data/data.js";

const Category = () => {
  return (
    <div className="max-w-[1640] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu items
      </h1>
      {/* categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map(({ id, name, image }) => (
          <div
            key={id}
            className="bg-gray-100 rounded-lg p-4 flex justify-between items-center cursor-pointer hover:scale-105 duration-500"
          >
            <h2 className="font-bold sm:text-xl">{name}</h2>
            <img className="w-20" src={image} alt={name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
