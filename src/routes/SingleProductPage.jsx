import React from 'react';
import {useParams} from 'react-router-dom';
import { getProduct } from "../util/fetch";
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import {useMutation} from 'react-query';

function SingleProductPage() {
  const addToCart = useMutation((cartData) => {
    return fetch("http://localhost:3001/cart", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        },
        body: JSON.stringify(cartData),
        });
}); 
    const {productId} = useParams();
    const {isLoading, data : product, error} = getProduct(productId);
    console.log(product)
    if (isLoading) {
        return <div className="ourTeam">Loading...</div>;
      }
    
      if (error) {
        return <div className="ourTeam">Something went wrong... try again</div>;
      }
  return (
    <>
    <div className="singleProductPage">
      <img className="productImage" src={product.image}></img>
      <div className="productText">
        <h1 className="productTitle">{product.title}</h1>
        <h5>Category: {product.category.toUpperCase()}</h5>
        <div style={{display:"flex",gap:"40px",alignItems:"center"}}>
          <h3 className="productRating">Product Rating :</h3>
          <Rating name="read-only" value={product.rating.rate} readOnly />
          <h5>{product.rating.rate}/{product.rating.count}</h5>
        </div>

        <h3>Product Details:</h3>
        <p>{product.description}</p>
          <h3 className="price">Price: ${product.price}</h3>
          <input type="number" placeholder="Quantity" className="quantity" min="0"></input>
          <Button 
          variant="contained" 
          color="primary"
          onClick={()=>{addToCart.mutate(
            {
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,

            }
        )}}>
            Add to Cart
          </Button>
      </div>
    </div>
    </>
  );
}

export default SingleProductPage;
