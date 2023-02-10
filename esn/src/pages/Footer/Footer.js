import React, { useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import SlidingLogos from "./SlidingLogos/SlidingLogos";
import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";

import facebookScreen from "../../assets/Images/fbScreen.png";
import instagramScreen from "../../assets/Images/instagramScreen.png";
import mapsScreen from "../../assets/Images/mapsScreen.png";

function Footer() {
  const [tooltipShow, setTooltipShow] = useState(false);
  const [socialMedia, setSocialMedia] = useState("");
  const [tooltipWidth, setTooltipWidth] = useState("395px");

  const description = {
    facebook: "Stay tuned on the latest events",
    instagram: "Follow us on Instagram",
    whatsapp: "Start making new friends",
    maps: "You can find us here",
  };

  const imgSrc = {
    facebook: facebookScreen,
    instagram: instagramScreen,
    whatsapp: "",
    maps: mapsScreen,
  };

  const showTooltipHandler = () => {
    const leftContainer = document.getElementById("left-container");
    setTooltipWidth(leftContainer.offsetWidth - 16 + "px");
    setTooltipShow(true);
  };

  return (
    <div className="grid-container">
      <div className="left" id="left-container">
        {tooltipShow && (
          <div className="tooltip-container" style={{ width: tooltipWidth }}>
            <img src={imgSrc[socialMedia]} style={{ width: "100%" }} />
            <span style={{ paddingTop: "0.4rem" }}>
              {description[socialMedia]}
            </span>
          </div>
        )}

        <div className="social">
          <a
            href={"https://www.facebook.com/groups/1384367125377692"}
            target="_blank"
            className="footer-link"
            onMouseEnter={() => {
              setSocialMedia("facebook");
              showTooltipHandler();
            }}
            onMouseLeave={() => setTooltipShow(false)}
          >
            <BsFacebook />
          </a>
          <a
            href={"https://www.instagram.com/esncoruna/"}
            target="_blank"
            className="footer-link"
            onMouseEnter={() => {
              setSocialMedia("instagram");
              showTooltipHandler();
            }}
            onMouseLeave={() => setTooltipShow(false)}
          >
            <BsInstagram />
          </a>
          <a
            href={"https://goo.gl/maps/STEQjeQy6xMBMJay9"}
            target="_blank"
            className="footer-link"
            onMouseEnter={() => {
              setSocialMedia("maps");
              showTooltipHandler();
            }}
            onMouseLeave={() => setTooltipShow(false)}
          >
            <FiMapPin />
          </a>
          <a
            // href={""}
            target="_blank"
            className="footer-link"
            onMouseEnter={() => {
              setSocialMedia("whatsapp");
              showTooltipHandler();
            }}
            onMouseLeave={() => setTooltipShow(false)}
          >
            <BsWhatsapp />
          </a>
        </div>

        <div className="disclaimer">
          &#169; ESN Coruña - &nbsp;
          <Link to={"/privacy"} className="footer-link">
            Privacy
          </Link>
          &nbsp; - &nbsp;
          <Link to={"/contact"} className="footer-link">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="footer-logos">
        <SlidingLogos />
      </div>
    </div>
  );
}

export default Footer;
