const express = require('express');
const router = express.Router();
const User = require('../models/User');

// GET todos
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// POST novo usuário
router.post('/', async (req, res) => {
  const { name, email } = req.body;
  const newUser = new User({ name, email });
  await newUser.save();
  res.status(201).json(newUser);
});

module.exports = router;
