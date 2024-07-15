import React from 'react';
import { Link } from 'react-router-dom';
import './BabysitterCard.css'; // Add CSS styling for babysitter card

const BabysitterCard = ({ babysitter }) => (
    <div className="babysitter-card">
        <img src={babysitter.image} alt={babysitter.name} />
        <h4>{babysitter.name}</h4>
        <p>{babysitter.bio}</p>
        <Link to={`/book/${babysitter.id}`}>
            <button>Book Now</button>
        </Link>
    </div>
);

export default BabysitterCard;
