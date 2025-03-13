const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/userschema');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

 
  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    return res.status(400).json({ message: 'Email already registered' });
  }

 
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  await newUser.save();

  return res.status(201).json({ message: 'User registered successfully' });
});

module.exports = router;