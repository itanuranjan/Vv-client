import React, { useState, useEffect } from 'react';
import '../Styles/WeatherWidget.css';

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/varanasi?unitGroup=metric&key=MMD3P39CSRF7XH9V9P58Z62V8&contentType=json'
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="weather-widget">
      <h2>Weather Forecast for Varanasi</h2>
      {weatherData ? (
        <div>
          <p>Temperature: {weatherData.currentConditions.temp}°C</p>
          <p>Conditions: {weatherData.currentConditions.conditions}</p>
          <p>Humidity: {weatherData.currentConditions.humidity}%</p>
          <p>Wind Speed: {weatherData.currentConditions.wind}</p>
        </div>
      ) : (
        <p className="loading">Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherWidget;
