import React, { useState, useEffect } from "react";
import { campcar } from "../mockdata";
import { Link } from "react-router-dom";
import { Motormap } from "./motormap";
import { HeaderDiv, MotorDiv, MotorH1, MotorMapH1 } from "../style";
import Footerr from "../footer/footer";
// import motorback from "../assets/image 5.png";

export const Motor = () => {
  return (
    <div>
      <MotorDiv>
        <MotorH1>Home / Motors</MotorH1>
        <MotorH1 $range>Our ranges</MotorH1>
        <MotorH1 $title>Motors</MotorH1>
      </MotorDiv>
      <HeaderDiv style={{ margin: "0 70px 60px" }}>
        <MotorMapH1
          style={{ display: "flex", gap: "10px", alignItems: "center" }}
        >
          Item<MotorMapH1 $cost>{campcar.maindata.length}</MotorMapH1>
        </MotorMapH1>
      </HeaderDiv>

      <Motormap />
      <Footerr />
    </div>
  );
};
