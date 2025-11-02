const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: { type: String, trim: true },
  lastName:  { type: String, trim: true },
  email:     { type: String, trim: true, required: true },
  address:   { type: String, trim: true },
  location:  { type: String, trim: true },
  postcode:  { type: String, trim: true },
  message:   { type: String, trim: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Contact', contactSchema);
