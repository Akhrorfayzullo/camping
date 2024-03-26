import styled from "styled-components";
import car1 from "./assets/car1.png";
import car2 from "./assets/car2.png";
import car3 from "./assets/car3.png";
import car4 from "./assets/car4.png";
import im11 from "./assets/im11.png";
import im12 from "./assets/im12.png";
import im13 from "./assets/im13.png";
import im14 from "./assets/im14.png";
import im21 from "./assets/im21.png";
import im22 from "./assets/im22.png";
import im23 from "./assets/im23.png";
import im24 from "./assets/im24.png";
import cmpinfo from "./assets/camp.png";
import motorback from "./assets/motorB.png";
import reimg from "./assets/reimg.png";
import infocar1 from "./assets/infocar1.png";
import int1 from "./assets/int1.png";
import int2 from "./assets/int2.png";
import int3 from "./assets/int3.png";
import int4 from "./assets/int4.png";
import int5 from "./assets/int5.png";
import infoimg1 from "./assets/carinfo.png";
import camp1 from "./assets/campplace.png";

import campback from "./assets/campback.png";
import mot1 from "./assets/motor1.png";
import mot2 from "./assets/motor2.png";
import mot3 from "./assets/motor3.png";
import mot4 from "./assets/motor4.png";
export const Navh1 = styled.h1`
  color: #006dab;
`;
export const Navdiv = styled.div`
  display: flex;
  padding: ${(props) => (props.$main ? "20px 0" : "0")};
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
`;
export const Innerdiv = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => (props.$small ? "3vw" : "5vw")};
`;
export const Navp = styled.p`
  color: black;
`;
export const Multih1 = styled.h1`
  font-size: 25px;
  font-weight: 300;
  text-align: center;
  color: ${(props) => (props.$white ? "#fff" : "black")};
`;
export const Img = styled.img.attrs((props) => ({
  alt: "no img",
  src: props.$car1
    ? car1
    : props.$car2
    ? car2
    : props.$car3
    ? car3
    : props.$car4
    ? car4
    : props.$im11
    ? im11
    : props.$im12
    ? im12
    : props.$im13
    ? im13
    : props.$im14
    ? im14
    : props.$im21
    ? im21
    : props.$im22
    ? im22
    : props.$im23
    ? im23
    : props.$im24
    ? im24
    : props.$reimg
    ? reimg
    : props.$cmpinfo
    ? cmpinfo
    : props.$infocar1
    ? infocar1
    : props.$int1
    ? int1
    : props.$int2
    ? int2
    : props.$int3
    ? int3
    : props.$int4
    ? int4
    : props.$int5
    ? int5
    : undefined,
}))`
  /* border: 1px solid red; */
  height: ${(props) =>
    props.$reimg ? "100px" : props.$cmpinfo ? "none" : "200px"};
  width: ${(props) =>
    props.$im11 ||
    props.$im12 ||
    props.$im13 ||
    props.$im14 ||
    props.$im21 ||
    props.$im22 ||
    props.$im23 ||
    props.$im24 ||
    props.$im19
      ? "90%"
      : "none"};
  @media screen and (max-width: 1200px) {
    width: ${(props) => (props.$cmpinfo ? "80%" : "none")};
  }
`;

export const Parallelogram = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: #3498db;
  clip-path: polygon(15% 0%, 100% 0, 85% 100%, 0% 100%);
`;
export const MulticarDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid black; */
`;
export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  /* justify-content: center; */
  /* align-items: center; */
  padding: 50px;
  max-width: 1200px;
  margin: 0 auto;
  /* border: 1px solid red; */
  @media (min-width: 1000px) {
    grid-template-columns: ${(props) =>
      props.$sec
        ? "repeat(3, 1fr)"
        : "repeat(4, 1fr)"}; /* Four columns in one row */
  }
  @media (max-width: 425px) {
    gap: 40px;
  }
  /* border: 1px solid red; */
`;

export const Sdiv = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
  }
  /* border: 1px solid black; */
`;
export const Innerdivv = styled.div`
  flex: 1;
  /* border: 1px solid black; */
`;
export const Innerdiv2 = styled.div`
  flex: 3;
  /* border: 1px solid black; */
`;
export const MotorDiv = styled.div`
  background-image: ${(props) =>
    props.$camp ? `url(${camp1})` : `url(${motorback})`};
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 13px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
export const MotorH1 = styled.h1`
  color: #fff;
  font-family: Montserrat;
  font-size: ${(props) =>
    props.$range ? "27px" : props.$title ? "80px" : "16px"};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const MotorMapD = styled.div`
  width: 223px;
  height: 307px;

  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);

  padding: 15px 10px;
  flex-direction: column;
  display: flex;
  align-items: center;
`;
export const MotorMapH1 = styled.h1`
  color: ${(props) => (props.$cost || props.$btn ? "#006DAB" : "#373737")};
  font-family: Montserrat;
  font-size: ${(props) =>
    props.$comp ? "12px" : props.$cost ? "22px" : props.$btn ? "14px" : "16px"};
  font-style: normal;
  font-weight: ${(props) =>
    props.$comp ? "400" : props.$cost || props.$btn ? "700" : "600"};
  line-height: normal;
`;
export const BtnDiv = styled.div`
  width: 100%;
  display: flex;
  /* border: 1px solid yellowgreen; */
  gap: 15px;
`;
export const Btn = styled.button`
  flex: 1;
  height: 35px;
  border-radius: 10px;
  border: 1px solid blue;
  /* btn sh */
  background-color: #fff;
  /* &:hover {
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  } */
`;
export const MotorInner = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  height: 140px;
  /* height: max-content; */
  /* gap: 10px; */
  padding: 0 10px;
  /* gap: 20px; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const Motorg = styled.div`
  display: grid;
  place-items: center;
  /* border: 1px solid firebrick; */
  grid-template-columns: repeat(auto-fill, minmax(223px, 1fr));
  gap: 20px;
`;
export const HeaderDiv = styled.div`
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin: 60px 70px; */
  /* border-bottom: 1px solid rgba(55, 55, 55, 0.50); */
  /* margin-bottom: 15px; */
  padding: 0 50px;
  margin: 60px 0 37px 0;
  /* border-bottom: 1px solid black; */
`;
export const MotWrap = styled.div`
  /* flex: ${(props) => (props.$wrap1 ? "3" : "8")}; */
  width: ${(props) => (props.$wrap1 ? "fit-content" : "100%")};
  margin: ${(props) => (props.$wrap1 ? "60px 30px 0 70px" : "0")};
  /* height: 100%; */
  /* border: 1px solid yellow; */
`;
export const MotorInfo = styled.div`
  /* border: 10px solid darkgoldenrod; */
  /* background-image: url(${motorback}); */
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 13px;
`;
export const Infos = styled.div`
  /* background-image: url(${infoimg1}); */
  /* background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${infoimg1}); */
  background-image: url(${campback});
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
`;
export const BtnWrap = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
`;
export const InfoBtn = styled.button`
  width: 181.5px;
  height: 50.014px;
  border-radius: 10px;
  border: ${(props) => (props.$info ? "2px solid #006dab" : "2px solid #fff")};
  background-color: transparent;
  color: ${(props) => (props.$info ? "#006dab" : "#fff")};
  transition: background 0.3s ease;

  font-family: "Montserrat";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  &:hover {
    background-color: #006dab;
    border: 2px solid #006dab;
    color: #fff; /*
     Change to blue on hover */
  }
`;
export const InfoMain = styled.div`
  background-color: #fafafa;
  display: grid;
  width: auto;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 20px;
    & > div:nth-child(2) {
      order: -1;
      margin-top: 80px;
      /* background-color: red; */
    }

    & > div:nth-child(1) {
      order: 2;
    }

    & > div:nth-child(3) {
      order: 3;
    }

    & > div:nth-child(4) {
      order: 4;
    }

    & > div:nth-child(5) {
      order: 6;
    }

    & > div:nth-child(6) {
      order: 5;
    }

    & > div:nth-child(7),
    & > div:nth-child(8) {
      order: 7;
    }
    & > div:nth-child(9) {
      order: 10;
    }
    & > div:nth-child(10) {
      order: 9;
    }
  }
`;
export const Divchala = styled.div`
  /* max-width: 683px; */
  display: flex;
  justify-content: center;
  /* align-items: flex-start; */
  height: 70vh;
  width: 49.3vw;
  /* background-color: greenyellow; */
  /* border: 2px solid black; */
  @media screen and (max-width: 1200px) {
    height: fit-content;

    /* Change to a single column on smaller screens */
  }
  /* align-self: center; */
`;
export const Infoimg = styled.img.attrs((props) => ({
  alt: "no img",
  src: props.$car1
    ? car1
    : props.$infocar1
    ? infocar1
    : props.$int1
    ? int1
    : props.$int2
    ? int2
    : props.$int3
    ? int3
    : props.$int4
    ? int4
    : props.$int5
    ? int5
    : undefined,
}))`
  height: 100%;
  width: 50vw;
  /* border: 4px solid saddlebrown; */

  @media screen and (max-width: 1200px) {
    width: 80%;
    border-radius: 10px;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      url(<path-to-image>), lightgray 50% / cover no-repeat; /* Change to a single column on smaller screens */
  }
`;
export const Infoh1 = styled.h1`
  color: #373737;
  font-family: Montserrat;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 20px;
`;
export const InfoP = styled.p`
  color: #373737;
  width: 534px;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;
export const InfoSDiv = styled.div`
  /* border: 1px solid red;~ */
  width: 100%;
  margin: 100px 70px 0 80px;
  @media screen and (max-width: 1200px) {
    width: 80%;
    margin: 40px 0 80px; /* Change to a single column on smaller screens */
  }
`;
export const SideMain = styled.div`
  /* border: 1px solid red; */
  /* width: fit-content; */
  width: 240px;
  display: flex;
  flex-direction: column;
  /* gap: 40px; */
  /* height: 100%; */
`;
export const Costh1 = styled.h1`
  color: #373737;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  border-bottom: 1px solid rgba(55, 55, 55, 0.5);
  margin-bottom: 15px;
`;
export const ReviewD = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid red; */

  margin-bottom: 50px;
`;
export const Reviewh1 = styled.h1`
  color: ${(props) => (props.$num ? "#006DAB" : "#373737")};
  font-family: Montserrat;
  font-size: 20px;

  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-right: 5px;
`;
export const SimpleD = styled.div`
  display: flex;
`;
export const ImgDiv = styled.div`
  width: fit-content;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 50px solid red; */
`;
export const Reeinfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 15px;
  margin-right: ${(props) => (props.$right ? "100px" : "none")};
  /* border: 1px solid red; */
  height: 100%;
  gap: 10px;
`;
export const ReH1 = styled.h1`
  color: #373737;
  margin-bottom: 10px;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const LeftText = styled.h1`
  color: ${(props) => (props.$dark ? "#373737" : "rgba(55, 55, 55, 0.7)")};
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  align-self: center;
`;
export const InoneLine = styled.div`
  display: flex;
`;
export const Questionh1 = styled.h1`
  color: #023047;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 31.2px */
`;
export const DataD = styled.div`
  background-color: #fafafa;
  display: grid;
  width: auto;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const DataInner = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  margin: 0 0px 70px;
  display: flex;
  justify-content: ${(props) => (props.$info ? "none" : "center")};
  align-items: center;
  @media screen and (max-width: 1200px) {
    justify-content: center;
  }
  /* height: 200px; */
`;
export const Vaqtincha = styled.div`
  max-width: 600px;
  width: 100%;
  height: 360px;
  background-color: #fff;
  padding: 30px 20px 0;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
`;
export const InfoInner = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  gap: 10px;
  padding-bottom: 10px;
  /* border: 1px solid blanchedalmond; */
  border-bottom: 1px solid rgba(55, 55, 55, 0.3);
`;
export const Aidal = styled.h1`
  color: ${(props) => (props.$price ? "#006DAB" : "#000")};
  font-family: Montserrat;
  font-size: ${(props) =>
    props.$price ? "#30px" : props.$comp ? "18px" : "#25px"};
  font-style: normal;
  font-weight: ${(props) => (props.$comp ? "400" : "700")};
  line-height: normal;
`;
export const AidalWrap = styled.div`
  display: flex;
  /* border: 1px solid blanchedalmond; */
  margin-right: ${(props) => (props.$info ? "30%" : "none")};
  justify-content: space-between;
`;
export const FullInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 5px;
  margin-top: 15px;
  /* border: 1px solid red; */
`;
export const FullInfoH1 = styled.div`
  color: ${(props) => (props.$info ? "rgba(55, 55, 55, 0.80)" : "#373737")};
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: ${(props) => (props.$info ? "400" : "500")};
  line-height: normal;
`;
export const ParkName = styled.h1`
  color: #373737;
  font-family: Montserrat;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const Location = styled.h1`
  color: ${(props) => (props.$loc ? "#006DAB" : "#373737")};
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const MapDiv = styled.div`
  border-bottom: 1px solid rgba(55, 55, 55, 0.2);
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 0;
  margin-bottom: 20px;
`;
export const CampName = styled.h1`
  color: #000;
  font-family: Montserrat;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const FontDiv = styled.div`
  display: flex;
  /* border: 1px solid red; */
  margin-bottom: 20px;
  gap: 100px;
`;
export const FontInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  /* border: 1px solid yellow; */
`;
export const Fonth1 = styled.h1`
  color: #373737;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 10px;
`;
export const Flast = styled.div`
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
`;
export const Desck = styled.h1`
  color: #373737;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 15px;
`;
