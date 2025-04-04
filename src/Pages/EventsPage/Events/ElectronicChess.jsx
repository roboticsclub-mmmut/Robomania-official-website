import React from 'react'
import { useState } from "react";

import "./EventStyle.css";
import roboGif from "../../../assets/images/events/robotgif.gif";
import roboGif2 from "../../../assets/images/events/robotgif2.gif";
import NavMenu from '../../../components/NavMenu/NavMenu';
import FooterBar from '../../../components/FooterBar/FooterBar';
import { color } from 'framer-motion';

const ElectronicChess = () => {

  const [eform,seteform]=useState(false);

  function handleform(){
      seteform(!eform);
      console.log(eform);
  }

  return (
    <>
      <div className="eventpage-container echess">
        <NavMenu />
        <div className="eventpage-hero">
          <img src={roboGif} alt="robogif" />
          <h1 style={{color: "white"}}>Electronic Chess</h1>

        </div>
        <div class="register-btn upper-register">
        <a href="https://linktr.ee/robotics_.club" target='_blank'>REGISTER NOW</a>
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
            {/* Such a game decoys played with endeavour and interest. Get ready to compete with the opponent. Lets change the doomsday scenerio about the people loosing interest in chess.We welcome you with one of the most popular event i.e <strong>Electronic Chess</strong>,so lets confront the human creativity which was more paramount. track the path through the glowing LED's to beat your opponent.Let be the czar of the black and white battlefield. */}
            If you're a fan of <strong>chess</strong> and love technology, this is the event for you. Experience a unique twist on the classic game as electronics is infused into every move. Watch as chess pieces come to life with sensors and motors, adding a whole new level of strategy and excitement. Bring your skills and your strategy, and see how you stack up in this high-tech chess battle.
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
            <p>
              Uploaded Soon
            </p>
          </div>
        </div>
        <div className="eventpage-description">
          <div class="eventpage-description-left">
            <h2>schedule</h2>
            <div class="text-clip"></div>
            <img src={roboGif2} alt="robogif" />
          </div>
          <div class="eventpage-description-right">
          <p>
          11th - 13th April 2025
            </p>
          </div>
        </div>
        <div className="event-contact-details">
        <div className="contact-me">
            <h5>
              Nitesh Rawat <span>8090684923</span>
            </h5>
          </div>
          <div className="contact-me">
            <h5>
              Aryan Anand <span>987654321</span>
            </h5>
          </div>
        </div>

      </div>
      <FooterBar/>
    </>
  )
}

export default ElectronicChess