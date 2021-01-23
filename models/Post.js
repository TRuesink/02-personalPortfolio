const mongoose = require("mongoose");
require("./Comment");
require("./Tag");

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    type: {
      type: String,
      required: [true, "Please include a type of either blog or project"],
      enum: ["blog", "project"],
    },
    title: { type: String, required: [true, "Please include a title"] },
    teaser: { type: String },
    content: { type: String, required: [true, "Please include some content"] },
    featured: { type: Boolean, default: false },
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

// Cascade delete courses when a bootcamp is deleted
postSchema.pre("remove", async function (next) {
  console.log(`comments being removed from post ${this._id}`);
  await this.model("Comment").deleteMany({ post: this._id });
  next();
});

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
