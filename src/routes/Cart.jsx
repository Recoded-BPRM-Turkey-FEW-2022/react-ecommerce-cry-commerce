import React from 'react';
import {  fetchCartProducts } from "../util/fetch";
import { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import { useMutation} from "react-query";
function Cart () {
  const { isLoading, data, error } = useQuery("cart", fetchCartProducts);

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
          {data.map(product => (
            <div className='singleCartRow' key={product.id}>
              <img style={{height: "130px"}}src={product.image} alt={product.name} />
              <h4>{product.title}</h4>
              <h2>{product.price}</h2>
              <button 
              className='removeFromCart'
              onClick={
                ()=>{
                  console.log(data.filter(data=>data.id!==product.id))
                  }}>Remove</button>
            </div>
          ))}
        </div>
          
      )}
      </main>
      
    </>
  );
}


export default Cart;