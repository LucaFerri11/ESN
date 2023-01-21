import React, { useRef } from "react";
import "./MailForm.css";
import emailjs, { init } from "@emailjs/browser";

function MailForm() {
  init("Pn5UATHv8A6TrZD8m");
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_6xb7mxv",
        "template_2ulk4a9",
        form.current,
        "Pn5UATHv8A6TrZD8m"
      )
      .then(
        (result) => {
          alert("Message Sent Successfully");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="mailform">
      <form onSubmit={handleSubmit} ref={form}>
        <h1 className="titleform">Share your opinion with us</h1>
        <div className="form-fields">
          <label htmlFor="FirstName" className="legend">
            First Name
          </label>
          <input type="text" className="input" name="FirstName" />
          <label htmlFor="LastName" className="legend">
            Last Name
          </label>
          <input type="text" className="input" name="LastName" />
          <label htmlFor="email" className="legend">
            Email
          </label>
          <input type="text" className="input" name="email" />
          <label htmlFor="message" className="legend">
            Message
          </label>
          <textarea type="text" id="inputmessage" name="message" />
        </div>

        <button type="submit" className="btn">
          Send
        </button>
      </form>
    </div>
  );
}

export default MailForm;
