import React from "react";
import { campcar } from "../mockdata";
import { Link } from "react-router-dom";
import {
  Btn,
  BtnDiv,
  Motor2MapD,
  Motor2div,
  MotorInner,
  MotorMapD,
  MotorMapH1,
  Motorg,
} from "../style";
import mot1 from "../assets/motor1.png";
import mot2 from "../assets/motor2.png";
import mot3 from "../assets/motor3.png";
import mot4 from "../assets/motor4.png";

export const Seconndview = () => {
  const motorImages = [mot1, mot3, mot4];
  return (
    <div>
      <Motor2div>
        {campcar.maindata.map((item, index) => (
          <Motor2MapD key={item.id}>
            {/* <Link style={{ textDecoration: "none" }} to={`/motor/${item.id}`}> */}
            <img
              alt="No Image"
              src={motorImages[index % 3]}
              style={{
                height: "140px",
                minWidth: "280px",
              }}
            />
            <MotorInner style={{ margin: "30px" }}>
              <MotorMapH1>{item.car.name}</MotorMapH1>

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
            {/* </Link> */}
          </Motor2MapD>
        ))}
      </Motor2div>
    </div>
  );
};
