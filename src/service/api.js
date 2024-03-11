// api.js
import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Replace with your actual server URL

export const fetchCities = () => {
  return axios.get(`${API_URL}/cities`)
    .then(response => response.data)
    .catch(error => {
      console.error("Error fetching cities:", error);
      throw error; // Propagate the error to handle it in the component
    });
};