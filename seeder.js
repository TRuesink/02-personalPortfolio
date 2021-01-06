const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");
const connectDB = require("./utils/connectDB");

const User = require("./models/User");
const Post = require("./models/Post");
const Tag = require("./models/Tag");
const Comment = require("./models/Comment");

//connect to db
connectDB();

// read files
const users = JSON.parse(
  fs.readFileSync(`${__dirname}/resources/users.json`, "utf-8")
);

const posts = JSON.parse(
  fs.readFileSync(`${__dirname}/resources/posts.json`, "utf-8")
);

const tags = JSON.parse(
  fs.readFileSync(`${__dirname}/resources/tags.json`, "utf-8")
);

const comments = JSON.parse(
  fs.readFileSync(`${__dirname}/resources/comments.json`, "utf-8")
);

//import to db
const importData = async () => {
  try {
    await User.create(users);
    await Post.create(posts);
    await Comment.create(comments);
    await Tag.create(tags);
    console.log("Data Imported...".green.bold);
    process.exit();
  } catch (error) {
    console.error(error);
  }
};

// delete data
const deleteData = async () => {
  try {
    await User.deleteMany();
    await Post.deleteMany();
    await Tag.deleteMany();
    await Comment.deleteMany();
    console.log("Data Destroyed...".red.bold);
    process.exit();
  } catch (error) {
    console.error(error);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
