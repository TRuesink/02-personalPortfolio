const express = require("express");
const commentRouter = require("./commentRouter");
const tagRouter = require("./tagRouter");
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

// reroute to comments and tags
router.use("/:postId/comments", commentRouter);
router.use("/:postId/tags", tagRouter);

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
