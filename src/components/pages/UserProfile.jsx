import React, { useState, useEffect } from 'react';

function UserProfile() {
  const [userData, setUserData] = useState(null);
  
  useEffect(() => {
    const emailFromStorage = localStorage.getItem('email');
    
    if(emailFromStorage) {
      fetch('http://localhost:5000/api/user')
        .then(response => response.json())
        .then(data => {
          console.log('Received user data:', data);
          const matchedUser = data.find(user => user.email === emailFromStorage);
          if (matchedUser) {
            setUserData(matchedUser);
          } else {
            console.error('User with email not found:', emailFromStorage);
          }
        })
        .catch(error => console.error('Error fetching user data:', error));
    } else {
      console.error('Email not found in localStorage');
    }
  }, []);

  return (
    <div>
      {userData ? (
        <div>
          <h2>User Profile</h2>
          <p><strong>Name:</strong> {userData.fname}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Password:</strong> {userData.password}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default UserProfile;
