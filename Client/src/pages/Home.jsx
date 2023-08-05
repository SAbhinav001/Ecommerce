import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";

const Home = () => {
  const [products, setproduct] = useState([]);

  useEffect(() => {
    fetchProduct();
  }, []);

  async function fetchProduct() {
    const data = await fetch("https://fakestoreapiserver.reactbd.com/products");
    const json = await data.json();
    setproduct(json);
  }

  return (
    <div>
      <Banner />
      <Products products={products}/>
    </div>
  );
};

export default Home;
