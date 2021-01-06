const path = require("path");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");
const Post = require("../models/Post");
const keys = require("../config/keys");

// @desc Create a new Post
// @route POST /api/v1/posts
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

// @desc Fetch list of Posts
// @route GET /api/v1/posts
// @access Public
exports.getPosts = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc Fetch a single post
// @route GET /api/v1/posts/:id
// @access Public
exports.getPost = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.id).populate([
    "comments",
    "tags",
  ]);
  if (!post) {
    return next(
      new ErrorResponse(`Post not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: post });
});

// @desc Update a post
// @route PUT /api/v1/posts/:id
// @access Private
exports.updatePost = asyncHandler(async (req, res, next) => {
  let post = await Post.findById(req.params.id);

  if (!post) {
    return next(
      new ErrorResponse(`Post not found with id of ${req.params.id}`, 404)
    );
  }

  // Make sure that user is post owner
  if (post.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User with id ${req.params.id} is not authorized to update bootcamp`,
        401
      )
    );
  }

  post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ success: true, data: post });
});

// @desc Delete a post
// @route DELETE /api/v1/posts/:id
// @access Private
exports.deletePost = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    return next(
      new ErrorResponse(`Post not found with id of ${req.params.id}`, 404)
    );
  }

  // Make sure that user is post owner
  if (post.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User with id ${req.params.id} is not authorized to delete bootcamp`,
        401
      )
    );
  }

  post.remove();

  res.status(200).json({ success: true, data: [] });
});

// @desc Upload a post photo
// @route DELETE /api/v1/posts/:id/photo
// @access Private
exports.uploadPostPhoto = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    return next(
      new ErrorResponse(`Post not found with id of ${req.params.id}`, 404)
    );
  }

  // Make sure that user is post owner
  if (post.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User with id ${req.params.id} is not authorized to delete bootcamp`,
        401
      )
    );
  }

  // check for files
  console.log(req.files);
  if (!req.files) {
    return next(new ErrorResponse("Please upload a file", 400));
  }

  const file = req.files.file;

  if (!file.mimetype.startsWith("image")) {
    return next(new ErrorResponse("Please upload an image file", 400));
  }

  if (file.size > keys.maxFileUpload) {
    return next(
      new ErrorResponse(
        `Please upload an image less than ${keys.maxFileUpload} bytes`,
        400
      )
    );
  }

  file.name = `photo_${post._id}${path.parse(file.name).ext}`;
  console.log(file.name);

  file.mv(`${keys.fileUploadPath}/${file.name}`, async (err) => {
    if (err) {
      console.error(err);
      return next(new ErrorResponse("Problem with file upload", 500));
    }
    await Post.findByIdAndUpdate(req.params.id, { photo: file.name });
    res.status(200).json({ success: true, data: file.name });
  });
});
