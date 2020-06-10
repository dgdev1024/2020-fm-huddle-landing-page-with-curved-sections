import React from "react";
import ImageGrowTogether from "../../img/illustration-grow-together.svg";
import ImageFlowingConversations from "../../img/illustration-flowing-conversation.svg";
import ImageYourUsers from "../../img/illustration-your-users.svg";
import "./index.scss";

const FeaturesSection = () => (
  <div className="fm-features-section">
    <div className="fm-subsection fm-grow-subsection">
      <div className="fm-container">
        <img src={ImageGrowTogether} alt="Grow Together" />
        <div className="fm-caption">
          <h2>Grow Together</h2>
          <p>
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.
          </p>
        </div>
      </div>
    </div>
    <div className="fm-subsection fm-alternating fm-flowing-subsection">
      <div className="fm-container">
        <img src={ImageFlowingConversations} alt="Flowing Conversations" />
        <div className="fm-caption">
          <h2>Flowing Conversations</h2>
          <p>
            You wouldn't paginate a conversation in real life, so why do it
            online? Our threads have just-in-time loading for a more natural
            flow.
          </p>
        </div>
      </div>
    </div>
    <div className="fm-subsection fm-users-subsection">
      <div className="fm-container">
        <img src={ImageYourUsers} alt="Your Users" />
        <div className="fm-caption">
          <h2>Your Users</h2>
          <p>
            It takes no time at all to integrate Huddle with your app's
            authentication solution. This means, once signed in to your app,
            your users can start chatting immediately.
          </p>
        </div>
      </div>
    </div>
    <div className="fm-cta-subsection">
      <div className="fm-container">
        <h2>Ready To Build Your Community?</h2>
        <button className="fm-call-to-action">Get Started For Free</button>
      </div>
    </div>
  </div>
);

export default FeaturesSection;
