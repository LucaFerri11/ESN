import React from "react";
import "./CardsList.css";
import Card from "../Card/Card";

function CardsList(props) {
  const cards = [];

  for (let i = 0; i < 8; i++) {
    cards.push(
      <Card />
    );
  }
  return (
    <div className="scroll">
      <div className="MainContainer">{cards}</div>
    </div>
  );
}

export default CardsList;
