import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { campcarPlace } from "./campdata";
import Footerr from "../footer/footer";
import camp1 from "../assets/image 11.png";
import camp2 from "../assets/image 12.png";
import camp3 from "../assets/image 13.png";
import styled from "styled-components";
import KakaoMap from "./map";
import {
  faCartShopping,
  faUser,
  faPhoneFlip,
  faLocationDot,
  faClock,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import {
  CampName,
  MapDiv,
  Location,
  FontDiv,
  FontInner,
  Fonth1,
  Flast,
  Desck,
} from "../style";

const CampImagesContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    /* For screens smaller than 768px, display fewer images */
    gap: 5px; /* Reduce the gap between images */
  }

  @media (max-width: 480px) {
    /* For screens smaller than 480px, display even fewer images */
    gap: 5px; /* Reduce the gap further */
    flex-wrap: nowrap; /* Prevent wrapping */
    justify-content: flex-start; /* Start alignment */
    overflow-x: hidden; /* Hide overflow */
    & > img {
      flex-shrink: 0; /* Prevent image from shrinking */
      width: calc(50% - 5px); /* Display two images per row */
      height: auto; /* Auto height */
    }
  }
`;

const CampImage = styled.img`
  height: 150px;
  border-radius: 10px;
`;

export const CampPlaceInfo = () => {
  const campImages = [camp1, camp2, camp3, camp1, camp2, camp3];
  let { id } = useParams();
  const data = campcarPlace.maindata;
  const result = data.find((datas) => datas.id === parseInt(id));
  const campImage = campImages[result.id % campImages.length];

  if (!result) {
    return <div>Camping place not found!</div>;
  }

  return (
    <div>
      <div style={{ margin: "40px 70px 80px" }}>
        <CampImagesContainer>
          {campImages.map((image, index) => (
            <CampImage
              key={index}
              src={image}
              alt={`Camp Image ${index + 1}`}
            />
          ))}
        </CampImagesContainer>
        <MapDiv>
          <CampName>{result.place.name}</CampName>
          <Location $loc>Location</Location>
        </MapDiv>
        <FontDiv>
          <FontInner>
            <Flast>
              <FontAwesomeIcon icon={faLocationDot} />
              <Fonth1>{result.place.locationName}</Fonth1>
            </Flast>
            <Flast>
              <FontAwesomeIcon icon={faPhoneFlip} />
              <Fonth1>005- 862 -8569</Fonth1>
            </Flast>
          </FontInner>
          <FontInner>
            <Flast>
              <FontAwesomeIcon icon={faClock} />
              <Fonth1>from 11:00 to 19:00</Fonth1>
            </Flast>
            <Flast>
              <FontAwesomeIcon icon={faHome} />
              <Fonth1>logo.com</Fonth1>
            </Flast>
          </FontInner>
        </FontDiv>
        <Location $loc>Description</Location>
        <Desck>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien
          senectus feugiat in vitae consequat libero placerat nascetur ultrices.
          Aenean mattis sapien a donec urna, bibendum. Maecenas mattis phasellus
          nunc sed a fringilla risus. Aenean sed fusce pretium sit venenatis
          bibendum convallis commodo enim.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sapien senectus feugiat in vitae
          consequat libero placerat nascetur ultrices. Aenean mattis sapien a
          donec urna, bibendum. Maecenas mattis phasellus nunc sed a fringilla
          risus. Aenean sed fusce pretium sit venenatis bibendum convallis
          commodo enim.
        </Desck>
        <KakaoMap />
        {/* <div>
          <img src={campImage} alt={`Camp Image ${result.id}`} />
          <p>ID: {result.id}</p>
          <p>Location Name: {result.place.locationName}</p>

        </div> */}
      </div>

      <Footerr />
    </div>
  );
};
