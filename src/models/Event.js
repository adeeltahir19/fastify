const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: String,
  description: String,
  startTime: Number,
  duration: Number,
  livestreamUrl: String,
  thumbnailUrl: String,
  completed: Boolean,
});

module.exports = mongoose.model("events", eventSchema);
