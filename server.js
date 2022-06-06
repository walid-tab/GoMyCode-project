const express = require('express');
const connectDB = require('./Config/connectDB');
const authRecruteurRouter = require('./routes/authRecruterRouter');
const authUserRouter = require('./routes/authUserRouter');
const candidatRouter = require('./routes/candidatRouter');
const recruteurRouter = require('./routes/recruterRouter');

const app = express()
port = process.env.PORT || 5000;


//db connection
connectDB();

//middleware
app.use(express.json())
app.use('/api/authUser',authUserRouter) 
app.use('/api/authRec',authRecruteurRouter)
app.use('/api/accountUser',candidatRouter)
app.use('/api/allJobs',candidatRouter)
app.use('/api/accountRec',recruteurRouter)






app.listen(port,console.log(`server is up and running on http://localhost:${port}`))