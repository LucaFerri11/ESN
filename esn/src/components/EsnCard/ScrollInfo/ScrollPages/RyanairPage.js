import React from "react";
import {
  Animator,
  ScrollPage,
  batch,
  FadeIn,
  FadeOut,
  MoveIn,
  Sticky,
  MoveOut,
} from "react-scroll-motion";
import Ryanair from "../../../../assets/Images/Ryanair.png";

function RyanairPage() {
  const MoveInBottomRight = batch(
    Sticky(40, 40),
    FadeIn(),
    MoveIn(1800, 800),
    MoveOut(-1000, -800),
    FadeOut(0.8, 0)
  );
  const MoveInCenterRight = batch(
    Sticky(55, 54),
    FadeIn(),
    MoveIn(1800, 0),
    MoveOut(-2500, 0),
    FadeOut(1, 0)
  );

  return (
    <ScrollPage>
      <Animator animation={MoveInBottomRight}>
        <img src={Ryanair} style={{ width: "45%" }} />
      </Animator>
      <Animator animation={MoveInCenterRight}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "1.7rem",
            fontFamily: "Roboto Slab, sans-serif",
            fontWeight: "bold",
            letterSpacing: ".15rem",
          }}
        >
          <span>Ryanair 10% discount on European flights</span>
          <span>the possibility of adding a 20kg suitcase &#129523;</span>
          <span style={{ marginLeft: "40px" }}>
            ...and many more in thousands of stores
          </span>
        </div>
      </Animator>
    </ScrollPage>
  );
}

export default RyanairPage;
