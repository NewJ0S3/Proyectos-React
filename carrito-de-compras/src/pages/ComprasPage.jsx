import { useContext } from "react"
import { Card } from "../components/Card"
import { ProductosContext } from "../context/ProductosContext"
import { CarritoContext } from "../context/CarritoContext"

export const ComprasPage = () => {

  // Importación del estado de productos desde el contexto ProductosContext
  const { productos } = useContext(ProductosContext);

  // Importación de las funciones agregarCompra y eliminarCompra desde el contexto CarritoContext
  const { agregarCompra, eliminarCompra } = useContext(CarritoContext);

  // Función para manejar la acción de agregar una compra al carrito
  const handleAgregar = (compra) => {
    agregarCompra(compra); // Llama a la función agregarCompra con los detalles de la compra
  }

  // Función para manejar la acción de quitar una compra del carrito por su ID
  const handleQuitar = (id) => {
    eliminarCompra(id); // Llama a la función eliminarCompra con el ID de la compra a eliminar
  }

  return (
    <>
    <h1>Compras: </h1>
    <hr />

    {productos.map(producto => (
        <Card 
        key={producto.id}
        imagen={producto.image}
        titulo={producto.title}
        descripcion={producto.description}
        precio={producto.price}
        handleAgregar={() => handleAgregar(producto)}
        handleQuitar={() => handleQuitar(producto.id)}
        >

        </Card>
    ))}
    
    </>
  )
}