const express = require("express");
const {getAllUsers,getAllComp} = require("../controllers/admin.controller");
const { Employeeregister } = require("../controllers/employee.controller");
const auth = require("../middleware/auth");
const { registerValidation } = require("../validation/employeeValidation");
const router = express.Router()


// Get all users
router.get("/admin",getAllUsers)

module.exports = router