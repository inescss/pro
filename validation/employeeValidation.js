// const Joi = require("@hapi/joi");


// //register validation for employee
// const registerValidation = (data) => {
//     const schema = Joi.object({
//         firstName:Joi.string().min(3).required(),
//         lastName:Joi.string().min(3).required(),
//         email:Joi.string().min(6).email().required(),
//         // age :Joi.number() ,
//         phone:Joi.string().length(8).pattern(/^[0-9]+$/).required(),
//         field:Joi.string(),
//         address:Joi.string(),
//         //role:Joi.string(),
//         password:Joi.string().min(6).required(),
//     })
//     return schema.validate(data)
// }
// module.exports = {registerValidation}