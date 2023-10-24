import React, { useState } from 'react';
import './styles/FAQstyle.css';

const FAQComp = () => {
  const [selected, setSelected] = useState(null);
  const [answer, setAnswer] = useState(null);

  const questions = [
    { q: "What changes are being proposed for Round Rock's sign regulations?", a: "We are advocating that a maximum of twelve off-premise EMC signs be allowed to be installed on IH-35 and SH-45 only. All new EMCs must be erected in commercial areas and must be capable of carrying emergency messaging as directed by the Round Rock city manager or emergency services coordinator." },
    { q: "Will these be costly for Round Rock taxpayers?", a: "No. All new EMCs will be 100% privately funded and require zero tax dollars." },
    { q: "How do the new rules for signs benefit the Round Rock local economy?", a: "The Perryman Group is a highly respected economic data think-tank previously entrusted by our Round Rock city council to report on the economic impact and fiscal benefits of our new Performing Arts Center. Now, the Perryman Group forecasts substantial economic benefits for newly installed EMC signs. Once fully operational, these new EMCs will generate over $225 million of economic activity each year due to the increased reach and awareness of our local business community. This increase in economic activity will lead to job creation, business expansions, and increased sales tax revenue for the city of Round Rock." },
    { q: "How will the new signs ensure the safety of Round Rock citizens?", a: "EMC signs can be programmed remotely when seconds count. They can quickly broadcast essential information such as weather alerts, AMBER alerts, Silver alerts, and other critical communications from fire, police, and emergency services coordinators. This ensures that Round Rock citizens receive timely warnings and updates which will help them protect life and property.", f:" Fact: AMBER Alerts have been integral in recovering over 1,100 abducted children as of January 2023." },
    { q: "How can I support these proposed sign rule updates?", a: "Join the movement! These rule changes require an amendment to the Round Rock city charter which must be voted on by Round Rock citizens. Fill out the form below and we’ll send you a petition that you can sign and return by mail. Each signature will help us get this charter amendment onto the ballot next May." },
  ];

  const FaqItem = ({ item, index }) => {
    const [open, setOpen] = useState(false);

    return (
      <div
        className={`faqItem ${open ? "selectedQ" : "null"}`}
        onClick={() => setOpen(!open)}
      >
        <div className="questionTop">
          <div id="questionIcon" width="24" height="24" fill="none" viewBox="0 0 24 24">
            +
          </div>

          <div className="question">
            {item.q}
          </div>
        </div>
        <div className="answer">
          {open && item.a}
          <p>{open && item.f}</p>
        </div>
      </div>
    );
  };

  return (
    <div id="faqSection">
      <h1>Frequently Asked Questions</h1>
      <div id="faqFlex">
        <div className="faq-container">
          {questions.map((item, index) => (
            <FaqItem item={item} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQComp;
