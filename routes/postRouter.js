const express = require("express");
const { createPost } = require("../controllers/postController");
const { protect, permissions } = require("../middlewares/auth");

const router = express.Router();

router.route("/").post(protect, permissions("admin"), createPost);

module.exports = router;
