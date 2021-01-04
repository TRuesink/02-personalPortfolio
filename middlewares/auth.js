const ErrorResponse = require("../utils/errorResponse");
const passportService = require("./passport");
const passport = require("passport");

exports.requireSignIn = (req, res, next) => {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return next(err);
    }
    // test to see if a user is found
    if (!user) {
      return next(new ErrorResponse(info.message, 400));
    }
    req.user = user;
    return next();
  })(req, res, next);
};

exports.protect = (req, res, next) => {
  passport.authenticate("jwt", function (err, user, info) {
    if (err) {
      return next(new ErrorResponse("Not Authorized", 401));
    }
    if (!user) {
      return next(new ErrorResponse("Not Authorized", 401));
    }
    req.user = user;
    return next();
  })(req, res, next);
};

exports.permissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorResponse(
          `User with role '${req.user.role}' is not authorized`,
          401
        )
      );
    }
    next();
  };
};
