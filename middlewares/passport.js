const passport = require("passport");
const User = require("../models/User");
const keys = require("../config/keys");
const JwtStrategy = require("passport-jwt").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const asyncHandler = require("../middlewares/async");

// create local strategy
const localOptions = {
  usernameField: "email",
};
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  // verify username and password

  // find user with matching email
  User.findOne({ email: email }, (err, user) => {
    if (err) {
      done(err, false);
    }
    // if user doesnt exist, return no user,
    if (!user) {
      return done(null, false, { message: "Incorrect username or password" });
    }
    user.comparePassword(password, (err, isMatch) => {
      if (err) {
        return done(err, false);
      }
      if (!isMatch) {
        return done(null, false, { message: "Incorrect username or password" });
      }
      return done(null, user);
    });
  });
});

// custom cookie extactor function - we are getting the jwt from the cookie
const cookieExtractor = function (req) {
  let token = null;
  if (req && req.session.token) {
    token = req.session.token;
  }
  return token;
};

//set up option for jwt strategy
const jwtOptions = {
  jwtFromRequest: cookieExtractor,
  secretOrKey: keys.jwtSecret,
};

//create jwt strategy
const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
  // see if the user ID in the payload exists in our data base
  // if it does, call done with that user
  // otherwise, call done without user object

  User.findById(payload.sub, function (err, user) {
    if (err) {
      return done(err, false, { message: "Not Authorized" });
    }
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

//tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);
