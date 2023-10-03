import React, { useEffect, useState } from "react";
import HeroVid from "../../assets/trafic.mp4";
import LogoPng from "../../assets/logo.png";
import "./homeStyle.css";

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > window.innerHeight * 0.1);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function scroll(section) {
        document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    }

    return (
        <div>
            <div id="header">

            </div>

            <div id="heroSection">
                <div id="heroFlex">
                    <div id="heroArea">
                        <div id="heroLogoFlex">
                            <div className="heroLogoLine"></div>
                            <img src={LogoPng} id="heroLogo"></img>
                            <div className="heroLogoLine"></div>
                        </div>
                        <div id="heroText1">
                            Building Value at the Intersection of <mark id="boldHeroText">Law, Business and Community</mark>
                        </div>
                        <div id="heroBtnFlex">
                            <div id="heroBtn" onClick={() => alert("ok")}>
                                <div>
                                    act now
                                </div>
                                <svg id="actNowArrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="heroTextFlex">
                    <div id="heroText">

                    </div>
                </div>
                <video id="heroVid" autoPlay muted loop>
                    <source src={HeroVid} type="video/mp4" />
                </video>
            </div>

            <div id="section1">

            </div>
        </div>
    );
}
