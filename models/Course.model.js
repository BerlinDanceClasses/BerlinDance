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
    description: String,
    // date and time
    time: {
      type: Date,
      required: true,
    },
      comments: [String],
    });
  

module.exports = model('Course', courseSchema);
