import React, { useState } from 'react';
import '../Styles/BookingPage.css';

const placesData = [
  {
    id: 1,
    name: 'Varanasi Tour',
    description: "Varanasi is a city in the northern Indian state of Uttar Pradesh dating to the 11th century B.C. Regarded as the spiritual capital of India, the city draws Hindu pilgrims who bathe in the Ganges River’s sacred waters and perform funeral rites. Along the city's winding streets are some 2,000 temples, including Kashi Vishwanath, the “Golden Temple,” dedicated to the Hindu god Shiva.",
    image: 'https://ucarecdn.com/f16d39ff-edf2-4141-997e-ffd73750ac49/ReliveYourHistory.jpg',
    details: 'Details of Varanasi',
    ride: 'Ghats, Aarti, and many more places',
  },
];

const LadakhBookingPage = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(2000); // Default price per ticket

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
    setPrice(newQuantity * 2000); // Calculate price based on quantity
  };

  const handleBookClick = () => {
    console.log('Navigate to payment page');
  };

  return (
    <div className="booking-page">
      {placesData.map(place => (
        <div key={place.id} className="place-container">
          <h2>{place.name}</h2>
          <img src={place.image} alt={place.name} />
          <p>{place.description}</p>
          <p>{place.details}</p>
          <p>{place.ride}</p>
        </div>
      ))}
      <div className="booking-container">
        <h2>Book Your Tour</h2>
        <label htmlFor="date">Select Date:</label>
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={e => setSelectedDate(e.target.value)}
        />
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          value={`RS : ${price}`}
          readOnly
        />
        <button onClick={handleBookClick}>Book Now</button>
      </div>
    </div>
  );
};

export default LadakhBookingPage;
