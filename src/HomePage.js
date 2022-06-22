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
import JeweleryPage from "./routes/JeweleryPage";
import ElectronicsPage from "./routes/ElectronicsPage";
import MensPage from "./routes/MensPage";
import WomensPage from "./routes/WomensPage";
import { ReactQueryDevtools } from 'react-query/devtools';

// React query import
import { QueryClient, QueryClientProvider } from "react-query";
// Create a client
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
          <Route exact path="/products/category/jewelery" element={<JeweleryPage filter={filter} />} />
          <Route exact path="/products/category/electronics" element={<ElectronicsPage filter={filter}/>} />
          <Route exact path="/products/category/mens" element={<MensPage filter={filter}/>} />
          <Route exact path="/products/category/womens" element={<WomensPage filter={filter} />} />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
  )
}

export default HomePage
