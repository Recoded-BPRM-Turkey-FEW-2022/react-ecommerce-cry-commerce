import React from "react";
import { useEffect } from "react";
import "./style.css";
import { useState } from "react";
import SingleProduct from "./components/SingleProductCard";


export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch ("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(json => setData(json))
    .then(console.log(data));
  }, [])

  return (
      <main className="allProducts" style={{padding:"30px"}}>
        <h2>Products</h2>
        <section className="productCards">
          <SingleProduct data={data} />
        </section>
      </main>
  );
}
