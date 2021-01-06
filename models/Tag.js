const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tagSchema = new Schema({
  name: { type: String, required: [true, "Please include a tag name"] },
  post: { type: mongoose.Schema.ObjectId, ref: "Post", required: true },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

const tagClass = mongoose.model("Tag", tagSchema);

module.exports = tagClass;
