import { Link } from "react-router-dom";
import React from "react";
import Portrait from "../../../assets/Images/Portrait.jpg"

function Card(props) {
  return (
    <Link className="linkTeamCard">
      <div className="cardPosition"> 
        <img
          // style={{ width: 110 }}
          src={Portrait}
          alt="face"
          className="portrait"
        />
        <span className="teamName">Uxue Bogajo</span> 
      </div>
    </Link>
  );
}

export default Card;
