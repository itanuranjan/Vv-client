import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/CardCarousel.css";
import { Left, Right } from "./Arrows";
import { getCitiesData } from "../../service/Apis"; // Import the function to fetch data

class ResponsiveCardCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      citiesData: [], // State to hold the fetched data
    };
  }

  componentDidMount() {
    // Fetch data when the component mounts
    this.fetchData();
  }

  fetchData() {
    // Call the function from Apis.js to fetch data
    getCitiesData()
      .then((response) => {
        console.log("api fetching");
        this.setState({ citiesData: response.data });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  render() {
    const { citiesData } = this.state;

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 0, // Set initialSlide for smaller screens
          },
        },
        {
          breakpoint: 1344,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true,
            nextArrow: <Right />,
            prevArrow: <Left />,
          },
        },
      ],
    };

    return (
      <div className="responsive-card-carousel-wrapper">
        <h3>Top cities to visit in India</h3>
        <Slider {...settings}>
          {citiesData.map((city) => (
            <Link key={city.id} to={`/cities/${city.route}`} className="card-link">
              <div className="card">
                <img src={city.imageUrl} alt={city.title} />
                <h3>{city.title}</h3>
                <p>{city.description}</p>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    );
  }
}

export default ResponsiveCardCarousel;
