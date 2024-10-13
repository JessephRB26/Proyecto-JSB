const express = require ('express');

const {GetAllUser,
    login,
    register,
    GetUserById,
    CreateUser,
 } = require('./users.controller')

const router = express.Router();

//get all users  localhost:3000/user
router.get ('/', GetAllUser)
router.get ('/login', login)
router.get ('/register', register)
router.get('/:id', GetUserById);

// METODO POST 
router.post('/', CreateUser);

module.exports = router;

// Separación de preocupaciones
// - Router define la ruta
// - Controller se encarga de la logica//
