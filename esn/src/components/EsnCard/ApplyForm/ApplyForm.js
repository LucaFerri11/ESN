import { useState, useEffect } from "react";
import "./ApplyForm.css";
import Button from "../../UI/Button";
import Alert from "@mui/material/Alert";

function Card(props) {
  const [isFirstNameValid, setIsFirstNameValid] = useState(true);
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  const [isStudyValid, setIsStudyValid] = useState(true);
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredStudy, setEnteredStudy] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isSucces, setIsSuccess] = useState(false);

  const firstNameChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsFirstNameValid(true);
      if (isLastNameValid && isStudyValid) {
        setIsValid(true);
      }
    }
    setEnteredFirstName(e.target.value);
  };

  const lastNameChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsLastNameValid(true);
      if (isFirstNameValid && isStudyValid) {
        setIsValid(true);
      }
    }
    setEnteredLastName(e.target.value);
  };

  const studyChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsStudyValid(true);
      if (isLastNameValid && isFirstNameValid) {
        setIsValid(true);
      }
    }
    setEnteredStudy(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

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
    console.log("HI");
    setIsSuccess(true);
    // props.onSave(enteredId, enteredTeam);
  };

  // if (isValid) {
  //   return (
  //     <div className="mailform">
  //       <div className="celebration">
  //         <h1 className="titleform">
  //           Welcome on board! We will wait for you in our office
  //         </h1>
  //       </div>
  //     </div>
  //   );
  // } else {
  return (
    <div className="mailform">
      <form onSubmit={onSubmitHandler}>
        <h1 className="titleform">Get your own ESN Card</h1>

        {!isValid && (
          <Alert severity="error" id="alert">
            <strong>All the fields must be filled</strong>
          </Alert>
        )}
        {!isSucces && (
          <Alert severity="success" id="alert">
            <strong>You have applied succesfully</strong>
          </Alert>
        )}

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

          <label htmlFor="lastname" className="legend">
            Last Name{" "}
          </label>
          <input
            type="text"
            className={isLastNameValid ? "input" : "invalid-input"}
            name="lastname"
            onChange={lastNameChangeHandler}
          />

          <label htmlFor="study" className="legend">
            Study{" "}
          </label>
          <input
            type="text"
            className={isStudyValid ? "input" : "invalid-input"}
            name="study"
            onChange={studyChangeHandler}
          />
        </div>
        <Button type="submit" className="button">
          Send
        </Button>
      </form>
    </div>
  );
  // }
}

export default Card;
