import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from "./components/Navbar";

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
      <Navbar/>
      <App />
      {/* routes here  */}
  </StrictMode>

);
