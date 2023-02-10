import React from "react";
import "./SlidingLogos.css";
import logo from "../../../assets/Images/logonvidia.png";
import logo1 from "../../../assets/Images/logo1.png";
import { Tooltip, tooltipClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

function SlidingLogos(props) {
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
  ))(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
      color: "white",
      maxWidth: "22rem",
      fontSize: "1.6rem",
      border: "1px solid #dadde9",
    },
  }));

  return (
    <div className="static-container">
      <div className="animated-container">
        {images.map((i) => {
          return (
            <div className="img-container">
              <HtmlTooltip
                title={
                  <React.Fragment>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img src={i} style={{ width: "50%" }} />
                      <span style={{ marginLeft: "1rem" }}>
                        Come to see our bird collection from all different part
                        of the world
                      </span>
                    </div>
                  </React.Fragment>
                }
              >
                <a href="http://google.com" target="_blank">
                  <img src={i} style={{ width: "4.4rem" }} />
                </a>
              </HtmlTooltip>
            </div>
          );
        })}
        {images.map((i) => {
          return (
            <div className="img-container">
              <HtmlTooltip
                title={
                  <React.Fragment>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img src={i} style={{ width: "50%" }} />
                      <span style={{ marginLeft: "1rem" }}>
                        Come to see our bird collection from all different part
                        of the world
                      </span>
                    </div>
                  </React.Fragment>
                }
              >
                <a href="http://google.com" target="_blank">
                  <img src={i} style={{ width: "4.4rem" }} />
                </a>
              </HtmlTooltip>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SlidingLogos;
