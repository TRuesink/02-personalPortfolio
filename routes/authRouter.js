const express = require("express");
const {
  register,
  login,
  logout,
  getMe,
  getUser,
} = require("../controllers/authController");
const { requireSignIn, protect, permissions } = require("../middlewares/auth");

const router = express.Router();

router.route("/register").post(register);

router.route("/login").post(requireSignIn, login);

router.route("/me").get(protect, getMe);

router.route("/user/:id").get(getUser);

module.exports = router;
