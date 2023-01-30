import React from "react";
import "./Introduction.css";

function Introduction() {
  return (
    <div className="introduction">
      <h1 className="title">Welcome to the best experience of your life!</h1>
      <div className="counters">
        <div className="counterBlock">
          <h1>
            <span>500+</span>
          </h1>
          <h5 className="counterTitle">Erasmus Every Year</h5>
        </div>
        <div className="counterBlock">
          <h1>
            <span>30+</span>
          </h1>
          <h5 className="counterTitle">Different Nations</h5>
        </div>
        <div className="counterBlock">
          <h1>
            <span>&#x221e;</span>
          </h1>
          <h5 className="counterTitle">Magic Moments</h5>
        </div>
      </div>
      <div className="counters-second">
        <div className="counterBlock">
          <h1>
            <span>Much more is waiting for you</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
