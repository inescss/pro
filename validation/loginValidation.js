const Joi = require("@hapi/joi");

// login validation for employee et company
const loginValidation = (data) => {
    const schema =Joi.object({
        email :Joi.string().min(6).email().required(),
        password :Joi.string().min(6).required()
    })
    return schema.validate(data)

}

module.exports = {loginValidation}