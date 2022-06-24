import React, { StrictMode, useState } from 'react'
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import App from "./App";
import About from "./routes/About";
import SingleProductPage from "./routes/SingleProductPage";
import ClothesPage from "./routes/ClothesPage";
import ElectronicsPage from "./routes/ElectronicsPage";
import FurniturePage from "./routes/FurniturePage";
import ShoesPage from "./routes/ShoesPage";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { ReactQueryDevtools } from 'react-query/devtools';


import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function HomePage() {
    const [filter, setFilter] = useState("");

  return (
    <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Navbar filter={filter} setFilter={setFilter}/>
      <Router>
        <Routes>
          <Route exact path="/" element={<App filter={filter} />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/product/:productId" element={<SingleProductPage />} />
          <Route exact path="/products/category/clothes" element={<ClothesPage filter={filter} />} />
          <Route exact path="/products/category/electronics" element={<ElectronicsPage filter={filter}/>} />
          <Route exact path="/products/category/furniture" element={<FurniturePage filter={filter}/>} />
          <Route exact path="/products/category/shoes" element={<ShoesPage filter={filter} />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      <Footer/>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
  )
}

export default HomePage
