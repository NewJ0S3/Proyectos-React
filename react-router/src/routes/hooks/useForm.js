import { useState } from "react"

export const useForm = (initialForm = {}) => {
    // Estado local para almacenar el estado del formulario
    const [formState, setFormState] = useState(initialForm);

    // Función que maneja el evento de cambio en los campos de entrada del formulario
    const onInputChange = ({ target }) => {
        // Extrae el nombre (name) y el valor (value) del campo de entrada que generó el evento
        const { name, value } = target;

        // Actualiza el estado del formulario utilizando el operador spread para mantener los valores existentes
        // y reemplaza el valor del campo correspondiente con el nuevo valor
        setFormState({
            ...formState, // Copia el estado actual del formulario
            [name]: value // Actualiza el campo con el nuevo valor
        });
    }


    return {
        ...formState,
        formState,
        onInputChange        
    }
}
