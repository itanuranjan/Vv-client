import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./PlaceDetails.css";

const PlaceDetails = () => {
  // Sample data, replace with your actual data
  const placeData = {
    images: [
      'https://ucarecdn.com/960d4ba1-dfc0-4dfa-8fb0-30e2e8ef044d/Sundarwan.jpg',
      'https://ucarecdn.com/9a88c135-ac89-47cf-a3e5-0a9a655b2ac4/raghurajourpainting.jpg',
      'https://ucarecdn.com/697fe313-40bc-4050-8f26-caade0b8f8d3/varanasi.jpg',
    ],
    title: 'Sample Place',
    description: 'This is a sample place description.',
    reviews: [
      { user: 'User1', comment: 'Great place!', rating: 5 },
      { user: 'User2', comment: 'Beautiful location.', rating: 4 },
    ],
    openTime: '9:00 AM',
    closeTime: '6:00 PM',
    highlights: ['Scenic Views', 'Cultural Heritage', 'Outdoor Activities'],
  };

  return (
    <div>
      {/* Image Carousel */}
      <Carousel>
        {placeData.images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Carousel>

      {/* Place Title */}
      <h2>{placeData.title}</h2>

      {/* Place Description */}
      <p>{placeData.description}</p>

      {/* Reviews */}
      <h3>Reviews</h3>
      <ul>
        {placeData.reviews.map((review, index) => (
          <li key={index}>
            <strong>{review.user}:</strong> {review.comment} (Rating: {review.rating})
          </li>
        ))}
      </ul>

      {/* Open and Close Time */}
      <p>
        <strong>Opening Time:</strong> {placeData.openTime} - {placeData.closeTime}
      </p>

      {/* Highlights */}
      <h3>Highlights</h3>
      <ul>
        {placeData.highlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>

      {/* Google Map */}
      <div>
        <h3>Location on Map</h3>
        <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.8397589299702!2d83.00705667360084!3d25.309587277142594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2e21ee940b17%3A0x48600e4fcdfb7b13!2sShri%20Kashi%20Vishwanath%20Temple!5e0!3m2!1sen!2sin!4v1709891444898!5m2!1sen!2sin"
      
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
      </div>
    </div>
  );
};

export default PlaceDetails;
