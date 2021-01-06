const express = require("express");
const {
  createComment,
  getComments,
  getComment,
  updateComment,
  deleteComment,
} = require("../controllers/commentController");
const { protect, permissions } = require("../middlewares/auth");

const router = express.Router({ mergeParams: true });

router.route("/").post(protect, createComment).get(getComments);

router
  .route("/:id")
  .get(getComment)
  .put(protect, updateComment)
  .delete(protect, deleteComment);

module.exports = router;
