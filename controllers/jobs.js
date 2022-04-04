const getAllJobs = async (req, res) => {
    res.send('All jobs')
}

const getJob = async (req, res) => {
    res.send('get job')
}

const createJob = async (req, res) => {
    res.send('Create job')
}

const updateJob = async (req, res) => {
    res.send('Update job')
}

const deleteJob = async (req, res) => {
    res.send('Delete job')
}


module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob,
}