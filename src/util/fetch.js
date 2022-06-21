import { useQuery, useQueryClient } from "react-query";

export function getProducts() {
  console.log("hello products");
  return fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}

export function fetchProduct(productId) {
  console.log("hello fetchProduct");
  return fetch(`https://fakestoreapi.com/products/${productId}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
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
