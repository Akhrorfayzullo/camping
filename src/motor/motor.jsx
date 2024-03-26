import React, { useState, useEffect } from "react";
import { campcar } from "../mockdata";
import { Link } from "react-router-dom";
import { Motormap } from "./motormap";
import { HeaderDiv, MotWrap, MotorDiv, MotorH1, MotorMapH1 } from "../style";
import Footerr from "../footer/footer";
import { MotorSide } from "./motorSide";
import { borderBottom } from "@mui/system";
import { IconButton } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";

// import motorback from "../assets/image 5.png";

export const Motor = () => {
  const [openDrawer, setOpenDrawer] = useState(true);
  const [closeDrawer, setCloseDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(false);
    setCloseDrawer(true);
  };
  const handleDrawerClose = () => {
    setCloseDrawer(false);
    setOpenDrawer(true);
  };
  return (
    <div>
      <MotorDiv>
        <MotorH1>Home / Motors</MotorH1>
        <MotorH1 $range>Our ranges</MotorH1>
        <MotorH1 $title>Motors</MotorH1>
      </MotorDiv>
      <div style={{ display: "flex" }}>
        <MotWrap $wrap1>
          <MotorSide />
        </MotWrap>
        <MotWrap>
          <HeaderDiv>
            <MotorMapH1
              style={{ display: "flex", gap: "10px", alignItems: "center" }}
            >
              Item<MotorMapH1 $cost>{campcar.maindata.length}</MotorMapH1>
            </MotorMapH1>
            <IconButton onClick={handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
            <IconButton onClick={handleDrawerClose}>
              <MenuIcon />
            </IconButton>
          </HeaderDiv>

          {openDrawer && <Motormap />}
          {closeDrawer && <Footerr />}
        </MotWrap>
      </div>

      <Footerr />
    </div>
  );
};
