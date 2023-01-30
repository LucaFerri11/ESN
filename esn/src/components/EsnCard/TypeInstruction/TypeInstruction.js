import React from "react";
import "./TypeInstruction.css";

function TypeInstruction(props) {
  return (
    <div className="type-info">
      <p>Scroll or use the arrows &#8679;&#8681;</p>
      <p>to discover our ESN Card ;)</p>
      <p>
        Or you can just apply <a onClick={props.onClick}>here</a>{" "}
      </p>
    </div>
  );
}

export default TypeInstruction;
