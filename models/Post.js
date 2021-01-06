const mongoose = require("mongoose");
require("./Comment");
require("./Tag");

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    type: { type: String, required: true, enum: ["blog", "project"] },
    title: { type: String, required: true },
    teaser: { type: String },
    content: { type: String, required: true },
    photo: {
      type: String,
      default: "no-photo.jpg",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// reverse populate with comments
postSchema.virtual("comments", {
  ref: "Comment",
  localField: "_id",
  foreignField: "post",
  justOne: false,
});

// reverse populate with tags
postSchema.virtual("tags", {
  ref: "Tag",
  localField: "_id",
  foreignField: "post",
  justOne: false,
});

const postClass = mongoose.model("Post", postSchema);

module.exports = postClass;
