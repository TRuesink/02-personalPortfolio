const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const fileUpload = require("express-fileupload");

// mongoDB connector
const connectDB = require("./utils/connectDB");

// custom error handler
const errorHandler = require("./middlewares/error");
const errorLogger = require("./middlewares/errorLogger");

// bring in routes
const authRouter = require("./routes/authRouter");
const postRouter = require("./routes/postRouter");
const commentRouter = require("./routes/commentRouter");
const tagRouter = require("./routes/tagRouter");
const resumeRouter = require("./routes/resumeRouter");
const messageRouter = require("./routes/messageRouter");

// initialize our express app
const app = express();
connectDB();

//middlewares
app.use(morgan("dev")); // logging middleware
app.use(express.json()); // body parsing middleware
app.use(fileUpload());

// mount routers
app.use("/api/v1/", authRouter);
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/comments", commentRouter);
app.use("/api/v1/tags", tagRouter);
app.use("/api/v1/resume", resumeRouter);
app.use("/api/v1/messages", messageRouter);

// custom error handler
app.use(errorLogger);
app.use(errorHandler);

// get port
const PORT = process.env.PORT || 5000;

// list on a port
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`.yellow);
});
