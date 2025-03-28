import React, { useState } from 'react'
import "./EventStyle.css";
import roboGif from "../../../assets/images/events/robotgif.gif";
import roboGif2 from "../../../assets/images/events/robotgif2.gif";
import NavMenu from '../../../components/NavMenu/NavMenu';
import FooterBar from '../../../components/FooterBar/FooterBar';

const Robowar = () => {

  const [eform,seteform]=useState(false);

  function handleform(){
      seteform(!eform);
      console.log(eform);
  }

  return (
    <>
      <div className="eventpage-container rw">
        <NavMenu />
        <div className="eventpage-hero">
          <img src={roboGif} alt="robogif" />
          <h1 style={{color: "white"}}>Robo War</h1>
        </div>
        <div class="register-btn upper-register">
        <a href="https://linktr.ee/Robomania23">REGISTER NOW</a>
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
            {/* If you spend hours playing counter strike, <strong>Laser Strike</strong> is the one for you. A simulation of counter strike, it leaves you thrilled and amazed. Two teams will be fighting simultaneously with the help of a sensor kit and a laser kit and members of one team will have to kill the members of the enemy team. */}
            If you love <strong> Battle Bots </strong> and their epic battles, this is the perfect place for you! Bring your own bot and see whose battle monster comes out on top. Watch as teams go head-to-head, showcasing their creations in a thrilling fight for victory. Only the most innovative and strategic robots will emerge as champions.
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

export default Robowar