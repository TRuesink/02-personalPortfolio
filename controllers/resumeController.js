const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");

// @desc Get education
// @route GET /api/v1/resume/education
// @access Public
exports.getEducation = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc Get education
// @route GET /api/v1/resume/skills
// @access Public
exports.getSkills = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc Get education
// @route GET /api/v1/resume/jobs
// @access Public
exports.getJobs = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});
