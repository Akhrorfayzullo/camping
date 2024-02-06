import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  ImageGrid,
  Img,
  Innerdiv2,
  Innerdivv,
  MulticarDiv,
  Multih1,
  Parallelogram,
  Sdiv,
} from "../style";
import Popupp from "../components/popup/popup";
import Footer from "../footer/footer";

export const Multicar = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div style={{ margin: "0 20px" }}>
      <Carousel responsive={responsive} style={{ margin: "0 200px" }}>
        <MulticarDiv>
          <Img $car1 />
          <Multih1>Knaus</Multih1>
          <Parallelogram>
            <Multih1 $white>Discover the range</Multih1>
          </Parallelogram>
          <Multih1>Choose a model</Multih1>
        </MulticarDiv>
        <MulticarDiv>
          <Img $car2 />
          <Multih1>Knaus</Multih1>
          <Parallelogram>
            <Multih1 $white>Discover the range</Multih1>
          </Parallelogram>
          <Multih1>Choose a model</Multih1>
        </MulticarDiv>
        <MulticarDiv>
          <Img $car3 />
          <Multih1>Knaus</Multih1>
          <Parallelogram>
            <Multih1 $white>Discover the range</Multih1>
          </Parallelogram>
          <Multih1>Choose a model</Multih1>
        </MulticarDiv>
        <MulticarDiv>
          <Img $car4 />
          <Multih1>Knaus</Multih1>
          <Parallelogram>
            <Multih1 $white>Discover the range</Multih1>
          </Parallelogram>
          <Multih1>Choose a model</Multih1>
        </MulticarDiv>
      </Carousel>
      <h1 style={{ textAlign: "center", margin: "50px 0" }}>Videos</h1>
      <ImageGrid>
        <MulticarDiv>
          <Img $im11 />
        </MulticarDiv>
        <MulticarDiv>
          <Img $im12 />
        </MulticarDiv>
        <MulticarDiv>
          <Img $im13 />
        </MulticarDiv>
        <MulticarDiv>
          <Img $im14 />
        </MulticarDiv>
        <MulticarDiv>
          <Img $im21 />
        </MulticarDiv>
        <MulticarDiv>
          <Img $im22 />
        </MulticarDiv>
        <MulticarDiv>
          <Img $im23 />
        </MulticarDiv>
        <MulticarDiv>
          <Img $im24 />
        </MulticarDiv>
      </ImageGrid>
      <h1 style={{ textAlign: "center", margin: "50px 0" }}>Blogs</h1>
      <Sdiv>
        <Innerdivv>
          <h1 style={{ marginBottom: "40px" }}>Camper</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, autem
            praesentium similique ipsam eaque aliquid explicabo numquam illum
            magni eum voluptas assumenda! Commodi laborum vitae aut perferendis
            libero, ipsa minus itaque quidem eaque, excepturi corporis
            laudantium asperiores at facilis delectus?
          </p>
        </Innerdivv>
        <Innerdiv2>
          <ImageGrid>
            <MulticarDiv>
              <Img $im11 />
            </MulticarDiv>
            <MulticarDiv>
              <Img $im12 />
            </MulticarDiv>
            <MulticarDiv>
              <Img $im13 />
            </MulticarDiv>
            <MulticarDiv>
              <Img $im14 />
            </MulticarDiv>
            <MulticarDiv>
              <Img $im21 />
            </MulticarDiv>
            <MulticarDiv>
              <Img $im22 />
            </MulticarDiv>
          </ImageGrid>
        </Innerdiv2>
      </Sdiv>
      <Footer />
    </div>
  );
};
