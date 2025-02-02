const express = require('express');
const router = express.Router();

router.post('/test', (req, res) => {
  res.send('Chatbot testing in progress');
});

router.post('/integrate', (req, res) => {
  res.send('Chatbot integration instructions sent');
});

module.exports = router;