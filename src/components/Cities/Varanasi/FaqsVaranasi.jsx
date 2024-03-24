import React, { useState } from "react";
import "../../Styles/Faq.css";

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

  // Sample FAQ data
  const faqData = [
    {
      question: "What destinations do you offer?",
      answer:
        "We offer a wide range of destinations across the globe including popular tourist spots, off-the-beaten-path locations, and adventure destinations.",
    },
    {
      question: "How can I book a trip?",
      answer:
        "You can book a trip through our website by selecting your desired destination, dates, and preferences, and completing the booking process online.",
    },
    {
      question: "Are there any discounts available?",
      answer:
        "Yes, we offer discounts and special offers on select trips. Keep an eye on our website and subscribe to our newsletter to stay updated.",
    },
    // Add more FAQ items as needed
  ];

  return (
    <div className="faq-container" id="faqs">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqData.map((item, index) => (
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
