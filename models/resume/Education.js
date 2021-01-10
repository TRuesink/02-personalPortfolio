const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const educationSchema = new Schema({
  school: { type: String, required: true },
  degree: { type: String, required: true },
  field: { type: String, required: true },
  gpa: { type: Number, required: false },
  honors: { type: String, required: false },
  endDate: { type: Date, required: true },
  photo: { type: String, default: "no_photo.jpg" },
  city: { type: String, required: true },
  state: { type: String, required: true },
});

const educationClass = mongoose.model("Education", educationSchema);

module.exports = educationClass;
