const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    babysitter: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    status: { type: String, default: 'pending' },
});

module.exports = mongoose.model('Booking', BookingSchema);
