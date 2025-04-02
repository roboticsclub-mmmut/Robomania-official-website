import React from "react";
import { useState } from "react";
import "./EventStyle.css";
import roboGif from "../../../assets/images/events/robotgif.gif";
import roboGif2 from "../../../assets/images/events/robotgif2.gif";
import NavMenu from "../../../components/NavMenu/NavMenu";
import FooterBar from "../../../components/FooterBar/FooterBar";

const WebQuest = () => {
  const [eform, seteform] = useState(false);

  function handleform() {
    seteform(!eform);
    console.log(eform);
  }

  return (
    <>
      <div className="eventpage-container webq">
        <NavMenu />
        <div className="eventpage-hero">
          <img src={roboGif} alt="robogif" />
          <h1 style={{ color: "white" }}>Dev Quest</h1>
        </div>
        <div class="register-btn upper-register">
        <a href="https://linktr.ee/robotics_.club">REGISTER NOW</a>
        </div>
      </div>
      <div className="eventpage-section">
        <div className="eventpage-description">
          <div class="eventpage-description-left">
            <h2>DESCRIPTION</h2>
            <div class="text-clip"></div>
            <img src={roboGif2} alt="robogif" />
          </div>
          <div class="eventpage-description-right">
            <p>
            For all aspiring developers and tech enthusiasts, Dev Quest is here! Join this where creativity, coding, and problem-solving collide. Team up, innovate, and race against the clock to build groundbreaking solutions. Whether you're a coding pro or a beginner, Dev Quest is the perfect opportunity to push your skills, learn, and compete for amazing rewards.
            </p>
          </div>
        </div>
        <div className="eventpage-description">
          <div class="eventpage-description-left">
            <h2>format</h2>
            <div class="text-clip"></div>
            <img src={roboGif2} alt="robogif" />
          </div>
          <div class="eventpage-description-right">
            <p>Uploaded Soon</p>
          </div>
        </div>
        <div className="eventpage-description">
          <div class="eventpage-description-left">
            <h2>schedule</h2>
            <div class="text-clip"></div>
            <img src={roboGif2} alt="robogif" />
          </div>
          <div class="eventpage-description-right">
            <p>11th - 13th April 2025</p>
          </div>
        </div>
        <div className="event-contact-details">
          <div className="contact-me">
            <h5>
              Anubhav Gupta <span>6386326572</span>
            </h5>
          </div>
          <div className="contact-me">
            <h5>
              Aryan Anand <span>987654321</span>
            </h5>
          </div>
        </div>
      </div>
      <FooterBar />
    </>
  );
};

export default WebQuest;
