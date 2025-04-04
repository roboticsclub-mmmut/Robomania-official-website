import React from "react";
import "./EventsStyle.css";
// import Plx from "react-plx";
import { motion } from "framer-motion";
import rbText from "../../assets/images/events/Text.png";
import rbRobot from "../../assets/images/general/bg-robomania.png";
import laserStrike from "../../assets/images/events/LS.jpeg";
import etekken from "../../assets/images/events/ET.png";
import nfs from '../../assets/images/events/NFS.jpeg'
import shl from '../../assets/images/events/Sherlocked.jpeg'
import chess from '../../assets/images/events/EChess.png'
import eart from '../../assets/images/events/EA.png'
import maze from '../../assets/images/events/Maze.jpeg'
import ctd from '../../assets/images/events/ctd.png'
import webq from '../../assets/images/events/DQ.png'
import bmb from '../../assets/images/events/Bomb.png'
import NavMenu from "../../components/NavMenu/NavMenu";
import drone from "../../assets/images/events/HH.png"
import FooterBar from "../../components/FooterBar/FooterBar";
import Robowar from "../../assets/images/events/RW.png"
import robosoccer from "../../assets/images/events/robosocer landscape.png"

const EventsPage = () => {
  return (
    <>
      <div className="eventPage-container">
        <NavMenu />
        <div className="events-landing">
          <div className="events-items">
            <img src={rbText} className="rb-text" alt="" />
            <p className="robo-para">
            Robomania is the coalescence of caliber and rewards, technical expertise and valor where budding engineers and technology enthusiasts can showcase their innovative ideas and skills. Participants have the opportunity to collaborate with other like-minded individuals. Robomania is a must-attend event for anyone interested in pushing the boundaries of what is possible in the field of robotics.
            </p>
            <div>
              <a href="#Events" className="btn-robomania">
                <div>Explore</div>
              </a>
            </div>
          </div>
          <div className="landing-details">
            <div className="landing-icons licon1">
              <p>50K+</p>
              <p>
                <i></i>Prize Money
              </p>
            </div>
            <div className="landing-icons licon2">
              <p>25+</p>
              <p>
                <i></i>Events
              </p>
            </div>
            <div className="landing-icons licon3">
              <p>42K+</p>
              <p>
                <i></i>Participants
              </p>
            </div>
          </div>
          {/* <Plx
        parallaxData={[
          {
            start: 0,
            end: 100,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity"
              },
            ]
          }
        ]}
      >
          <img src={rbRobot} className="rc-robot" alt="" />
          </Plx> */}
        </div>
        <div className="rb-events Robowar" id="Events">
          <motion.h2
            className="ls-text"
            animate={{ x: [0, -100, 0], opacity: 0.9, scale: 0.9 }}
            transition={{
              duration: 5,
              delay: 0.3,
              ease: [0.5, 0.71, 1, 1.5],
              repeat: Infinity,
            }}
            initial={{ opacity: 0.7, scale: 0.7 }}
            whileHover={{ scale: 1.1 }}
          >
            RoboWar
          </motion.h2>
          <a href="robowar">
          <img src={Robowar} className="rcevent-img rs-img" alt="" />
          </a>
          {/* <div className="events-btn">
            <div className="laser-btn">
              <a href="robowar">View Event</a>
            </div>
          </div> */}
        </div>
        <div className="rb-events sher-lock">
          <motion.h2
            className="rs-text"
            animate={{ x: [50, 150, 50], opacity: 0.9, scale: 0.9 }}
            transition={{
              duration: 5,
              delay: 0.3,
              ease: [0.5, 0.71, 1, 1.5],
              repeat: Infinity,
            }}
            initial={{ opacity: 0.7, scale: 0.7 }}
            whileHover={{ scale: 1.1 }}
          >
            Sherlocked <br></br>
            <span></span>{" "}
          </motion.h2>
          <a href="sherlocked">
          <img src={shl} className="rcevent-img ls-img" alt="" />
          </a>
          {/* <div className="events-btn">
            <div className="laser-btn">
              <a href="sherlocked">View Event</a>
            </div>
          </div> */}
        </div>
        <div className="rb-events laser-strike" id="laserStrike">
        <motion.h2
            className="ls-text"
            animate={{ x: [0, -100, 0], opacity: 0.9, scale: 0.9 }}
            transition={{
              duration: 5,
              delay: 0.3,
              ease: [0.5, 0.71, 1, 1.5],
              repeat: Infinity,
            }}
            initial={{ opacity: 0.7, scale: 0.7 }}
            whileHover={{ scale: 1.1 }}
          >
          Laser Strike
          </motion.h2>
          <a href="laserstrike">
          <img src={laserStrike} className="rcevent-img rs-img" alt=""   />
          </a>
          {/* <div className="events-btn">
            <div className="laser-btn">
              <a href="laserstrike">View Event</a>
            </div>
          </div> */}
        </div>
        <div className="rb-events etekken">
          <motion.h2
            className="rs-text"
            animate={{ x: [50, 150, 50], opacity: 0.9, scale: 0.9 }}
            transition={{
              duration: 5,
              delay: 0.3,
              ease: [0.5, 0.71, 1, 1.5],
              repeat: Infinity,
            }}
            initial={{ opacity: 0.7, scale: 0.7 }}
            whileHover={{ scale: 1.1 }}
          >
Electro Tekken
          </motion.h2>
          <a href="electrotekken">
          <img src={etekken} className="rcevent-img ls-img" alt="" />
          </a>
          {/* <div className="events-btn">
            <div className="laser-btn">
              <a href="electrotekken">View Event</a>
            </div>
          </div> */}
        </div>
        <div className="rb-events electro-nfs">
          <motion.h2
            className="ls-text"
            animate={{ x: [0, -100, 0], opacity: 0.9, scale: 0.9 }}
            transition={{
              duration: 5,
              delay: 0.3,
              ease: [0.5, 0.71, 1, 1.5],
              repeat: Infinity,
            }}
            initial={{ opacity: 0.7, scale: 0.7 }}
            whileHover={{ scale: 1.1 }}
          >
Electro NFS
          </motion.h2>
          <a href="electronfs">
          <img src={nfs} className="rcevent-img rs-img" alt="" />
          </a>
          {/* <div className="events-btn">
            <div className="laser-btn">
              <a href="electronfs">View Event</a>
            </div>
          </div> */}
        </div>
        <div className="rb-events bomb-diff">
        <motion.h2
            className="rs-text"
            animate={{ x: [50, 150, 50], opacity: 0.9, scale: 0.9 }}
            transition={{
              duration: 5,
              delay: 0.3,
              ease: [0.5, 0.71, 1, 1.5],
              repeat: Infinity,
            }}
            initial={{ opacity: 0.7, scale: 0.7 }}
            whileHover={{ scale: 1.1 }}
          >
Bomb Diffusion
          </motion.h2>
          <a href="bombdiffusion">
            <img src={bmb} className="rcevent-img ls-img" alt="" />
          </a>
          
          {/* <div className="events-btn">
            <div className="laser-btn">
              <a href="bombdiffusion">View Event</a>
            </div>
          </div> */}
        </div>
        <div className="rb-events robo-soccer">
          <motion.h2
            className="ls-text"
            animate={{ x: [0, -100, 0], opacity: 0.9, scale: 0.9 }}
            transition={{
              duration: 5,
              delay: 0.3,
              ease: [0.5, 0.71, 1, 1.5],
              repeat: Infinity,
            }}
            initial={{ opacity: 0.7, scale: 0.7 }}
            whileHover={{ scale: 1.1 }}
          >
            Robosoccer
          </motion.h2>
          <a href="robosoccer">
            <img src={robosoccer} className="rcevent-img rs-img" alt="" />
          </a>  
          {/* <div className="events-btn">
            <div className="laser-btn">
              <a href="robosoccer">View Event</a>
            </div>
          </div> */}
        </div>
        <div className="rb-events electro-chess">
        <motion.h2
            className="rs-text"
            animate={{ x: [50, 150, 50], opacity: 0.9, scale: 0.9 }}
            transition={{
              duration: 5,
              delay: 0.3,
              ease: [0.5, 0.71, 1, 1.5],
              repeat: Infinity,
            }}
            initial={{ opacity: 0.7, scale: 0.7 }}
            whileHover={{ scale: 1.1 }}
          >
Electronic Chess
          </motion.h2>
          <a href="electronicchess">
          <img src={chess} className="rcevent-img ls-img" alt="" />
          </a>
          {/* <div className="events-btn">
            <div className="laser-btn">
              <a href="electronicchess">View Event</a>
            </div>
          </div> */}
        </div>
        <div className="rb-events web-quest">
        <motion.h2
            className="ls-text"
            animate={{ x: [0, -100, 0], opacity: 0.9, scale: 0.9 }}
            transition={{
              duration: 5,
              delay: 0.3,
              ease: [0.5, 0.71, 1, 1.5],
              repeat: Infinity,
            }}
            initial={{ opacity: 0.7, scale: 0.7 }}
            whileHover={{ scale: 1.1 }}
          >
Dev Quest
          </motion.h2>
          <a href="webquest">
            <img src={webq} className="rcevent-img rs-img" alt="" />
          </a>
          {/* <div className="events-btn">
            <div className="laser-btn">
              <a href="webquest">View Event</a>
            </div>
          </div> */}
        </div>
        <div className="rb-events electro-maze">
          <motion.h2
            className="rs-text"
            animate={{ x: [50, 150, 50], opacity: 0.9, scale: 0.9 }}
            transition={{
              duration: 5,
              delay: 0.3,
              ease: [0.5, 0.71, 1, 1.5],
              repeat: Infinity,
            }}
            initial={{ opacity: 0.7, scale: 0.7 }}
            whileHover={{ scale: 1.1 }}
          >
Electronic Maze
          </motion.h2>
          <a href="ElectronicMaze">
          <img src={maze} className="rcevent-img ls-img" alt="" />
          </a>
          {/* <div className="events-btn">
            <div className="laser-btn">
              <a href="electronicart">View Event</a>
            </div>
          </div> */}
        </div>
        <div className="rb-events electro-art">
          <motion.h2
            className="ls-text"
            animate={{ x: [0, -100, 0], opacity: 0.9, scale: 0.9 }}
            transition={{
              duration: 5,
              delay: 0.3,
              ease: [0.5, 0.71, 1, 1.5],
              repeat: Infinity,
            }}
            initial={{ opacity: 0.7, scale: 0.7 }}
            whileHover={{ scale: 1.1 }}
          >
Electronic Art
          </motion.h2>
          <a href="electronicart">
          <img src={eart} className="rcevent-img rs-img" alt="" />
          </a>
          {/* <div className="events-btn">
            <div className="laser-btn">
              <a href="electronicart">View Event</a>
            </div>
          </div> */}
        </div>
        {/* <div className="rb-events clad-code">
          <motion.h2
            className="ls-text"
            animate={{ x: [0, -100, 0], opacity: 0.9, scale: 0.9 }}
            transition={{
              duration: 5,
              delay: 0.3,
              ease: [0.5, 0.71, 1, 1.5],
              repeat: Infinity,
            }}
            initial={{ opacity: 0.7, scale: 0.7 }}
            whileHover={{ scale: 1.1 }}
          >
            Cladding <br></br>
            <span>the code</span>{" "}
          </motion.h2>
          <img src={ctd} className="rcevent-img rs-img" alt="" />
          <div className="events-btn">
            <div className="laser-btn">
              <a href="claddingcode">View Event</a>
            </div>
          </div>
        </div> */}
        <div className="rb-events electro-nfs">
        <motion.h2
            className="rs-text"
            animate={{ x: [50, 150, 50], opacity: 0.9, scale: 0.9 }}
            transition={{
              duration: 5,
              delay: 0.3,
              ease: [0.5, 0.71, 1, 1.5],
              repeat: Infinity,
            }}
            initial={{ opacity: 0.7, scale: 0.7 }}
            whileHover={{ scale: 1.1 }}
          >
            Hover Hawk
          </motion.h2>
          <a href="HoverHawk">
          <img src={drone} className="rcevent-img ls-img" alt="" />
          </a>
          {/* <div className="events-btn">
            <div className="laser-btn">
              <a href="hh">View Event</a>
            </div>
          </div> */}
        </div>
       
      </div>
      <FooterBar />
    </>
  );
};

export default EventsPage;
