const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');

router.post('/', async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json({ message: 'Booking submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit booking' });
  }
});

module.exports = router;
