import React, { useState } from "react";
import "./FlippingCard.css";
import { Link } from "react-router-dom";
import EsnCard from "../../../assets/Images/EsnCard.png";

function FlippingCard() {
  return (
    <Link class="flip-box" to={"/esncard"}>
      <div class="flip-box-inner">
        <div class="flip-box-front">
          <img src={EsnCard} className="esncard" />
        </div>
        <div class="flip-box-back">
          <div className="esncardInfo">
            <h2>&#9733; Discounts</h2>
            <h2>&#9733; Events</h2>
            <h2>...and way more</h2>
            <h1>Click to discover more!</h1>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default FlippingCard;
