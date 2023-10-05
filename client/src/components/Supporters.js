import React, { useEffect, useRef } from 'react';
import './styles/supportersStyle.css';

// svg
import LevelSvg from "../assets/levelSvg.svg"
import AustIndia from "../assets/AustIndia.svg"

const Supporters = () => {


  return (
    <div id="outerContainerSup">
<article className="wrapper">
    <div className="marquee">
      <div className="marquee__group">
        <img src={LevelSvg}/>
        <img src={AustIndia}/>
        <img src={LevelSvg}/>
        <img src={AustIndia}/>
        <img src={AustIndia}/>
      </div>
      <div aria-hidden="true" className="marquee__group">
      <img src={LevelSvg}/>
      <img src={AustIndia}/>
      <img src={LevelSvg}/>
      <img src={AustIndia}/>
      <img src={AustIndia}/>
      </div>
    </div>
    <div className="marquee marquee--reverse">
      <div className="marquee__group">
      <img src={LevelSvg}/>
      <img src={AustIndia}/>
      <img src={LevelSvg}/>
      <img src={AustIndia}/>
      <img src={AustIndia}/>
      </div>
      <div aria-hidden="true" className="marquee__group">
      <img src={LevelSvg}/>
      <img src={AustIndia}/>
      <img src={LevelSvg}/>
      <img src={AustIndia}/>
      <img src={AustIndia}/>

      </div>
    </div>
  </article>

 </div>
  );
};

export default Supporters;
