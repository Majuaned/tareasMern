//requiero el modelo del esquema


const tarea = require('../models/user.tareas')

const ctrlTareas ={};

//se crea un método, en este caso gettareas
ctrlTareas.getTareas = async (req,res)=>{
    const tareas = await tarea.find()
    //res.send('hola')
    return res.json(tareas)
    
}
    //se crea la funcionalidad para postTareas...
    ctrlTareas.postTareas = async (req,res)=>{
        
        //lo del cuerpo del body, se carga en un objeto desestructurado..donde van los atributos realizados en el esquema y en el mismo orden (declaración de desestructuración)
        const {designado, descripcion} = req.body;
        //const newTarea= await tarea.find();
        const newTarea = new tarea({
            designado, 
            descripcion
        })
        
        const tareabd = await newTarea.save();
        return res.json({
            message: 'Tarea cargada a la bd',
            //json
            tareabd
        })
    }

//Controlador para actualizar las tareas...CAMBIAR A COMPLETADO!!!

ctrlTareas.putTareas = async (req,res)=>{
    const id = req.params.id;
    //const {estado} = req.body;

    const tareaUpdate = await tarea.findByIdAndUpdate(id,{estado:"Completado, Felicitaciones!!!"});

    console.log(tareaUpdate)

    return res.json(await tarea.find({"_id": id}));
}

/* async function toogleCompletedTask (rea, res){
    const taskId = req.params.id;

    try {
        await taskModel.findByIdAndUpdate(taskId, { $set: '$completed' }),
        {new: true}; // esta línea es para q devuelva ya el objeto alterado
    } catch (error) {
        
    }
} */

/* ctrlTareas.delTareas = async (req,res)=>{
    const id = req.params.id;
    // await tarea.findByIdAndDelete(id, (err)=>
    try {
        const tareaDelete = await tarea.findByIdAndDelete(id)
        
        return res.json({"Deleted": tareaDelete})
        
    } catch (err) {
        console.log(err);
    }
} */
//****************** Delete que no elimina la tarea   ************************** */
ctrlTareas.delTareas = async (req,res)=>{
    const id = req.params.id;
    //const {active} = req.body;

    const tareaUpdate = await tarea.findByIdAndUpdate(id,{active:false});

    console.log(tareaUpdate)

    return res.json(await tarea.find({"_id": id}));
}

module.exports = ctrlTareas;