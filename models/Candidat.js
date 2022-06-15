const mongoose = require('mongoose')

const candidatSchema = new mongoose.Schema(
{
    firstName:
        {
            type:String,
            required:true
        },
    lastName:
        {
            type:String,
        },
    email: 
        {
            type: String,
            required: true,
            unique: true, 
        },
    password:
        {
            type: String,
            required: true,
        },
    numTel :
        {
            type: Number,
          
        },
    age:Number,
    adress : {
        type: String,
        trim: true
    },  
    imageCand:String, 
    cvCand:String, 
    role:{
        type:String,enum:['user','admin'],default:"user"
    }
})

module.exports = mongoose.model('user',candidatSchema)