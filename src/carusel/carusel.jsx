import React from "react";
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/lake.jpg";
import img2 from "../assets/sunset.jpg";
import img3 from "../assets/img (31).webp";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Navbar } from "../components/navbar";

export const Carusel = () => {
  return (
    <div>
      <Navbar />
      <Carousel
        showArrows={true}
        showStatus={false}
        infiniteLoop={true}
        showThumbs={false}
        useKeyboardArrows={true}
        autoPlay={true}
        interval={3000}
        axis={"vertical"}
      >
        <div>
          <img src={img1} alt="no" style={{ height: "525px" }} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={img2} alt="no" style={{ height: "525px" }} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={img3} alt="no" style={{ height: "525px" }} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
      <h1 style={{ textAlign: "center", margin: "50px 0" }}>Recommend</h1>
      {/* <Navbar /> */}
    </div>
  );
};
