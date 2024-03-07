import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import Select from "react-select";
import "../Styles/Searchbar.css";

const options = [
  { value: "Himachal", label: "Himachal" },
  { value: "Uttrakhand", label: "Uttrakhand" },
  { value: "Chandigarh", label: "Chandigarh" },
  { value: "Delhi", label: "Delhi" },
  { value: "Bihar", label: "Bihar" },
  
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "none",
    color: state.isSelected ? "red" : "#727272",
    padding: 10,
    cursor: "pointer",
    background: state.isSelected ? "white" : "white",
    fontSize: "13px",
    textAlign: "left",
    paddingLeft: "20px",
    width: 100,
  }),
  control: () => ({
    width: 100,
    display: "flex",
    marginTop: "10px",
    marginLeft: "30px",
    fontSize: "14px",
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};

class Searchbar extends Component {
  state = {
    selectedOption: null,
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption: selectedOption });
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <div className="search-bar">
        <div className="select-city-large">
          <div className="select-div">
            <Select
              styles={customStyles}
              placeholder="Select City"
              value={selectedOption}
              onChange={this.handleChange}
              options={options}
            />
          </div>
        </div>
        <div className="select-experience-large">
          <input
            type="text"
            placeholder="Search for experiences"
            onChange={this.changeExperience}
            value={this.state.experience}
          />
          {/* <i className="fas fa-search" /> */}
        </div>
        <button id="go">Let's Go</button>
      </div>
    );
  }
}

export default Searchbar;
