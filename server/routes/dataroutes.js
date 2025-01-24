const express = require('express');
const Data = require('../models/dataModel');

const router = express.Router();

// POST request to add data
router.post('/data', async (req, res) => {
    try {
        const newData = new Data(req.body);
        await newData.save();
        res.status(201).json({ message: 'Data added successfully', data: newData });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// GET request to fetch all jobs
router.get('/jobs', async (req, res) => {
    try {
        const jobs = await Data.find();
        res.status(200).json(jobs);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch jobs' });
    }
});


router.delete('/data/:JobID', async(req,res)=> {
  const {JobID} = req.params;
  try{
    const deleteData = await Data.findOneAndDelete({ JobID });
    if(!deleteData){
      return res.status(404).json({error:'Data Not found'});
    }
    res.status(200).json({message: 'data deleted Succesfully', data:deleteData });
  }catch(error){
    console.error(error);
    res.status(500).json({error: 'Failed to delete data'});
  }
});

module.exports = router;
