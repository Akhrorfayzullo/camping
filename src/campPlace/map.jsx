import React, { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { campcarPlace } from "./campdata";

const KakaoMap = () => {
  let { id } = useParams();
  const data = campcarPlace.maindata;
  const result = data.find((datas) => datas.id === parseInt(id));
  const new_script = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.addEventListener("load", () => {
        resolve();
      });
      script.addEventListener("error", (e) => {
        reject(e);
      });
      document.head.appendChild(script);
    });
  };

  useEffect(() => {
    const my_script = new_script(
      "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=7225b074a5edcbb12217840e1d9ab3f5"
    );
    my_script.then(() => {
      const kakao = window["kakao"];
      kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(
            result.place.location.latitude,
            result.place.location.longitude
          ),
          level: 3,
        };
        const map = new kakao.maps.Map(mapContainer, options);

        const markerPositions = [
          new kakao.maps.LatLng(
            result.place.location.latitude,
            result.place.location.longitude
          ),
        ];

        markerPositions.forEach((position) => {
          const marker = new kakao.maps.Marker({
            position: position,
          });
          marker.setMap(map);
        });
      });
    });
  }, []);

  return (
    <Wrapper>
      <MapContainer>
        <h1>Map</h1>
        <div id="map" className="map" />
      </MapContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 50px;
  margin: 50px 0;
  width: 100%;

  @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;

    padding: 0;
    height: 400px; /* Adjust the height as needed */
  }
`;

const MapContainer = styled.div`
  flex: 1;

  .map {
    flex: 1;
    height: 400px;
    width: 80vw;
  }

  @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;

    h1 {
      margin: 0;
      padding: 0;
    }
  }
`;

export default KakaoMap;
