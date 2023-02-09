import React from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  Sticky,
  ZoomOut,
} from "react-scroll-motion";
import SpinningGlobe from "../../../assets/Images/SpinningGlobe.gif";
import CardPage from "./ScrollPages/CardPage";
import RyanairPage from "./ScrollPages/RyanairPage";
import InternationalDinnerPage from "./ScrollPages/InternationalDinnerPage/InternationalDinnerPage";
import ConditionsPage from "./ScrollPages/ConditionsPage/ConditionsPage";

function EsnCard(props) {
  const ZoomInScrollOut = batch(Sticky(), Fade(), ZoomOut(1, 2.5));

  return (
    <ScrollContainer snap="mandatory" style={{ color: "white" }}>
      <CardPage />
      <ScrollPage>
        <Animator animation={ZoomInScrollOut}>
          <span
            style={{
              fontSize: "2.5rem",
              fontFamily: "Roboto Slab, sans-serif",
            }}
          >
            Why would you need it? &#129300;
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
              fontSize: "2.5rem",
              fontFamily: "Roboto Slab, sans-serif",
              fontWeight: "bold",
            }}
          >
            <img src={SpinningGlobe} style={{ width: "9%" }} />
            &nbsp;
            <span> Cultural Exchange Events </span>
            &nbsp;
            <img src={SpinningGlobe} style={{ width: "9%" }} />
          </div>
        </Animator>
      </ScrollPage>
      <InternationalDinnerPage />
      <ConditionsPage onClick={props.onClick} />
    </ScrollContainer>
  );
}

export default EsnCard;
