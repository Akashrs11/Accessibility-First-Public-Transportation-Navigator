const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  name: String,
  message: String
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);
