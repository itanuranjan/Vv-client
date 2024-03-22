import React, { useState, useEffect } from 'react';
import { getUserProfile } from '../../service/Apis';

function UserProfile() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const emailFromStorage = localStorage.getItem('email');
                if (emailFromStorage) {
                    const userProfileData = await getUserProfile(emailFromStorage);
                    console.log('Received user data:', userProfileData);
                    setUserData(userProfileData);
                } else {
                    console.error('Email not found in localStorage');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserProfile();
    }, []); // Empty dependency array to run the effect only once when component mounts

    return (
        <div>
            {userData ? (
                <div>
                    <h2>User Profile</h2>
                    <p><strong>Name:</strong> {userData.fname}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                </div>
            ) : (
                <p>Loading user data...</p>
            )}
        </div>
    );
}

export default UserProfile;
