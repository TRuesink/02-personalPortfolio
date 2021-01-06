const path = require("path");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const keys = require("../config/keys");

// @desc Create a new Comment
// @route POST /api/v1/posts/:postId/comments
// @access Private
exports.createComment = asyncHandler(async (req, res, next) => {
  req.body.post = req.params.postId; // add the post id to the body
  req.body.user = req.user.id; // add the user to the body

  // get post
  const post = await Post.findById(req.params.postId);

  // see if post exists
  if (!post) {
    return next(
      new ErrorResponse(`Post not found with id of ${req.params.postId}`, 404)
    );
  }

  //create a new comment
  const newComment = await Comment.create(req.body);

  res.status(201).json({
    success: true,
    data: newComment,
  });
});

// @desc Get list of comments associated with post
// @route GET /api/v1/posts/:postId/comments
// @access Public
exports.getComments = asyncHandler(async (req, res, next) => {
  // get post
  const post = await Post.findById(req.params.postId);

  // see if post exists
  if (!post) {
    return next(
      new ErrorResponse(`Post not found with id of ${req.params.postId}`, 404)
    );
  }

  //create a new comment
  const comments = await Comment.find({ post: req.params.postId })
    .populate({
      path: "post",
      select: "title",
    })
    .populate({ path: "user", select: "name" });

  res.status(201).json({
    success: true,
    count: comments.length,
    data: comments,
  });
});

// @desc Get single comment
// @route GET /api/v1/comments/:id
// @access Private
exports.getComment = asyncHandler(async (req, res, next) => {
  const comment = await Comment.findById(req.params.id)
    .populate({
      path: "post",
      select: "title",
    })
    .populate({ path: "user", select: "name" });

  if (!comment) {
    return next(
      new ErrorResponse(`No comment found with id of ${req.params.id}`)
    );
  }

  res.status(201).json({
    success: true,
    data: comment,
  });
});

// @desc Edit  comment
// @route PUT /api/v1/comments/:id
// @access Private
exports.updateComment = asyncHandler(async (req, res, next) => {
  let comment = await Comment.findById(req.params.id)
    .populate({
      path: "post",
      select: "title",
    })
    .populate({ path: "user", select: "name" });

  if (!comment) {
    return next(
      new ErrorResponse(`No comment found with id of ${req.params.id}`)
    );
  }

  if (comment.user.id.toString() !== req.user.id) {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to update comment with id of ${req.params.id}`
      )
    );
  }

  comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(201).json({
    success: true,
    data: comment,
  });
});

// @desc Delete comment
// @route PUT /api/v1/comments/:id
// @access Private
exports.deleteComment = asyncHandler(async (req, res, next) => {
  let comment = await Comment.findById(req.params.id);

  if (!comment) {
    return next(
      new ErrorResponse(`No comment found with id of ${req.params.id}`)
    );
  }

  if (comment.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to delete comment with id of ${req.params.id}`
      )
    );
  }

  comment.remove();

  res.status(201).json({
    success: true,
    data: [],
  });
});
