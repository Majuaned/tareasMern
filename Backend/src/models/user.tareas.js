//carpeta de modelos de tareas, este modelo se exportará a la base de datos

//desestructuramiento preciso del mongoose
const {model, Schema} = require('mongoose');

const tareasSchema = new Schema({
    designado: {
        type: String,
        //required: true
    },
    descripcion: {
        type: String,
        //required: true
    },
    estado: {
        type: String,
        //required: true,
        default:"PENDIENTE"
    },
    active: {
        type: Boolean,
        default: true
    }
},{
    versionKey: false,
    timestamps: true
})

/* 
"designado":"",
"descripcion":"",
"estado":""
 */

module.exports = model('Tareas',tareasSchema);

