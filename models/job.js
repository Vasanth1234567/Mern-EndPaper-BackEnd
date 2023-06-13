const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    company : {
        type: String
    },
    location : {
        type: String
    },
    yearsofexperience : {
        type: Number
    },
    skillneeded : {
        type : String
    },
    jobDescription : {
        type : String
    },
    minSalary:{
        type : String
    },
    maxSalary : {
        type : String
    }
})

module.exports = mongoose.model('jobModel',jobSchema)