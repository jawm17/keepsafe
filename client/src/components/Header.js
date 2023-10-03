import React, { useEffect, useState } from "react";
import logo from "../assets/keepsafeLogo.jpeg";
import "./styles/headerStyle.css";

export default function Header() {
    const location = "Round Rock";
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
            <div className={`headerNavbar ${scrolled || menuOpen ? 'scrolled' : ''}`}>
                <div id="headerInner">
                    <div id="logoHeader" onClick={() => window.location.reload()}>
                    {/* <img src="https://testsiterd.kinsta.cloud/wp-content/uploads/2023/04/footer-experiment-Keep-Round-Rock-Safe-04.png"></img> */}
                        </div>
                    <div id="headerBtnArea">
                        <div className="headerBtn" onClick={() => window.location.reload()}>
                            home
                        </div>
                        <div className="headerBtn" onClick={() => scroll("actionSection")}>
                            solutions
                        </div>
                        <div className="headerBtn" onClick={() => scroll("supportersSection")}>
                            supporters
                        </div>
                        <div className="headerBtn" onClick={() => scroll("formSection")}>
                            contact
                        </div>
                    </div>
                    <div id="actNowBtn" onClick={() => scroll("formSection")}>
                        act now
                    </div>
                    <svg onClick={() => setMenuOpen(!menuOpen)} id="menuBtn" style={menuOpen ? { display: "none" } : null} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg onClick={() => setMenuOpen(!menuOpen)} id="menuBtn" style={!menuOpen ? { display: "none" } : null} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
            <div id={menuOpen ? "dropDownMenuOpen" : "dropDownMenu"} className="dropDownMenu">
                <div id="menuOptionArea">
                    <div className="menuOption" onClick={() => window.location.reload()}>
                        home
                    </div>
                    <div className="menuOption" onClick={() => scroll("actionSection")}>
                        solutions
                    </div>
                    <div className="menuOption" onClick={() => scroll("supportersSection")}>
                        supporters
                    </div>
                    <div className="menuOption" onClick={() => scroll("formSection")}>
                        contact
                    </div>
                    <div id="actNowMenuBtn" onClick={() => scroll("formSection")}>
                        act now!
                    </div>
                </div>
            </div>
        </div>
    );

}