import React, { useState, useEffect } from "react";
import { campcar } from "../mockdata";
import { Link } from "react-router-dom";
import { Motormap } from "./motormap";
import { MotorDiv, MotorH1 } from "../style";
// import motorback from "../assets/image 5.png";

export const Motor = () => {
  return (
    <div>
      <MotorDiv>
        <MotorH1>Home / Motors</MotorH1>
        <MotorH1 $range>Our ranges</MotorH1>
        <MotorH1 $title>Motors</MotorH1>
      </MotorDiv>

      <h1>Motor Information</h1>
      <h2>Number of cars: {campcar.maindata.length}</h2>
      <Motormap />
    </div>
  );
};
