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
            required:true
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
            required: true,
        },
    age:Number,
    adress : String,  
    imageCand:String, 
    role:{
        type:String,enum:['user','admin'],default:"user"
    }
})

module.exports = mongoose.model('user',candidatSchema)