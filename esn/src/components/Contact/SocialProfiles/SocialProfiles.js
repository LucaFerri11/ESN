import React from "react";
import "./SocialProfiles.css";
import facebook from "../../../assets/Images/SocialLogos/facebook.png";
import instagram from "../../../assets/Images/SocialLogos/instagram.png";
import whatsapp from "../../../assets/Images/SocialLogos/whatsapp.png";
import Tooltip from "@mui/material/Tooltip";

function SocialProfiles() {
  const facebookTooltip =
    "Join the Facebook group to stay tuned on the latest events";
  const instagramTooltip = "Follow us on Instagram";
  const whatsappTooltip = "Join the Whatsapp group to start making new friends";

  return (
    <div className="social">
      <h1>We are social!</h1>
      <h2 className="second-title">Let's connect on all the platform</h2>
      <div className="logos">
        <Tooltip title={facebookTooltip} arrow>
          <a
            href={"https://www.facebook.com/groups/1384367125377692"}
            target="_blank"
            className="linkFooter"
          >
            {" "}
            <img src={facebook} className="logo-img" />{" "}
          </a>
        </Tooltip>
        <Tooltip title={instagramTooltip} arrow>
          <a
            href={"https://www.instagram.com/esncoruna/"}
            target="_blank"
            className="linkFooter"
          >
            {" "}
            <img src={instagram} className="logo-img" />{" "}
          </a>
        </Tooltip>
        <Tooltip title={whatsappTooltip} arrow>
          <a
            href=""
            // href={"https://www.facebook.com/groups/1384367125377692"}
            // target="_blank"
            className="linkFooter"
          >
            {" "}
            <img src={whatsapp} className="logo-img" />{" "}
          </a>
        </Tooltip>
      </div>
    </div>
  );
}

export default SocialProfiles;
