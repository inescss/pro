const User = require("../models/User");
const bcrypt = require("bcryptjs");
const config = require("config");
const secret = config.get("secret");
const jwt = require("jsonwebtoken");

// register epmloyee
const userRegister = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    age,
    phone,
    field,
    password,
    address,
    userRole,
    category,
  } = req.body;
  try {
    const searchRes = await User.findOne({ email });
    if (searchRes)
      return res.status(401).json({ msg: "employee already exists" });
    const newUser = new User({
      firstName,
      lastName,
      email,
      age,
      phone,
      field,
      password,
      address,
      category,
      userRole,
    });
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    newUser.password = hash;
    await newUser.save();
    const payload = {
      id: newUser._id,
    };

    const token = jwt.sign(payload, secret);
    res.send({
      token,
      user: {
        _id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        age: newUser.age,
        field: newUser.field,
        phone: newUser.phone,
        userRole: newUser.userRole,
        address: newUser.address,
        category: newUser.category,
      },
    });
  } catch (error) {
    res.status(500).json({ errors: error });
  }
};
//register company
const Companyeregister = async (req, res) => {
  const {
    name,
    email,
    phone,
    field,
    category,
    address,
    userRole,
    password,
  } = req.body;
  try {
    const searchRes = await User.findOne({ email });
    if (searchRes)
      return res.status(401).json({ msg: "company already exists" });
    const newUser = new user({
      name,
      email,
      field,
      phone,
      password,
      address,
      category,
      userRole,
    });
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    newUser.password = hash;
    await newUser.save();
    const payload = {
      id: newUser._id,
    };

    const token = jwt.sign(payload, secret);
    res.send({
      token,
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        field: newUser.field,
        phone: newUser.phone,
        userRole: newUser.userRole,
        address: newUser.address,
        category: newUser.category,
      },
    });
  } catch (error) {
    res.status(500).json({ errors: error });
  }
};

const authorizedUser = (req, res) => {
  res.send(req.User);
};

module.exports = { userRegister, Companyeregister, authorizedUser };
