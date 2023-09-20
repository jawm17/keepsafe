import React, { useState } from "react";
import "./homeStyle.css";
// import logo from "../../assets/keepsafeLogo.jpeg";
import Header from "../../components/Header";
import HeroVid from "./trafic.mp4"

export default function Home() {
  const location = "Round Rock";
  const [menuOpen, setMenuOpen] = useState(true);
  const [selectedQuestion, setSelectedQuestion] = useState(0);

  return (
    <div id="homePage">
      <Header />
      {/* ====== Hero ====== */}        
     

      <div className="video-hero-container">
            <video className="video-background" autoPlay muted loop>
                <source src={HeroVid} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="video-overlay"></div>
            <div className="video-content">
                {/* Add your content here, e.g., title, subtitle, button */}
                <h1>Keep Round Rock Safe</h1>
                <p>Empower Our Streets, Support Our Shops</p>

                {/* <p> a vibrant collaboration of local businesses. We're pioneering new sign guidelines to bolster safety and drive economic vitality in Round Rock.</p> */}
            </div>
        </div> 
                <img src="https://testsiterd.kinsta.cloud/wp-content/uploads/2023/04/footer-experiment-Keep-Round-Rock-Safe-04.png"id="logoHero" onClick={() => window.location.reload()}></img>
        <div id="wave">
        <div className="wavy-section">
        </div>
</div>
      <div id="infoSection">
        <div id="infoText">
          Empower {location} with Electronic Message Center (EMC) signs: a pivotal tool for economic growth, heightened public safety, and emergency responsiveness. Restricted to I-35 and SH-45 only, EMC signs respect our city’s serene and scenic areas and will be limited to high-traffic commercial corridors only. Let’s modernize {location}’s sign regulations and champion a safer, prosperous future for us all.
        </div>
        <div className="infoImgFlex">
          <img id="infoImg1" src="https://testsiterd.kinsta.cloud/wp-content/uploads/2023/04/CORR_WEB_LOGO-1.webp"></img>
        </div>
        <div className="infoImgFlex">
          <img id="infoImg2" src="https://testsiterd.kinsta.cloud/wp-content/uploads/2023/04/round-rock-image.jpg"></img>
        </div>
      </div>
      <div id="faqSection">
        <div id="faqTitle">
          FAQ's
        </div>
        <div className="questionBox" onClick={() => setSelectedQuestion(1)} id={selectedQuestion === 1 ? "selectedQuestion" : null}>
          <div className="question">
            Q: What changes are being proposed for {location}'s sign regulations?
          </div>
          <div className="answer">
            A: We are advocating for common sense sign rule updates, restricted to specific areas of I-35 and SH-45 only, that serve all businesses, including local ones and not just large out-of-town companies. These updates aim to ensure that new EMC signs are constructed attractively, resonate with the city’s branding, and avoid unnecessary clutter. Best of all, these changes come at no extra cost to {location} taxpayers.
          </div>
          <svg id="openAnswerBtn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="questionBox" onClick={() => setSelectedQuestion(2)} id={selectedQuestion === 2 ? "selectedQuestion" : null}>
          <div className="question">
            Q: Why are these sign rule updates essential for {location}?
          </div>
          <div className="answer">
            A: {location} is a modern city, and it deserves sign regulations that reflect its evolving nature. Updated rules will promote a cohesive city branding, benefit businesses of all sizes, and prevent the cityscape from being overwhelmed by signs.
          </div>
          <svg id="openAnswerBtn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="questionBox" onClick={() => setSelectedQuestion(3)} id={selectedQuestion === 3 ? "selectedQuestion" : null}>
          <div className="question">
            Q: Are these changes going to be costly for {location} taxpayers?
          </div>
          <div className="answer">
            A: No, the proposed sign rule updates are designed to be implemented at zero additional expense to the taxpayers of {location}.
          </div>
          <svg id="openAnswerBtn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="questionBox" onClick={() => setSelectedQuestion(4)} id={selectedQuestion === 4 ? "selectedQuestion" : null}>
          <div className="question">
            Q: How do the new rules for signs benefit the {location} local economy?
          </div>
          <div className="answer">
            A: The Perryman Group report highlights the substantial economic benefits of typical digital billboards in {location}. For instance, during the construction phase, a billboard can contribute to $700,000 in gross product and support 7 job-years. Once fully operational, it can lead to an impressive $19.1 million in gross product each year and create 251 jobs. This increase in economic activity and job creation will support more sales tax revenue, business opportunities, and expansions.
          </div>
          <svg id="openAnswerBtn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="questionBox" onClick={() => setSelectedQuestion(5)} id={selectedQuestion === 5 ? "selectedQuestion" : null}>
          <div className="question">
            Q: How much in revenue can the city of {location} expect from these new digital signs?
          </div>
          <div className="answer">
            A: The Perryman Group report highlights the substantial economic benefits of typical digital billboards in {location}. For instance, during the construction phase, a billboard can contribute $700,000 in gross product and support 7 job-years. Once fully operational, it can lead to an impressive $19.1 million in gross product each year and create 251 jobs. This increase in economic activity and job creation will support more sales tax revenue, business opportunities, and expansions.
          </div>
          <svg id="openAnswerBtn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="questionBox" onClick={() => setSelectedQuestion(6)} id={selectedQuestion === 6 ? "selectedQuestion" : null}>
          <div className="question">
            Q: How will the new signs ensure the safety of {location} citizens?
          </div>
          <div className="answer">
            A: EMC digital signs, integral to these new rules, can be programmed remotely. They can swiftly broadcast essential information such as weather alerts, Amber alerts, Silver alerts, and emergency communications from fire and police officials. This ensures that citizens and their properties receive timely warnings and updates.
          </div>
          <svg id="openAnswerBtn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="questionBox" onClick={() => setSelectedQuestion(7)} id={selectedQuestion === 7 ? "selectedQuestion" : null}>
          <div className="question">
            Q: How do the new rules promote fairness in advertising?
          </div>
          <div className="answer">
            A: Some cities have sign monopolies, which can lead to inflated advertising costs due to limited availability. With our new rules, each EMC sign operates similarly to 16 traditional signs. This increase in advertising space supply is intended to keep advertisement prices more affordable and fair for all businesses.
          </div>
          <svg id="openAnswerBtn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="questionBox" onClick={() => setSelectedQuestion(8)} id={selectedQuestion === 8 ? "selectedQuestion" : null}>
          <div className="question">
            Q: Will the new rules affect property rights?
          </div>
          <div className="answer">
            A: The new sign rules respect and even enhance property rights. Property owners will have the freedom to lease their land for sign placements, generating potential rental income. This can open new financial avenues for landowners and their families.
          </div>
          <svg id="openAnswerBtn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="questionBox" onClick={() => setSelectedQuestion(9)} id={selectedQuestion === 9 ? "selectedQuestion" : null}>
          <div className="question">
            Q: What are the projected economic benefits of digital billboards in {location} as per a credible source?
          </div>
          <div className="answer">
            A: According to the Perryman Group report, a typical digital billboard in {location} can yield a gross product of $700,000 and support 7 job-years during its construction. Once it’s fully operational, it’s estimated to contribute $19.1 million in gross product annually and support 251 jobs.
          </div>
          <svg id="openAnswerBtn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="questionBox" onClick={() => setSelectedQuestion(10)} id={selectedQuestion === 10 ? "selectedQuestion" : null}>
          <div className="question">
            Q: How can I support these proposed sign rule updates?
          </div>
          <div className="answer">
            A: Join the movement! Let the {location} city leaders know your stance. We have a petition available for signing—stand with your neighbors in advocating for a modern approach to sign regulations in our city.
          </div>
          <svg id="openAnswerBtn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
      <div id="actionSection">
        <div id="actionImgFlex">
          <img id="largeLogo" src="https://testsiterd.kinsta.cloud/wp-content/uploads/2023/04/Keep-Round-Rock-Safe-02-smaller-1.png"></img>
        </div>
        <div id="actionTitle">
          What can be done?
        </div>
        <div id="actionSubTitle">
          We are requesting common sense sign rule updates that benefit all businesses and not just the big companies that come in from out of town. New rules will ensure new EMC signs are built in an attractive way, promote the city and its branding, and prevent sign clutter and proliferation, all at zero expense to {location} taxpayers.
        </div>
        <div id="actionSubTitle">
          Let {location} city leaders know that a modern city deserves modern sign regulations.
        </div>
        <div id="actionSubTitle2">
          Join your neighbors and sign the petition today!
        </div>
      </div>
      <div id="formSection">
        <div id="formTitleArea">
          <div id="formTitle">
            TAKE ACTION!
          </div>
          <div id="formSubTitle">
            To sign the petition, you must reside within {location} City Limits. We need your address to confirm eligibility, but we will never share your information outside of Keep {location} Safe. If you prefer not to provide your address, we will follow up with you to verify your eligibility.
          </div>
        </div>
        <div id="formArea">
          <iframe id="googleForm" src="https://docs.google.com/forms/d/e/1FAIpQLSfG_UXNAi5dBsWUiQKDLQCol16c-lJKZRIM6VtXOk5KVrRyJg/viewform?embedded=true" width="640px" height="1200" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
      </div>
      <div id="supportersSection">
        <div id="supportersTitle">
          Supporters
        </div>
      </div>
      <div id="alertsSection">

      </div>
      <div id="footer">
        {/* <div id="footerInner">
          <div id="footerLogoContainer" className="footerItem">
            <img id="footerLogo" src="https://testsiterd.kinsta.cloud/wp-content/uploads/2023/04/footer-experiment-Keep-Round-Rock-Safe-04.png"></img>
          </div>
          <div id="footerContactBtn" className="footerItem">
            contact us
          </div>
          <div id="footerInfo" className="footerItem">
            <div>
              Keep {location} Safe
            </div>
            <div>
              512-571-0564
            </div>
            <div>
              info@keeproundrocksafe.org
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
