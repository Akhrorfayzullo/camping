import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Carusel } from "./carusel/carusel";
import { Multicar } from "./carusel/multicar";
import Popupp from "./components/popup/popup";
import Popup from "reactjs-popup";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Motor } from "./motor/motor";
import { Navbar } from "./components/navbar";
import { Motorinfo } from "./motor/motorinfo";
import { Caravan } from "./caravan/motor";
import { CampPlace } from "./campPlace/campPlace";
import { CampPlaceInfo } from "./campPlace/campPlaceInfo";
import ResponsiveDrawer from "./components/popup/drawer";
import SignIn from "./signIn/sigin";
import Register from "./signIn/register";

export const RouterComponent = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/signin" && location.pathname !== "/register" && (
        <Navbar />
      )}

      {/* <ResponsiveDrawer/> */}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Carusel />} />
        <Route path="/motor" element={<Motor />} />
        <Route path="/campPlaces/:id" element={<CampPlaceInfo />} />
        <Route path="/motor/:id" element={<Motorinfo />} />
        <Route path="/caravan" element={<Caravan />} />
        <Route path="/campPlaces" element={<CampPlace />} />
      </Routes>

      {/* <Carusel /> */}
      {/* <Multicar /> */}
      {/* <Popupp /> */}
      {/* <Popup /> */}
      {/* <h1>efeefef</h1> */}
    </div>
  );
};
