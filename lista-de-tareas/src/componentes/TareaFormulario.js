import React, {useState} from "react";
import "../styles/TareaFormulario.css";
import {v4 as uuidv4} from "uuid";

function TareaFormulario(props) {

    // Estado local para el valor de entrada en un formulario
    const [input, setInput] = useState("");

    // Función para manejar cambios en el input
    const manejarCambio = (e) => {
      setInput(e.target.value);  // Actualiza el estado 'input' con el valor del input
    }
    
    // Función para manejar el envío de un formulario
    const manejarEnvio = (e) => {
      e.preventDefault();  // Evita que la página se recargue al enviar el formulario
    
      // Crear un nuevo objeto 'tareaNueva' con un ID único, texto del input y marcado como no completada
      const tareaNueva = {
        id: uuidv4(),  // Genera un ID único utilizando la función 'uuidv4'
        texto: input,  // Utiliza el valor actual del 'input'
        completada: false,  // Inicialmente, la tarea no está completada
      }
  
      // Llama a la función 'props.onSubmit' pasando la nueva tarea como argumento
      props.onSubmit(tareaNueva);
    }


    return (
        <form 
            className="tarea-formulario"
            onSubmit={manejarEnvio}>
            <input
                className="tarea-input"
                type="text"
                placeholder="Escribe una Tarea"
                name="Texto"
                onChange={manejarCambio}
            />
            <button className="tarea-boton">
                Agregar Tareas
            </button>
        </form>
    )
}

export default TareaFormulario;