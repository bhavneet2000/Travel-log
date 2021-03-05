/* eslint-disable linebreak-style */
/* eslint-disable arrow-spacing */
/* eslint-disable no-console */
/* eslint-disable key-spacing */

const mongoose = require('mongoose');

const { Schema } = mongoose;

// * Title - Text
// * Description - Text
// * Comments - Text
// * Rating - 1-10
// * Image - Text - URL
// * Latitude - Number
// * Longitude - Number
// * CreatedAt - DateTime
// * UpdatedAt - DateTime

const requiredNumber = {
  type: Number,
  required: true,
};
const logEntrySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  comments:   String,
  image: String,
  rating: {
    type: Number,
    min: 0,
    max: 10,
    default: 0,
  },
  latitude: {
    ...requiredNumber,
    min: -90,
    max: 90,
  },
  longitude: {
    ...requiredNumber,
    min: -180,
    max: 180,
  },
  visitDate: {
    type: Date,
    required: true,
  },
}, {
  timestamps: true,
});

const LogEntry = mongoose.model('LogEntry', logEntrySchema);

module.exports = LogEntry;
