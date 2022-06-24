import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useMutation } from 'react-query';


export default function SingleProductCard({product}) {
    const addToCart = useMutation((cartData) => {
        return fetch("http://localhost:3001/cart", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            },
            body: JSON.stringify(cartData),
            }).then(()=>{
                document.getElementById("popup").style.display="flex"
                document.getElementById("popup").style.animation="popup 2s fade-in"
                setTimeout(()=>{
                    document.getElementById("popup").style.display="none"
                    }
                    ,2000)
            });
    }); 
  return (
   
    <Card className="outerCard" key={product.id}>
        <CardContent className="card">
            <CardMedia
                className="imageBox"
                component="img"
                height="140"
                image={product.images[0]}
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
                <Button 
                variant="contained" 
                color="primary" 
                href={product.link}
                onClick={()=>{addToCart.mutate(
                    {
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        image: product.image,

                    }
                )}}
                >
                    
                    Add to Cart
                </Button>
        </CardContent>
    </Card>
  
  );
}