import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { Innerdiv, Navdiv, Navh1, Navp } from "../style";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Navbar = () => {
  const isSmallScreen = useMediaQuery("(max-width:960px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 426px)");
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <div>
      <Navdiv $main>
        {!isVerySmallScreen && isSmallScreen && (
          <Drawer anchor="left" open={openDrawer} onClose={handleDrawerClose}>
            <div>
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>
              <Link to="/motor" style={{ textDecoration: "none" }}>
                <ListItemButton onClick={handleDrawerClose}>
                  <ListItemIcon>Motor</ListItemIcon>
                </ListItemButton>
              </Link>
              <Divider />
              <Link to="/caravan" style={{ textDecoration: "none" }}>
                <ListItemButton onClick={handleDrawerClose}>
                  <ListItemIcon>Caravan</ListItemIcon>
                </ListItemButton>
              </Link>
              <Divider />
              <Link to="/tuning" style={{ textDecoration: "none" }}>
                <ListItemButton onClick={handleDrawerClose}>
                  <ListItemIcon>Tuning</ListItemIcon>
                </ListItemButton>
              </Link>
              <Divider />
              <Link to="/usedcars" style={{ textDecoration: "none" }}>
                <ListItemButton onClick={handleDrawerClose}>
                  <ListItemIcon>Used Cars</ListItemIcon>
                </ListItemButton>
              </Link>
              <Divider />
              <Link to="/campPlaces" style={{ textDecoration: "none" }}>
                <ListItemButton onClick={handleDrawerClose}>
                  <ListItemIcon>Camping Place</ListItemIcon>
                </ListItemButton>
              </Link>
              <Divider />
            </List>
          </Drawer>
        )}
        <Innerdiv $small>
          {!isVerySmallScreen && isSmallScreen && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Navh1>Camper</Navh1>
        </Innerdiv>

        {/* this one is for full screeen */}
        {!isSmallScreen && (
          <Innerdiv>
            <Navp>
              <Link
                to="/motor"
                style={{ textDecoration: "none", color: "black" }}
              >
                Motor
              </Link>
            </Navp>
            <Navp>
              <Link
                to="/caravan"
                style={{ textDecoration: "none", color: "black" }}
              >
                Caravan
              </Link>
            </Navp>
            <Navp>
              <Link
                to="/tuning"
                style={{ textDecoration: "none", color: "black" }}
              >
                Tuning
              </Link>
            </Navp>
            <Navp>
              <Link
                to="/usedcars"
                style={{ textDecoration: "none", color: "black" }}
              >
                Used Cars
              </Link>
            </Navp>
            <Navp>
              <Link
                to="/campPlaces"
                style={{ textDecoration: "none", color: "black" }}
              >
                Camping Place
              </Link>
            </Navp>
          </Innerdiv>
        )}
        {/* Full screen version */}
        {!isSmallScreen && (
          <Innerdiv>
            <FontAwesomeIcon icon={faCartShopping} />
            <FontAwesomeIcon icon={faUser} />
            <select id="lan">
              <option>ENG</option>
              <option>UZB</option>
              <option>KOR</option>
            </select>
          </Innerdiv>
        )}
        {isVerySmallScreen && isSmallScreen && (
          <Innerdiv $small>
            <FontAwesomeIcon icon={faCartShopping} />
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
          </Innerdiv>
        )}
        {!isVerySmallScreen && isSmallScreen && (
          <Innerdiv $small>
            <FontAwesomeIcon icon={faCartShopping} />
            <FontAwesomeIcon icon={faUser} />
            <select id="lan">
              <option>ENG</option>
              <option>UZB</option>
              <option>KOR</option>
            </select>
          </Innerdiv>
        )}
        {isVerySmallScreen && (
          <Drawer anchor="right" open={openDrawer} onClose={handleDrawerClose}>
            <div>
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>
              <Link to="/motor" style={{ textDecoration: "none" }}>
                <ListItemButton onClick={handleDrawerClose}>
                  <ListItemIcon>Motor</ListItemIcon>
                </ListItemButton>
              </Link>
              <Divider />
              <Link to="/caravan" style={{ textDecoration: "none" }}>
                <ListItemButton onClick={handleDrawerClose}>
                  <ListItemIcon>Caravan</ListItemIcon>
                </ListItemButton>
              </Link>
              <Divider />
              <Link to="/tuning" style={{ textDecoration: "none" }}>
                <ListItemButton onClick={handleDrawerClose}>
                  <ListItemIcon>Tuning</ListItemIcon>
                </ListItemButton>
              </Link>
              <Divider />
              <Link to="/usedcars" style={{ textDecoration: "none" }}>
                <ListItemButton onClick={handleDrawerClose}>
                  <ListItemIcon>Used Cars</ListItemIcon>
                </ListItemButton>
              </Link>
              <Divider />
              <Link to="/campPlaces" style={{ textDecoration: "none" }}>
                <ListItemButton onClick={handleDrawerClose}>
                  <ListItemIcon>Camping Place</ListItemIcon>
                </ListItemButton>
              </Link>
              <Divider />
              {isVerySmallScreen && (
                // <Divider>
                <ListItemButton
                // style={{ border: "1px solid red" }}
                // onClick={handleDrawerClose}
                >
                  <ListItemIcon>
                    <FontAwesomeIcon
                      // style={{ border: "1px solid red" }}
                      icon={faUser}
                    />
                  </ListItemIcon>
                </ListItemButton>
                // </Divider>
              )}
              {isVerySmallScreen && (
                // <Divider>
                <ListItemButton
                // style={{ border: "1px solid red" }}
                // onClick={handleDrawerClose}
                >
                  <ListItemIcon>
                    <select id="lan">
                      <option>ENG</option>
                      <option>UZB</option>
                      <option>KOR</option>
                    </select>
                  </ListItemIcon>
                </ListItemButton>
                // </Divider>
              )}
            </List>
          </Drawer>
        )}
      </Navdiv>
    </div>
  );
};
