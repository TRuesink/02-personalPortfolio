const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const skillSchema = new Schema({
  name: { type: String, required: true },
  level: { type: Number, required: true },
  category: { type: String, required: true },
});

const skillClass = mongoose.model("Skill", skillSchema);

module.exports = skillClass;
