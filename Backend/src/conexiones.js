// para establecer conexiones debo instalar el mongooose, y requerirlo

const mongoose =require('mongoose');
require('dotenv').config()

//connect es un método cargado q viene de mongoose y cargado a conectarBd..
const conectarBd = async ()=>{
    mongoose.connect(process.env.mongoUri ,{
        //este parámetro es requerido y se saco de la documentación
        useNewUrlParser: true,
        useUnifiedTopology: true
        //esto es codigo viejo por lo tano se puede obviar
        //lo bueno seria...
        
        //.then(()=>console.log(conectado))
        //.catch(_err=>{}
        //  console.log(err)
        // process.exit(1)
        //})
        //
    });
    console.log('Base de datos conectada OK')
}

module.exports = conectarBd;