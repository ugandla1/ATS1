// server/models/dataModel.js
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
      JobID: {
        type: String,
        required: true,
        unique: true
      },
      JobName: {
        type: String,
        required: true
      },
      ProjectName: {
        type: String,
        required: true
      },
      OpeningDate: {
        type: Date,
        required: true
      },
      ExpiryDate: {
        type: Date,
        required: true
      },
      JobDes: {
        type: String,
        required: true
      },
      Location: {
        type: String,
        required: true
      },
      SalaryType: {
        type: String,
        required: true
      }
}, { timestamps: true });

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
