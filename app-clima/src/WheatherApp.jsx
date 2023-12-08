import { useState } from "react"

export const WheatherApp = () => {

  // Definición de la URL base de la API y la clave de acceso
  const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
  const API_KEY = 'dc752854bc7f074f9e51a22110d79bcb';
  const difKelvin = 273.15;  // Valor constante para convertir de Kelvin a Celsius
  // Definición de estados con React hooks
  const [ciudad, setCiudad] = useState('');  // Estado para almacenar la ciudad
  const [dataClima, setDataClima] = useState(null);  // Estado para almacenar los datos del clima
  // Función para manejar cambios en el input de ciudad
  const handleCambioCiudad = (e) => {
    setCiudad(e.target.value);
  };
  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (ciudad.length > 0) {
      fetchClima();  // Llamar a la función para buscar datos del clima
    }
  };
  // Función asincrónica para buscar datos del clima
  const fetchClima = async () => {
    try {
      // Realizar una solicitud a la API con la ciudad y la clave de acceso
      const response = await fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}`);
      // Convertir la respuesta en formato JSON
      const data = await response.json();
      // Almacenar los datos del clima en el estado dataClima
      setDataClima(data);
    } catch (error) {
      // Capturar y manejar errores en caso de problemas con la solicitud
      console.error('Ocurrió el siguiente problema: ', error);
    }
  };



  return (

    <div className="container">
        <h1>Aplicación del Clima</h1>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={ciudad}
            onChange={handleCambioCiudad}
            />
            <button type="submit">Buscar</button>
        </form>  
        {
            dataClima && (
                <div>
                    <h2>{dataClima.name}</h2>
                    <p>Temperatura: {parseInt(dataClima?.main?.temp - difKelvin)}ºC</p>
                    <p>Condición meteorológica: {dataClima.weather[0].description}</p>
                    <img src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`}/>
                </div>
            )
        }
    </div>
  )
}