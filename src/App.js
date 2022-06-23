import React, { useState } from "react";
import { useEffect } from "react";
import "./style.css";
// import { useState } from "react";
import SingleProduct from "./components/SingleProductCard";
import { getProducts, getCartProducts } from "./util/fetch";
import queryClient from "./util/query-client";
import { useMutation } from "react-query";
import axios from "axios"

export default function App() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch ("https://fakestoreapi.com/products")
  //   .then(response => response.json())
  //   .then(json => setData(json))
  //   .then(console.log(data));
  // }, [])
 
  const mutation = useMutation((product) => {
    return axios.post("http://localhost:8000/cartProducts", product)
  });

  // const [cart, setCart] = useState([]);

  // const addToCart = (product) => {
  //   setCart([...cart, product]);
  // };

  // useEffect(() => {
  //   console.log(cart);
  // }, [cart]);

  const { isLoading, data, error } = getProducts();
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

      {mutation.isLoading ? (
        "Adding todo..."
      ) : (
        <>
          {mutation.isError ? (
            <div>An error occurred: {mutation.error.message}</div>
          ) : null}

          {mutation.isSuccess ? <div>Todo added!</div> : null}
        </>
      )}

      <section className="productCards">
        {data.map((product) => {
          return (
            <SingleProduct
              key={product.id}
              product={product}
              addToCart={mutation.mutate}
            />
          );
        })}
      </section>
    </main>
  );
}
