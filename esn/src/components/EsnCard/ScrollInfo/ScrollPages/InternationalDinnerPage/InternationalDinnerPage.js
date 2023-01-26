import React from "react";
import "./InternationalDinnerPage.css";
import {
  Animator,
  ScrollPage,
  batch,
  FadeIn,
  MoveIn,
  Sticky,
  FadeOut,
  MoveOut,
} from "react-scroll-motion";
import InternationalDinner from "../../../../../assets/Images/InternationalDinner.jpeg";

function InternationalDinnerPage() {
  const stickyTopLeft = { left: 55.3, top: 37.8 };
  const stickyBottomRight = { left: 66.7, top: 62.2 };

  const MoveInTopLeft = batch(
    Sticky(stickyTopLeft.left, stickyTopLeft.top),
    FadeIn(),
    MoveIn(-1800, -800),
    MoveOut(-1000, 0),
    FadeOut(1, 0)
  );
  const MoveInTopRight = batch(
    Sticky(stickyBottomRight.left, stickyTopLeft.top),
    FadeIn(),
    MoveIn(1800, -800),
    MoveOut(-1000, 0),
    FadeOut(1, 0)
  );
  const MoveInBottomRight = batch(
    Sticky(stickyBottomRight.left, stickyBottomRight.top),
    FadeIn(),
    MoveIn(1800, 800),
    MoveOut(1000, 0),
    FadeOut(1, 0)
  );
  const MoveInBottomLeft = batch(
    Sticky(stickyTopLeft.left, stickyBottomRight.top),
    FadeIn(),
    MoveIn(-1800, 800),
    MoveOut(1000, 0),
    FadeOut(1, 0)
  );
  const MoveInCenterBottom = batch(
    Sticky(50, 75),
    FadeIn(),
    MoveIn(0, 1000),
    FadeOut(0.8, 0)
  );

  return (
    <ScrollPage>
      <div className="dinner-container">
        <div>
          <Animator animation={MoveInTopLeft}>
            <img src={InternationalDinner} width={"37.5%"}></img>
          </Animator>
          <Animator animation={MoveInTopRight}>
            <img src={InternationalDinner} width={"50%"}></img>
          </Animator>
        </div>
        <div>
          <Animator animation={MoveInBottomRight}>
            <img src={InternationalDinner} width={"50%"}></img>
          </Animator>
          <Animator animation={MoveInBottomLeft}>
            <img src={InternationalDinner} width={"37.5%"}></img>
          </Animator>
        </div>
        <Animator animation={MoveInCenterBottom}>
          <br />
          <span>Like our International Dinner</span>
        </Animator>
      </div>
    </ScrollPage>
  );
}

export default InternationalDinnerPage;
