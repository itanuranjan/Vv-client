import React, { useState } from "react";
import "../../Styles/Faq.css";
import { varanasifaqs } from "./Images";

const FaqsVaranasi = () => {
  // State to track which FAQ item is expanded
  const [expandedItem, setExpandedItem] = useState(null);

  // Function to toggle the expansion of an FAQ item
  const toggleItem = (index) => {
    if (expandedItem === index) {
      // If the clicked item is already expanded, collapse it
      setExpandedItem(null);
    } else {
      // Otherwise, expand the clicked item and collapse the previously expanded item
      setExpandedItem(index);
    }
  };


  return (
    <div className="faq-container" id="faqs">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {varanasifaqs.map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className={`faq-question ${expandedItem === index && "expanded"}`}
              onClick={() => toggleItem(index)}
            >
              <span>{item.question}</span>
              <div className="arrow">{expandedItem === index ? "-" : "+"}</div>
            </div>
            {expandedItem === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqsVaranasi;
