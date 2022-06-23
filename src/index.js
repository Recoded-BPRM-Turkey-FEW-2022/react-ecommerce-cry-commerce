import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
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
import Cart from './routes/Cart'
import queryClient from './util/query-client';

// React query import
import {  QueryClientProvider } from "react-query";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/product/:productId" element={<SingleProductPage />} />
          <Route exact path="/products/category/jewelery" element={<JeweleryPage />} />
          <Route exact path="/products/category/electronics" element={<ElectronicsPage />} />
          <Route exact path="/products/category/mens" element={<MensPage />} />
          <Route exact path="/products/category/womens" element={<WomensPage />} />
          <Route exact path="/checkout" element={<Cart />} />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
