const Offres = require("../models/Offre");
const users  = require('../models/Candidat');
const Candidatures = require("../models/Candidature");


// method POST
// API : /addJob
exports.addJob= async (req,res)=>{
   
    
    try {
        const newJob = new Offres({...req.body, recruteurId : req.Recruteur.id});
        await newJob.save();
        res.status(200).send({msg:"Job added successfully",newJob})
    } catch (error) {
        res.status(500).send('could not added')
    }
}

// method UPDATE
// API : /updateJob/:id
exports.updateJob= async (req,res)=>{
    try {
        const updatedJob = await Offres.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});        
        res.status(200).send({msg:"Job updated successfully",updatedJob})
    } catch (error) {
        res.status(500).send('could not update')
    }
}

// method DELETE
// API : /deleteJob/:id
exports.deleteJob= async (req,res)=>{
    try {
        await Offres.findByIdAndDelete(req.params.id);        
        res.status(200).send({msg:"Job deleted "})
    } catch (error) {
        res.status(500).send('could not delete')
    }
}

// method GET
// API : /allJobs
exports.getAllJobs = async(req,res)=>{
    try {
        const allJobs = await Offres.find().populate('recruteurId',"-password")
        res.status(200).send({msg:"list of Jobs",allJobs})
    } catch (error) {
        res.status(500).send('could not get Jobs')        
    }
}

// method GET
// API : /myJobs

exports.getMyJobs = async(req,res)=>{
    try {
        const myJobs = await Offres.find({recruteurId : req.Recruteur.id})
        res.status(200).send({msg:"list of my Jobs",myJobs})
    } catch (error) {
        res.status(400).send('could not get Jobs')        
    }
}

// method GET
// API : /CVcandidats 

exports.getCvCandidat = async(req,res)=>{
    try {
        const allCandidats = await users.find({role:"user"}).select("-password")
        res.status(200).send({msg:"list of Candidats",allCandidats})
    } catch (error) {
        res.status(500).send('could not get Candidats')        
    }
}
//method POST
// API :/postuler/:id
exports.postJob = async(req,res)=>{
    
    try {
        const foundCandidat = await Candidatures.findOne({candidatId:req.user._id, offreId:req.params.id})
        if(foundCandidat){
           return  res.status(400).send('Candidat exist could not post again')
        }        
        const postuler = await new Candidatures({...req.body, candidatId:req.user._id,offreId:req.params.id})
        await postuler.save();
        res.status(200).send({msg:"Post job seccessfuly",postuler})
        
    } catch (error) {
        res.status(500).send('could not post job')
    }
}

//method GET
// API : /candidatures/:id
exports.getAllCandidatures = async(req,res)=>{
    try {
        const offreCandidats = await Candidatures.find({offreId:req.params.id}).populate('candidatId',["email","numTel"])
        res.status(200).send({msg:"list of candidats in this job",offreCandidats})
    } catch (error) {
        res.status(500).send('could not get informations of candidats')        
    }
}