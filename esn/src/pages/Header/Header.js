import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to={"/"}>
        <img
          src="https://esncoruna.org/sites/default/files/ES-coruna-logo-colour-RGB.png"
          className="logo"
        ></img>
      </Link>
      <div className="menu">
        <Link to={"/"} className="link">
          About Us
        </Link>
        <Link to={"/gallery"} className="link">
          Gallery
        </Link>
        <Link to={"/buddy"} className="link">
          Buddy
        </Link>
        <Link to={"/esncard"} className="link">
          ESN Card
        </Link>
        <Link to={"/contact"} className="link">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Header;
