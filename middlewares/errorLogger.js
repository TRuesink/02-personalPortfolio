const errorLogger = (err, req, res, next) => {
  console.log("Error Code: ", err.statusCode);
  console.log("Error Message: ", err.message.red.bold);
  console.log("Stack: ", err.stack.red);
  next(err);
};

module.exports = errorLogger;
