import React from 'react';
import './TestimonialCard.css'; // Add CSS styling for testimonial card

const TestimonialCard = ({ testimonial }) => (
    <div className="testimonial-card">
        <p>{testimonial.text}</p>
        <h4>{testimonial.author}</h4>
    </div>
);

export default TestimonialCard;
