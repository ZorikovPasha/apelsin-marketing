const mongoose = require("mongoose")

const ProjectSchema = mongoose.Schema({
  id: Number,
  location: String,
  sqFoot: Number,
  name: String,
  pics: {
    full: String,
    previews: [String],
    slider: [String ]
  },
  texts: [String]
})

module.exports = mongoose.model("Project", ProjectSchema)