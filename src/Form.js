import { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailValidated, setEmailValidated] = useState(false);
  const [passwordValidated, setPasswordValidated] = useState(false);
  const [confirmPasswordValidated, setConfirmPasswordValidated] =
    useState(false);

  const emailChange = (event) => {
    setEmail(event.target.value);
    setEmailValidated(validateEmail(event.target.value));
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
    setPasswordValidated(event.target.value.length >= 8);
  };

  const confirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setConfirmPasswordValidated(event.target.value === password);
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (emailValidated && passwordValidated && confirmPasswordValidated) {
      alert("Form submitted successfully");
    } else {
      alert("Can't submit the form");
    }
  };

  return (
    <>
      {" "}
      <br />
      <h1 className="text-center">Sign Up Page</h1>
      <div className="container">
        <div className="row">
          <div className="offset-md-3 col-md-6 offset-md-3">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" lassName="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={emailChange}
                  className="form-control"
                  style={{
                    border: emailValidated
                      ? "3px solid green"
                      : "2px solid red",
                  }}
                />
                {!emailValidated && (
                  <p style={{ color: "red" }}>
                    Please enter a valid email address.
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="password" lassName="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={passwordChange}
                  className="form-control"
                  style={{
                    border: passwordValidated
                      ? "3px solid green"
                      : "2px solid red",
                  }}
                />
                {!passwordValidated && (
                  <p style={{ color: "red" }}>
                    Password must be at least 8 characters long.
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="confirm-password" lassName="form-label">
                  Confirm Password:
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={confirmPasswordChange}
                  className="form-control"
                  style={{
                    border: confirmPasswordValidated
                      ? "3px solid green"
                      : "2px solid red",
                  }}
                />
                {!confirmPasswordValidated && (
                  <p style={{ color: "red" }}>Passwords do not match.</p>
                )}
              </div>
              <button className="btn btn-primary my-3" type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
