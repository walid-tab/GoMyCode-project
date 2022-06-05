const { body, validationResult } = require('express-validator');

exports.registerValidation = [
    body("firstName",'Empty firstName ! please make a your personal name').notEmpty(),
    body("lastName",'Empty lastName ! please make a your personal name').notEmpty(),
    body("email","please make a correct email").isEmail(),
    body('numTel',"Your phone number should be 8 numbers").isLength({ min: 8, max:8 }),
    body('password',"password should be at least 8 caracter").isLength({ min: 8 }),
];

exports.loginValidation = [
    body("email","please make a correct email").isEmail(),
    body('password',"password should be at least 8 caracter").isLength({ min: 8 }),
];

exports.validation =(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
}