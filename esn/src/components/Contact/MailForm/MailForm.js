import React, { useRef, useState } from "react";
import "./MailForm.css";
import emailjs, { init } from "@emailjs/browser";
import Alert from "@mui/material/Alert";
import Button from "../../EsnCard/UI/Button";
// import { ReCAPTCHA } from "react-google-recaptcha";

function MailForm() {
  const [isSucces, setIsSuccess] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const [enteredMessage, setEnteredMessage] = useState("");
  const [isMessageValid, setIsMessageValid] = useState(true);
  init("Pn5UATHv8A6TrZD8m");
  const form = useRef();
  // const captchaRef = useRef();

  const messageChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsMessageValid(true);
    }
    setEnteredMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (enteredMessage.trim().length === 0) {
      setIsMessageValid(false);
      return;
    }

    emailjs
      .sendForm(
        "service_6xb7mxv",
        "template_2ulk4a9",
        form.current,
        "Pn5UATHv8A6TrZD8m"
      )
      .then(
        (result) => {
          e.target.reset();
          setEnteredMessage("");
          responseHandler(true);
        },
        (error) => {
          responseHandler(false);
        }
      );
  };

  const responseHandler = (success) => {
    setIsSuccess(success);
    setShowResponse(true);
    setTimeout(() => {
      setShowResponse(false);
    }, 3000);
  };

  return (
    <div className="mailform">
      <form onSubmit={handleSubmit} ref={form}>
        <h1 className="titleform">Share your opinion with us</h1>
        <div className="form-fields">
          <label htmlFor="firstname" className="legend">
            First Name
          </label>
          <input type="text" className="input" name="firstname" />
          <label htmlFor="lastname" className="legend">
            Last Name
          </label>
          <input type="text" className="input" name="lastname" />
          <label htmlFor="email" className="legend">
            Email
          </label>
          <input type="text" className="input" name="email" />
          <label htmlFor="message" className="legend">
            Message
          </label>
          <textarea
            type="text"
            id="inputmessage"
            name="message"
            onChange={messageChangeHandler}
          />
          {!isMessageValid && (
            <Alert severity="error" className="alert">
              <strong>Message must not be empty</strong>
            </Alert>
          )}
        </div>

        {/* <ReCAPTCHA
          sitekey={"6LcpICEkAAAAAPwZxh7rK6EVntm14ucuGotUVTCa"}
        ></ReCAPTCHA> */}

        {/* <reCAPTCHA
          sitekey={process.env.RECAPTCHA_SITE_KEY}
          ref={captchaRef}
          size="120px"
        /> */}
        <div className="footer-mailform">
          {/* <script
            src="https://www.google.com/recaptcha/api.js"
            async
            defer
          ></script>
          <div class="g-recaptcha" data-sitekey="your_site_key"></div>
          <ReCAPTCHA
            sitekey="6LcSLyEkAAAAAFmNW2aItDB--wJQpJrTeIaN-POM"
            size="normal"
          /> */}
          <Button type="submit">Send</Button>
          {showResponse && (
            <Alert severity={isSucces ? "success" : "error"} className="alert">
              {isSucces ? (
                <strong>Message sent correctly!</strong>
              ) : (
                <strong>Message not sent, try again!</strong>
              )}
            </Alert>
          )}
        </div>
      </form>
    </div>
  );
}

export default MailForm;
