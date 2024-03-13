import React from 'react';
import '../Styles/Quotes.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Remember that happiness is a way of travel – not a destination.",
      author: "Roy M. Goodman",
      role: "Manhattan Republican chairman"
    },
    {
      id: 2,
      quote: "The most beautiful in the world is, of course, the world itself.",
      author: "Wallace Stevens",
    //   role: "CTO, Company B"
    },
    {
      id: 3,
      quote: "Traveling – it leaves you speechless, then turns you into a storyteller.",
      author: "Ibn Battuta",
    //   role: "Designer, Company C"
    }
  ];

  return (
    <div className="testimonials-container">
      <h2>Random Quotes</h2>
      <div className="testimonials">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial">
            <p>{testimonial.quote}</p>
            <cite>{testimonial.author}, {testimonial.role}</cite>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
