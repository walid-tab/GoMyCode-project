const recruteurSchema = require('../models/Recruteur')

// method Delete
// API : /deleteAccountRec/:id
exports.deleteAccountRec=async(req,res)=>{
    try {
        const deleted= await recruteurSchema.findByIdAndDelete(req.params.id)
        res.status(400).res({msg:"account deleted",deleted})
    } catch (error) {
        res.status(200).send({msg:"could not delete"})
    }
}

// method Update
// API : /updateAccountRec/:id
exports.updateAccountRec=async(req,res)=>{
    try {
        const updated= await recruteurSchema.findByIdAndUpdate(req.params.id,{$set:req.body})
    res.status(200).res({msg:"account updated successfully",updated})        
    } catch (error) {
        res.status(400).send({msg:"could not update"})
        
    }
}
