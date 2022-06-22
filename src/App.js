import React from "react";
import "./style.css";
import { getProducts } from "./util/fetch";
import Filter from "./components/Filter"
// React query import
import { useQuery } from "react-query";

export default function App({filter}) {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch ("https://fakestoreapi.com/products")
  //   .then(response => response.json())
  //   .then(json => setData(json))
  //   .then(console.log(data));
  // }, [])

//filtering products by search bar
  // const [filter, setFilter] = useState("");


  const { isLoading, data, error } = useQuery("products", getProducts);
// getting the  getProducts function from the util file and passing it to the useQuery hook

  if (isLoading) {
    return <div className="ourTeam">Loading...</div>;
  }

  if (error) {
    return <div className="ourTeam">Something went wrong... try again</div>;
  }

  return (
    <>
    {/* <Navbar filter={filter} setFilter={setFilter}/> */}
    <main className="allProducts" style={{ padding: "30px" }}>

      <h2>Products</h2>
      <Filter data={data} filter={filter}/>
     
    </main>
    </>
  );
}
