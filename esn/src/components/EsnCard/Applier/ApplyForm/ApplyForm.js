import { useState, useEffect } from "react";
import "./ApplyForm.css";
import Button from "../../../UI/Button";
import Alert from "@mui/material/Alert";

function Card(props) {
  /*
      statusSend = {
        -1: error
        0: stay
        1: send
      }
  */
  const [statusSend, setStatusSend] = useState(0);

  const [isFirstNameValid, setIsFirstNameValid] = useState(true);
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  const [isStudyValid, setIsStudyValid] = useState(true);

  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredStudy, setEnteredStudy] = useState("");

  const firstNameChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsFirstNameValid(true);
      if (isLastNameValid && isStudyValid) {
        setStatusSend(0);
      }
    }
    setEnteredFirstName(e.target.value);
  };

  const lastNameChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsLastNameValid(true);
      if (isFirstNameValid && isStudyValid) {
        setStatusSend(0);
      }
    }
    setEnteredLastName(e.target.value);
  };

  const studyChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsStudyValid(true);
      if (isLastNameValid && isFirstNameValid) {
        setStatusSend(0);
      }
    }
    setEnteredStudy(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    let setValid = true;

    if (enteredFirstName.trim().length === 0) {
      setIsFirstNameValid(false);
      setValid = false;
    }
    if (enteredLastName.trim().length === 0) {
      setIsLastNameValid(false);
      setValid = false;
    }
    if (enteredStudy.trim().length === 0) {
      setIsStudyValid(false);
      setValid = false;
    }

    if (setValid) {
      setStatusSend(1);
    } else {
      setStatusSend(-1);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="apply-form">
      <h1
        className="apply-title"
        style={{
          paddingBottom: statusSend === 0 && "6.4rem",
        }}
      >
        Get your own ESN Card
      </h1>

      <div className="apply-fields">
        {statusSend === -1 && (
          <Alert severity="error" id="error">
            <strong>All the fields must be filled</strong>
          </Alert>
        )}
        {statusSend === 1 && (
          <Alert severity="success" id="success">
            <strong>You have applied succesfully</strong>
          </Alert>
        )}

        <label htmlFor="firstname" className="legend">
          First Name
        </label>
        <input
          type="text"
          className={isFirstNameValid ? "input" : "invalid-input"}
          name="firstname"
          onChange={firstNameChangeHandler}
        />

        <label htmlFor="lastname" className="legend">
          Last Name
        </label>
        <input
          type="text"
          className={isLastNameValid ? "input" : "invalid-input"}
          name="lastname"
          onChange={lastNameChangeHandler}
        />

        <label htmlFor="study" className="legend">
          Study
        </label>
        <input
          type="text"
          className={isStudyValid ? "input" : "invalid-input"}
          name="study"
          onChange={studyChangeHandler}
        />
        <Button type="submit">Send</Button>
      </div>
    </form>
  );
}

export default Card;
