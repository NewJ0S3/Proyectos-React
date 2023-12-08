import React, {useState} from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import "../styles/ListaDeTareas.css"

function ListaDeTareas() {

    // Estado local para almacenar la lista de tareas
    const [tareas, setTareas] = useState([]);
    
    // Función para agregar una nueva tarea
    const agregarTarea = (tarea) => {
      if (tarea.texto.trim()) {
        tarea.texto = tarea.texto.trim(); // Elimina espacios en blanco al principio y al final del texto
        const tareasActualizadas = [tarea, ...tareas]; // Crea un nuevo arreglo con la tarea agregada al principio
        setTareas(tareasActualizadas); // Actualiza el estado 'tareas' con la nueva lista de tareas
      }
    }
    
    // Función para eliminar una tarea por su ID
    const eliminarTarea = (id) => {
      const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id); // Filtra las tareas para excluir la tarea con el ID proporcionado
      setTareas(tareasActualizadas); // Actualiza el estado 'tareas' con la nueva lista de tareas
    }
    
    // Función para marcar o desmarcar una tarea como completada por su ID
    const completarTarea = (id) => {
      const tareasActualizadas = tareas.map((tarea) => {
        if (tarea.id === id) {
          tarea.completada = !tarea.completada; // Invierte el estado de completada
        }
        return tarea;
      });
      setTareas(tareasActualizadas); // Actualiza el estado 'tareas' con la nueva lista de tareas
    }


    return (
        <>
            <TareaFormulario onSubmit={agregarTarea} />
            <div className="tareas-lista-contenedor">
                {
                    tareas.map((tarea) => 
                        <Tarea 
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            completarTarea={completarTarea}
                            eliminarTarea={eliminarTarea}/>
                    )
                }
            </div>
        </>
    );
}

export default ListaDeTareas;