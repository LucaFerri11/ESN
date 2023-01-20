import React from "react";
import "./Contact.css";
import MailForm from "./MailForm/MailForm";

function Contact() {
  return (
    <div className="mainContainer">
      <div className="left">
        <MailForm></MailForm>
      </div>
      <div className="right">DESTRA</div>
    </div>
  );
}

export default Contact;
