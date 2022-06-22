import { createRoot } from "react-dom/client";
import HomePage from "./HomePage";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

//Type error cannot read properties of null error for useState !!!

root.render(
  <HomePage />
  
);
