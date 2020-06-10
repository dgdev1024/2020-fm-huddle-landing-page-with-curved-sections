import React from "react";
import ImageScreenMockups from "../../img/screen-mockups.svg";
import IconCommunities from "../../img/icon-communities.svg";
import IconMessages from "../../img/icon-messages.svg";
import "./index.scss";

const HeroSection = () => (
  <section className="fm-hero-section">
    <div className="fm-container">
      <h1>Build The Community Your Fans Will Love</h1>
      <p>
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </p>
      <button className="fm-call-to-action">Get Started For Free</button>
      <img
        className="fm-hero-image"
        src={ImageScreenMockups}
        alt="Build Your Community"
      />
      <div className="fm-statistics-subsection">
        <div className="fm-statistic">
          <img src={IconCommunities} alt="Communities" />
          <p className="fm-statistic-number">1.4k+</p>
          <p className="fm-statistic-name">Communities Formed</p>
        </div>
        <div className="fm-statistic">
          <img src={IconMessages} alt="Messages" />
          <p className="fm-statistic-number">2.7m+</p>
          <p className="fm-statistic-name">Messages Sent</p>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
