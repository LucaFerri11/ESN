import React from "react";
import "./EsnCard.css";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  Sticky,
  ZoomOut,
} from "react-scroll-motion";
import SpinningGlobe from "../../assets/Images/SpinningGlobe.gif";
import CardPage from "./ScrollPages/CardPage";
import RyanairPage from "./ScrollPages/RyanairPage";
import InternationalDinnerPage from "./ScrollPages/InternationalDinnerPage";

function EsnCard() {
  const ZoomInScrollOut = batch(Sticky(), Fade(), ZoomOut(1, 4));

  return (
    // <div className="container-scroll">
    <ScrollContainer>
      <CardPage />
      <ScrollPage>
        <Animator animation={ZoomInScrollOut}>
          <span
            style={{
              fontSize: "20px",
              fontFamily: "Roboto Slab, sans-serif",
            }}
          >
            Why would I need it? &#129300;
          </span>
        </Animator>
      </ScrollPage>
      <RyanairPage />
      <ScrollPage>
        <Animator animation={ZoomInScrollOut}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "20px",
              fontFamily: "Roboto Slab, sans-serif",
              fontWeight: "bold",
            }}
          >
            <img src={SpinningGlobe} style={{ width: "5%" }} />
            &nbsp; Cultural Exchange Events &nbsp;
            <img src={SpinningGlobe} style={{ width: "5%" }} />
          </div>
        </Animator>
      </ScrollPage>
      <InternationalDinnerPage />
    </ScrollContainer>
    // </div>
  );
}

export default EsnCard;
