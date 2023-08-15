// servidor express
//impuertoación de librerias
//configuraciones
//middlewares
//recursos estáticos
//rutas

const express = require("express");
const cors = require('cors');

const app = express();
// se requiere lo de home  router y se carga en routers, el cual va a ser usado en mi servidor, o sea en APP. Se lo carga con use. 

const tarea = require('./src/routes/tarea.routes')
require('dotenv').config()

//   +++++++++++++   Conexión a la BASE DE DATOS  +++++++++++++
// conecto con la base de datos requiriendola con la ubicación donde está 
const baseDatos = require('./src/conexiones')
//ejecuto la base de datos...
baseDatos();
//-----------------------------------------------------------------------
/// ++++++++      MIDDLEWARES    -----
 // Para que el servidor comprenda archivos con formato json
app.use(express.json());
app.use(cors());
app.use(tarea);

//iniciar servidor------------------------------------------------------
const puerto = process.env.port || 3000;
//npm i dotenv  se configura para q solo llos datos se manejen por mia pp..

app.listen(puerto, console.log(`Sevidor iniciado en el puerto ${puerto}`))

