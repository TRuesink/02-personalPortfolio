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
  const token = getToken(req.user);
  req.session.token = token;
  res.status(201).json({ success: true, token: token });
});

// @desc Log in a user
// @route POST /api/v1/login
// @access Public
exports.login = (req, res, next) => {
  const token = getToken(req.user);
  req.session.token = token;
  console.log(req.session.token);
  res.status(201).json({ success: true, token: token });
};

// @desc get current logged in user info
// @route GET /api/v1/user
// @access Public
exports.getMe = (req, res, next) => {
  res.status(200).json({ success: true, data: req.user.name });
};

// @desc get user name
// @route GET /api/v1/user/:id
// @access Public
exports.getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorResponse(`User not found with id of ${req.params.id}`)
    );
  }

  res
    .status(200)
    .json({ success: true, data: { name: user.name, id: user.id } });
});
