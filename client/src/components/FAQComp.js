import React, { useState } from 'react';
import './styles/FAQstyle.css';
import ArrowIcon from './ArrowIcon';

export default function FAQComp() {
    const location = "Round Rock";
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const faqs = [
        {
            question: `What changes are being proposed for ${location}'s sign regulations?`,
            answer: `We are advocating for common sense sign rule updates...`
        },
        {
            question: `What changes are being proposed for ${location}'s sign regulations?`,
            answer: `We are advocating for common sense sign rule updates...`
        },
        {
            question: `What changes are being proposed for ${location}'s sign regulations?`,
            answer: `We are advocating for common sense sign rule updates...`
        },
        {
            question: `What changes are being proposed for ${location}'s sign regulations?`,
            answer: `We are advocating for common sense sign rule updates...`
        },
        {
            question: `What changes are being proposed for ${location}'s sign regulations?`,
            answer: `We are advocating for common sense sign rule updates...`
        },
        {
            question: `What changes are being proposed for ${location}'s sign regulations?`,
            answer: `We are advocating for common sense sign rule updates...`
        },
        {
            question: `What changes are being proposed for ${location}'s sign regulations?`,
            answer: `We are advocating for common sense sign rule updates...`
        },
        {
            question: `What changes are being proposed for ${location}'s sign regulations?`,
            answer: `We are advocating for common sense sign rule updates...`
        },
        {
            question: `What changes are being proposed for ${location}'s sign regulations?`,
            answer: `We are advocating for common sense sign rule updates...`
        },
        {
            question: `What changes are being proposed for ${location}'s sign regulations?`,
            answer: `We are advocating for common sense sign rule updates...`
        },
        {
            question: `What changes are being proposed for ${location}'s sign regulations?`,
            answer: `We are advocating for common sense sign rule updates...`
        },
        {
            question: `What changes are being proposed for ${location}'s sign regulations?`,
            answer: `We are advocating for common sense sign rule updates...`
        },
        // ... Add other questions and answers here up to 12
    ];

    const leftFaqs = faqs.slice(0, 6);
    const rightFaqs = faqs.slice(6);

    return (
        <div id="faqSection">
            <div id="faqTitle">FAQ's</div>
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