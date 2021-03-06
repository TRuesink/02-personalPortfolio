const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;
  if (err.name === "CastError") {
    const message = "Resource does not exist";
    error = new ErrorResponse(message, 404);
  }

  if (err.message === "No auth token") {
    const message = "Session expired";
    error = new ErrorResponse(message, 401);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "server error",
  });
};

module.exports = errorHandler;
