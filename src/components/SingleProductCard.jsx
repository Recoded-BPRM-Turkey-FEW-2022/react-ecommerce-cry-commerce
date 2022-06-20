import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function SingleProductCard({data}) {
  return (
    data.map(product => (
    <Card className="outerCard" key={product.id}>
        <CardContent className="card">
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
                <Button 
                variant="contained" 
                color="primary" 
                href={product.link}>
                    Add to Cart
                </Button>
        </CardContent>
    </Card>
      ))
  );
}