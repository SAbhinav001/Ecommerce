import React, { useState } from "react";
import ProductCard from "./ProductCard";


const Products = ({ products }) => {
  
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          Shopping Everyday
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="text-center text-gray-600 max-w-[700px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi
          deserunt eius sapiente amet,iciatis! Aut, animi est! Voluptas aut
          mollitia? Voluptatum quidem laud pedita minima ab id molestiae ea
          animi tempora nostrum autem quod a ullam.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto py-12 grid grid-cols-4 gap-10">
        {products.map((item) => {
          return <ProductCard key={item?._id} product={item} />;
        })}
      </div>
     
    </div>
  );
};

export default Products;
