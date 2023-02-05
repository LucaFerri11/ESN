import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
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
    facebook: "Join the Facebook group to stay tuned on the latest events",
    instagram: "Follow us on Instagram",
    whatsapp: "Join the Whatsapp group to start making new friends",
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
    setTooltipShow(!tooltipShow);
  };

  return (
    <div className="grid-container">
      <div className="left" id="left-container">
        {tooltipShow && (
          <div className="tooltip-container" style={{ width: tooltipWidth }}>
            <img src={imgSrc[socialMedia]} style={{ width: "100%" }} />
            <span style={{ paddingTop: "4px" }}>
              {description[socialMedia]}
            </span>
          </div>
        )}

        <div className="social">
          <a
            href={"https://www.facebook.com/groups/1384367125377692"}
            target="_blank"
            className="linkFooter"
            onMouseEnter={() => {
              setSocialMedia("facebook");
              showTooltipHandler();
            }}
            onMouseLeave={showTooltipHandler}
          >
            <BsFacebook />
          </a>
          <a
            href={"https://www.instagram.com/esncoruna/"}
            target="_blank"
            className="linkFooter"
            onMouseEnter={() => {
              setSocialMedia("instagram");
              showTooltipHandler();
            }}
            onMouseLeave={showTooltipHandler}
          >
            <BsInstagram />
          </a>
          <a
            href={"https://goo.gl/maps/STEQjeQy6xMBMJay9"}
            target="_blank"
            className="linkFooter"
            onMouseEnter={() => {
              setSocialMedia("maps");
              showTooltipHandler();
            }}
            onMouseLeave={showTooltipHandler}
          >
            <FiMapPin />
          </a>
          <a
            // href={""}
            target="_blank"
            className="linkFooter"
            onMouseEnter={() => {
              setSocialMedia("whatsapp");
              showTooltipHandler();
            }}
            onMouseLeave={showTooltipHandler}
          >
            <BsWhatsapp />
          </a>
        </div>
        <div className="disclaimer">
          &#169; ESN Coruña - &nbsp;
          <Link to={"/privacy"} className="linkFooter">
            Privacy
          </Link>
          &nbsp; - &nbsp;
          <Link to={"/contact"} className="linkFooter">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="logos">
        <SlidingLogos />
      </div>
    </div>
  );
}

export default Footer;
