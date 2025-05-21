const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
  name: String,
  role: String,
  image: String,
  bio: String
});

module.exports = mongoose.model('TeamMember', teamMemberSchema);
