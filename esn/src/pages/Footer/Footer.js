import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import SlidingLogos from "./SlidingLogos/SlidingLogos";

function Footer() {
  return (
    <div className="footer">
      &#169; ESN Coruña -
      <Link to={"/privacy"} className="linkFooter">
        &nbsp; Privacy
      </Link>
      &nbsp; -
      <Link to={"/contact"} className="linkFooter">
        &nbsp; Contact Us
      </Link>
      {/* <div>
            <SlidingLogos />
        </div> */}
    </div>
  );
}

export default Footer;
