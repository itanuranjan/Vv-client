import React, { useState } from 'react';
import '../Styles/UserSuggestionForm.css';

const UserSuggestionForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [userReview, setUserReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform additional actions like sending the data to a server here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Suggestion:', suggestion);
    // Reset form fields
    setName('');
    setEmail('');
    setSuggestion('');
  };

  return (
    <div>
    <h2>Share your Experiance</h2>
    <div className="main-container">
    
      <div className="user-suggestion-form-container">
        <h2>Submit Your Suggestion</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="suggestion">Suggestion:</label>
            <textarea
              id="suggestion"
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="suggest-input-box">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/nZmO8B9rRik?si=uiJeH5mrElqaZ6LI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
    </div>
  );
};

export default UserSuggestionForm;
