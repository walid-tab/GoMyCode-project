const express = require('express');
const { getAllJobs } = require('../controllers/offreController');
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

//Consuler les offres
//method get
//candidatRouter.get('/offres/:id',getOneJob)

//Postuler pour un offre
//method post
//candidatRouter.post('/postuler/:id',postJob)


module.exports = candidatRouter;