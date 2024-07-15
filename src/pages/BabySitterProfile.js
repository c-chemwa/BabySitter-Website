import React from 'react';
import './BabysitterProfile.css'; // Add CSS styling for babysitter profile

const BabysitterProfile = () => (
    <div className="babysitter-profile">
        <div className="sidebar">
            <ul>
                <li>Basic Info</li>
                <li>Bookings</li>
                <li>Upcoming Bookings</li>
                <li>Settings</li>
                <li>Log Out</li>
            </ul>
        </div>
        <div className="content">
            {/* Display babysitter info and other details */}
        </div>
    </div>
);

export default BabysitterProfile;
