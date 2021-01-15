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

// @desc Update message
// @route POST /api/v1/messages/:id
// @access Public
exports.updateMessage = asyncHandler(async (req, res, next) => {
  let message = await Message.findById(req.params.id);

  if (!message) {
    return next(
      new ErrorResponse(`Could not find message with id of ${req.params.id}`)
    );
  }

  message = await Message.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(201).json({ success: true, data: message });
});

// @desc delete message
// @route DELETE /api/v1/messages/:id
// @access Private
exports.deleteMessage = asyncHandler(async (req, res, next) => {
  const message = await Message.findById(req.params.id);

  if (!message) {
    return next(
      new ErrorResponse(`Could not find message with id of ${req.params.id}`)
    );
  }

  message.remove();

  res.status(201).json({ success: true, data: [] });
});
