import React from 'react';
import '../Styles/Marquee.css';

class Marquee extends React.Component {
  render() {
    return (
      <div className="marquee-container">
        <div className="marquee-content">
          <p className='para' >Your marquee text goes here. Repeat as needed.</p>
          <p>Your marquee text goes here. Repeat as needed.</p>
          <p>Your marquee text goes here. Repeat as needed.</p>
        </div>
      </div>
    );
  }
}

export default Marquee;
