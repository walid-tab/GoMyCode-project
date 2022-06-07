const mongoose = require('mongoose')

const offreSchema = new mongoose.Schema({
    offreName: {
        type: String,
        required: true,
      },
    offreDescription : {
        type: String,
        required:true,
    },
    offreCategorie : {
        type: String,
        required: true,

    },
    nombrePostes : Number,
    recruteurId : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Recruteur"
    },
    dateOuverture : Date,
    dateFermeture : Date,
    

})

module.exports = mongoose.model('Offre',offreSchema)