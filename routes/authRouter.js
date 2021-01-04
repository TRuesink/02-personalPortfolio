const express = require("express");
const {
  register,
  login,
  logout,
  getUser,
} = require("../controllers/authController");
const { requireSignIn, protect, permissions } = require("../middlewares/auth");

const router = express.Router();

router.route("/register").post(register);

router.route("/login").post(requireSignIn, login);

router.route("/user").get(protect, permissions("admin"), getUser);

module.exports = router;
