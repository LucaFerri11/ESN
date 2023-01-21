import React, { Component } from "react";
import "./Home.css";
import ReactDOM from "react-dom";
import HerculesTower from "../../assets/Images/HerculesTower.jpg";
import Introduction from "./Introduction/Introduction";
import FlippingCard from "./FlippingCard/FlippingCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Home() {
  return (
    <div className="home">
      <Carousel
        autoPlay
        infiniteLoop
        showArrows
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <Introduction className="introduction" />
        </div>
        <div>
          <div className="flippingCard">
            <h1 className="cardTitle">Join our community with the ESN Card</h1>
            <FlippingCard />
          </div>
        </div>
      </Carousel>

      {/* <img src={HerculesTower} className="firstImg" /> */}
      {/* <Introduction className="introduction" />
      <div className="flippingCard">
        <h1 className="cardTitle">Join our community with the ESN Card</h1>
        <FlippingCard /> */}
      {/* </div> */}
    </div>
  );
}

// ReactDOM.render(<DemoCarousel />, document.querySelector(".demo-carousel"));

export default Home;
