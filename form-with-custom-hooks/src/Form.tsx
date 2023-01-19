import React, { useState } from "react";
import { useFormInput } from "./useFormInput";
import './Form.css';

const Form = () => {
  // Hook state management and custon hooks for form inputs
  const { value: firstName, onChange: firstNameChange } = useFormInput("");
  const { value: lastName, onChange: lastNameChange } = useFormInput("");
  const [fullName, setFullName] = useState("");

  const onSubmitClick = (e) => {
    // TODO: Implement type checking for event object
    e.preventDefault();
    setFullName(`${firstName} ${lastName}`);
  };

  const onResetClick = () => {
    firstNameChange("");
    lastNameChange("");
    setFullName("");
  };

  const dyanmicText = fullName ? `Hello, ${fullName}!` : `Hello!`;

  return (
    <React.Fragment>
      <div className="row m-0 justify-content-center">
        <div className="col-md-4 mt-5 mb-5">
          <div className="form-area mt-5">
            <div className="form-inner">
              <form onSubmit={onSubmitClick} onReset={onResetClick}>
                <h3 className="form-heading mb-4 text-primary">
                  {dyanmicText}
                </h3>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your First Name"
                    value={firstName}
                    onChange={firstNameChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Last Name"
                    value={lastName}
                    onChange={lastNameChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary form-submit mt-3"
                >
                  Submit
                </button>
                <button
                  type="reset"
                  className="btn btn-primary form-submit mt-3 ml-4"
                >
                  Reset
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Form;
