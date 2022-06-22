import React from 'react';
import {useParams} from 'react-router-dom';
import { getProduct } from "../util/fetch";
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

function SingleProductPage() {
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
          <Button variant="contained" color="primary">
            Add to Cart
          </Button>
      </div>
    </div>
    </>
  );
}

export default SingleProductPage;
