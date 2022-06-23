import { useQuery, useQueryClient } from "react-query";

export function getProducts() {
  return fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

export function fetchProduct(productId) {
  console.log("hello fetchProduct");
  return fetch(`https://fakestoreapi.com/products/${productId}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}
// electronics , jewelery , men's%20clothing , women's%20clothing
export function getJewelery() {
  console.log("hello Category");
  return fetch("https://fakestoreapi.com/products/category/jewelery")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}
export function getElectronics() {
  console.log("hello Category");
  return fetch("https://fakestoreapi.com/products/category/electronics")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}
export function getMens() {
  console.log("hello Category");
  return fetch("https://fakestoreapi.com/products/category/men's%20clothing")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}
export function getWomens() {
  console.log("hello Category");
  return fetch("https://fakestoreapi.com/products/category/women's%20clothing")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

export function getProduct(productId) {
  const queryClient = useQueryClient();

  return useQuery(["products", productId], () => fetchProduct(productId) , {
    initialData: () => {
      return queryClient.getQueryData("products")?.find((p) => p.id = productId);
    },
  });
}

export function fetchCartProducts() {
  return fetch("http://localhost:3001/cart")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}
