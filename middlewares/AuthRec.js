const { body, validationResult } = require('express-validator');

exports.registerValidationRec = [
    body("recruteurName",'Empty name ! please make a your personal name').notEmpty(),
    body("email","please make a correct email").isEmail(),
    body('password',"password should be at least 8 caracter").isLength({ min: 8 }),
    body('numContact',"Your phone number should be 8 numbers").isLength({ min: 8, max:8 }),

];

exports.loginValidationRec = [
    body("email","please make a correct email").isEmail(),
    body('password',"password should be at least 8 caracter").isLength({ min: 8 }),
];

exports.validationRec =(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
}