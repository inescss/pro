const express = require("express");
const router = express.Router()
const Job = require("../models/Job");
const { addJob,deleteJob } = require("../controllers/job.controller");


// admin delete offer
router.delete("/:id",deleteJob)

// add job
router.post("/addjob",addJob)

module.exports = router;