const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");
const connectDB = require("./utils/connectDB");

const Job = require("./models/resume/Job");
const Education = require("./models/resume/Education");
const Skill = require("./models/resume/Skill");

//connect to db
connectDB();

// read files
const jobs = JSON.parse(
  fs.readFileSync(`${__dirname}/resources/jobs.json`, "utf-8")
);
jobs.forEach((job) => {
  job.startDate = new Date(job.startDate);
  job.endDate = new Date(job.endDate);
});

const education = JSON.parse(
  fs.readFileSync(`${__dirname}/resources/education.json`, "utf-8")
);
education.forEach((ed) => {
  ed.startDate = new Date(ed.startDate);
  ed.endDate = new Date(ed.endDate);
});

const skills = JSON.parse(
  fs.readFileSync(`${__dirname}/resources/skills.json`, "utf-8")
);

//import to db
const importData = async () => {
  try {
    await Job.create(jobs);
    await Education.create(education);
    await Skill.create(skills);
    console.log("Data Imported...".green.bold);
    process.exit();
  } catch (error) {
    console.error(error);
  }
};

// delete data
const deleteData = async () => {
  try {
    await Job.deleteMany();
    await Education.deleteMany();
    await Skill.deleteMany();
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
