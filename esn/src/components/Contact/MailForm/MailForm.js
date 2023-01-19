import React, { useRef } from 'react';
import './MailForm.css';
import emailjs, { init } from "@emailjs/browser";

function MailForm() {
    init("Pn5UATHv8A6TrZD8m");
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_6xb7mxv", "template_2ulk4a9", form.current, "Pn5UATHv8A6TrZD8m").then(
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
        <div className="container">
          <form onSubmit={handleSubmit} ref={form}>
            <h1 className="text-center">Registration Form</h1>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="FirstName">First Name</label>
                <input type="text" className="form-control" name="FirstName" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="LastName">Last Name</label>
                <input type="text" className="form-control" name="LastName" />
              </div>
              {/* <div className="form-group col-12">
                <label htmlFor="inputAddress">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                  name="user_address"
                />
              </div> */}
              <div className="form-group col-md-6">
                <label htmlFor="message">message</label>
                <textarea
                  type="text"
                  className="form-control"
                  id="inputmessage"
                  name="message"
                />
              </div>
            </div>
    
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </form>
        </div>
      );
}

export default MailForm