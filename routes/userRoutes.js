const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
  res.json({ message: 'Register route works!', data: req.body });
});

router.post('/login', (req, res) => {
  res.json({ message: 'Login route works!', data: req.body });
});

module.exports = router;
