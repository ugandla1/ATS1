// server/routes/dataRoutes.js
const express = require('express');
const http = require('http');
const router = express.Router();
const Data = require('../models/datamodel');





// POST request to add data to the database
router.post('/data', async (req, res) => {
  try {
    console.log('Received Request Body:', req.body); // Debug incoming request

    const {
        
        JobID,
        JobName,
        ProjectName,
        OpeningDate,
        ExpiryDate,
        Experience,
        JobDes,
        Location,
        SalaryType
      } = req.body;

    const newData = new Data({
      JobID,
      JobName,
      ProjectName,
      OpeningDate,
      ExpiryDate,
      Experience,
      JobDes,
      Location,
      SalaryType
      });
    await newData.save();

    res.status(201).json({
      message: 'Data successfully added to the database.',
      data: newData
    });
  } catch (err) {
    console.error('Error saving data:', err);

    res.status(500).json({
      message: 'Error adding data',
      error: err.message
    });
  }
});

// GET API to fetch all jobs
router.get('/jobs', async (req, res) => {
  console.log('GET /api/jobs called'); // Debug log
  try {
    const jobs = await Data.find(); // Fetch all jobs
    res.status(200).json(jobs); // Send the jobs as JSON
  } catch (err) {
    console.error('Error fetching jobs:', err);
    res.status(500).json({ message: 'Failed to fetch jobs' });
  }
});



module.exports = router;
