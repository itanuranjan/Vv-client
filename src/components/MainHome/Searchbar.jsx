// Searchbar.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import '../Styles/Searchbar.css';

const Searchbar = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { "value": "varanasi", "label": "Varanasi" },
    { "value": "new-delhi", "label": "New Delhi" },
    { "value": "mumbai", "label": "Mumbai" },
    { "value": "goa", "label": "Goa" },
    { "value": "agra", "label": "Agra" },
    { "value": "rishikesh", "label": "Rishikesh" },
    { "value": "jaipur", "label": "Jaipur" },
    { "value": "kolkata", "label": "Kolkata" },
    { "value": "puducherry", "label": "Puducherry" },
    { "value": "hyderabad", "label": "Hyderabad" },
    { "value": "udaipur", "label": "Udaipur" },
    { "value": "amritsar", "label": "Amritsar" },
    { "value": "jodhpur", "label": "Jodhpur" },
    { "value": "shimla", "label": "Shimla" },
    { "value": "darjeeling", "label": "Darjeeling" },
    { "value": "chennai", "label": "Chennai" },
    { "value": "manali", "label": "Manali" },
    { "value": "mahabaleshwar", "label": "Mahabaleshwar" },
    { "value": "jaisalmer", "label": "Jaisalmer" },
    { "value": "kochi", "label": "Kochi" },
    { "value": "nainital", "label": "Nainital" },
    { "value": "bengaluru", "label": "Bengaluru" },
    { "value": "mysuru", "label": "Mysuru" },
    { "value": "gangtok", "label": "Gangtok" },
    { "value": "mathura", "label": "Mathura" },
    { "value": "visakhapatnam", "label": "Visakhapatnam" },
    { "value": "kasol", "label": "Kasol" },
    { "value": "mussoorie", "label": "Mussoorie" },
    { "value": "srinagar", "label": "Srinagar" },
    { "value": "rameswaram", "label": "Rameswaram" },
    { "value": "tirupati", "label": "Tirupati" },
    { "value": "leh", "label": "Leh" },
    { "value": "madurai", "label": "Madurai" },
    { "value": "panaji", "label": "Panaji" },
    { "value": "shillong", "label": "Shillong" }
  ];
  

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleButtonClick = () => {
    if (selectedOption) {
      navigate(`/cities/${selectedOption.value}`);
    }
  };

  return (
    <div className="search-bar">
      <div className="select-city-large">
        <i className="fas fa-map-marker icon" />
        <div className="select-div">
          <Select
            styles={selectStyles}
            placeholder="City"
            value={selectedOption}
            onChange={handleChange}
            options={options}
            className="city-select-dropdown"
          />
        </div>
      </div>
      <div className="select-experience-large1">
        <input
          className="input"
          type="text"
          placeholder="Search for experiences"
          onChange={(e) => setSelectedOption({ value: e.target.value, label: e.target.value })}
          value={selectedOption ? selectedOption.label : ''}
        />
        {/* <i className="fas fa-search search-icon" /> */}
      </div>
      <button className="button" id="go" onClick={handleButtonClick}>
        Let's Go
      </button>
    </div>
  );
};

const selectStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: 'none',
    color: state.isSelected ? 'red' : '#727272',
    padding: 10,
    cursor: 'pointer',
    background: state.isSelected ? 'white' : 'white',
    fontSize: '13px',
    textAlign: 'left',
    width: 120,
  }),
  control: () => ({
    width: 115,
    display: 'flex',
    fontSize: '15px',
    marginTop: '10px',
    // paddingLeft: '5px',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};

export default Searchbar;
