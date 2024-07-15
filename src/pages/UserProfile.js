import React from 'react';
import './UserProfile.css'; // Add CSS styling for user profile

const UserProfile = () => (
    <div className="user-profile">
        <div className="sidebar">
            <ul>
                <li>Basic Info</li>
                <li>Bookings</li>
                <li>Settings</li>
                <li>Log Out</li>
            </ul>
        </div>
        <div className="content">
            {/* Display user info and other details */}
        </div>
    </div>
);

export default UserProfile;
