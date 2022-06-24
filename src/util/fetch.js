import { useQuery, useQueryClient } from "react-query";

export function getProducts() {
  return fetch("https://api.escuelajs.co/api/v1/products")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

export function fetchProduct(productId) {
  console.log("hello fetchProduct");
  return fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}
// electronics , jewelery , men's%20clothing , women's%20clothing
export function getClothes() {
  console.log("hello Category");
  return fetch("https://api.escuelajs.co/api/v1/categories/1/products")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}
export function getElectronics() {
  console.log("hello Category");
  return fetch("https://api.escuelajs.co/api/v1/categories/2/products")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}
export function getShoes() {
  console.log("hello Category");
  return fetch("https://api.escuelajs.co/api/v1/categories/4/products")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}
export function getFurniture() {
  console.log("hello Category");
  return fetch("https://api.escuelajs.co/api/v1/categories/3/products")
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
