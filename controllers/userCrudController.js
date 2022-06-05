const candidatSchema = require('../models/Candidat')
// method Delete
// API : /delete/:id
exports.deleteAccountCand=async(req,res)=>{
    try {
        const deleted= await candidatSchema.findByIdAndDelete(req.params.id)
        res.status(400).res({msg:"account deleted",deleted})
    } catch (error) {
        res.status(200).send({msg:"could not delete"})
    }
}

// method Update
// API : /update/:id
exports.updateAccountCand=async(req,res)=>{
    try {
        const updated= await candidatSchema.findByIdAndUpdate(req.params.id,{$set:req.body})
    res.status(200).res({msg:"account updated successfully",updated})        
    } catch (error) {
        res.status(400).send({msg:"could not update"})
        
    }
}
