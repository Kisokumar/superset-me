import { useState, useEffect } from "react";

function Register() {
  const [user, setUser] = useState("");
  // not workingjkjkj
  function updateAndCheckUser(newUser) {
    setUser(newUser);
    return <p>{newUser}</p>;
  }

  return (
    <section className="register">
      <form className="signupform">
        <h2 className="welcome">Welcome to Superset.me</h2>
        <h1 className="signup">Sign Up</h1>
        <input
          onChange={(event) => updateAndCheckUser(event.target.value)}
          type="text"
          placeholder="Username"
          className="field username input"
        />
        <input
          type="text"
          placeholder="Email"
          className="field emailinput input"
        ></input>
        <input
          type="text"
          placeholder="Re-enter Email"
          className="field emailinput input"
        ></input>
        <input
          type="text"
          placeholder="Password"
          className="field passwordinput input"
        ></input>
        <input
          type="text"
          placeholder="Re-enter Password"
          className="field passwordreinput input"
        ></input>
        {/* <button onClick={() => registerUser()}>Submit</button> */}
        <button className="submit registerbutton">Submit</button>
      </form>
    </section>
  );
}

export default Register;
