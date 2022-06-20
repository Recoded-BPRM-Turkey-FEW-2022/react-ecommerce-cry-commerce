import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

import App from './App';
import About from './components/About';
import SingleProductPage from './components/SingleProductPage';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Navbar/>
      <Router>
        <Routes>
          <Route exact path="/" element={<App/>} />
          <Route exact path="/about" element={<About/>} />
          {/* <Route exact path="product/:id" element={<SingleProductPage/>} /> */}
          {/* I added the route above but i didnt continue to work */}
        </Routes>
      </Router>
    </StrictMode>
);
