import React from "react";
import { campcar } from "../mockdata";
import { Link } from "react-router-dom";
import {
  Btn,
  BtnDiv,
  MotorInner,
  MotorMapD,
  MotorMapH1,
  Motorg,
} from "../style";
import mot1 from "../assets/motor1.png";
import mot2 from "../assets/motor2.png";
import mot3 from "../assets/motor3.png";
import mot4 from "../assets/motor4.png";
export const Motormap = () => {
  const motorImages = [mot1, mot3, mot4];
  return (
    <div>
      <Motorg style={{ margin: "0 70px 60px" }}>
        {campcar.maindata.map((item, index) => (
          <MotorMapD key={item.id}>
            <img alt="No Image" src={motorImages[index % 3]} />
            <MotorInner>
              <Link style={{ textDecoration: "none" }} to={`/motor/${item.id}`}>
                <MotorMapH1>{item.car.name}</MotorMapH1>
              </Link>
              <MotorMapH1 $comp={true}>{item.car.company}</MotorMapH1>
              <MotorMapH1 $cost>{item.car.cost}</MotorMapH1>
              <BtnDiv>
                <Btn>
                  <MotorMapH1 $btn>Order</MotorMapH1>
                </Btn>
                <Btn>
                  <MotorMapH1 $btn>Compare</MotorMapH1>
                </Btn>
              </BtnDiv>
            </MotorInner>
          </MotorMapD>
        ))}
      </Motorg>
    </div>
  );
};
