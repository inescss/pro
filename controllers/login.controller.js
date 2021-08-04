const User = require("../models/User");
const bcrypt = require("bcryptjs");
const config = require("config");
const secret = config.get("secret");
const jwt = require("jsonwebtoken");
//login User
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    //let verify email existance
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: "email invalid" });
    // check  password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(404).json({ msg: " password invalid" });
    const payload = {
      id: user._id,
    };
    const token = await jwt.sign(payload, secret);
    res.send({
      token,
      id: user._id,
      fullName: user.fullName,
      email: user.email,
      field: user.field,
      userRole: user.userRole,
    });
  } catch (error) {
    res.status(500).json({ errors: error });
  }
};

exports.getUser = (req, res) => {
  res.send(req.user);
};

module.exports = { login };
