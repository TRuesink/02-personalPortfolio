const express = require("express");
const {
  createTag,
  getTag,
  getTags,
  deleteTag,
} = require("../controllers/tagController");
const { protect, permissions } = require("../middlewares/auth");

const router = express.Router({ mergeParams: true });

router.route("/").post(protect, createTag).get(getTags);

router.route("/:id").get(getTag).delete(protect, deleteTag);

module.exports = router;
