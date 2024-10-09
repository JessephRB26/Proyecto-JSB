//importar la libreria de express 
const express = require('express');
const AccRouter = require ('.resources/ACC/index.js')
// iniciar express
const app = express();
//puerto en el que funciona el servidor



//configurar mi endpoint o  rutas 
app.get('/', (request, response) => {
    res.send('Hello, world!');
  });
// router para llamar recursos

app.use ('/acc', AccRouter);
//callback : funciones que son parametro dentro de funciones
// calback mediante funcion flecha
// metodo listen crea servidor 
app.listen(3000, ()  => { console.log('servidor corriendo en puerto 3000');
});
  
