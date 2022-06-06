const express = require('express');
const { addJob, getMyJobs, updateJob, deleteJob } = require('../controllers/offreController');
const { updateAccountRec, deleteAccountRec } = require('../controllers/recruteurCrudController');
const { isAuthRec } = require('../middlewares/ValidationRec');
const recruteurRouter = express.Router()

// Modifier Profil
// mothod update
recruteurRouter.put('/updateAccountRec',isAuthRec,updateAccountRec)

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

//Rechercher un CV
//method get 
//recruteurRouter.get('/candidats/:id',getCandidat)

//Consulter les candidatures réçus
//method get
//recruteurRouter.get('/candidatures/:id',getAllCandidatures)

module.exports = recruteurRouter;