const express = require('express');
const { getAllJobs, postJob } = require('../controllers/offreController');
const { updateAccountCand, deleteAccountCand } = require('../controllers/userCrudController');
const { isAuth } = require('../middlewares/validationUser');
const candidatRouter = express.Router()

// Modifier Profil
// mothod update
candidatRouter.put('/updateAccountCand',isAuth,updateAccountCand)

// suprimer compte
// mothod delete
candidatRouter.delete('/deleteAccountCand',isAuth,deleteAccountCand)

//Consuler les offres
//method get
candidatRouter.get('/',getAllJobs)

//Postuler pour un offre
//method post
candidatRouter.post('/postuler/:id',isAuth,postJob)


module.exports = candidatRouter;