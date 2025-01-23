const express = require('express');
const multer = require('multer');
const Application = require('../models/Application');

const router = express.Router();

// Multer configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

// POST API to submit an application
router.post('/apply', upload.single('resume'), async (req, res) => {
    try {
        const { name, email } = req.body;
        const newApplication = new Application({
            name,
            email,
            resume: req.file.path,
        });
        await newApplication.save();
        res.status(201).json({ message: 'Application submitted', application: newApplication });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to submit application' });
    }
});

module.exports = router;
