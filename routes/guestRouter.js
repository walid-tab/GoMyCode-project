const express = require('express');
const { addContact } = require('../controllers/guestController');
const guestRouter = express.Router()


//Contact Us 
//method post
guestRouter.post('/contact',addContact)

module.exports = guestRouter;