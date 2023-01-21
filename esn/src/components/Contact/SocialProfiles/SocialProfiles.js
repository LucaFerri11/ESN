import React from "react";
import "./SocialProfiles.css";
import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";

function SocialProfiles() {
  return (
    <div>
      <h3>
        {" "}
        <BsInstagram /> Follow us on Instagram to get the last update
      </h3>
      <h3>
        {" "}
        <BsFacebook /> Join our Facebook group to partecipate at all the events
      </h3>
      <h3>
        {" "}
        <BsWhatsapp /> Enter our Whatsapp group to start knowing your new
        friends
      </h3>
    </div>
  );
}

export default SocialProfiles;
