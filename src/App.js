import React, { useState } from "react";
import Inicio from "./Inicio";
import Catalogo from "./Catalogo";
import Contactenos from "./Contactenos";
import Disponible from "./Disponible";


import './App.css';

import Login from "./Login";


const App = () => {
  const [paginaActual, setPaginaActual] = useState('Inicio');

  const handleCambioPagina = (pagina) => {
    setPaginaActual(pagina);
  }

  const mostrarPagina = () => {
    if (paginaActual === 'Inicio') {
      return <Inicio />;
    } else if (paginaActual === 'Catalogo') {
      return <Catalogo />;
    } else if (paginaActual === 'Contactenos') {
      return <Contactenos />;
    } else if (paginaActual === 'Disponible') {
      return <Disponible />;
    }
   else if (paginaActual === 'Login') {
    return <Login />;
  }
  }

  return (
    <div>
      <nav>
        <div className="logo-container">
          {/* Agrega el logo con un enlace a la página Disponible */}
          <a href="#" onClick={() => handleCambioPagina('Disponible')}>
            <img src="img/carpediem.png"alt="Logo" className="logo" />
          </a>
        </div>
        <ul className="menu">
          <li>
            <a href="#" onClick={() => handleCambioPagina('Inicio')}>
              INICIO
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleCambioPagina('Catalogo')}>
              CATALOGO
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleCambioPagina('Disponible')}>
              DISPONIBLE
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleCambioPagina('Contactenos')}>
              CONTACTENOS
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleCambioPagina('Login')}>
             REGISTRATE
            </a>
          </li>
        </ul>
      </nav>
      {mostrarPagina()}
    </div>
  );
};

export default App;