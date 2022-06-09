const users  = require('../models/Candidat');
const Recruteurs = require('../models/Recruteur');
const Offres = require('../models/Offre')


// method DELETE
// API : /deleteUser/:id
exports.deleteUser=async(req,res)=>{ 
    try {
     await users.findByIdAndDelete(req.params.id)
        res.status(200).send({msg:"account user deleted",})
    } catch (error) {
        res.status(400).send({msg:"could not delete user"}) 
    }
}
// method GET
// API : /allRecruteurs
exports.getAllRecruteurs = async(req,res)=>{
    try {
        const allRecruteurs = await Recruteurs.find().select("-password")
        res.status(200).send({msg:"list of Recruiters",allRecruteurs})
    } catch (error) {
        res.status(400).send('could not get recruiters')        
    } 
}
// method DELETE
// API : /deleteRecruteur/:id
exports.deleteRecruteur=async(req,res)=>{ 
    try {
        await Recruteurs.findByIdAndDelete(req.params.id)
        await Offres.deleteMany({recruteurId:req.params.id})
        res.status(200).send({msg:"Recruiter account deleted"})
    } catch (error) {
        res.status(400).send({msg:"could not delete"})
    }
}
