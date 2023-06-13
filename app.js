require("dotenv").config()
const express=require('express')
const app=express()
const PORT = 3500 || process.env.PORT
const jobs = require('./routes/job')
const mongoose = require('mongoose')
const cors = require('cors')
app.use(cors())
mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error',(error)=>console.log(error))
db.once('open',()=>console.log("Connected Succesfully"))
app.use(express.json())

app.get( "/" , (request,response) => {
    response.send("This is app.js")
})
app.use('/admin',jobs)
app.use("/view",jobs)
app.listen(PORT,() => {console.log(`Server Running on http://localhost:${PORT}`)})