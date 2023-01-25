import React from "react";
import {
  Animator,
  ScrollPage,
  batch,
  FadeIn,
  FadeOut,
  MoveIn,
  Sticky,
} from "react-scroll-motion";
import Ryanair from "../../../assets/Images/Ryanair.png";

function RyanairPage() {
  const MoveInBottomRight = batch(Sticky(40, 40), FadeIn(), MoveIn(1800, 800));
  const MoveInCenterRight = batch(Sticky(), FadeIn(), MoveIn(1800, 0));
  const MoveInMiddleLowRight = batch(Sticky(60, 58), FadeIn(), MoveIn(1800, 0));

  return (
    <ScrollPage>
      <Animator animation={FadeOut(1, 0)}>
        <Animator animation={MoveInBottomRight}>
          <img src={Ryanair} style={{ width: "45%" }} />
        </Animator>
        <Animator animation={MoveInCenterRight}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "25px",
              fontFamily: "Roboto Slab, sans-serif",
              fontWeight: "bold",
            }}
          >
            <span>Ryanair 10% discount on European flights</span>
            <span>
              &nbsp; the possibility of adding a 20kg suitcase &#129523;
            </span>
          </div>
        </Animator>
        <Animator animation={MoveInMiddleLowRight}>
          <div
            style={{
              fontSize: "25px",
              fontFamily: "Roboto Slab, sans-serif",
              fontWeight: "bold",
            }}
          >
            <span>...and many more in thousands of stores</span>
          </div>
        </Animator>
      </Animator>
    </ScrollPage>
  );
}

export default RyanairPage;
