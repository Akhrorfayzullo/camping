import * as React from "react";

import { campcarPlace } from "./campdata";

import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Card = styled.div`
  width: 395px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
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
`;

const Details = styled.div`
  padding: 20px;
`;

const ParkName = styled.h2`
  margin: 0;
`;

const Location = styled.p`
  margin: 5px 0;
`;

const CampingCards = () => {
  return (
    <CardContainer style={{ margin: "80px 70px" }}>
      {campcarPlace.maindata.map((item, index) => (
        <Card key={item.id}>
          <Image src={item.place.photo} alt={item.place.name} />
          <Details>
            <ParkName>{item.place.name}</ParkName>
            <Location>{item.place.location}</Location>
          </Details>
        </Card>
      ))}
    </CardContainer>
  );
};

export default CampingCards;
