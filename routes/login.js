const express = require('express');
const router = express.Router();
const {login, getUser} = require("../controllers/login.controller");
const isAuth = require('../middleware/auth');

//login page

 router.post('/login',login);
//   router.get('/auth',isAuth, getUser);

module.exports = router;