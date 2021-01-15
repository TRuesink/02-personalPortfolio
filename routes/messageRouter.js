const express = require("express");

// bring in resume models
const Message = require("../models/Message");

const {
  getMessages,
  createMessage,
  updateMessage,
  deleteMessage,
} = require("../controllers/messageController");
const advancedResults = require("../middlewares/advancedResults");
const { protect, permissions } = require("../middlewares/auth");

const router = express.Router();

router
  .route("/")
  .get(protect, permissions("admin"), advancedResults(Message), getMessages)
  .post(createMessage);

router
  .route("/:id")
  .put(protect, permissions("admin"), updateMessage)
  .delete(protect, permissions("admin"), deleteMessage);

module.exports = router;
