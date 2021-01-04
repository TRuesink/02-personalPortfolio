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

//set up option for jwt strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
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
      done(null, false, { message: "Not Authorized" });
    }
  });
});

//tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);
