import React from "react";
import { useCalculateSticky, useCalculateWidth } from "./Utils";
import {
  Animator,
  ScrollPage,
  batch,
  Fade,
  MoveOut,
  Sticky,
} from "react-scroll-motion";
import EsnCardRight from "../../../../assets/Images/EsnCardRight.png";
import EsnCardLeft from "../../../../assets/Images/EsnCardLeft.png";

function CardPage() {
  const widthPercentage = useCalculateWidth(90) + "%";
  const stickyLeft = useCalculateSticky({ left: 40.6, top: 50 });
  const stickyRight = useCalculateSticky({ left: 61, top: 50 });

  const MoveOutCenterLeft = batch(
    Fade(),
    Sticky(stickyLeft.left),
    MoveOut(-250, 0)
  );
  const MoveOutCenterRight = batch(
    Fade(),
    Sticky(stickyRight.left),
    MoveOut(250, 0)
  );

  return (
    <ScrollPage>
      <Animator animation={MoveOutCenterLeft}>
        <img
          src={EsnCardLeft}
          style={{
            maxWidth: "100%",
            borderRadius: "10px, 0px, 0px, 10px",
          }}
          width={widthPercentage}
        />
      </Animator>
      <Animator animation={MoveOutCenterRight}>
        <img
          src={EsnCardRight}
          style={{
            maxWidth: "100%",
            borderRadius: "0px, 10px, 10px, 0px",
          }}
          width={widthPercentage}
        />
      </Animator>
    </ScrollPage>
  );
}

export default CardPage;
