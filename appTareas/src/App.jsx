import { useState } from "react";

import "./App.css";

function App() {

  const [tarea, setTarea] = useState({designado: '', descripcion: ''});
  
  const [listaTarea, setListaTarea] = useState([]);
  
  //**************  FUNCIÓN PARA SOLICITAR LAS TAREAS A LA BD   ******************
  const getTareas2 = async ()=>{
    try {
      const consulta = await fetch('http://localhost:5000/tarea');
      const consultaJson = await consulta.json();

      console.log(consultaJson);

      setListaTarea(consultaJson);

    } catch (error) {
      console.log(error) 
    }
  }

  // ********** Función para manejar los inputs  ***********************
  function handleInput ({target}){
    // el input tiene muchas propiedades lo q utilizo es el target...
    setTarea({
      ///con los 3 puntos se obtienen los valores de los inputs cargados
      ...tarea,
      [target.name]: target.value,
    })
    //console.log(target.value)
  };

  //************** Función para el envío del formulario ************
  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      //Encabezado de la petición
      const compoPeticion = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(tarea)
      }

      //Cuerpo de la petición
      const peticion = await fetch('http://localhost:5000/tarea',compoPeticion);
      const respPeti = await peticion.json()
      console.log(respPeti)

      //setTarea({designado: '', descripcion: ''})

    } catch (error) {
      console.log(error) 
    }
  }  

  // **********************   FUNCIÓN PARA CAMBIAR EL ESTADO DE LA ACTIVIDAD  **********************
  const putBackend = async () =>{
    
  }

  const changeTareas2 = async (id)=>{

    setListaTarea((estaditos) => estaditos.map((listita)=>{
      if(listita.id===id){
        listita.estado = 'Completado, Felicitaciones!!!'
      }
    }))
    console.log(listaTarea)
  }

  return (
    <>
      <main>
      <h1>TALLER DE LENGUAJES DE PROGRAMACIÓN 4</h1>
      <h2>Trabajo Práctico de diagnóstico</h2>
      <h3>"Listado dinámico de tareas con el stack MERN"</h3>
        <form>
          <input
            onChange={handleInput}
            type="text"
            name="designado"
            value={tarea?.designado}
            placeholder="Encargado de realizar la tarea"
          ></input>

          <input
            onChange={handleInput}
            type="text"
            name="descripcion"
            value={tarea?.descripcion}
            placeholder="Descripción de la tarea"
          ></input>

          <button onClick={handleSubmit} type="submit">Crear la tarea</button>
        </form>
      </main>

      

            <button onClick={getTareas2} type="submit">Mostrar Tareas Activas</button>
          <div className="">
            {listaTarea.map((item) => (

              <div key={item.id} className="card">
              <h3>Persona encargada: {item?.designado}</h3>
              <h5>Tarea: {item?.descripcion}</h5>
              <h4>Estado de la Actividad: {item?.estado}</h4>

              <button onClick={()=>{changeTareas2(item._id)}}>Cambiar estado de la Actividad</button>
              <button>eliminar</button>

            </div>
            ))}
          </div>
          
      <p className="read-the-docs">
        Alumno: MALDONADO JUAN EDUARDO
        <br></br>
        Estudiante en la Tecnicatura Superior de Desarrollo de Software Multiplataforma
      </p> 
      
    </>
  );
}

export default App;
