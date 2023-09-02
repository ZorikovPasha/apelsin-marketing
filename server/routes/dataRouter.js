const express = require('express');
const router = express.Router();

const dataController = require('../controllers/dataController');

router.get('/projects', dataController.getProjects);

module.exports = router;