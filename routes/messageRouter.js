const express = require("express");

// bring in resume models
const Message = require("../models/Message");

const {
  getMessages,
  createMessage,
} = require("../controllers/messageController");
const advancedResults = require("../middlewares/advancedResults");
const { protect, permissions } = require("../middlewares/auth");

const router = express.Router();

router
  .route("/")
  .get(protect, permissions("admin"), advancedResults(Message), getMessages)
  .post(createMessage);

module.exports = router;
