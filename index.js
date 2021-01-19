const path = require("path");
const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const fileUpload = require("express-fileupload");
const cookieSession = require("cookie-session");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const xss = require("xss-clean");
const hpp = require("hpp");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
// const dotenv = require("dotenv");
// dotenv.config({ path: "./config/config.env" });

// mongoDB connector
const connectDB = require("./utils/connectDB");

// keys
const keys = require("./config/keys");

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

app.set("trust proxy", 2);
//middlewares
app.use(morgan("dev")); // logging middleware
app.use(express.json()); // body parsing middleware
app.use(fileUpload());
app.use(
  cookieSession({
    name: "timruesinkSession",
    keys: [keys.cookieKey],
    maxAge: 4 * 60 * 60 * 1000, // 4 hours for this cookie
  })
);
// //sanitize data
// app.use(mongoSanitize());

// // set security headers
// app.use(helmet());

// // prevent cross site scripting attacks
// app.use(xss());

// // prevent http param polution
// app.use(hpp());

// // Rate limit
// const limiter = rateLimit({
//   windowMs: 10 * 60 * 1000, // 10 mins
//   max: 100,
// });
// app.use(limiter);

// Cross origin resource sharing
app.use(cors());

const dir = path.join(__dirname, "public");
app.use("/api/v1/photos", express.static(dir));

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

if (process.env.NODE_ENV === "production") {
  // Express will serve production assets like our main.js file or main.css file
  app.use(express.static("client/build"));
  // Express will serve the index.html file if it doesn't recognize route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

console.log(process.env.NODE_ENV);

// get port
const PORT = process.env.PORT || 5000;

// list on a port
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`.yellow);
});
