const path = require("path");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");
const Post = require("../models/Post");
const Tag = require("../models/Tag");
const keys = require("../config/keys");

// @desc Create a new Tag
// @route POST /api/v1/posts/:postId/tags
// @access Private
exports.createTag = asyncHandler(async (req, res, next) => {
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

  //create a new tag
  const newTag = await Tag.create(req.body);

  res.status(201).json({
    success: true,
    data: newTag,
  });
});

// @desc Get list of tags associated with post
// @route GET /api/v1/posts/:postId/tags
// @access Public
exports.getTags = asyncHandler(async (req, res, next) => {
  // get post
  const post = await Post.findById(req.params.postId);

  // see if post exists
  if (!post) {
    return next(
      new ErrorResponse(`Post not found with id of ${req.params.postId}`, 404)
    );
  }

  //get Tags
  const tags = await Tag.find({ post: req.params.postId })
    .populate({
      path: "post",
      select: "title",
    })
    .populate({ path: "user", select: "name" });

  res.status(201).json({
    success: true,
    count: tags.length,
    data: tags,
  });
});

// @desc Get single tag
// @route GET /api/v1/tags/:id
// @access Private
exports.getTag = asyncHandler(async (req, res, next) => {
  const tag = await Tag.findById(req.params.id)
    .populate({
      path: "post",
      select: "title",
    })
    .populate({ path: "user", select: "name" });

  if (!tag) {
    return next(new ErrorResponse(`No tag found with id of ${req.params.id}`));
  }

  res.status(201).json({
    success: true,
    data: tag,
  });
});

// @desc Delete tag
// @route DELETE /api/v1/tag/:id
// @access Private
exports.deleteTag = asyncHandler(async (req, res, next) => {
  let tag = await Tag.findById(req.params.id);

  if (!tag) {
    return next(new ErrorResponse(`No tag found with id of ${req.params.id}`));
  }

  if (tag.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to delete tag with id of ${req.params.id}`
      )
    );
  }

  tag.remove();

  res.status(201).json({
    success: true,
    data: [],
  });
});
