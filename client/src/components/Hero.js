import React, { useEffect, useState } from "react";
import "./styles/heroStyle.css";
import HeroVid from "../assets/trafic.mp4";



export default function Hero() {
    return (
        <section id="heroSection">
            <div className="heroContent">
                <h1>Keep Round Rock Safe</h1>
                <p>Empower Our Streets, Support Our Shops</p>
            </div>
            {/* Background Video */}
            <div className="video-overlay"></div>
            <video className="video-background" autoPlay muted loop>
                <source src={HeroVid} type="video/mp4" />
            </video>
            <img src="https://testsiterd.kinsta.cloud/wp-content/uploads/2023/04/footer-experiment-Keep-Round-Rock-Safe-04.png" id="logoHero" onClick={() => window.location.reload()}></img>
        </section>
    );
}
