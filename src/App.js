import React from "react";
import "./style.css";
import { getProducts } from "./util/fetch";
import Filter from "./components/Filter"
import { useQuery } from "react-query";
import Slider from "./components/Slider";
export default function App({filter}) {
  const { isLoading, data, error } = useQuery("products", getProducts);

  if (isLoading) {
    return <div className="ourTeam">Loading...</div>;
  }

  if (error) {
    return <div className="ourTeam">Something went wrong... try again</div>;
  }

  return (
    <>
    <main className="allProducts" style={{ padding: "30px" }}>
      <Slider />
      <h2>Products</h2>
      <Filter data={data} filter={filter}/>
    </main>
    </>
  );
}
