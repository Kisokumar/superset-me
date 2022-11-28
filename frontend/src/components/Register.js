import { useState, useEffect, useRef } from "react";

import React from "react";
import validateEmail from "../utils/emailValidator";
import userExists from "../utils/userExists";

export default function Register() {
  const [userError, setUserError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [pwError, setPwError] = useState("");
  // const [username, setUsername] = useState("");
  const [usernameState, setUsernameState] = useState(false);
  const userref = useRef();
  const pwref = useRef();
  const emailref = useRef();

  function handleUsername() {
    // console.log(userref.current.value);
    setUsernameState(true);
  }

  useEffect(() => {
    let status = "";
    if (usernameState === true) {
      fetch(
        `http://localhost:3001/users/exists/$(userref.current.value)/`
      ).then((response) => (status = response.status));
    }
  }, [userref, usernameState]);

  function checkUser() {
    // pass
  }

  function checkPassword(pw) {
    if (
      pw !== "" &&
      (pw.length < 8 || String(pw).replace(/[^0-9]/g, "").length < 1)
    ) {
      setPwError(
        "Password must be 8 or more characters and contain at least 1 number"
      );
    } else {
      setPwError("");
    }
  }

  function checkEmail(email) {
    if (!validateEmail(email) && email !== "") {
      setEmailError("Invalid email");
    } else {
      setEmailError("");
    }
  }

  function handleSubmit(e) {
    const pw = pwref.current.value;
    const email = emailref.current.value;
    const user = userref.current.value;
    if (e.key === "Enter") {
      checkPassword(pw);
      checkEmail(email);
      checkUser(user);
    }
  }

  return (
    <section className="register">
      <form className="signupform">
        <h2 className="welcome">Welcome to Superset.me</h2>
        <h1 className="signup">Sign Up</h1>
        <input
          ref={userref}
          type="text"
          // onChange={(e) => setUsernameState(userref.current.value)}
          onChange={(e) => handleUsername()}
          placeholder="Username"
          className="field username input"
          onKeyDown={handleSubmit}
          onKeyUp={handleSubmit}
        />
        <p className="error">{userError}</p>
        <input
          ref={emailref}
          onKeyDown={handleSubmit}
          onKeyUp={handleSubmit}
          type="text"
          placeholder="Email"
          className="field emailinput input"
        ></input>
        <p className="error">{emailError}</p>
        <input
          ref={pwref}
          type="text"
          placeholder="Password"
          className="field passwordinput input"
          onKeyUp={handleSubmit}
          onKeyDown={handleSubmit}
        ></input>
        <p className="error">{pwError}</p>
        <button
          type="button"
          onClick={handleSubmit}
          className="submit registerbutton"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
