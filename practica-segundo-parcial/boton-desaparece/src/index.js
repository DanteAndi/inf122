import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Boton from "./components/Boton";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Boton />
  </StrictMode>,
  rootElement
)