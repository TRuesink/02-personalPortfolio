const express = require("express");

// bring in resume models
const Education = require("../models/resume/Education");
const Job = require("../models/resume/Job");
const Skill = require("../models/resume/Skill");

const {
  getEducation,
  getJobs,
  getSkills,
} = require("../controllers/resumeController");
const advancedResults = require("../middlewares/advancedResults");

const router = express.Router();

router.route("/education").get(advancedResults(Education), getEducation);

router.route("/jobs").get(advancedResults(Job), getJobs);

router.route("/skills").get(advancedResults(Skill), getSkills);

module.exports = router;
