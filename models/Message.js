const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  name: { type: String, required: [true, "Please include your name"] },
  email: { type: String, required: [true, "Please include your email"] },
  subject: { type: String, required: [true, "Please include a subject"] },
  message: { type: String, required: [true, "Please include a message"] },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const messageClass = mongoose.model("Message", messageSchema);

module.exports = messageClass;
