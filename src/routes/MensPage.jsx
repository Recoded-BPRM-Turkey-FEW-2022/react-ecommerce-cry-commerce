import React from "react";
import "../style.css";
import { getMens } from "../util/fetch";
import Filter from "../components/Filter"
import { useQuery } from "react-query";

export default function MensPage({filter}) {
  const { isLoading, data, error } = useQuery("electronics", getMens);

  if (isLoading) {
    return <div className="ourTeam">Loading...</div>;
  }

  if (error) {
    return <div className="ourTeam">Something went wrong... try again</div>;
  }

  return (
    <main className="allProducts" style={{ padding: "30px" }}>
      <h2>Men's Clothing</h2>

      <Filter data={data} filter={filter}/>
    </main>
  );
}
