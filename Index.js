//importar la libreria de express 
const express = require('express');
// llamar el router de los recursos
const projectsRouter = require ('./resources/Projects/Projects.router.js')
const AccRouter = require ('./resources/ACC/Acc.Router.js')
const bimRouter = require ('./resources/BIM/BIM.router.js')
const userRouter = require ('./resources/Users/users.router.js')
// iniciar express
const app = express();
//puerto en el que funciona el servidor

//npm

//configurar mi endpoint o  rutas 
app.get('/', (request, response) => {
  response.send('DESDE LA TIERRA VIENE ESTA API c: ');
});
// router para llamar recursos
app.use('/projects' , projectsRouter);
app.use('/Acc' , AccRouter);
app.use('/users' , userRouter);
//callback : funciones que son parametro dentro de funciones
// calback mediante funcion flecha
// metodo listen crea servidor 
app.listen(3000, ()  => { console.log('servidor corriendo en puerto 3000');
});
  
