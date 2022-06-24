import React from "react";
import "../style.css";
import { getClothes } from "../util/fetch";
import Filter from "../components/Filter"
import { useQuery } from "react-query";


export default function ClothesPage({filter}) {
  const { isLoading, data, error } = useQuery("Clothes", getClothes);


  if (isLoading) {
    return <div className="ourTeam">Loading...</div>;
  }

  if (error) {
    return <div className="ourTeam">Something went wrong... try again</div>;
  }

  return (
    <main className="allProducts" style={{ padding: "30px" }}>
      <h2>Clothes</h2>

      <Filter data={data} filter={filter}/>
    </main>
  );
}
