const express = require('express');
const { register, login } = require('../controllers/userController');
const { registerValidation, validation, loginValidation } = require('../middlewares/AuthUser');
const authUserRouter = express.Router()

//Register
//method post
authUserRouter.post('/register',registerValidation,validation,register)

//login
//method post
authUserRouter.post('/login',loginValidation,validation,login)


module.exports = authUserRouter;