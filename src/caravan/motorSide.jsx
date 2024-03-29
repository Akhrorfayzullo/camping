import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { BtnDiv, Costh1, SideMain, BtnWrap, InfoBtn } from "../style";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const MotorSide = () => {
  return (
    <div>
      <SideMain>
        <div>
          <Costh1>Cost of car</Costh1>
          <BtnDiv>
            <TextField
              sx={{
                borderRadius: "50px",
                height: "36px",
                "& .MuiInputBase-root": {
                  borderRadius: "50px",
                  height: "36px", // Adjust the input base root styling if needed
                },
              }}
              id="outlined-search"
              label="From"
              type="search"
            />
            <TextField
              sx={{
                borderRadius: "50px",
                height: "36px",
                "& .MuiInputBase-root": {
                  borderRadius: "50px",
                  height: "36px", // Adjust the input base root styling if needed
                },
              }}
              id="outlined-search"
              label="To"
              type="search"
            />
          </BtnDiv>
        </div>

        <Accordion
          defaultExpanded
          style={{ boxShadow: "none", border: "none" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            style={{ boxShadow: "none", border: "none", paddingBottom: "0" }}
          >
            <Costh1 style={{ width: "100%" }}>Brand</Costh1>
          </AccordionSummary>
          <AccordionDetails
            style={{ boxShadow: "none", border: "none", paddingBottom: "0" }}
          >
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Aidal"
              />
              <FormControlLabel control={<Checkbox />} label="Knal" />
              <FormControlLabel control={<Checkbox />} label="escape" />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
        <Accordion
          defaultExpanded
          style={{ boxShadow: "none", border: "none" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            style={{ boxShadow: "none", border: "none" }}
          >
            <Costh1 style={{ width: "100%" }}>Company</Costh1>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Aidal" />
              <FormControlLabel control={<Checkbox />} label="Knal" />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
        <Accordion
          defaultExpanded
          style={{ boxShadow: "none", border: "none" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            style={{ boxShadow: "none", border: "none", paddingBottom: "0" }}
          >
            <Costh1 style={{ width: "100%" }}>License type</Costh1>
          </AccordionSummary>
          <AccordionDetails
            style={{ boxShadow: "none", border: "none", paddingBottom: "0" }}
          >
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="1 year"
              />
              <FormControlLabel control={<Checkbox />} label="2 year" />
              <FormControlLabel control={<Checkbox />} label="1.5year" />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
        <Accordion
          defaultExpanded
          style={{ boxShadow: "none", border: "none" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            style={{ boxShadow: "none", border: "none", paddingBottom: "0" }}
          >
            <Costh1 style={{ width: "100%" }}>License type</Costh1>
          </AccordionSummary>
          <AccordionDetails
            style={{ boxShadow: "none", border: "none", paddingBottom: "0" }}
          >
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="1 year"
              />
              <FormControlLabel control={<Checkbox />} label="2 year" />
              <FormControlLabel control={<Checkbox />} label="1.5year" />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
        <Accordion
          defaultExpanded
          style={{ boxShadow: "none", border: "none" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            style={{ boxShadow: "none", border: "none", paddingBottom: "0" }}
          >
            <Costh1 style={{ width: "100%" }}>Number of travelers</Costh1>
          </AccordionSummary>
          <AccordionDetails
            style={{ boxShadow: "none", border: "none", paddingBottom: "0" }}
          >
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="2"
              />
              <FormControlLabel control={<Checkbox />} label="3-4" />
              <FormControlLabel control={<Checkbox />} label="5+" />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
        <Accordion
          defaultExpanded
          style={{ boxShadow: "none", border: "none" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            style={{ boxShadow: "none", border: "none", paddingBottom: "0" }}
          >
            <Costh1 style={{ width: "100%" }}>Location</Costh1>
          </AccordionSummary>
          <AccordionDetails
            style={{ boxShadow: "none", border: "none", paddingBottom: "0" }}
          >
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Seoul"
              />
              <FormControlLabel control={<Checkbox />} label="Deajon" />
              <FormControlLabel control={<Checkbox />} label="Pusan" />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
        <BtnWrap>
          <InfoBtn $side>ADD TO CART</InfoBtn>
          <InfoBtn $side1>COMPARE</InfoBtn>
        </BtnWrap>
      </SideMain>
    </div>
  );
};
