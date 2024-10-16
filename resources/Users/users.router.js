const express = require ('express');

const Aut=("../../MiddleWares/Auth.MiddleWare.js")

const {GetAllUser,
    login,
    register,
    GetUserById,
    CreateUser,
 } = require('./users.controller');
const AdminMiddleware = require('../../MiddleWares/AdminMiddleWares');

const AuthMiddleware=require("../../MiddleWares/AuthMiddleWare.js")

const router = express.Router();

//get all users  localhost:3000/user
router.get ('/',AuthMiddleware,GetAllUser);
router.get ('/login', login);
router.get ('/register', register);
router.get('/:id', GetUserById);

// METODO POST 
router.post('/',AuthMiddleware, AdminMiddleware,CreateUser);

module.exports = router;

// Separación de preocupaciones
// - Router define la ruta
// - Controller se encarga de la logica//
