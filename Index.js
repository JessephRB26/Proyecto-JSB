//importar la libreria de express  y morgan 
const express = require('express');
const morgan = require ('morgan')
const dotenv = require ('dotenv')

dotenv.config();


// llamar el router de los recursos
const projectsRouter = require ('./resources/Projects/Projects.router.js')
const AccRouter = require ('./resources/ACC/Acc.Router.js')
const bimRouter = require ('./resources/BIM/BIM.router.js')
const userRouter = require ('./resources/Users/users.router.js');
const HttpCodes = require('./const/HttpCodes.js');
const authRouter = require('./resources/Auth/auth.router.js');

const dbConnect = require('./config/mongodb.js');


// funcion del servidor

const PORT=3000;

// iniciar express
const app = express();

//middleware funcion que se ejecuta antes de entrar a la ruta  para controlar accesos
app.use(express.json()); // body parser
app.use(morgan ('dev'));

//configurar mi endpoint o  rutas 
app.get('/', (req, res) => {
  res.status(HttpCodes.OK).json({
      message: "Server Is running "
    }
  )
});
// router para llamar recursos
app.use('/projects' , projectsRouter);
app.use('/Acc' , AccRouter);
app.use('/users' , userRouter);
app.use('/Auth' , authRouter);
//SERVER
app.listen(PORT, ()  => { 
  console.log(`Server running on http://localhost:${PORT}`);
});
  

dbConnect()