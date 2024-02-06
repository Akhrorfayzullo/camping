import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Carusel } from "./carusel/carusel";
import { Multicar } from "./carusel/multicar";
import Popupp from "./components/popup/popup";
import Popup from "reactjs-popup";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Carusel />
    <Multicar />
    <Popupp />
    <Popup />
    <h1>efeefef</h1>
  </React.StrictMode>
);
