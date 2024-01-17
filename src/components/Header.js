import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import LogoPng1 from "../assets/whiteLogoSVG.svg";
import LogoPng2 from "../assets/whiteLogoSVG.svg";
import "./styles/headerStyle.css";

export default function Header(props) {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > window.innerHeight * 0.2);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    async function scroll(section) {
        if(props.page === "home") {
            document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false);
        } else {
            await navigate("/")
            document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false);
        }
    }

    return (
        <>
            <div id={scrolled || menuOpen ? "headerScrolled" : "headerInitial"}>
                <img id="headerLogo" src={scrolled ? LogoPng2 : LogoPng1} onClick={() => scroll("heroSection")}></img>
                <div id="headerBtnArea">
                    <div className="headerBtn" onClick={() => scroll("heroSection")}>
                        home
                    </div>
                    <div className="headerBtn" onClick={() => scroll("section1")}>
                        about
                    </div>
                    <div className="headerBtn" onClick={() => scroll("scrollFAQ")}>
                        FAQs
                    </div>
                    <div className="headerBtn" onClick={() => scroll("scollSup")}>
                        supporters
                    </div>
                    <div className="headerBtn" onClick={() => scroll("footer")}>
                        contact
                    </div>
                    <div className="headerBtn" onClick={() => navigate("/news")}>
                        news
                    </div>
                </div>
                <div id="headerActNowBtn" onClick={() => scroll("scollForm")}>
                    act now
                </div>
                <svg onClick={() => setMenuOpen(!menuOpen)} id="menuBtn" style={menuOpen ? { display: "none" } : null} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg onClick={() => setMenuOpen(!menuOpen)} id="menuBtn" style={!menuOpen ? { display: "none" } : null} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            <div id={menuOpen ? "dropDownMenuOpen" : "dropDownMenu"} className="dropDownMenu">
                <div id="menuOptionArea">
                    <div className="menuOption" onClick={() => scroll("heroSection")}>
                        home
                    </div>
                    <div className="menuOption" onClick={() => scroll("section1")}>
                        about
                    </div>
                    <div className="menuOption" onClick={() => scroll("scollSup")}>
                        supporters
                    </div>
                    <div className="menuOption" onClick={() => scroll("footer")}>
                        contact
                    </div>
                    <div className="menuOption" onClick={() => navigate("/news")}>
                        news
                    </div>
                    <div id="actNowMenuBtn" onClick={() => scroll("scollForm")}>
                        act now!
                    </div>
                </div>
            </div>
        </>
    );

}