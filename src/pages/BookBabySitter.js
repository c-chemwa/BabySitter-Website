import React, { useState } from 'react';
import './BookBabysitter.css'; // Add CSS styling for book babysitter

const BookBabysitter = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleBooking = () => {
        // Handle booking logic
    };

    return (
        <div className="book-babysitter">
            <h2>Book a Babysitter</h2>
            <form onSubmit={handleBooking}>
                <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
                <input type="time" value={time} onChange={e => setTime(e.target.value)} required />
                <button type="submit">Book Now</button>
            </form>
        </div>
    );
};

export default BookBabysitter;
