import React from "react";
import "./SlidingLogos.css";
import logo from "../../../assets/Images/logo.png";
import logo1 from "../../../assets/Images/logo1.png";

function SlidingLogos(props) {
  let images = [
    "../../../assets/Images/logo.png",
    "../../../assets/Images/logo1.png",
  ];
  // for (let i = 0; i < 10; i + 2) {
  //   images[i] = "../../../assets/Images/logo.png";
  //   images[i + 1] = "../../../assets/Images/logo1.png";
  // }

  return (
    <div className="static-container">
      {/* 2. */}
      <div className="animated-container">
        {/* 3 */}
        <div className="img-container">
          <img src="../../../assets/Images/logo.png" />
        </div>
        <div className="img-container">
          <img src="../../../assets/Images/logo.png" />
        </div>
        <div className="img-container">
          <img src="../../../assets/Images/logo.png" />
        </div>
        {/* {images.map((i) => {
          return (
          );
        })} */}
        {/* {images.map((i) => {
          return (
            <div className="img-container">
              <img src={i} />
            </div>
          );
        })} */}
      </div>
    </div>
  );
}

export default SlidingLogos;
