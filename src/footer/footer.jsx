import React from "react";
import { Lasth1, Oddiy, Lastdiv } from "./style";

export default function Footerr() {
  return (
    <div>
      <Lastdiv>
        <Oddiy>
          <h1 style={{ marginBottom: "20px" }}>Camper</h1>
          <Lasth1>
            Book your trip in minute, get full
            <br /> Control for much longer.
          </Lasth1>
        </Oddiy>
        <Oddiy>
          <h4 style={{ marginBottom: "20px" }}>Company</h4>
          <Lasth1>About</Lasth1>
          <Lasth1>Careers</Lasth1>
          <Lasth1>Mobile</Lasth1>
        </Oddiy>
        <Oddiy>
          <h4 style={{ marginBottom: "20px" }}>Contact</h4>
          <Lasth1>Help/FAQ</Lasth1>
          <Lasth1>press</Lasth1>
          <Lasth1>Mobile</Lasth1>
        </Oddiy>
        <Oddiy>
          <h4 style={{ marginBottom: "20px" }}>More</h4>
          <Lasth1>Airlinefees</Lasth1>
          <Lasth1>Airline</Lasth1>
          <Lasth1>Mobile</Lasth1>
        </Oddiy>
        <Oddiy>
          <Oddiy $social>
            {/* <SImg $face />
            <SImg $insta />
            <SImg $face /> */}
          </Oddiy>
          <Lasth1 style={{ textAlign: "center" }}>Discover our app</Lasth1>
          <Oddiy $social>
            {/* <SImg $play />
            <SImg $astore /> */}
          </Oddiy>
        </Oddiy>
      </Lastdiv>
    </div>
  );
}
