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
    time: String,
    date: String,
    comments: [String],
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  });
  

module.exports = model('Course', courseSchema);
