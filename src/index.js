import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Carusel } from "./carusel/carusel";
import { Multicar } from "./carusel/multicar";
import Popupp from "./components/popup/popup";
import Popup from "reactjs-popup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Motor } from "./motor/motor";
import { Navbar } from "./components/navbar";
import { Motorinfo } from "./motor/motorinfo";
import { Caravan } from "./caravan/motor";
import { CampPlace } from "./campPlace/campPlace";
import { CampPlaceInfo } from "./campPlace/campPlaceInfo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Carusel />} />
        <Route path="/motor" element={<Motor />} />
        <Route path="/campPlaces/:id" element={<CampPlaceInfo />} />
        <Route path="/motor/:id" element={<Motorinfo />} />
        <Route path="/caravan" element={<Caravan />} />
        <Route path="/campPlaces" element={<CampPlace />} />
      </Routes>
    </BrowserRouter>
    {/* <Carusel /> */}
    {/* <Multicar /> */}
    {/* <Popupp /> */}
    {/* <Popup /> */}
    {/* <h1>efeefef</h1> */}
  </React.StrictMode>
);
