const mongoose = require("mongoose")

const RequestSchema = mongoose.Schema({
  name: String,
  phone: String,
  message: String,
  timestamp: Date
})

module.exports = mongoose.model("Request", RequestSchema)