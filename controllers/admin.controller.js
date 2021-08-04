const User = require("../models/User")

// get All users
const getAllUsers = async (req,res) => {
    const users = await User.find({})
    try{
        res.send(users)
    } 
    catch(err){
        res.status(400).send(err)
    }   
}




module.exports = {getAllUsers}