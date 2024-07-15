import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Add CSS styling for navbar

const Navbar = () => (
    <nav>
        <div className="logo">Babysitter</div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/login">Sign In</Link></li>
            <li><Link to="/register">Register</Link></li>
        </ul>
    </nav>
);

export default Navbar;
