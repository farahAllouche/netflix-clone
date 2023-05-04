import React, { useRef } from "react";
import "./signinScreen.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

function SignupForm() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signInHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        console.log("Sign in Failed", err.message);
      });
  };

  const registerHandler = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        console.log("Register Failed", err.message);
      });
  };

  return (
    <div className="signInScreen">
      <form action="">
        <h2>Sign In</h2>
        <input type="email" placeholder="Email" ref={emailRef} />
        <input type="password" placeholder="Password" ref={passwordRef} />
        <button type="submit" onClick={signInHandler}>
          Sign In
        </button>
        <div className="go__signup">
          <span>
            New to Netflix
            <a href="#" onClick={registerHandler}>
              {" "}
              Sign up now !{" "}
            </a>
          </span>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
