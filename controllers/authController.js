const _ = require("lodash");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");
const User = require("../models/User");
const jwt = require("jwt-simple");
const keys = require("../config/keys");

const getToken = (user) => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, keys.jwtSecret);
};

// @desc Register a new user
// @route POST /api/v1/register
// @access Public
exports.register = asyncHandler(async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  // logic to determine if request has email and password in the body
  if (!email || !password) {
    return next(new ErrorResponse("you must provide email and password", 422));
  }

  // find user with given email
  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    return next(new ErrorResponse("User already exists", 422));
  }
  const user = await new User(req.body).save();
  const token = getToken(user);
  req.session.token = token;
  res.status(201).json({
    success: true,
    data: { name: user.name, role: user.role },
  });
});

// @desc Log in a user
// @route POST /api/v1/login
// @access Public
exports.login = (req, res, next) => {
  const token = getToken(req.user);
  req.session.token = token;
  res.status(201).json({
    success: true,
    data: { name: req.user.name, role: req.user.role },
  });
};

// @desc Log out a user
// @route GET /api/v1/logout
// @access Public
exports.logout = (req, res, next) => {
  req.session = null;
  res.status(200).json({
    success: true,
    data: [],
  });
};

// @desc get current logged in user info
// @route GET /api/v1/user
// @access Public
exports.getMe = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: { name: req.user.name, role: req.user.role },
  });
};

// @desc get user name
// @route GET /api/v1/users/:id
// @access Public
exports.getUsername = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorResponse(`User not found with id of ${req.params.id}`)
    );
  }

  res.status(200).json({
    success: true,
    data: _.pick(user, ["role", "_id", "name", "email", "createdAt"]),
  });
});

// @desc get list of users
// @route GET /api/v1/users
// @access Admin
exports.getUsers = asyncHandler(async (req, res, next) => {
  let response = { ...res.advancedResults };
  response.data = response.data.map(
    ({ role, _id, name, email, createdAt }) => ({
      role,
      _id,
      name,
      email,
      createdAt,
    })
  );
  res.status(200).json(response);
});

// @desc delete a user
// @route DELETE /api/v1/users/:id
// @access Admin
exports.deleteUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(new ErrorResponse(`No user with id of ${req.params.id}`));
  }

  user.remove();
  res.status(200).json({ success: true, data: [] });
});
