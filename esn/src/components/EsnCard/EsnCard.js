import React, { useState, useEffect } from "react";
import ScrollInfo from "./ScrollInfo/ScrollInfo";
import TypeInstruction from "./TypeInstruction/TypeInstruction";
import ApplyForm from "./ApplyForm/ApplyForm";

function EsnCard() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showApplyForm, setShowApplyForm] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!showApplyForm) {
    return (
      <div>
        <ScrollInfo onClick={() => setShowApplyForm(true)} />
        {scrollPosition > 500 ? (
          ""
        ) : (
          <TypeInstruction onClick={() => setShowApplyForm(true)} />
        )}
      </div>
    );
  } else {
    return <ApplyForm></ApplyForm>;
  }
}

export default EsnCard;
