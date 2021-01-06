const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");

const Message = require("../models/Message");

// @desc Get messages
// @route GET /api/v1/messages
// @access Private
exports.getMessages = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc Create message
// @route POST /api/v1/messages
// @access Public
exports.createMessage = asyncHandler(async (req, res, next) => {
  const message = await Message.create(req.body);

  res.status(201).json({ success: true, data: message });
});
