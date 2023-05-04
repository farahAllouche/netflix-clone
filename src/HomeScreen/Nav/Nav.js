import React, { useState, useEffect } from "react";
import "./nav.css";

function Nav() {
  const [show, setShow] = useState(false);

  const transtitionNavBar = () => {
    if (window.scrollY > 100) setShow(true);
    else setShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", transtitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__content">
        <img
          className="nav__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflix logo"
        />
        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
          alt="user avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
