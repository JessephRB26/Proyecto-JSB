const express = require ('express');
const {GetAllUser} = require('./users.controller')

const router = express.Router();

//get all users  localhost:3000/user
router.get ('/', GetAllUser)

// get users by ID params acceder a ese elemento

router.get('/:id', (req, res) => {
    
    const {role} = req.query;
    const { id } = req.params; // desestructuracion de objetos
  
    if( role === "student ") {
        res.send(`User con Id ${id} es estudiante` );
    } else {
        res.send(`User con Id ${id} es profesor` );
    }
});

module.exports = router;

// Separación de preocupaciones
// - Router define la ruta
// - Controller se encarga de la logica//
