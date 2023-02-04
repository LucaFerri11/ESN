import React, { useState } from "react";
import "./SlidingLogos.css";
import logo from "../../../assets/Images/logonvidia.png";
import logo1 from "../../../assets/Images/logo1.png";
import { Tooltip, tooltipClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

function SlidingLogos(props) {
  // const [scrollPosition, setScrollPosition] = useState(0);
  let images = [
    logo,
    logo1,
    logo,
    logo1,
    logo,
    logo1,
    logo,
    logo1,
    logo,
    logo1,
    logo,
    logo1,
    logo,
    logo1,
    logo,
    logo1,
    logo,
    logo1,
    logo,
    logo1,
    logo,
    logo1,
    logo,
    logo1,
  ];

  // const getScrollPosition = () => {
  //   const animatedContainer = document.getElementById("animated-scroll");
  //   console.log(animatedContainer.scrollLeft);
  // };

  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
      // backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 220,
      fontFamily: "Roboto Slab, sans-serif",
      fontSize: "0.5rem",
      border: "1px solid #dadde9",
    },
  }));

  return (
    <div className="static-container">
      {/* 2. */}
      <div
        className="animated-container"
        // style={{ "--first-left-value": `${scrollPosition}s` }}
        // onMouseLeave={getScrollPosition}
        // id="animated-scroll"
      >
        {/* 3 */}
        {images.map((i) => {
          return (
            <div className="img-container">
              <HtmlTooltip
                title={
                  <React.Fragment>
                    <div
                      style={{
                        display: "flex",
                        flexOrientation: "row",
                        alignItems: "center",
                      }}
                    >
                      <img src={i} style={{ width: "50%" }} />
                      <h1 style={{ marginLeft: "10px" }}>Migliori Panini</h1>
                    </div>
                  </React.Fragment>
                }
              >
                <img src={i} style={{ width: "6.5vh" }} />
              </HtmlTooltip>
            </div>
          );
        })}
        {images.map((i) => {
          return (
            <div className="img-container">
              <img src={i} style={{ width: "6.5vh" }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SlidingLogos;
