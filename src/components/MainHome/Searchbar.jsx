// Searchbar.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import '../Styles/Searchbar.css';

const Searchbar = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: 'himachal', label: 'Himachal' },
    { value: 'Uttrakhand', label: 'Uttrakhand' },
    { value: 'Chandigarh', label: 'Chandigarh' },
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Bihar', label: 'Bihar' },
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
      <div className="select-experience-large">
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
