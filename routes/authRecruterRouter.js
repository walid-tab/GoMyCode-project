const express = require('express');
const { registerRec, loginRec } = require('../controllers/recruteurController');
const { registerValidationRec, validationRec, loginValidationRec } = require('../middlewares/AuthRec');
const authRecruteurRouter = express.Router()

//Register
//method post
authRecruteurRouter.post('/registerRec',registerValidationRec,validationRec,registerRec)

//login
//method post
authRecruteurRouter.post('/loginRec',loginValidationRec,validationRec,loginRec)


module.exports = authRecruteurRouter;