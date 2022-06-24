import React from 'react';
import {  fetchCartProducts } from "../util/fetch";
import { QueryClient, useQuery, invalidateQueries } from "react-query";
import { useMutation} from "react-query";

function Cart () {
  const { isLoading, data, error } = useQuery("cart", fetchCartProducts);
    const removeFromCart = useMutation((id) => {
        return fetch(`http://localhost:3001/cart/${id}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                }
            }).then(window.location.reload());
    });
    
  return (
    <> 
      <main className='allProducts' style={{width:"100%"}}>
      <h2>Your Shopping Cart </h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div className='cartDiv'>
          {data.length ==0? <h2 style={{marginTop:"30px", color:"lightBlue"}}>No items in cart</h2>: 
          data.map(product => (
            <div className='singleCartRow' key={product.id}>
              <img style={{height: "130px"}}src={product.image} alt={product.name} />
              <h4>{product.title}</h4>
              <h4>quantity: 1</h4>
              <h2>{product.price} $</h2>
              <button 
              className='removeFromCart'
              onClick={
                ()=>{removeFromCart.mutate(product.id)}}>Remove</button>
            </div>
          ))
          }

        </div>

      )}
      </main>

    </>
  );
}


export default Cart;