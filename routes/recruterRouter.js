const express = require('express');
const { addJob, getMyJobs, updateJob, deleteJob, getCvCandidat, getAllCandidatures } = require('../controllers/offreController');
const { updateAccountRec, deleteAccountRec, getMyProfilRec, updatePassRec } = require('../controllers/recruteurCrudController');
const { isAuthRec } = require('../middlewares/ValidationRec');
const recruteurRouter = express.Router()

//Afficher Mon profil
//method get 
recruteurRouter.get('/myProfilRec/:id',isAuthRec,getMyProfilRec)

// Modifier Profil
// mothod update
recruteurRouter.put('/updateAccountRec',isAuthRec,updateAccountRec)

// Modifier Password
// mothod update
recruteurRouter.put('/updatePasswordRec',isAuthRec,updatePassRec)

// suprimer compte
// mothod delete
recruteurRouter.delete('/deleteAccoutRec',isAuthRec,deleteAccountRec)

//Ajouter offre
//method post
recruteurRouter.post('/addJob',isAuthRec,addJob) 

//Supprimer Offre
//method delete
recruteurRouter.delete('/deleteJob/:id',isAuthRec,deleteJob)

//Modifier Offre
//method update
recruteurRouter.put('/updateJob/:id',isAuthRec,updateJob)

// liste de mes offres
//method get
recruteurRouter.get('/myJobs',isAuthRec,getMyJobs)

//Rechercher un CV candidat
//method get 
recruteurRouter.get('/CVcandidats',isAuthRec,getCvCandidat)

//Consulter les candidatures réçus
//method get
recruteurRouter.get('/candidatures/:id',isAuthRec,getAllCandidatures)

module.exports = recruteurRouter;