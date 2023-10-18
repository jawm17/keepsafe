import React, { useState } from 'react';
import './styles/FAQstyle.css';

const FAQComp = () => {
  const [selected, setSelected] = useState(null);
  const [answer, setAnswer] = useState(null);

  const questions = [
    { q: "What changes are being proposed for Round Rock's sign regulations?", a: "We are advocating for common sense sign rule updates, restricted to specific areas of I-35 and SH-45 only, that serve all businesses, including local ones and not just large out-of-town companies. These updates aim to ensure that new EMC signs are constructed attractively, resonate with the city’s branding, and avoid unnecessary clutter. Best of all, these changes come at no extra cost to Round Rock taxpayers." },
    { q: "Why are these sign rule updates essential for Round Rock?", a: "Round Rock is a modern city, and it deserves sign regulations that reflect its evolving nature. Updated rules will promote a cohesive city branding, benefit businesses of all sizes, and prevent the cityscape from being overwhelmed by signs." },
    { q: "Are these changes going to be costly for Round Rock taxpayers?", a: "No, the proposed sign rule updates are designed to be implemented at zero additional expense to the taxpayers of Round Rock." },
    { q: "How do the new rules for signs benefit the Round Rock local economy?", a: "The Perryman Group report highlights the substantial economic benefits of typical digital EMCs in Round Rock. For instance, during the construction phase, a EMC can contribute to $700,000 in gross product and support 7 job-years. Once fully operational, it can lead to an impressive $19.1 million in gross product each year and create 251 jobs. This increase in economic activity and job creation will support more sales tax revenue, business opportunities, and expansions." },
    { q: "How much in revenue can the city of Round Rock expect from these new digital signs?", a: "The Perryman Group report highlights the substantial economic benefits of typical digital EMCs in Round Rock. For instance, during the construction phase, a EMC can contribute $700,000 in gross product and support 7 job-years. Once fully operational, it can lead to an impressive $19.1 million in gross product each year and create 251 jobs. This increase in economic activity and job creation will support more sales tax revenue, business opportunities, and expansions." },
    { q: "How will the new signs ensure the safety of Round Rock citizens?", a: "EMC digital signs, integral to these new rules, can be programmed remotely. They can swiftly broadcast essential information such as weather alerts, Amber alerts, Silver alerts, and emergency communications from fire and police officials. This ensures that citizens and their properties receive timely warnings and updates." },
    { q: "How do the new rules promote fairness in advertising?", a: "Some cities have sign monopolies, which can lead to inflated advertising costs due to limited availability. With our new rules, each EMC sign operates similarly to 16 traditional signs. This increase in advertising space supply is intended to keep advertisement prices more affordable and fair for all businesses." },
    { q: "Will the new rules affect property rights?", a: "The new sign rules respect and even enhance property rights. Property owners will have the freedom to lease their land for sign placements, generating potential rental income. This can open new financial avenues for landowners and their families." },
    { q: "What are the projected economic benefits of digital EMCs in Round Rock as per a credible source?", a: "According to the Perryman Group report, a typical digital EMC in Round Rock can yield a gross product of $700,000 and support 7 job-years during its construction. Once it’s fully operational, it’s estimated to contribute $19.1 million in gross product annually and support 251 jobs." },
    { q: "How can I support these proposed sign rule updates?", a: "Join the movement! Let the Round Rock city leaders know your stance. We have a petition available for signing—stand with your neighbors in advocating for a modern approach to sign regulations in our city." },
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
