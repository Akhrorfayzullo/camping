import React from "react";
import { useParams } from "react-router-dom";
import { campcar } from "../mockdata";
import {
  Infos,
  MotorInfo,
  MotorH1,
  BtnWrap,
  InfoBtn,
  InfoMain,
  Divchala,
} from "../style";

export const Motorinfo = () => {
  let { id } = useParams();
  const data = campcar.maindata;
  const result = data.find((datas) => datas.id === parseInt(id));
  //   console.log(data);
  return (
    <div>
      {/* <Motorinfo></Motorinfo> */}
      <Infos>
        <MotorH1 $title>{result.car.name}</MotorH1>
        <BtnWrap>
          <InfoBtn>ADD TO CART</InfoBtn>
          <InfoBtn>COMPARE</InfoBtn>
        </BtnWrap>
      </Infos>
      <InfoMain>
        <Divchala>vrrv</Divchala>
        <Divchala>vrrv</Divchala>
        <Divchala>vrrv</Divchala>
        <Divchala>vrrv</Divchala>
        <Divchala>vrrv</Divchala>
        <Divchala>vrrv</Divchala>
        <Divchala>vrrv</Divchala>
        <Divchala>vrrv</Divchala>
      </InfoMain>
      {/* <Motorinfo>dfrfr</Motorinfo> */}
      <div>Motor info {id}</div>
      <div>{result.car.company}</div>
      <div>{result.car.cost}</div>
    </div>
  );
};
