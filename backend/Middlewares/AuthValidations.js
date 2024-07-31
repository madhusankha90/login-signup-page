const Joi = require('joy');

const signupValidation = (req,res,next)=>{
    const schema = Joi.object({
        name: Joi.string().min
    })
}