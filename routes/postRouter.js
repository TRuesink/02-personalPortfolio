const express = require("express");
const {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
  uploadPostPhoto,
} = require("../controllers/postController");
const { protect, permissions } = require("../middlewares/auth");
const advancedResults = require("../middlewares/advancedResults");
const Post = require("../models/Post");

const router = express.Router();

router
  .route("/")
  .post(protect, permissions("admin"), createPost)
  .get(advancedResults(Post, "comments", "tags"), getPosts);

router
  .route("/:id")
  .get(getPost)
  .put(protect, permissions("admin"), updatePost)
  .delete(protect, permissions("admin"), deletePost);

router.route("/:id/photos").put(protect, permissions("admin"), uploadPostPhoto);

module.exports = router;
