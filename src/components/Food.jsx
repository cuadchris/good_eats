import React from "react";
import { data } from "../data/data.js";

const Food = () => {
  return (
    <div className="max-w-[1640] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter type */}
        <div>
          <p className="font-bold text-gray-700">Filter type</p>
          <div className="flex flex-wrap justify-between">
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
              All
            </button>
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
              Burgers
            </button>
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
              Pizza
            </button>
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
              Salads
            </button>
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
              Chicken
            </button>
          </div>
        </div>
        {/* Filter price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">$</button>
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">$$</button>
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">$$$</button>
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">$$$$</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
