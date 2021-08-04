//const { jobsValidation } = require("../validation/jobsValidation");
const Job = require("../models/Job");
const bcrypt = require("bcryptjs");
const config = require("config");
const secret = config.get("secret");
 const jwt = require("jsonwebtoken");

//Get all jobs
const getAlljob = async (req, res) => {
  const jobs = await Job.find().sort({createdAt:-1});
  try {
    res.send(jobs);
  } catch (err) {
    res.status(400).send(err);
  }
};
//Post a job

  const addJob = async (req, res) => {
    const {
      job, 
      description,
      company,
      address,
      salary,
      email,
      field,
      phone,
  } = req.body;
    try {
      const user = await Job.findOne({ email });
      if (user) return res.status(401).json({ msg: "user already exists" });
      let newJob = new Job({
        job, 
        description,
        company,
        address,
        salary,
        email, 
        field,
        phone,
  });
      // const salt = await bcrypt.genSalt(10);
      // const hash = await bcrypt.hash(password, salt);
     // newJob.password = hash;
      await newJob.save();
      // res.status(201).json(newUser);
      const payload = {
        id: newJob._id,
      };
      const token = jwt.sign(payload,secret);
      res.send({
        token,
        job: {
          _id: newJob._id,
          job: newJob.job,
          description: newJob.description,
          company: newJob.company,
          address: newJob.address,
          salary: newJob.salary,
          email: newJob.email,
          field:newJob.field,
          phone:newJob.phone,
        }
      });
    } catch (error) {
      res.status(500).json({ errors: error.message });
    }
  };
  
  //Delete a job
const deleteJob = async (req, res) => {
    const removedJob = await Job.findOne({ _id: req.params.id });
    try {
      await removedJob.remove();
      res.send({ msg: "job is removed" });
    } catch (err) {
      res.status(404).send({ msg: "job already removed" });
    }
  };
  module.exports = {
    getAlljob,
    deleteJob,
    addJob,
  };
  