import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import SlidingLogos from "./SlidingLogos/SlidingLogos";
import { BsInstagram, BsFacebook, BsWhatsapp, TbMap2 } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { Tooltip } from "@mui/material";

function Footer() {
  const facebookTooltip =
    "Join the Facebook group to stay tuned on the latest events";
  const instagramTooltip = "Follow us on Instagram";
  const whatsappTooltip = "Join the Whatsapp group to start making new friends";
  const mapsTooltip = "You can find us here";

  return (
    <div className="grid-container">
      <div className="left">
        <div className="social">
          <Tooltip title={facebookTooltip} arrow placement="top">
            <a
              href={"https://www.facebook.com/groups/1384367125377692"}
              target="_blank"
              className="linkFooter"
            >
              <BsFacebook />
            </a>
          </Tooltip>
          <Tooltip title={instagramTooltip} arrow placement="top">
            <a
              href={"https://www.instagram.com/esncoruna/"}
              target="_blank"
              className="linkFooter"
            >
              <BsInstagram />
            </a>
          </Tooltip>
          <Tooltip title={mapsTooltip} arrow placement="top">
            <a
              href={
                "https://www.google.com/maps/place/Casa+do+Lagar+-+UDC/@43.332124,-8.412034,14z/data=!4m5!3m4!1s0x0:0xa2fa446abee0da28!8m2!3d43.3321242!4d-8.412034?hl=en"
              }
              target="_blank"
              className="linkFooter"
            >
              <FiMapPin />
            </a>
          </Tooltip>
          <Tooltip title={whatsappTooltip} arrow placement="top">
            <a
              // href={""}
              target="_blank"
              className="linkFooter"
            >
              <BsWhatsapp />
            </a>
          </Tooltip>
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
