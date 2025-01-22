const mongoose = require('mongoose');

// Mongoose schema for applications
const applicationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    resume: { type: String, required: true }, // File path will be stored here
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
