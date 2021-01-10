const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");
const keys = require("../config/keys");
const Education = require("../models/resume/Education");
const Job = require("../models/resume/Job");

// @desc Get education
// @route GET /api/v1/resume/education
// @access Public
exports.getEducation = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc Get skills
// @route GET /api/v1/resume/skills
// @access Public
exports.getSkills = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc Get jobs
// @route GET /api/v1/resume/jobs
// @access Public
exports.getJobs = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});
