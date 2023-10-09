import React, { useEffect, useState } from "react";
import HeroVid from "../../assets/trafic.mp4";
import LogoPng from "../../assets/logo.png";
import "./homeStyle.css";

// Comps
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import FAQComp from "../../components/FAQComp";
import Supporters from "../../components/Supporters";
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

  return (
    <div>
      {/* Header */}
      <Header />
      {/* Hero */}
      <div id="heroSection">
        <div id="heroFlex">
          <div id="heroArea">
            <div id="heroLogoFlex">
              <div className="heroLogoLine left"></div>
              <img src={LogoPng} id="heroLogo"></img>
              <div className="heroLogoLine right"></div>
            </div>
            <div id="heroText1">
              Building Value at the Intersection of{" "}
              <mark id="boldHeroText">Law, Business and Community</mark>
            </div>
            <div id="heroBtnFlex">
              <div id="heroBtn" onClick={() => scroll("formSection")}>
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
        {/* <video id="heroVid" autoPlay muted loop>
                    <source src={HeroVid} type="video/mp4" />
                </video> */}
        <img
          id="heroMedia"
          src="https://testsiterd.kinsta.cloud/wp-content/uploads/2023/04/Background.png"
        ></img>
      </div>
      <div id="section1">
        <div id="section1Flex">
          <div id="section1Area">
            <div id="section1TopText">Our Mission</div>
            <div id="section1HeaderText">
              We are a coalition of local businesses advocating for new sign
              rules
            </div>
            <div id="section1SubText">
              Empower Round Rock with Electronic Message Center (EMC) signs: a
              pivotal tool for economic growth, heightened public safety, and
              emergency responsiveness. Restricted to I-35 and SH-45 only, EMC
              signs respect our city’s serene and scenic areas and will be
              limited to high-traffic commercial corridors only. Let’s modernize
              Round Rock’s sign regulations and champion a safer, prosperous
              future for us all.
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
                    Let’s modernize Round Rock’s sign regulations and champion a
                    safer, prosperous future for us all.
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
                    Let’s modernize Round Rock’s sign regulations and champion a
                    safer, prosperous future for us all.
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
                    Let’s modernize Round Rock’s sign regulations and champion a
                    safer, prosperous future for us all.
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
      <FAQComp />
      {/* <Supporters/> */}
      <Supporters />
      {/* Form */}
      <Form />
      {/* Interviews */}
      {/* <Interviews/> */}
      {/* Footer */}
      <Footer />
    </div>
  );
}
