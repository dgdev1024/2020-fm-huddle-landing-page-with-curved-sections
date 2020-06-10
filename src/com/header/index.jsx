import React from "react";
import Logo from "../svg/logo";
import "./index.scss";

const Header = () => (
  <header>
    <div className="fm-container">
      <div className="fm-logo">
        <Logo viewBox="0 0 240 39" />
      </div>
      <button className="fm-try-it-free">Try It Free</button>
    </div>
  </header>
);

export default Header;
