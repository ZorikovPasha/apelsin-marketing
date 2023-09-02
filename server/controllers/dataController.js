const ApiError = require('../error/ApiError');
const Project = require("../models/project")
class DataController {

  async getProjects(req, res) {
    try {
      const Projects = await Project.find({})
      return res.status(200).json(Projects)
    } catch (e) {
      next(ApiError.internal(err));
    }
  }
}

module.exports = new DataController