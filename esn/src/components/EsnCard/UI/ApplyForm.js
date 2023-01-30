import { useState, useEffect } from "react";
import "./ApplyForm.css";
import Button from "./Button";
import Alert from "@mui/material/Alert";

function Card(props) {
  const [isFirstNameValid, setIsFirstNameValid] = useState(true);
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  const [isStudyValid, setIsStudyValid] = useState(true);
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredStudy, setEnteredStudy] = useState("");
  const [isValid, setIsValid] = useState(false);

  const firstNameChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsFirstNameValid(true);
    }
    setEnteredFirstName(e.target.value);
  };

  const lastNameChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsLastNameValid(true);
    }
    setEnteredLastName(e.target.value);
  };

  const studyChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsStudyValid(true);
    }
    setEnteredStudy(e.target.value);
  };

  const createCardHandler = (e) => {
    e.preventDefault();

    setIsValid(true);
    if (enteredFirstName.trim().length === 0) {
      setIsFirstNameValid(false);
      setIsValid(false);
    }
    if (enteredLastName.trim().length === 0) {
      setIsLastNameValid(false);
      setIsValid(false);
    }
    if (enteredStudy.trim().length === 0) {
      setIsStudyValid(false);
      setIsValid(false);
    }
    if (!isValid) {
      return;
    }
    // props.onSave(enteredId, enteredTeam);
  };

  if (isValid) {
    return (
      <div className="mailform">
        <div className="celebration">
          <h1 className="titleform">
            Welcome on board! We will wait for you in our office
          </h1>
        </div>
      </div>
    );
  } else {
    return (
      <div className="mailform">
        <form onSubmit={createCardHandler}>
          <h1 className="titleform">Get your own ESN Card</h1>
          <div className="form-fields">
            <label htmlFor="firstname" className="legend">
              First Name
            </label>
            <input
              type="text"
              className={isFirstNameValid ? "input" : "invalid-input"}
              name="firstname"
              onChange={firstNameChangeHandler}
            />
            {!isFirstNameValid && (
              <Alert severity="error" id="alert">
                <strong>First name must not be empty</strong>
              </Alert>
            )}
            <label htmlFor="lastname" className="legend">
              Last Name
            </label>
            <input
              type="text"
              className={isLastNameValid ? "input" : "invalid-input"}
              name="lastname"
              onChange={lastNameChangeHandler}
            />
            {!isLastNameValid && (
              <Alert severity="error" id="alert">
                <strong>Last name must not be empty</strong>
              </Alert>
            )}
            <label htmlFor="study" className="legend">
              Study
            </label>
            <input
              type="text"
              className={isStudyValid ? "input" : "invalid-input"}
              name="study"
              onChange={studyChangeHandler}
            />
            {!isStudyValid && (
              <Alert severity="error" id="alert">
                <strong>Study must not be empty</strong>
              </Alert>
            )}
          </div>
          <button type="submit" className="btn">
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default Card;
