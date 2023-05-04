import React, { useState } from "react";
import "./loginScreen.css";
import SigninScreen from "./SigninScreen";

function LoginScreen() {
  const [showLogIn, setShowLogIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <div className="faded-gradient"></div>
        <div className="loginScreen__nav">
          <img
            className="netflix-logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt=""
          />
          <button className="button signIn" onClick={() => setShowLogIn(true)}>
            Sign In
          </button>{" "}
        </div>
        {showLogIn ? (
          <SigninScreen />
        ) : (
          <div className="loginScreen__content">
            <h1>Unlimited films, Tv programmes and more.</h1>
            <h2>Whatch anywhere. Cancel at anytime.</h2>
            <h3>
              Ready to watch ? Enter your E-mail to create or restart your
              membership.
            </h3>
            <div className="searchBar">
              <input type="search" name="" id="" />
              <button
                className="button getStarted"
                onClick={() => setShowLogIn(true)}
              >
                GET STARTED
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
