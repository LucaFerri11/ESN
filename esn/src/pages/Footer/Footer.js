import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import SlidingLogos from "./SlidingLogos/SlidingLogos";
import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer">
      &nbsp; &nbsp; &#169; ESN Coruña -
      <Link to={"/privacy"} className="linkFooter">
        &nbsp; Privacy
      </Link>
      &nbsp; -
      <Link to={"/contact"} className="linkFooter">
        &nbsp; Contact Us:
      </Link>
      &nbsp;
      <a
        href={"https://www.instagram.com/esncoruna/"}
        target="_blank"
        className="linkFooter"
      >
        &nbsp; <BsInstagram />
      </a>
      &nbsp;
      <a
        href={"https://www.facebook.com/groups/1384367125377692"}
        target="_blank"
        className="linkFooter"
      >
        &nbsp; <BsFacebook />
      </a>
      &nbsp;
      <a
        // href={""}
        target="_blank"
        className="linkFooter"
      >
        &nbsp; <BsWhatsapp />
      </a>
      {/* <div>
            <SlidingLogos />
        </div> */}
    </div>
  );
}

export default Footer;
