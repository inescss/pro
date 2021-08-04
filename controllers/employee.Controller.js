const Employee = require("../models/User");
//get current employee
const getCurrentEmployee = (req, res) => {
    Employee.findOne({ user: req.user._id })
      .then((profile) => {
        if (!profile) return res.status(404).send({ msg: "no profile" });
        else res.send(profile);
      })
      .catch((err) => res.status(400).send(err));
  };
  //Get all employees
const getAllemployees = async (req, res) => {
    const employees = await Employee.find();
    try {
      res.send(employees);
    } catch (err) {
      res.status(400).send(err);
    }
  };
  //Get one  employee
const getOneEmployee = async (req, res) => {
    const employee = await Employee.find({ _id: req.params.id });
    try {
      res.send(employee);
    } catch (err) {
      res.status(400).send(err);
    }
  };
  module.exports = {
    getAllemployees,
    getOneEmployee,
    getCurrentEmployee,
  };