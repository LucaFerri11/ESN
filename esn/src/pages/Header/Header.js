import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
        <img src="https://esncoruna.org/sites/default/files/ES-coruna-logo-colour-RGB.png" className="logo"></img>  
        <div className="menu">
        <h3>
          About Us
        </h3>
        <h3>
          Gallery
        </h3>
        <h3>
          Calendar
        </h3>
      </div>
    </div>
  );
}

export default Header;
