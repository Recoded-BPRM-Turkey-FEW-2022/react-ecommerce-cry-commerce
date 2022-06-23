import { useQuery } from "react-query";
import queryClient from "./query-client";

export function fetchProducts() {
  // console.log("hello products");
  return fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}

export function getProducts() {
  return useQuery("products", fetchProducts);
}

export function fetchProduct(productId) {
  return fetch(`https://fakestoreapi.com/products/${productId}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

export function getProduct(productId) {
  return useQuery(["products", productId], () => fetchProduct(productId), {
    initialData: () => {
      return queryClient
        .getQueryData("products")
        ?.find((p) => (p.id = productId));
    },
  });
}

export function fetchCartProducts() {
  return fetch("http://localhost:8000/cartProducts")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}

export function getCartProducts() {
  return useQuery("cart-products", fetchCartProducts);
}

// Selin
// electronics , jewelery , men's%20clothing , women's%20clothing
export function getJewelery() {
  console.log("hello Category");
  return fetch("https://fakestoreapi.com/products/category/jewelery")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}
export function getElectronics() {
  console.log("hello Category");
  return fetch("https://fakestoreapi.com/products/category/electronics")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}
export function getMens() {
  console.log("hello Category");
  return fetch("https://fakestoreapi.com/products/category/men's%20clothing")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}
export function getWomens() {
  console.log("hello Category");
  return fetch("https://fakestoreapi.com/products/category/women's%20clothing")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}
