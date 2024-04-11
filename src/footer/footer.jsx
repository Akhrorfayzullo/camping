import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Lasth1, Oddiy, Lastdiv } from "./style";

export default function Footerr() {
  return (
    <div>
      <Lastdiv
        style={{
          backgroundColor: "#006DAB",
          maxWidth: "1440px",
          margin: "0 auto",
        }}
      >
        <Oddiy>
          <h1 style={{ marginBottom: "20px", color: "#fff" }}>Camper</h1>
          {/* <Lasth1>
            Book your trip in minute, get full
            <br /> Control for much longer.
          </Lasth1> */}
        </Oddiy>
        <Oddiy $tabletmob>
          <h4 style={{ marginBottom: "20px", color: "#fff" }}>Services</h4>
          <Lasth1 $foot>Camping</Lasth1>
          <Lasth1 $foot>Lodging</Lasth1>
          <Lasth1 $foot>Harbor</Lasth1>
          <Lasth1 $foot>Day use</Lasth1>
        </Oddiy>
        <Oddiy $tabletmob>
          <h4 style={{ marginBottom: "20px", color: "#fff" }}>Menu</h4>
          <Lasth1 $foot>Abot </Lasth1>
          <Lasth1 $foot>Service</Lasth1>
          <Lasth1 $foot>Booking</Lasth1>
          <Lasth1 $foot>Blog</Lasth1>
        </Oddiy>
        <Oddiy>
          <Oddiy $tabletmob>
            <h4 style={{ marginBottom: "20px", color: "#fff" }}>Contact</h4>
          </Oddiy>

          <div style={{ display: "inline-flex", gap: "10px" }}>
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebook} />
          </div>
          <Oddiy $tabletmob>
            <Lasth1 $foot>021 Korea Seul, LA</Lasth1>
            <Lasth1 $foot>camper@example.com</Lasth1>
            <Lasth1 $foot>(021) 345-6789-99</Lasth1>
          </Oddiy>
        </Oddiy>
        {/* <Oddiy>
          <Oddiy $social></Oddiy>
          <Lasth1 style={{ textAlign: "center", color: "#fff" }}>
            Discover our app
          </Lasth1>
          <Oddiy $social></Oddiy>
        </Oddiy> */}
      </Lastdiv>
    </div>
  );
}
