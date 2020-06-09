import React from "react";
import IconPhone from "../svg/icon-phone";
import IconEmail from "../svg/icon-email";
import Logo from "../svg/logo";
import "./index.scss";

const Footer = () => (
  <footer>
    <div className="fm-container">
      <div className="fm-newsletter-subsection">
        <h3>Newsletter</h3>
        <p>
          To receive tips on how to grow your community, sign up to our weekly
          newsletter. We'll never send you span or pass on your email address.
        </p>
        <div className="fm-form">
          <input
            type="email"
            aria-label="Email Address"
            placeholder="email@example.com"
          />
          <button type="button">Subscribe</button>
        </div>
      </div>
      <div className="fm-form-body-subsection">
        <Logo viewBox="0 0 240 39" />
        <p className="fm-address">8933 Your Square, Everywhere, NY 99999</p>
        <p>
          <IconPhone className="fm-icon-phone" /> Phone: +1-543-123-4567
        </p>
        <p>
          <IconEmail className="fm-icon-email" /> contact@huddle.com
        </p>
        <div className="fm-social-links">
          <a href="#">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter-square"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
