import React, { useEffect, useState } from "react";
import HeroVid from "../../assets/trafic.mp4";
import LogoPng from "../../assets/logo.png";
import "./homeStyle.css";

// Comps 
import Footer from "../../components/Footer"
import Form from "../../components/Form"
import FAQComp from "../../components/FAQComp"
import Supporters from "../../components/Supporters";

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [highlight, setHighlight] = useState(0);

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
            <div id={scrolled || menuOpen ? "headerScrolled" : "headerInitial"}>
                <img id="headerLogo" src={LogoPng} onClick={() => scroll("heroSection")}></img>
                <div id="headerBtnArea">
                    <div className="headerBtn" onClick={() => scroll("heroSection")}>
                        home
                    </div>
                    <div className="headerBtn" onClick={() => scroll("section1")}>
                        about
                    </div>
                    <div className="headerBtn" onClick={() => scroll("section2")}>
                        supporters
                    </div>
                    <div className="headerBtn" onClick={() => scroll("formSection")}>
                        contact
                    </div>
                </div>
                <div id="headerActNowBtn" onClick={() => scroll("formSection")}>
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
                    <div className="menuOption" onClick={() => scroll("section2")}>
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
                            <div id="heroBtn" onClick={() => scroll("formSection")}>
                                <div>
                                    support
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
                {/* <video id="heroVid" autoPlay muted loop>
                    <source src={HeroVid} type="video/mp4" />
                </video> */}
                <img id="heroMedia" src="https://testsiterd.kinsta.cloud/wp-content/uploads/2023/04/Background.png"></img>
            </div>
            <div id="section1">
                <div id="section1Flex">
                    <div id="section1Area">
                        <div id="section1TopText">
                            Our Mission
                        </div>
                        <div id="section1HeaderText">
                            We are a coalition of local businesses advocating for new sign rules
                        </div>
                        <div id="section1SubText">
                            Empower Round Rock with Electronic Message Center (EMC) signs: a pivotal tool for economic growth, heightened public safety, and emergency responsiveness. Restricted to I-35 and SH-45 only, EMC signs respect our city’s serene and scenic areas and will be limited to high-traffic commercial corridors only. Let’s modernize Round Rock’s sign regulations and champion a safer, prosperous future for us all.
                        </div>
                    </div>
                </div>
                <div id="section1ImgFlex">
                    <div id="section1ImgArea">
                        <div className="section1Highlight" id={highlight === 1 ? "highlightOpen" : ""} onMouseEnter={() => setHighlight(1)} onMouseLeave={() => setHighlight(0)}>
                            <div className="highlightBlur">
                                <div className="highlightFade">
                                    <div className="highlightTitle">
                                        enhancing safety
                                    </div>
                                </div>
                                <div className="learnMoreHighlight">
                                    <div className="highlightInfo">
                                        Let’s modernize Round Rock’s sign regulations and champion a safer, prosperous future for us all.
                                    </div>
                                </div>
                                <div className="learnMoreBtn">
                                    <div>
                                        show {highlight === 1 ? "less" : "more"}
                                    </div>
                                    <svg id="learnMoreIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="section1Highlight" id={highlight === 2 ? "highlightOpen" : ""} onMouseEnter={() => setHighlight(2)} onMouseLeave={() => setHighlight(0)}>
                            <div className="highlightBlur">
                                <div className="highlightFade">
                                    <div className="highlightTitle">
                                        promoting growth
                                    </div>
                                </div>
                                <div className="learnMoreHighlight">
                                    <div className="highlightInfo">
                                        Let’s modernize Round Rock’s sign regulations and champion a safer, prosperous future for us all.
                                    </div>
                                </div>
                                <div className="learnMoreBtn">
                                    <div>
                                        show {highlight === 2 ? "less" : "more"}
                                    </div>
                                    <svg id="learnMoreIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="section1Highlight" id={highlight === 3 ? "highlightOpen" : ""} onMouseEnter={() => setHighlight(3)} onMouseLeave={() => setHighlight(0)}>
                            <div className="highlightBlur">
                                <div className="highlightFade">
                                    <div className="highlightTitle">
                                        supporting community
                                    </div>
                                </div>
                                <div className="learnMoreHighlight">
                                    <div className="highlightInfo">
                                        Let’s modernize Round Rock’s sign regulations and champion a safer, prosperous future for us all.
                                    </div>
                                </div>
                                <div className="learnMoreBtn">
                                    <div>
                                        show {highlight === 3 ? "less" : "more"}
                                    </div>
                                    <svg id="learnMoreIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        {/* <img className="section1Img" src="https://testsiterd.kinsta.cloud/wp-content/uploads/2023/04/round-rock-image.jpg"></img>
                        <img className="section1Img" src="https://testsiterd.kinsta.cloud/wp-content/uploads/2023/04/round-rock-image.jpg"></img>
                        <img className="section1Img" src="https://testsiterd.kinsta.cloud/wp-content/uploads/2023/04/round-rock-image.jpg"></img> */}
                    </div>
                </div>
            </div>
            {/* <Supporters/> */}
            <FAQComp/>
            <Supporters/>
            {/* Form */}
            <Form />
            {/* Footer */}
            <Footer />
        </div>
    );
}
