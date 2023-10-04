import joi from "joi";

const userValidatorSchema = {
  signUpUser: joi.object({
    fname: joi.string().min(2).required(),
    lname: joi.string().min(2).required(),
    username: joi.string().min(5).max(30).required(),
    email: joi.string().email({ tlds: { allow: ["com"] } }).required(),
    contact: joi.string().length(10).pattern(/^[0-9]+$/).required(),
    password: joi.string().min(2).required(),
  }),
  signInUser:joi.object({
    email:joi.string().required(),
    password:joi.string().required()
  })
};

export default userValidatorSchema;
