const express = require("express");
const User = require("../models/User");
const {
  register,
  login,
  logout,
  getMe,
  getUsername,
  getUsers,
  deleteUser,
} = require("../controllers/authController");
const { requireSignIn, protect, permissions } = require("../middlewares/auth");
const advancedResults = require("../middlewares/advancedResults");

const router = express.Router();

router.route("/register").post(register);

router.route("/login").post(requireSignIn, login);

router.route("/me").get(protect, getMe);

router.route("/users/:id").get(getUsername);

router
  .route("/users")
  .get(protect, permissions("admin"), advancedResults(User), getUsers);

router.route("/users/:id").delete(protect, permissions("admin"), deleteUser);

router.route("/logout").get(logout);

module.exports = router;
