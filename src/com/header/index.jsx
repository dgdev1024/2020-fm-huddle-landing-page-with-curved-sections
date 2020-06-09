import React from "react";
import Logo from "../svg/logo";
import "./index.scss";

const Header = ({ toggleDark }) => (
  <header>
    <div className="fm-container">
      <div className="fm-logo">
        <Logo viewBox="0 0 240 39" />
      </div>
      <button className="fm-try-it-free">Try It Free</button>
      <button
        className="fm-dark-mode-toggle"
        aria-label="Toggle Dark Mode"
        onClick={toggleDark}
      >
        <div className="fm-button-notch"></div>
      </button>
    </div>
  </header>
);

export default Header;
