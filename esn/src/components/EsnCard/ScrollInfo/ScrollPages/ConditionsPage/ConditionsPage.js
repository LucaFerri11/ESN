import React from "react";
import "./ConditionsPage.css";
import {
  Animator,
  ScrollPage,
  batch,
  FadeIn,
  MoveIn,
  Sticky,
} from "react-scroll-motion";
const MoveInCenterTop = batch(Sticky(50, 26), FadeIn(), MoveIn(0, -500));
const MoveInCenterRight = batch(Sticky(50, 37), FadeIn(), MoveIn(1800, 0));
const MoveInCenterLeft = batch(Sticky(50, 53), FadeIn(), MoveIn(-1800, 0));
const MoveInCenterBottom = batch(Sticky(50, 72), FadeIn(), MoveIn(0, 500));

function Condition(props) {
  return (
    <ScrollPage>
      <Animator animation={MoveInCenterTop}>
        <div className="condition">
          <h1>So... How to do it?!</h1>
        </div>
      </Animator>
      <Animator animation={MoveInCenterRight}>
        <div className="condition">
          <h3>Just go to our ESN office</h3>
          <h5>remember to bring with you:</h5>
        </div>
      </Animator>
      <Animator animation={MoveInCenterLeft}>
        <div className="condition">
          <span>&nbsp; &#9635; Your ID/Passport</span>
          <br />
          <span>&nbsp; &#9635; Passport size photo</span>
          <br />
          <span>&nbsp; &#9635; It will cost only 10€</span>
        </div>
      </Animator>
      <Animator animation={MoveInCenterBottom}>
        <div className="condition">
          <h3>What are you waiting for?</h3>
          <h3>compile the form and...</h3>
          <br />
          <button onClick={props.onClick}>JOIN US</button>
        </div>
      </Animator>
    </ScrollPage>
  );
}

export default Condition;
