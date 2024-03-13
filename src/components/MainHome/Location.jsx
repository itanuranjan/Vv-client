import React from 'react';
import '../Styles/Location.css';

function Location() {
  return (
    <div className='location-container-main'>
    <div className='location-container'>
    <h3>Location on Map</h3>
    <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.8397589299702!2d83.00705667360084!3d25.309587277142594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2e21ee940b17%3A0x48600e4fcdfb7b13!2sShri%20Kashi%20Vishwanath%20Temple!5e0!3m2!1sen!2sin!4v1709891444898!5m2!1sen!2sin"
  
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
  </div>
  <div className='address'>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, eum expedita quisquam optio eius voluptate sequi reiciendis nisi odio mollitia consectetur sed laboriosam temporibus earum in omnis velit quia recusandae fugit deleniti aliquid cum et dicta perferendis? Voluptatum, deserunt sed.</p>

  </div>
  </div>
  );
}

export default Location;
