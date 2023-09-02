const ApiError = require('../error/ApiError');
const Request = require("../models/request")
class RequestController {

  async handleRequest(req, res, next) {
    try {
      if (!req.body?.name || !req.body?.phone) {
        next(ApiError.BadRequest("Name and phone must be provided"))
      }

      const request = new Request({
        name: req.body.name,
        phone: req.body.phone,
        message: req.body.message,
        timestamp: Date.now()
      })

      await request.save()
      return res.sendStatus(201)
    } catch (e) {
      next(ApiError.internal(err));
    }
  }
}

module.exports = new RequestController