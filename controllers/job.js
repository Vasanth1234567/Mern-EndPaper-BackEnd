const { request, response } = require("express")
const jobModel = require("../models/job")
const getAllJobs = async (request,response)=>{
    try{
        const jobs = await jobModel.find();
       response.status(200).json(jobs);
      }
      catch(error){
        // console.log(error);
        response.status(500).json({message:error.message})
      }
}
const postJob = async (request,response) => {
    const newJob = new jobModel({
        company : request.body.company,
        location : request.body.location,
        yearsofexperience : request.body.yearsofexperience,
        skillneeded : request.body.skillneeded,
        jobDescription : request.body.jobDescription,
        minSalary : request.body.minSalary,
        maxSalary : request.body.maxSalary
    })
    try{
        const jobs = await newJob.save()
        response.status(201).json(jobs)
        console.log("Data Added Succesfully")
    }
    catch(error){
        response.status(500).json({message:error.message})
    }
}
const editJobs = async (request,response)=>{
    if(request.body.company != null){
        response.job.company = request.body.company
    }
    if(request.body.location != null){
        response.job.location = request.body.location
    }
    if(request.body.yearsofexperience != null){
        response.job.yearsofexperience = request.body.yearsofexperience
    }
    if(request.body.skillneeded != null){
        response.job.skillneeded = request.body.skillneeded
    }
    if(request.body.jobDescription != null){
        response.job.jobDescription = request.body.jobDescription
    }
    if(request.body.minSalary != null){
        response.job.minSalary = request.body.minSalary
    }
    if(request.body.maxSalary != null){
        response.job.maxSalary = request.body.maxSalary
    }
    try{
        const editJob = await response.job.save()
        response.status(200).json(editJob)
    }
    catch(error){
        response.status(400).json({message:error.message})
    }
}
async function getJob(request,response,next){
    let job
    try{
      job=await jobModel.findById(request.params.id)
      if(job==null){
        return response.status(404).json({message:`cannot find a job with id ${request.params.id}`})
      }
    }
    catch(error){
      return response.status(500).json({message:error.message})
    }
    response.job=job
    next();
  }
module.exports = {postJob,getJob,editJobs,getAllJobs}