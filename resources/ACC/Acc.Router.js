const express = require('express');
const router = express.Router();


router.get('/', (Request, Response)=> { 
    Response.send ("Hola desde /Acc")});

module.exports = router;
