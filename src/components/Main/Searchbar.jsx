import React, { Component } from 'react';
import Select from 'react-select';
// import './Searchbar.css'; 

const options = [
  { value: 'new-york', label: 'New York' },
  { value: 'las-vegas', label: 'Las Vegas' },
  { value: 'rome', label: 'Rome' },
  { value: 'paris', label: 'Paris' },
  { value: 'london', label: 'London' },
  { value: 'dubai', label: 'Dubai' },
  { value: 'barcelona', label: 'Barcelona' },
  { value: 'madrid', label: 'Madrid' },
  { value: 'singapore', label: 'Singapore' },
  { value: 'venice', label: 'Venice' },
  { value: 'milan', label: 'Milan' },
  { value: 'naples', label: 'Naples' },
  { value: 'budapest', label: 'Budapest' },
  { value: 'edinburg', label: 'Edinburgh' }, // Corrected the spelling
  { value: 'florence', label: 'Florence' }
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: 'none',
    color: state.isSelected ? 'red' : '#727272',
    padding: 10,
    cursor: 'pointer',
    background: state.isSelected ? 'white' : 'white',
    fontSize: '13px',
    textAlign: 'left',
    width: 120
  }),
  control: () => ({
    width: 150,
    display: 'flex',
    fontSize: '14px',
    marginTop: '10px',
    paddingLeft: '5px'
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
};

const smallSearchbar = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: 'none',
    color: state.isSelected ? 'red' : '#727272',
    padding: 10,
    cursor: 'pointer',
    background: state.isSelected ? 'white' : 'white',
    fontSize: '13px',
    textAlign: 'left',
    paddingLeft: '20px',
    width: 150
  }),
  control: () => ({
    width: 150,
    display: 'flex',
    fontSize: '11px',
    marginLeft: '15px'
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
};

class Searchbar extends Component {
  state = {
    selectedOption: null
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    this.changeUrl(selectedOption.value);
  };

  changeUrl = url => {
    // Assuming you are using React Router for navigation
    this.props.history.push(`/cities/${url}`);
  };

  render() {
    const { selectedOption } = this.state;
    const { selectedCity } = this.props;

    return (
      <Select
        styles={selectedCity ? smallSearchbar : customStyles}
        placeholder={selectedCity || "Select City"}
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        className="city-select-dropdown"
      />
    );
  }
}

export default Searchbar;
