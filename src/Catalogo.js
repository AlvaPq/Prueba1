import React,{Component} from "react";
import'./App.css';
import Catalogocont from "./Catalogocont"; 
import PiePagina from "./Pie";
const imagenes = [
    "/img/fondo home.jpg",
    "/img/Añadir un subtítulo (1).jpg",
    "/img/Añadir un subtítulo3.jpg"
   
];

class Cabecera extends Component{
    state = {
        titulo: "",
        imgcab: "",
        c: 0
    }

    constructor(props){
        super(props);

        this.state = {
            titulo: "PELICULAS",
            imgcab: "/img/Añadir un subtítulo (1).jpg",
            c: 0
        }
    }

    render(){
        setTimeout(() => this.setState({
            c: Math.floor(Math.random() * imagenes.length), 
            imgcab: imagenes[this.state.c]   
        }), 3000);

        return(
            <div className="bloque">
                    <h1 className="h1cab">{this.state.titulo}</h1>
                    <img className="imgcab" src={this.state.imgcab} alt="Cabecera"/> 
            </div>
        );
    }

}
const Catalogo = () => {
    return(
        <article>
            <Cabecera/>
            <h2 className="h2cata">NUESTRO CATALOGO</h2>
            <Catalogocont/>
            <PiePagina/>
        </article>
    )
}

export default Catalogo;