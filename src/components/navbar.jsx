import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { Innerdiv, Navdiv, Navh1, Navp } from "../style";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Navdiv>
        <Navh1>Camper</Navh1>
        <Innerdiv>
          <Navp>
            <Link to="/motor">Motor</Link>
          </Navp>
          <Navp>
            <Link to="/caravan">Caravan</Link>
          </Navp>
          <Navp>
            <Link to="/tuning">Tuning</Link>
          </Navp>
          <Navp>
            <Link to="/usedcars">Used Cars</Link>
          </Navp>
        </Innerdiv>
        <Innerdiv>
          <FontAwesomeIcon icon={faCartShopping} />
          <FontAwesomeIcon icon={faUser} />
          <select id="lan">
            <option>ENG</option>
            <option>UZB</option>
            <option>KOR</option>
          </select>
        </Innerdiv>
      </Navdiv>
    </div>
  );
};
