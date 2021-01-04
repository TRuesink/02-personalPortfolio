const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");
const Post = require("../models/Post");

// @desc Create a new Post
// @route POST /api/v1/blog/posts
// @access Private
exports.createPost = asyncHandler(async (req, res, next) => {
  req.body.user = req.user.id; // add the user id to the request body

  //create a new post
  const newPost = await Post.create(req.body);

  res.status(201).json({
    success: true,
    data: newPost,
  });
});
