import React, { useState } from "react";
import { campcar } from "/hotelreact/camping/src/mockdata";
import {
  ReviewD,
  Reviewh1,
  SimpleD,
  Img,
  ImgDiv,
  Reeinfo,
  InfoP,
  Infoh1,
  ReH1,
  LeftText,
  InoneLine,
} from "../../style";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

// import { Diversity1TwoTone } from "@mui/icons-material";

export const Review = () => {
  const [sortBy, setSortBy] = useState("mostExpensive");

  const sortCars = () => {
    const cars = campcar.maindata;
    if (sortBy === "mostExpensive") {
      return cars
        .slice()
        .sort(
          (a, b) =>
            parseInt(b.car.cost.replace(/,/g, "")) -
            parseInt(a.car.cost.replace(/,/g, ""))
        )
        .slice(0, 6);
    } else {
      return cars
        .slice()
        .sort(
          (a, b) =>
            parseInt(a.car.cost.replace(/,/g, "")) -
            parseInt(b.car.cost.replace(/,/g, ""))
        )
        .slice(0, 6);
    }
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#FAFAFA",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: theme.palette.text.secondary,
  }));

  return (
    <div style={{ backgroundColor: "#FAFAFA" }}>
      <ReviewD>
        <SimpleD>
          <Reviewh1>Premium Review </Reviewh1>
          <Reviewh1 $num> 6</Reviewh1>
        </SimpleD>
        <Box sx={{ width: "200px", marginRight: "15px" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sort</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sortBy}
              label="Age"
              onChange={handleSortChange}
            >
              <MenuItem value="cheapest">cheapest</MenuItem>
              <MenuItem value="mostExpensive">Most Expensive</MenuItem>
              {/* <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
          </FormControl>
        </Box>
      </ReviewD>

      {sortCars().map((car, index) => (
        <Box key={index} sx={{ width: "100%" }}>
          <Stack spacing={2}>
            <Item>
              <ImgDiv>
                <Img $reimg />
                <Reeinfo>
                  <ReH1>{car.car.name}</ReH1>
                  <InfoP>{car.car.cost}</InfoP>
                  <InfoP>{car.car.company}</InfoP>
                </Reeinfo>
              </ImgDiv>
              <Reeinfo $right>
                <InoneLine>
                  <LeftText>ID:</LeftText>
                  <LeftText $dark>{car.id}</LeftText>
                </InoneLine>
                <InoneLine>
                  <LeftText>Date:</LeftText>
                  <LeftText $dark>{car.car.date}</LeftText>
                </InoneLine>
                <InoneLine>
                  <LeftText>Location:</LeftText>
                  <LeftText $dark>{car.car.location}</LeftText>
                </InoneLine>
              </Reeinfo>
            </Item>
          </Stack>
        </Box>
      ))}
    </div>
  );
};
