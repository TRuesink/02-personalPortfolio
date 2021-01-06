const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tagSchema = new Schema({
  name: { type: String, required: true },
  post: { type: mongoose.Schema.ObjectId, ref: "Post", required: true },
});

const tagClass = mongoose.model("Tag", tagSchema);

module.exports = tagClass;
