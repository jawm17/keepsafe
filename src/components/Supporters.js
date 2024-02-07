import React, { useEffect, useRef } from "react";
import "./styles/supportersStyle.css";
import data from "../assets/supportersImgs.json";

const Supporters = () => {
  return (
    <div id="outerContainerSup">
      <h1>COALITION MEMBERS</h1>
      <div className="slider">
        <div className="slide-track">
          {data.logos1.map((logo, key) => {
            return (
              <div key={key} className="slide">
                <img id={"bish1-" + key} src={logo} width="170" alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="slider" id="sliderRevers">
        <div className="slide-track" id="trackRevers">
          {data.logos2.map((logo, key) => {
            return (
              <div key={key} className="slide">
                <img id={"bish2-" + key} src={logo} width="170" alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Supporters;
