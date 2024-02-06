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
  border: 1px solid red;
`;
export const Sdiv = styled.div`
  display: flex;
  border: 1px solid black;
`;
export const Innerdivv = styled.div`
  flex: 1;
  border: 1px solid black;
`;
export const Innerdiv2 = styled.div`
  flex: 3;
  border: 1px solid black;
`;
