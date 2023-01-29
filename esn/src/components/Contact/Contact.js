import React from "react";
import "./Contact.css";
import MailForm from "./MailForm/MailForm";
import SocialProfiles from "./SocialProfiles/SocialProfiles";

function Contact() {
  return (
    <div className="mainContainer">
      <div className="left">
        <MailForm></MailForm>
      </div>
      {/* <div className="right">
        <SocialProfiles></SocialProfiles>
      </div> */}
    </div>
  );
}

export default Contact;
