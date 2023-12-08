import './App.css';
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png";
import Boton from './componentes/Boton';
import Contador from "./componentes/Contador"
import { useState } from 'react';

function App() {

  // Estado local para almacenar el número de clicks
  const [numClicks, setNumClicks] = useState(0);

  // Función para manejar el evento de click
  const manejarClick = () => {
    setNumClicks(numClicks + 1); // Incrementa el número de clicks en 1
  };

  // Función para reiniciar el contador de clicks
  const reiniciarContador = () => {
    setNumClicks(0); // Establece el número de clicks a 0, reiniciando el contador
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <h1>Contador de clicks</h1>
      </div>
      <div className='contenedor-principal'>
        <Contador numClicks={numClicks} />

        <Boton
          texto="Click"
          esBotonDeClick={true}
          manejarClick={manejarClick} />

        <Boton
          texto="Reiniciar"
          esBotonDeClick={false}
          manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
