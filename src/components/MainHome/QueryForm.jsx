// QueryForm.js

import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/QueryForm.css';

const QueryForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://venturevibe-server.onrender.com/api/query', { name, email, phone, query });
      alert('Query submitted successfully!');
      setName('');
      setEmail('');
      setPhone('');
      setQuery('');
    } catch (error) {
      console.error('Error submitting query:', error);
      alert('Failed to submit query');
    }
  };

  return (
    <div className='Query-Container' >
    <h2>Rise Query</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <br />
      <label>
        Phone Number:
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </label>
      <br />
      <label>
        Query:
        <textarea value={query} onChange={(e) => setQuery(e.target.value)} required />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default QueryForm;
