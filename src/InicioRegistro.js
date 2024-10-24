import React, { useState } from 'react';

const InicioRegistro = () => {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [sexo, setSexo] = useState('');
  const [edad, setEdad] = useState('');
  const [nacionalidad, setNacionalidad] = useState('');
  const [peliculaFavorita, setPeliculaFavorita] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [enviado, setEnviado] = useState(false);

  const manejarRegistro = (e) => {
    e.preventDefault();

    setEnviado(true);

    // Limpia el formulario después de enviar
    setNombreUsuario('');
    setContraseña('');
    setSexo('');
    setEdad('');
    setNacionalidad('');
    setPeliculaFavorita('');
    setCorreoElectronico('');
  };

  const cerrarModal = () => {
    setEnviado(false);
  };

  return (
    <div className='FORMU'> 
      {enviado ? (
        <div className="modal">
          <p>¡Gracias por registrarte!</p>
          <button onClick={cerrarModal}>Cerrar</button>
        </div>
      ) : (
        <form onSubmit={manejarRegistro}>
          <h2>Registrarse</h2>
          <label>
            Usuario:
            <input
              type="text"
              value={nombreUsuario}
              onChange={(e) => setNombreUsuario(e.target.value)}
              required
            />
          </label>
          <label>
            Contraseña:
            <input
              type="password"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              required
            />
          </label>
          <label>
            Sexo:
            <input
              type="text"
              value={sexo}
              onChange={(e) => setSexo(e.target.value)}
              required
            />
          </label>
          <label>
            Edad:
            <input
              type="number"
              value={edad}
              onChange={(e) => setEdad(e.target.value)}
              required
            />
          </label>
          <label>
            Nacionalidad:
            <input
              type="text"
              value={nacionalidad}
              onChange={(e) => setNacionalidad(e.target.value)}
              required
            />
          </label>
          <label>
            Película favorita:
            <input
              type="text"
              value={peliculaFavorita}
              onChange={(e) => setPeliculaFavorita(e.target.value)}
              required
            />
          </label>
          <label>
            Correo electrónico:
            <input
              type="email"
              value={correoElectronico}
              onChange={(e) => setCorreoElectronico(e.target.value)}
              required
            />
          </label>
          <button type="submit">Registrarse</button>
        </form>
      )}
    </div>
  );
};

export default InicioRegistro;