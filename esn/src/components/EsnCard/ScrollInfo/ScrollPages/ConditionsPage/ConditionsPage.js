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
import Button from "../../../UI/Button";
const MoveInCenterTop = batch(Sticky(50, 25), FadeIn(), MoveIn(0, -500));
const MoveInCenterRight = batch(Sticky(50, 35), FadeIn(), MoveIn(1800, 0));
const MoveInCenterLeft = batch(Sticky(50, 54), FadeIn(), MoveIn(-1800, 0));
const MoveInCenterBottom = batch(Sticky(50, 78), FadeIn(), MoveIn(0, 500));

function Condition(props) {
  return (
    <ScrollPage>
      <Animator animation={MoveInCenterTop}>
        <div className="condition-title">
          <h1>So... How to do it?!</h1>
        </div>
      </Animator>
      <Animator animation={MoveInCenterRight}>
        <div className="condition-intro">
          <span>Just go to our ESN office</span>
          <span>& bring with you:</span>
        </div>
      </Animator>
      <Animator animation={MoveInCenterLeft}>
        <div className="condition-needs">
          <div>
            <span>&#9635;</span>
            <em>&nbsp; Your ID/Passport</em>
          </div>
          <div>
            <span>&#9635;</span>
            <em>&nbsp; Passport size photo</em>
          </div>
          <div>
            <span>&#9635;</span>
            <em>&nbsp; It will cost only 10€</em>
          </div>
        </div>
      </Animator>
      <Animator animation={MoveInCenterBottom}>
        <div className="condition-call">
          <strong>What are you waiting for?</strong>
          <strong>Compile the form and</strong>
          <Button type="button" onClick={props.onClick}>
            JOIN US
          </Button>
        </div>
      </Animator>
    </ScrollPage>
  );
}

export default Condition;
