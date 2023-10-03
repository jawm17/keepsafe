import React, { useState } from 'react';
import './styles/FAQstyle.css';
import ArrowIcon from './ArrowIcon';

export default function FAQComp() {
    const location = "Round Rock";
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const faqs = [
        {
            question: `What changes are being proposed for ${location}'s sign regulations?`,
            answer: `We are advocating for common sense sign rule updates, restricted to specific areas of I-35 and SH-45 only, that serve all businesses, including local ones and not just large out-of-town companies. These updates aim to ensure that new EMC signs are constructed attractively, resonate with the city’s branding, and avoid unnecessary clutter. Best of all, these changes come at no extra cost to Round Rock taxpayers.`
        },
        {
            question: `Why are these sign rule updates essential for ${location}?`,
            answer: `Round Rock is a modern city, and it deserves sign regulations that reflect its evolving nature. Updated rules will promote a cohesive city branding, benefit businesses of all sizes, and prevent the cityscape from being overwhelmed by signs.`
        },
        {
            question: `Are these changes going to be costly for ${location} taxpayers?`,
            answer: `No, the proposed sign rule updates are designed to be implemented at zero additional expense to the taxpayers of Round Rock.`
        },
        {
            question: `How do the new rules for signs benefit the ${location} local economy?`,
            answer: `The Perryman Group report highlights the substantial economic benefits of typical digital billboards in Round Rock. For instance, during the construction phase, a billboard can contribute to $700,000 in gross product and support 7 job-years. Once fully operational, it can lead to an impressive $19.1 million in gross product each year and create 251 jobs. This increase in economic activity and job creation will support more sales tax revenue, business opportunities, and expansions.`
        },
        {
            question: `How much in revenue can the city of ${location} expect from these new digital signs?`,
            answer: `The Perryman Group report highlights the substantial economic benefits of typical digital billboards in Round Rock. For instance, during the construction phase, a billboard can contribute $700,000 in gross product and support 7 job-years. Once fully operational, it can lead to an impressive $19.1 million in gross product each year and create 251 jobs. This increase in economic activity and job creation will support more sales tax revenue, business opportunities, and expansions.`
        },
        {
            question: `How will the new signs ensure the safety of ${location} citizens?`,
            answer: `EMC digital signs, integral to these new rules, can be programmed remotely. They can swiftly broadcast essential information such as weather alerts, Amber alerts, Silver alerts, and emergency communications from fire and police officials. This ensures that citizens and their properties receive timely warnings and updates.`
        },
        // ... Add other questions and answers here up to 12
    ];

    const leftFaqs = faqs.slice(0, 3);
    const rightFaqs = faqs.slice(3);

    return (
        <div id="faqSection">
            <div id="faqTitle">FAQ</div>
            <div className="faqColumns">
                <div className="faqColumn">
                    {leftFaqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            index={index}
                            faq={faq}
                            location={location}
                            selectedQuestion={selectedQuestion}
                            setSelectedQuestion={setSelectedQuestion}
                        />
                    ))}
                </div>
                <div className="faqColumn">
                    {rightFaqs.map((faq, index) => (
                        <FAQItem
                            key={index + 6} // To ensure unique keys
                            index={index + 6}
                            faq={faq}
                            location={location}
                            selectedQuestion={selectedQuestion}
                            setSelectedQuestion={setSelectedQuestion}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function FAQItem({ index, faq, location, selectedQuestion, setSelectedQuestion }) {
    return (
        <div
            className="questionBox"
            onClick={() => setSelectedQuestion(index === selectedQuestion ? null : index)}
            id={selectedQuestion === index ? "selectedQuestion" : null}
        >
            <div className="question">Q: {faq.question}</div>
            <div className="answer">A: {faq.answer}</div>
            <ArrowIcon />
        </div>
    );
}