import React from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation().pathname;

  return (
    <div className="header">
      {/* <div className="headerSpace"> */}
      <div className="header-container">
        <Link to={"/"}>
          <img
            src="https://esncoruna.org/sites/default/files/ES-coruna-logo-colour-RGB.png"
            className="logo-header"
          ></img>
        </Link>
        <div className="menu">
          <Link
            to={"/"}
            className={location === "/" ? "link-selected" : "link"}
          >
            About Us
          </Link>
          <Link
            to={"/gallery"}
            className={location === "/gallery" ? "link-selected" : "link"}
          >
            Gallery
          </Link>
          <Link
            to={"/buddy"}
            className={location === "/buddy" ? "link-selected" : "link"}
          >
            Buddy
          </Link>
          <Link
            to={"/esncard"}
            className={location === "/esncard" ? "link-selected" : "link"}
          >
            ESN Card
          </Link>
          <Link
            to={"/contact"}
            className={location === "/contact" ? "link-selected" : "link"}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
