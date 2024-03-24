import React from "react";
import { Link } from "react-router-dom";
import "./Cities.css";
import { citiesData } from "../MainHome/Image"; // Import city data from image.js

class Cities extends React.Component {
  render() {
    return (
      <div className="responsive-card-carousel-wrapper1">
        <h3 className="disallcity">Discover all cities in India</h3>
        <div className="card-grid">
          {citiesData.map((city) => (
            <Link key={city.id} to={`/cities/${city.route}`} className="card-link">
              <div className="card">
                <img src={city.imageUrl} alt={city.title} />
                <h3>{city.title}</h3>
                <p>{city.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Cities;
