import React from "react";
import { useEffect } from "react";
import "./style.css";
import { useState } from "react";
import SingleProduct from "./components/SingleProductCard";
import { getProducts } from "./util/fetch";

import { Link } from "react-router-dom";

// React query import
import { useQuery } from "react-query";

export default function App() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch ("https://fakestoreapi.com/products")
  //   .then(response => response.json())
  //   .then(json => setData(json))
  //   .then(console.log(data));
  // }, [])

  const { isLoading, data, error } = useQuery("products", getProducts);
// getting the  getProducts function from the util file and passing it to the useQuery hook

  if (isLoading) {
    return <div className="ourTeam">Loading...</div>;
  }

  if (error) {
    return <div className="ourTeam">Something went wrong... try again</div>;
  }

  return (
    <main className="allProducts" style={{ padding: "30px" }}>
      <h2>Products</h2>

      <section className="productCards">
        {data.map((product) => {
          return (
            <Link to={`/product/${product.id}`} key={product.id}>
              <SingleProduct product={product} />
            </Link>
          );
        })}
      </section>
    </main>
  );
}
