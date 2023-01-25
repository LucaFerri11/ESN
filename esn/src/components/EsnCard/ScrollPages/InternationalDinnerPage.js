import React from "react";
import {
  Animator,
  ScrollPage,
  batch,
  FadeIn,
  MoveIn,
  Sticky,
} from "react-scroll-motion";
import InternationalDinner from "../../../assets/Images/InternationalDinner.jpeg";

function InternationalDinnerPage() {
  const MoveInTopLeft = batch(Sticky(43, 40), FadeIn(), MoveIn(-1800, -800));
  const MoveInTopRight = batch(Sticky(60, 40), FadeIn(), MoveIn(1800, -800));
  const MoveInBottomRight = batch(Sticky(80, 60), FadeIn(), MoveIn(1800, 800));
  const MoveInBottomLeft = batch(Sticky(40, 60), FadeIn(), MoveIn(-1800, 800));
  const MoveInCenterBottom = batch(Sticky(50, 65), FadeIn(), MoveIn(0, 1000));

  return (
    <ScrollPage>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "25px",
          fontFamily: "Roboto Slab, sans-serif",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Animator animation={MoveInTopLeft}>
            <img
              src={InternationalDinner}
              style={{ width: "40%", borderRadius: "5px" }}
            ></img>
          </Animator>
          <Animator animation={MoveInTopRight}>
            <img
              src={InternationalDinner}
              style={{ width: "40%", borderRadius: "5px" }}
            ></img>
          </Animator>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Animator animation={MoveInBottomRight}>
            <img
              src={InternationalDinner}
              style={{ width: "40%", borderRadius: "5px" }}
            ></img>
          </Animator>
          <Animator animation={MoveInBottomLeft}>
            <img
              src={InternationalDinner}
              style={{ width: "40%", borderRadius: "5px" }}
            ></img>
          </Animator>
        </div>
        <Animator animation={MoveInCenterBottom}>
          <br />
          <span>Like our International Dinner &#8657;</span>
        </Animator>
      </div>
    </ScrollPage>
  );
}

export default InternationalDinnerPage;
