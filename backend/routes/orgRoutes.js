const express = require('express');
const router = express.Router();

router.post('/setup', (req, res) => {
  const { companyName, websiteUrl, description } = req.body;
  // Dummy data for scraping status
  const scrapingStatus = {
    detected: ['page1', 'page2'],
    scraped: ['page1'],
    pending: ['page2']
  };
  res.json(scrapingStatus);
});

module.exports = router;