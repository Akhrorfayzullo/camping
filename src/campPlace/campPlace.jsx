import React from "react";
import { Navbar } from "../components/navbar";
import Footerr from "../footer/footer";
import { MotorDiv, MotorH1 } from "../style";
// import TitlebarBelowImageList from "./camps";
import { campcarPlace } from "./campdata";
import CampingCards from "./camps";

export const CampPlace = () => {
  return (
    <div>
      <MotorDiv $camp>
        <MotorH1>Home / Camping place</MotorH1>
        {/* <MotorH1 $range>Our ranges</MotorH1> */}
        <MotorH1 $title>Camping places</MotorH1>
      </MotorDiv>
      <CampingCards />
      <Footerr />
    </div>
  );
};
