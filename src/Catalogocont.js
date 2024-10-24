import React, { Component } from "react";

import datospelis from "./datoscatalogo";

class Catalogocont extends Component {
    state = {
        imgs: null
    }

    constructor(props) {
        super(props);

        this.state = {
            imgs: datospelis.map((x) =>
          
                <article className="art-mision">
                    <img className="img-mision" src={x.imagen} alt={x.titulo} />
                    <h2 className="h2peli">{x.titulo}</h2>
                    <h3 className="h2gen">{x.texto1}</h3>
                    <p className="psinopsis">{x.texto2}</p>
                 
                </article>
         
            )
        }
    }


render() {
    return (
        <div >
            {this.state.imgs}
        </div>
    )
}
}

export default Catalogocont;