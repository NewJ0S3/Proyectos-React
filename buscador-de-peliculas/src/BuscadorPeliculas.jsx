import { useState } from "react"

export const BuscadorPeliculas = () => {

  // Definición de la URL base de la API y la clave de acceso
  const urlBase = 'https://api.themoviedb.org/3/search/movie';
  const API_KEY = 'b61798973b1b7bcec9381a2fae7f806a';
  
  // Definición de estados con React hooks
  const [busqueda, setBusqueda] = useState('');  // Estado para almacenar la búsqueda de películas
  const [peliculas, setPeliculas] = useState([]);  // Estado para almacenar las películas encontradas
  
  // Función para manejar cambios en el input de búsqueda
  const handleInputChange = (e) => {
    setBusqueda(e.target.value);
  };
  
  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPeliculas();  // Llamar a la función para buscar películas
  };
  
  // Función asincrónica para buscar películas
  const fetchPeliculas = async () => {
    try {
      // Realizar una solicitud a la API con la búsqueda y la clave de acceso
      const response = await fetch(`${urlBase}?query=${busqueda}&api_key=${API_KEY}`);
      // Convertir la respuesta en formato JSON
      const data = await response.json();
      console.log(data.results);  // Mostrar los resultados en la consola
      // Almacenar las películas encontradas en el estado películas
      setPeliculas(data.results);
    } catch (error) {
      // Capturar y manejar errores en caso de problemas con la solicitud
      console.error('Ha ocurrido un error: ', error);
    }
  };


  return (
    <div className="container">

      <h1 className="title">Buscador de Películas</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribí una película"
          value={busqueda}
          onChange={handleInputChange}
        />
        <button type="submit" className="search-button">Buscar</button>
      </form>


      <div className="movie-list">
        {peliculas.map((pelicula) => (
          <div key={pelicula.id} className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.title} />
            <h2>{pelicula.title}</h2>
            <p>{pelicula.overview}</p>
          </div>

        ))}

      </div>

    </div>
  )
}