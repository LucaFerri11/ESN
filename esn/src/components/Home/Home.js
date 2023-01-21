import React, { Component } from "react";
import "./Home.css";
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
        <div className="slide-container">
          <Introduction />
        </div>
        <div className="slide-container">
          <div className="flippingCard">
            <h1 className="cardTitle">Join our community with the ESN Card</h1>
            <FlippingCard />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Home;
