const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const jobSchema = new Schema({
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  title: { type: String, required: true },
  company: { type: String, required: true },
  description: { type: String, required: true },
  photo: { type: String, default: "no_photo.jpg" },
  city: { type: String, required: true },
  state: { type: String, required: true },
});

const jobClass = mongoose.model("Job", jobSchema);

module.exports = jobClass;
