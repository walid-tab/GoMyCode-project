const Offres = require("../models/Offre");



// method POST
// API : /addUser
exports.addJob= async (req,res)=>{
    try {
        const newJob = new Offres({...req.body, recruteurId : req.Recruteur.id});
        await newJob.save();
        res.status(200).send({msg:"Job added successfully",newJob})
    } catch (error) {
        res.status(400).send('could not added')
    }
}

// method POST
// API : /updateJob/:id
exports.updateJob= async (req,res)=>{
    try {
        const updatedJob = await Offres.findByIdAndUpdate(req.params.id,{$set:req.body});        
        res.status(200).send({msg:"Job updated successfully",updatedJob})
    } catch (error) {
        res.status(400).send('could not update')
    }
}

// method DELETE
// API : /deleteJob/:id
exports.deleteJob= async (req,res)=>{
    try {
        const deletedJob = await Offres.findByIdAndDelete(req.params.id);        
        res.status(200).send({msg:"Job deleted ",deletedJob})
    } catch (error) {
        res.status(400).send('could not delete')
    }
}


// method GET
// API : /allJobs
exports.getAllJobs = async(req,res)=>{
    try {
        const allJobs = await Offres.find().populate('recruteurId')
        res.status(200).send({msg:"list of Jobs",allJobs})
    } catch (error) {
        res.status(400).send('could not get Jobs')        
    }
}

// method GET
// API : /myJobs

exports.getMyJobs = async(req,res)=>{
    try {
        const myJobs = await Offres.find({recruteurId : req.Recruteur.id})
        res.status(200).send({msg:"list of Jobs",myJobs})
    } catch (error) {
        res.status(400).send('could not get Jobs')        
    }
}

