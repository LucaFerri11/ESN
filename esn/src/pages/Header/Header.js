import React from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation().pathname;

  return (
    <div className="header">
      <div className="header-container">
        <Link to={"/"}>
          <img
            src="https://esncoruna.org/sites/default/files/ES-coruna-logo-colour-RGB.png"
            className="header-logo"
          ></img>
        </Link>
        <div className="header-menu">
          <Link
            to={"/"}
            className={
              location === "/" ? "header-link-selected" : "header-link"
            }
          >
            About Us
          </Link>
          <Link
            to={"/gallery"}
            className={
              location === "/gallery" ? "header-link-selected" : "header-link"
            }
          >
            Gallery
          </Link>
          <Link
            to={"/buddy"}
            className={
              location === "/buddy" ? "header-link-selected" : "header-link"
            }
          >
            Buddy
          </Link>
          <Link
            to={"/esncard"}
            className={
              location === "/esncard" ? "header-link-selected" : "header-link"
            }
          >
            ESN Card
          </Link>
          <Link
            to={"/contact"}
            className={
              location === "/contact" ? "header-link-selected" : "header-link"
            }
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
