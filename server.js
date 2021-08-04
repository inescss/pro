const express = require('express');
//  const { connect } = require("mongoose");
const connectDB = require('./config/connectDB');
const user =require ('./routes/User')
const adminUser = require ('./routes/admin')
const login = require("./routes/login");
const jobsRoute = require("./routes/Job")
const app = express();
app.use(express.json());

//Routees
app.use("/register",user );
app.use("/login",login);
app.use("/jobs",jobsRoute);
app.use("/admin",adminUser)

connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) =>
    err ? console.error(err) : console.log(`server running on port ${PORT}`)
  );