import React, { useState } from "react";
import './App.css';

const Formulario = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar lógica para enviar el formulario
    // Por ahora, simplemente mostramos el modal
    setShowModal(true);
  };

  return (
    <div>
      <h2>ENVIANOS UN MENSAJE</h2>
      <form
        className="ContactForm"
  
        onSubmit={handleSubmit}
      >
        <label htmlFor="Name">Nombre</label>
        <input id="Name" name="Name"></input>
        <label htmlFor="Email">Email</label>
        <input id="Email" name="Email" type="Email"></input>
        <label htmlFor="Message">Mensaje</label>
        <textarea id="Message">mensaje</textarea>
        <button className="button-neon" type="submit">ENVIAR :v</button>
      </form>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <p>Tu formulario ha sido enviado.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Formulario;