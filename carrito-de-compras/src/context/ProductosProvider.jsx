import { useEffect, useState } from 'react'
import { ProductosContext } from './ProductosContext'


export const ProductosProvider = ({ children }) => {

    // Estado local para almacenar una lista de productos
    const [productos, setProductos] = useState([]);

    // Función asincrónica para obtener productos de una API externa
    const fetchProductos = async () => {
        try {
            // Realiza una solicitud GET a la API "fakestoreapi.com" para obtener productos
            const response = await fetch('https://fakestoreapi.com/products');
            // Convierte la respuesta en formato JSON
            const data = await response.json();
            console.log(data); // Muestra los datos en la consola
            setProductos(data); // Actualiza el estado 'productos' con los datos obtenidos
        } catch (error) {
            console.error('Ocurrió un error al obtener productos: ', error);
        }
    }

    // useEffect se utiliza para realizar acciones después de que el componente se ha montado
    useEffect(() => {
        fetchProductos(); // Llama a la función para obtener productos cuando el componente se monta
    }, []); // El segundo argumento, una matriz vacía, garantiza que se realice solo una vez

    return (
        <ProductosContext.Provider value={{productos}}>
            {children}
        </ProductosContext.Provider>
    )
}