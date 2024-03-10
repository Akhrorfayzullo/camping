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
  Infoimg,
  InfoSDiv,
  InfoP,
  Infoh1,
} from "../style";
import TabsWrappedLabel from "./tabs";

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
        <Divchala>
          <InfoSDiv>
            <Infoh1>Comfort</Infoh1>
            <InfoP>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum
              nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis
              risus, id in proin sed proin iaculis mi. Turpis ac ut metus, amet,
              pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh
              urna sagittis arcu natoque lectus cursus felis. Nec, felis risus,
              id in proin sed proin iaculis mi.
            </InfoP>
          </InfoSDiv>
        </Divchala>
        <Divchala>
          <Infoimg $int1 />
        </Divchala>
        <Divchala>
          <Infoimg $int2 />
        </Divchala>
        <Divchala>
          <InfoSDiv>
            <Infoh1>Tidying away is child’s play!</Infoh1>
            <InfoP>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum
              nibh urna sagittis arcu natoque lectus cursus felis. Nec, felis
              risus, id in proin sed proin iaculis mi. Turpis ac ut metus, amet,
              pulvinar. Eget amet dictum luctus quis molestie tellus vitae.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Rutrum nibh
              urna sagittis arcu natoque lectus cursus felis. Nec, felis risus,
              id in proin sed proin iaculis mi.
            </InfoP>
          </InfoSDiv>
        </Divchala>
        <Divchala>
          <InfoSDiv>
            <Infoh1>Ventilated , Lit up</Infoh1>
            <InfoP>
              In our vans and motorhomes, all our body lighting is 100% LED: a
              guarantee of energy efficiency and durability. As for ventilation,
              we also often offer double ventilation in the bathroom (Skylight +
              window), which is very popular with our customers… Camper relies
              on legendary Seitz windows. They offer the best insulation and are
              also the easiest to use and safest because they can’t be removed
              from the outside.
            </InfoP>
          </InfoSDiv>
        </Divchala>
        <Divchala>
          <Infoimg $int3 />
        </Divchala>
        <Divchala>
          <Infoimg $int4 />
        </Divchala>
        <Divchala>
          <InfoSDiv>
            <Infoh1>Easy access</Infoh1>
            <InfoP>
              We add little touches that your joints will thank you for… All our
              motorhomes are equipped with a built-in step to facilitate entry
              to the vehicle All our vans are equipped with an electric step.
            </InfoP>
          </InfoSDiv>
        </Divchala>
        <Divchala>
          <InfoSDiv>
            <Infoh1>Heating when driving</Infoh1>
            <InfoP>
              Fuel heating is now very popular in the industry, but this was not
              always the case; Camper (once again) led the way in this area over
              15 years ago. One of the advantages it offers is that it can heat
              up your vehicle while you drive, for a more comfortable arrival.
            </InfoP>
            <BtnWrap>
              <InfoBtn $info>ADD TO CART</InfoBtn>
              <InfoBtn $info>COMPARE</InfoBtn>
            </BtnWrap>
          </InfoSDiv>
        </Divchala>
        <Divchala>
          <Infoimg $int5 />
        </Divchala>
      </InfoMain>
      {/* <LabTabs /> */}
      {/* <TabPanel /> */}
      {/* <FullWidthTabs /> */}
      <TabsWrappedLabel />
      {/* <Motorinfo>dfrfr</Motorinfo> */}
      <div>Motor info {id}</div>
      <div>{result.car.company}</div>
      <div>{result.car.cost}</div>
    </div>
  );
};
