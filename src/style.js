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
import motorback from "./assets/motorB.png";
import infocar1 from "./assets/infocar1.png";
import int1 from "./assets/int1.png";
import int2 from "./assets/int2.png";
import int3 from "./assets/int3.png";
import int4 from "./assets/int4.png";
import int5 from "./assets/int5.png";
import infoimg1 from "./assets/carinfo.png";
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
  align-items: center;
  justify-content: space-around;
`;
export const Innerdiv = styled.div`
  display: flex;
  gap: 5vw;
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
  height: 200px;
`;

export const MulticarDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid black; */
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
export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px; /* 10px gap on each side of the image (20px total) */
  justify-content: center;
  align-items: center;
  padding: 10px;
  /* border: 1px solid red; */
`;
export const Sdiv = styled.div`
  display: flex;
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
  /* border: 10px solid darkgoldenrod; */
  background-image: url(${motorback});
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 13px;
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
  /* border: 1px solid red; */
  padding: 15px 0px;
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
  height: 100%;
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
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;
export const HeaderDiv = styled.div`
  /* border: 1px solid black; */
  margin: 60px 0 37px 0;
  /* border-bottom: 1px solid black; */
`;
export const MotWrap = styled.div`
  flex: ${(props) => (props.$wrap1 ? "1" : "4")};
  border: 10px solid black;
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
  border: 2px solid #fff;
  background-color: transparent;
  color: #fff;
  transition: background 0.3s ease;

  font-family: "Montserrat";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  &:hover {
    background-color: #006dab;
    border: 2px solid #006dab; /*
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
    grid-template-columns: 1fr; /* Change to a single column on smaller screens */
  }
`;
export const Divchala = styled.div`
  /* max-width: 683px; */
  height: 477px;
  background-color: greenyellow;
  border: 2px solid black;
  /* align-self: center; */
`;
