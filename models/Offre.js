const mongoose = require('mongoose')

const offreSchema = new mongoose.Schema({
    offreName: {
        type: String,
        required: true,
        trim: true
      },
    offreDescription : {
        type: String,
        required:true,
        trim: true
    },
    offreCategorie : {
        type: String,
        required: true,
        trim: true
    },
    nombrePostes :{ 
        type: Number, 
        trim: true
    },
    recruteurId : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Recruteur"
    },
    dateOuverture : {
            
        type: Date,      
        default: Date.now         
    },
    dateFermeture : {
        type: Date  
    },
    

})

module.exports = mongoose.model('Offre',offreSchema)