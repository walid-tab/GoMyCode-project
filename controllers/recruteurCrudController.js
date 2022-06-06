const Offres = require('../models/Offre')
const Recruteurs = require('../models/Recruteur')

// method Delete
// API : /deleteAccountRec
exports.deleteAccountRec=async(req,res)=>{
    try {
        await Recruteurs.findByIdAndDelete(req.Recruteur._id)
        await Offres.deleteMany({recruteurId:req.Recruteur._id})
        res.status(200).send({msg:"account deleted"})
    } catch (error) {
        res.status(400).send({msg:"could not delete"})
    }
}

// method Update
// API : /updateAccountRec
exports.updateAccountRec=async(req,res)=>{
    
    try {
        
        const updated=  await Recruteurs.findByIdAndUpdate(req.Recruteur._id,{$set:req.body},{new:true})
    res.status(200).send({msg:"account updated successfully",updated})        
    } catch (error) {
        res.status(400).send({msg:"could not update"})
        
    }
}
