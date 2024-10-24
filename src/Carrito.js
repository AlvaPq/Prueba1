import React, { Component } from "react";
import datospelis from "./datoscatalogo";

class Carrito extends Component {
    state = {
        carrito: [],
        total: 0,
        mensajeCompra: "",
        carritoAbierto: false // Estado para controlar si el carrito está abierto
    }

    // Función para agregar una peli al carrito
    agregarAlCarrito = (pelicula) => {
        this.setState({
            carrito: [...this.state.carrito, pelicula],
            total: this.state.total + pelicula.precio
        });
    }

    // Función para realizar la compra
    comprar = () => {
        this.setState({ mensajeCompra: "¡Compra realizada con éxito!" });
    }

    // Función para cerrar el mensaje de compra
    cerrarMensajeCompra = () => {
        this.setState({ mensajeCompra: "" });
    }

    // Función para limpiar el carrito
    limpiarCarrito = () => {
        this.setState({ carrito: [], total: 0 });
    }

    // Función para manejar la apertura y cierre del carrito
    toggleCarrito = () => {
        this.setState(prevState => ({
            carritoAbierto: !prevState.carritoAbierto
        }));
    }

    render() {
        return (
            <div className="cont-carrito">
                {/* Botón para abrir y cerrar el carrito */}
                <div className="elcarrito">
                    <button className="btn-carrito" onClick={this.toggleCarrito}>
                        {this.state.carritoAbierto ? (
                            <img src="img/sign-out-icon-vector.jpg" alt="Cerrar carrito" />
                        ) : (
                            <img src="img/images.png" alt="Abrir carrito" />
                        )}
                    </button>
                    {this.state.carritoAbierto && (
                        <div className="cont-carrito">
                            {this.state.carrito.map((item, index) => (
                                <div key={index}>
                                    <p>{item.titulo}</p>
                                    <p>{item.precio}</p>
                                </div>
                            ))}
                            <p>Total: {this.state.total}</p>
                            <button onClick={this.comprar}>Comprar</button>
                            <button onClick={this.limpiarCarrito}>Limpiar Carrito</button>
                        </div>
                    )}
                </div>
                
                {/* Modal para mostrar el mensaje de compra */}
                {this.state.mensajeCompra && (
                    <div className="modal">
                        <div className="modal-content">
                            <p>{this.state.mensajeCompra}</p>
                            <button onClick={this.cerrarMensajeCompra}>Cerrar</button>
                        </div>
                    </div>
                )}

                <div>
                    {datospelis.map((pelicula, index) => (
                        <article key={index} className="art-carrito">
                            <img className="img-carrito" src={pelicula.imagen} alt={pelicula.titulo} />
                            <h2 className="h2carrito">{pelicula.titulo}</h2>
                            <p className="pcarrito">{pelicula.texto2}</p>
                            <h3 className="pre">{pelicula.precio1}</h3>
                            <h3 className="pre">{pelicula.precio}</h3>
                            <button onClick={() => this.agregarAlCarrito(pelicula)}>Agregar al carrito</button>
                        </article>
                    ))}
                </div>
            </div>
        )
    }
}

export default Carrito;