import React from 'react'
import SingleProduct from "./SingleProductCard";
import { Link } from "react-router-dom";

function Filter({filter, data}) {
  return (
    <section className="productCards">
        {
        filter === null ?  
        data.map((product) => {
          return (
            
            <Link to={`/product/${product.id}`} key={product.id}>
            
              <SingleProduct product={product} />
            </Link>
         
          );
        }  ) : 
        
        data.filter((products) => (
          products.title.toLowerCase().includes(filter.toLowerCase())
        )).map((product) => {
          return (
            
            <Link to={`/product/${product.id}`} key={product.id}>
            
              <SingleProduct product={product} />
            </Link>
         
          );
        }  )
      }
      </section>
    
  )
}

export default Filter