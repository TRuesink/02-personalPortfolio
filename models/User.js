const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

// define the user model
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, lowercase: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["basic"], default: "basic" },
  createdAt: { type: Date, default: Date.now },
});

// On save hook encrypt password
// before saving a model, run this function
userSchema.pre("save", function (next) {
  // get access to user model
  const user = this;
  // generate a salt then run callback
  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return next(err);
    }
    // hash password using the salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

// compare encrypted passwords - returns boolean
userSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
};

// create a user class
const userClass = mongoose.model("user", userSchema);

// export model
module.exports = userClass;
