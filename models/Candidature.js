const mongoose = require('mongoose')



const candidatureSchema = new mongoose.Schema(
{
    diplome : 
    {
        type:String,
        required:true,

    },
    formation : String,
    experience : 
    {
        type: Boolean,
        default:'false'
    },
    nbre_experience : Number,
    langues : String,
    offreId : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Offre"
    },

})
module.exports = mongoose.model('Candidature',candidatureSchema)

