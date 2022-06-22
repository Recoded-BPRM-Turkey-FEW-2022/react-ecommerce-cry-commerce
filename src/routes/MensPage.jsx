import React from "react";
import "../style.css";
import SingleProduct from "../components/SingleProductCard";
import { getMens } from "../util/fetch";
import { Link } from "react-router-dom";

// React query import
import { useQuery } from "react-query";

export default function MensPage() {
  const { isLoading, data, error } = useQuery("electronics", getMens);
// getting the  getProducts function from the util file and passing it to the useQuery hook

  if (isLoading) {
    return <div className="ourTeam">Loading...</div>;
  }

  if (error) {
    return <div className="ourTeam">Something went wrong... try again</div>;
  }

  return (
    <main className="allProducts" style={{ padding: "30px" }}>
      <h2>Men's Clothing</h2>

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
