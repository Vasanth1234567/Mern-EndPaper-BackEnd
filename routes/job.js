const express = require('express')
const router = express.Router()
const {postJob,getJob, editJobs,getAllJobs} = require("../controllers/job")
router.route("/").get(getAllJobs)
router.route("/new").post(postJob)
router.route("/edit/:id").patch(getJob,editJobs)
module.exports = router