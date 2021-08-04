const express = require('express');
const router = express.Router();
const {userRegister, Companyeregister} = require("../controllers/user.controller");
  //route employee
router.post('/register',userRegister,)

 //route company
 router.post('/register',Companyeregister)
module.exports = router;