const mongoose = require("mongoose");
const keys = require("../config/keys");

const connectDB = async () => {
  console.log();
  const conn = await mongoose.connect(keys.mongoUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log(
    `mongo db connected: ${conn.connection.host}`.cyan.bold.underline
  );
};

module.exports = connectDB;
