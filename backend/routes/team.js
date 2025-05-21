const express = require('express');
const router = express.Router();
const TeamMember = require('../models/TeamMember');

router.get('/', async (req, res) => {
  try {
    const members = await TeamMember.find();
    res.json(members);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load team members' });
  }
});

module.exports = router;
