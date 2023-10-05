import React, { useEffect, useRef } from 'react';
import './styles/supportersStyle.css';

// svg
import LevelSvg from "../assets/levelSvg.svg"
import AustIndia from "../assets/AustIndia.svg"
import StarCandy from "../assets/3StarCandy-01.png"
import Years25 from "../assets/25Years.png"
import Buffet from "../assets/Buffet.png"
import Cajun from "../assets/Cajun.png"
import Centro from "../assets/Centro.png"
import CleanEatz from "../assets/CleanEatz.png"
import Finleys from "../assets/Finleys.png"
import Ginos from "../assets/Ginos.png"
import HAIRSALON from "../assets/HAIRSALON.png"
import HURRICANE from "../assets/HURRICANE.png"
import JerseyMikes from "../assets/JerseyMikes.png"
import KenneyFort from "../assets/KenneyFort.png"
import LaConcha from "../assets/LaConcha.png"
import LAMPPOST from "../assets/LAMPPOST.png"
import LibertyBarbeque from "../assets/LibertyBarbeque.png"
import MicroBac from "../assets/MicroBac.png"
import MOD from "../assets/MOD.png"
import Palermo from "../assets/Palermo.png"
import Razzoos from "../assets/Razzoos.png"
import RioGrande from "../assets/RioGrande.png"
import ROUNDRISK from "../assets/ROUNDRISK.png"
import Santiagos from "../assets/Santiagos.png"
import SMOKEHOUSE from "../assets/SMOKEHOUSE.png"
import SnackRoom from "../assets/SnackRoom.png"
import Tequila from "../assets/Tequila.png"
import Tokyo from "../assets/Tokyo.png"
import UrbanCreetside from "../assets/UrbanCreetside.png"
import UrbanRoof from "../assets/UrbanRoof.png"
import URBAN from "../assets/URBAN.png"
import WARPATHPIZZA from "../assets/WARPATHPIZZA.png"


const Supporters = () => {


  return (
    <div id="outerContainerSup">
      <h1>TRUSTED BY</h1>
<article className="wrapper">
    <div className="marquee">
      <div className="marquee__group">
        <img src={LevelSvg}/>
        <img src={AustIndia}/>
        <img src={StarCandy}/>
        <img src={Years25}/>
        <img src={Buffet}/>
        <img src={Razzoos}/>
        <img src={SMOKEHOUSE}/>
        <img className="whiteLogo" src={UrbanCreetside}/>
      </div>
      <div aria-hidden="true" className="marquee__group">
      <img src={Cajun}/>
      <img className="whiteLogo" src={Centro}/>
      <img src={CleanEatz}/>
      <img className="whiteLogo" src={Finleys}/>
      <img src={Ginos}/>
      <img src={RioGrande}/>
      <img src={SnackRoom}/>
      <img src={UrbanRoof}/>
      </div>
    </div>
    <div className="marquee marquee--reverse">
      <div className="marquee__group">
      <img src={HAIRSALON}/>
      <img src={HURRICANE}/>
      <img src={JerseyMikes}/>
      <img src={KenneyFort}/>
      <img src={LaConcha}/>
      <img className="whiteLogo" src={ROUNDRISK}/>
      <img src={Tequila}/>
      <img src={URBAN}/>
      </div>
      <div aria-hidden="true" className="marquee__group">
      <img className="whiteLogo" src={LAMPPOST}/>
      <img src={LibertyBarbeque}/>
      <img src={MicroBac}/>
      <img className="whiteLogo" src={MOD}/>
      <img src={Palermo}/>
      <img src={Santiagos}/>
      <img src={Tokyo}/>
      <img src={WARPATHPIZZA}/>
      </div>
    </div>
  </article>

 </div>
  );
};

export default Supporters;
