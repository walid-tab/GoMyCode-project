const { body, validationResult } = require('express-validator');

exports.registerValidation = [
    body("firstName",'Empty firstName ! please make a your personal name').trim().notEmpty(),
    body("lastName",'Empty lastName ! please make a your personal name').trim().notEmpty(),
    body("email","please make a correct email").isEmail().trim(),
    body('numTel',"Your phone number must be 8 numbers").trim().isLength({ min: 8, max:8 }),
    body('password',"password must be at least 8 caracter").trim().isLength({ min: 8 }), 
]; 

exports.loginValidation = [
    body("email","please make a correct email").isEmail().trim(),
    body('password',"password must be at least 8 caracter").isLength({ min: 8 }).trim(),
];

exports.validation =(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
}