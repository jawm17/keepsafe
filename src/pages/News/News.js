import React, { useEffect, useState, useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LogoPng from "../../assets/whiteLogoSVG.svg";
import FlagJpeg from "../../assets/Americanflag.png";

import "./newsStyle.css";


export default function News() {
  // ================
  // video
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };
  useEffect(() => {
    attemptPlay();
  }, []);
    return (
        <div>
            <Header />
    {/* Hero */}
      <div id="infoHeroSection">
          <div className="infoHighlightFade">
        <div id="infoHeroFlex">
          <div id="infoHeroArea">

          <div id="infoHeroLogoFlex">
              <div className="infoHeroLogoLine left"></div>
              <img src={LogoPng} id="infoHeroLogo" alt="logo"></img>
              <div className="infoHeroLogoLine right"></div>
            </div>
          
            <div id="infoHeroText1">
                Law Enforcement, Emergencies <br />
                Digital Billboards
            </div>
            </div>

          </div>
        </div>

        {/* <div id="infoFlagConatiner">
          <img src={FlagJpeg} alt="flag" />
        </div> */}
      </div>
            {/* <div id="infoHero-container">
            <div>
            Law Enforcement, Emergencies and Digital Billboards
            </div>
            </div> */}
        </div>
    );
}