const express = require('express');
const { getAllJobs, postJob } = require('../controllers/offreController');
const { updateAccountCand, deleteAccountCand, getMyProfil, updatePassCand } = require('../controllers/userCrudController');
const { isAuth } = require('../middlewares/validationUser');
const candidatRouter = express.Router()

//Afficher Mon profil
//method get
candidatRouter.get('/myProfilUser/:id',isAuth,getMyProfil)

// Modifier Profil
// mothod update
candidatRouter.put('/updateAccountCand',isAuth,updateAccountCand)

// Modifier Password
// mothod update
candidatRouter.put('/updatePasswordCand',isAuth,updatePassCand)

// suprimer compte
// mothod delete
candidatRouter.delete('/deleteAccountCand',isAuth,deleteAccountCand)

//Consuler les offres
//method get
candidatRouter.get('/jobs',getAllJobs)

//Postuler pour un offre
//method post
candidatRouter.post('/postuler/:id',isAuth,postJob)


module.exports = candidatRouter;