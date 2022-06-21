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
import { ReactQueryDevtools } from 'react-query/devtools';


// React query import
import { QueryClient, QueryClientProvider } from "react-query";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Create a client
const queryClient = new QueryClient();

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/product/:productId" element={<SingleProductPage />} />
          {/* <Route exact path="product/:id" element={<SingleProductPage/>} /> */}
          {/* I added the route above but i didnt continue to work */}
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
