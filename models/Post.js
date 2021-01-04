const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
  Title: { type: String, required: true },
  Teaser: { type: String },
  Content: { type: String, required: true },
  photo: {
    type: String,
    default: "no-photo.jpg",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

const postClass = mongoose.model("post", postSchema);

module.exports = postClass;
