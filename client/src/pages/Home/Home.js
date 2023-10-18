import React, { useEffect, useState, useRef } from "react";
import LogoPng from "../../assets/whiteLogoSVG.svg";
import FlagJpeg from "../../assets/Americanflag.png";
import HeroBG from "../../assets/heroBG.mp4";
import "./homeStyle.css";

// Comps
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import FAQComp from "../../components/FAQComp";
import Supporters from "../../components/Supporters";
import KeyPoints from "../../components/KeyPoints";
import Interviews from "../../components/Interviews";



export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [highlight, setHighlight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scroll(section) {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }
  // ================
  // video
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Hero */}
      {/* <img id="img23" src="../../assets/flag.png"/> */}
      <div id="heroSection">
        <div id="heroFlex">
          <div id="heroArea">
            <div id="heroLogoFlex">
              <div className="heroLogoLine left"></div>
              <img src={LogoPng} id="heroLogo"></img>
              <div className="heroLogoLine right"></div>
            </div>
            <div id="heroText1">
              Supporting Common Sense Sign
              <mark id="boldHeroText"> Regulation Updates in Round Rock</mark>
            </div>
            <KeyPoints/>

            <div id="heroBtnFlex">
              <div id="heroBtn" onClick={() => scroll("scollForm")}>
                <div>Learn More</div>
                <svg
                  id="actNowArrow"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div id="heroTextFlex">
          <div id="heroText"></div>
        </div>

        <div id="heroVideoContainer">
        <video id="heroMedia"
          loop
          muted
          src={HeroBG}
          ref={videoEl}
        />
        </div>
      <div id="flagConatiner">
        <img src={FlagJpeg}/>
      </div>
      </div>
      <div id="section1">
        <div id="section1Flex">
          <div id="section1Area">
            <div id="section1TopText">About Us</div>
            <div id="section1HeaderText">
              We are a coalition in Round Rock of local businesses advocating
              for new sign rules
            </div>
            <div id="section1SubText">
              Electronic Message Center (EMC) signs are an effective and modern
              tool for economic growth, heightened public safety, and emergency
              responsiveness. Round Rock city leadership agrees with us, and has
              already allowed EMCs for the Round Rock Express and Kalahari
              Resort. But our coalition believes that this technology should be
              available for businesses of all sizes. We are proposing that Round
              Rock leadership expand access to EMCs by allowing a limited number
              (12) of these signs to be installed along I-35 and SH-45 only.
              Restricting signs to these highways will respect our city’s serene
              and scenic areas and neighborhoods by keeping them in the
              commercial and high-traffic corridors where they are most
              appropriate. Please consider supporting our coalition of local
              businesses and help us modernize Round Rock’s sign regulations and
              champion a safer and more prosperous future for us all.
            </div>
          </div>
        </div>
        <div id="section1ImgFlex">
          <div id="section1ImgArea">
            <div
              className="section1Highlight"
              id={highlight === 1 ? "highlightOpen" : ""}
              onMouseEnter={() => setHighlight(1)}
              onMouseLeave={() => setHighlight(0)}
            >
              <div className="highlightBlur">
                <div className="highlightFade">
                  <div className="highlightTitle">enhancing safety</div>
                </div>
                <div className="learnMoreHighlight">
                  <div className="highlightInfo">
                    EMCs can be programmed remotely to display critical
                    emergency messages at a moment’s notice.
                  </div>
                </div>
                <div className="learnMoreBtn">
                  <div>show {highlight === 1 ? "less" : "more"}</div>
                  <svg
                    id="learnMoreIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="section1Highlight"
              id={highlight === 2 ? "highlightOpen" : ""}
              onMouseEnter={() => setHighlight(2)}
              onMouseLeave={() => setHighlight(0)}
            >
              <div className="highlightBlur">
                <div className="highlightFade">
                  <div className="highlightTitle">promoting growth</div>
                </div>
                <div className="learnMoreHighlight">
                  <div className="highlightInfo">
                    Allow local businesses to reach the 7,500,000 vehicles per
                    month that travel through Round Rock.
                  </div>
                </div>
                <div className="learnMoreBtn">
                  <div>show {highlight === 2 ? "less" : "more"}</div>
                  <svg
                    id="learnMoreIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="section1Highlight"
              id={highlight === 3 ? "highlightOpen" : ""}
              onMouseEnter={() => setHighlight(3)}
              onMouseLeave={() => setHighlight(0)}
            >
              <div className="highlightBlur">
                <div className="highlightFade">
                  <div className="highlightTitle">supporting community</div>
                </div>
                <div className="learnMoreHighlight">
                  <div className="highlightInfo">
                    Business growth will stimulate our local economy, drive
                    sales tax receipts, and create new jobs.
                  </div>
                </div>
                <div className="learnMoreBtn">
                  <div>show {highlight === 3 ? "less" : "more"}</div>
                  <svg
                    id="learnMoreIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ */}
      <div id="scrollFAQ">
        <FAQComp />
      </div>
      <div id="scollSup">
        <Supporters />
      </div>
      {/* Form */}
      <div id="scollForm">
        <Form />
      </div>
      {/* Interviews */}
      {/* <Interviews/> */}
      {/* Footer */}
      <Footer />
    </div>
  );
}
