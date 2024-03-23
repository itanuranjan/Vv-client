import React, { useState } from 'react';
import '../Styles/ExpenseCalculator.css';

const ExpenseCalculator = () => {
  const [transportationCost, setTransportationCost] = useState(0);
  const [accommodationCost, setAccommodationCost] = useState(0);
  const [foodCost, setFoodCost] = useState(0);
  const [entertainmentCost, setEntertainmentCost] = useState(0);
  const [otherCost, setOtherCost] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  const handleCalculateExpense = () => {
    const total = transportationCost + accommodationCost + foodCost + entertainmentCost + otherCost;
    setTotalExpense(total);
  };

  return (
    <div className="expense-calculator">
      <h2>Estimate Your Travel Expenses</h2>
      <div className="expense-inputs">
        <label>
          Transportation Cost:
          <input type="number" value={transportationCost} onChange={e => setTransportationCost(parseFloat(e.target.value))} />
        </label>
        <label>
          Accommodation Cost:
          <input type="number" value={accommodationCost} onChange={e => setAccommodationCost(parseFloat(e.target.value))} />
        </label>
        <label>
          Food Cost:
          <input type="number" value={foodCost} onChange={e => setFoodCost(parseFloat(e.target.value))} />
        </label>
        <label>
          Entertainment Cost:
          <input type="number" value={entertainmentCost} onChange={e => setEntertainmentCost(parseFloat(e.target.value))} />
        </label>
        <label>
          Other Expenses:
          <input type="number" value={otherCost} onChange={e => setOtherCost(parseFloat(e.target.value))} />
        </label>
      </div>
      <button className='exp-button' onClick={handleCalculateExpense}>Calculate Total Expense</button>
      <div className="total-expense">
        <p>Total Estimated Expense: &#8377;<span className='t-exp'>{totalExpense}</span></p>
      </div>
    </div>
  );
};

export default ExpenseCalculator;
