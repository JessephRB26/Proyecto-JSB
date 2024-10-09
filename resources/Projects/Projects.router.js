const express = require('express');
const router = express.Router();
// importar controlador

const { GetAllProjects, CreateProjects } = require('./Projects.controller.js')

router.get('/', GetAllProjects);
router.post('/', CreateProjects )

module.exports = router;