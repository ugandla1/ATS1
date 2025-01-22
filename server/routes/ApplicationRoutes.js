const express = require('express');
const multer = require('multer');
const path = require('path');
const Application = require('../models/Application');

const router = express.Router();

// Multer configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Folder to save files
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Save file with a timestamp prefix
    },
});
const upload = multer({ storage });

// POST API to submit an application
router.post('/apply', upload.single('resume'), async (req, res) => {
    try {
        const { name, email } = req.body;

        // Save file path in the database
        const newApplication = new Application({
            name,
            email,
            resume: req.file.path, // Store the file path
        });

        await newApplication.save();
        res.status(201).json({ message: 'Application submitted successfully', application: newApplication });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to submit application' });
    }
});

module.exports = router;
