import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import {useMutation} from 'react-query';

export default function SingleProductCard({product, addToCart}) {
  
  return (
   
    <Card className="outerCard" key={product.id}>
        <CardContent className="card">
        <Link to={`/product/${product.id}`}>
            <CardMedia
                className="imageBox"
                component="img"
                height="140"
                image={product.image}
                alt={product.name}>
            </CardMedia>
            <Typography 
            className= "productName"
            gutterBottom variant="p" 
            component="p"
            style={{textAlign:"center"}}>
                {product.title}
            </Typography>
            <Typography className="price" variant="h5" component="h2">
                    {product.price} $
            </Typography>
            </Link>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={()=> addToCart(product)}>
                    Add to Cart
                </Button>
        </CardContent>
       
    </Card>
  
  );
}