// server/routes/dataRoutes.js
const express = require('express');
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

module.exports = router;
