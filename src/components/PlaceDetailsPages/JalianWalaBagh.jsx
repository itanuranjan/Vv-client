import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./PlaceDetails.css";

const JalianWalaBagh = () => {
  // Sample data, replace with your actual data
  const placeData = {
    images: [
      'https://ucarecdn.com/960d4ba1-dfc0-4dfa-8fb0-30e2e8ef044d/Sundarwan.jpg',
      'https://ucarecdn.com/9a88c135-ac89-47cf-a3e5-0a9a655b2ac4/raghurajourpainting.jpg',
      'https://ucarecdn.com/697fe313-40bc-4050-8f26-caade0b8f8d3/varanasi.jpg',
    ],
    title: 'Shri Kashi Vishwanath Temple (Golden Temple)',
    description: "Standing on the western bank of India's holiest river Ganges, Varanasi is the oldest surviving city of the world and the cultural capital of India. It is in the heart of this city that there stands in its fullest majesty the Kashi Vishwanath Temple in which is enshrined the Jyotirlinga of Shiva, Vishweshwara or Vishwanath.",
    reviews: [
      { user: 'Anuranjan', 
      comment: 'Similar to other Hindi Temples we visited on Day 2, we had to take off our shoes and leave our cell phones at the Reception Area. The lines were long, but my local guide knows his way around here and were able to see the gods/goddess quicker. Highly recommended to visit, use a local guide to help you enjoy your visit.',
      rating: 5 },
      { user: 'Aka', 
      comment: 'Beautiful location.', 
      rating: 4 },
    ],
    openTime: '9:00 AM',
    closeTime: '6:00 PM',
    highlights: ['Scenic Views', 'Cultural Heritage', 'Outdoor Activities'],
  };

  return (
    <div className="place-details-container">
      {/* Image Carousel */}
      <div className="image-carousel">
        <Carousel showArrows={true} showThumbs={true}>
          {placeData.images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </Carousel>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/NkwxaZpuNQM?si=PcBsocMOoMRaDoEv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      {/* Place Details */}
      <div className="details">
        {/* Place Title */}
        <h2>{placeData.title}</h2>

        {/* Place Description */}
        <p>{placeData.description}</p>

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

        {/* Reviews */}
        <h3>Reviews</h3>
        <div className="reviews">
          {placeData.reviews.map((review, index) => (
            <div key={index} className="review">
              <div className="user-rating">
                <span className="user">{review.user}</span>
                <span className="rating">
                  {Array.from({ length: review.rating }, (_, i) => (
                    <span key={i} className="star">&#9733;</span>
                  ))}
                </span>
              </div>
              <p className="comment">{review.comment}</p>
            </div>
          ))}
        </div>

        

        
      </div>
    </div>
  );
};

export default JalianWalaBagh;
