import React, { useState } from 'react';
import './styles/FAQstyle.css';

const FAQComp = () => {
  const [selected, setSelected] = useState(null);

  const questions = [
    { q: 'What is your return policy?', a: 'You can return any item within 30 days of purchase.' },
    { q: 'How do I track my order?', a: 'You will receive a tracking number via email once your order has been shipped.' },
    { q: 'Can I change my order?', a: 'Please contact customer service to change your order.' },
  ];
  return (
    <div id="faqSection">
        <h1>FAQ's</h1>
    <div className="faq-container">
      {questions.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="question" onClick={() => setSelected(selected === index ? null : index)}>
            {item.q}
            <span className={`arrow ${selected === index ? 'open' : ''}`}></span>
          </div>
          <div className={`answer ${selected === index ? 'open' : ''}`}>{item.a}</div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default FAQComp;
