import React, { useState, useEffect } from "react";
import "./EsnCard.css";
import ScrollInfo from "./ScrollInfo/ScrollInfo";
import TypeInstruction from "./TypeInstruction/TypeInstruction";

function EsnCard() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <ScrollInfo />
      {scrollPosition > 500 ? "" : <TypeInstruction />}
    </div>
  );
}

export default EsnCard;
