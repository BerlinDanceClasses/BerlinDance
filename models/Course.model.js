const { mongoose, Schema, model } = require('mongoose');

const courseSchema = new Schema(
  {
    name: String,
    dancestyle: String,
    teacher: String,
    location: String,
    address: String,
    level: String,
    price: Number,
    timestamps: true
    // date and time
    
  }
);

module.exports = model('Course', courseSchema);
