const express = require('express');
const { getAllJobs } = require('../controllers/offreController');
const { updateAccountCand } = require('../controllers/userCrudController');
const { isAuth } = require('../middlewares/validationUser');
const candidatRouter = express.Router()

// Modifier Profil
// mothod update
//candidatRouter.put('/updateAccountCand/:id',updateAccountCand)

// suprimer compte
// mothod delete
//candidatRouter.delete('/deleteAccountCand/:id',deleteAccountCand)


//Consuler les offres
//method get
candidatRouter.get('/offres',getAllJobs)

//Consuler les offres
//method get
//candidatRouter.get('/offres/:id',getOneJob)

//Rechercher un offre
//method get 
//candidatRouter.get('/offres/:id',datailsOneJob)

//Postuler pour un offre
//method post
//candidatRouter.post('/postuler/:id',postJob)


module.exports = candidatRouter;