import * as React from "react";
import { ParkName, Location } from "../style";
import { Link } from "react-router-dom";

import { campcarPlace } from "./campdata";
import camp1 from "../assets/image 11.png";
import camp2 from "../assets/image 12.png";
import camp3 from "../assets/image 13.png";

import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Card = styled.div`
  width: 395px;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 20px;
  flex-grow: 1;
  max-width: calc(25% - 20px); /* 4 cards per row with gap */
  @media (max-width: 1300px) {
    max-width: calc(33.333% - 20px); /* 3 cards per row with gap */
  }
  @media (max-width: 1000px) {
    max-width: calc(50% - 20px); /* 2 cards per row with gap */
  }
  @media (max-width: 600px) {
    max-width: calc(100% - 20px); /* 1 card per row with gap */
  }
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
`;

const Details = styled.div`
  padding: 15px 0 0 0;
`;

const CampingCards = () => {
  const campImages = [camp1, camp2, camp3];
  return (
    <CardContainer style={{ margin: "80px 70px" }}>
      {campcarPlace.maindata.map((item, index) => (
        <Card key={item.id}>
          <Link
            style={{ textDecoration: "none" }}
            to={`/campPlaces/${item.id}`}
          >
            <Image src={campImages[index % 3]} alt={item.place.name} />
            <Details>
              <ParkName>{item.place.name}</ParkName>
              <Location>{item.place.locationName}</Location>
            </Details>
          </Link>
        </Card>
      ))}
    </CardContainer>
  );
};

export default CampingCards;
