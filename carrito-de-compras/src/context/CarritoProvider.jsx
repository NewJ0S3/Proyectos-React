import { useReducer } from 'react'
import { CarritoContext } from './CarritoContext'


const initialState = []

export const CarritoProvider = ({ children }) => {

    // Definición del reducer para gestionar el estado de las compras
    const comprasReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case '[CARRITO] Agregar Compra':
                // Caso para agregar una compra al carrito
                return [...state, action.payload]; // Agrega la compra al estado existente
            case '[CARRITO] Aumentar Cantidad Compra':
                // Caso para aumentar la cantidad de una compra en el carrito
                return state.map(item => {
                    // Recorre el estado para encontrar la compra con el ID correspondiente
                    const cant = item.cantidad + 1; // Aumenta la cantidad en 1
                    if (item.id === action.payload) return { ...item, cantidad: cant };
                    return item;
                });
            case '[CARRITO] Disminuir Cantidad Compra':
                // Caso para disminuir la cantidad de una compra en el carrito
                return state.map(item => {
                    // Recorre el estado para encontrar la compra con el ID correspondiente
                    const cant = item.cantidad - 1; // Disminuye la cantidad en 1
                    if (item.id === action.payload && item.cantidad > 1) return { ...item, cantidad: cant };
                    return item;
                });
            case '[CARRITO] Eliminar Compra':
                // Caso para eliminar una compra del carrito
                return state.filter(compra => compra.id !== action.payload); // Filtra las compras para excluir la compra con el ID proporcionado
            default:
                return state; // En caso de una acción no reconocida, devuelve el estado sin cambios
        }
    }
    
    // Utilización de useReducer con el reducer y el estado inicial
    const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);
    
    // Funciones para interactuar con el carrito a través del dispatcher
    const agregarCompra = (compra) => {
        compra.cantidad = 1; // Inicializa la cantidad en 1 para una nueva compra
        const action = {
            type: '[CARRITO] Agregar Compra',
            payload: compra
        };
        dispatch(action); // Envia la acción al reducer
    }
    
    const aumentarCantidad = (id) => {
        const action = {
            type: '[CARRITO] Aumentar Cantidad Compra',
            payload: id
        };
        dispatch(action);
    }
    
    const disminuirCantidad = (id) => {
        const action = {
            type: '[CARRITO] Disminuir Cantidad Compra',
            payload: id
        };
        dispatch(action);
    }
    
    const eliminarCompra = (id) => {
        const action = {
            type: '[CARRITO] Eliminar Compra',
            payload: id
        };
        dispatch(action);
    }


    return (

        <CarritoContext.Provider value={{listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra }}>
            {children}
        </CarritoContext.Provider>
    )
}