import React, { useState } from "react";
import "./SlidingLogos.css";
import logo from "../../../assets/Images/logo.png";
import logo1 from "../../../assets/Images/logo1.png";
import { Tooltip, tooltipClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

function SlidingLogos(props) {
  const [onHover, setOnHover] = useState(false);
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

  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
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
      <div className="animated-container">
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
                <img
                  src={i}
                  style={{ width: "6.5vh" }}
                  onMouseLeave={() => setOnHover(false)}
                />
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
