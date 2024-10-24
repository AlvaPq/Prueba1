import React, { Component } from "react";

import imagenesInicio from "./imagenesInicio";

class inicioCuerpo extends Component {
    state = {
        imgs: null
    }

    constructor(props) {
        super(props);

        this.state = {
            imgs: imagenesInicio.map((x) =>
                <article className="art-mision">
                    <img className="img-mision" src={x.imagen} alt={x.titulo} />
                    <h3 className="h4cab">{x.titulo}</h3>
                    <h2 className="h4mision">{x.texto1}</h2>
                 
                </article>
            )
        }
    }

    render(){
        return(
            
            <div className="div-cambiarcuerpo">
             
                {this.state.imgs}
                <div className="video-container">
                <p className="frase">
                Descubre un mundo de emociones y aventuras en nuestra selección de películas. Desde clásicos atemporales hasta los últimos estrenos, encuentra la película perfecta para cada ocasión. Sumérgete en historias inolvidables y déjate llevar por el poder del cine. ¡Bienvenido a tu escape cinematográfico!
            </p>

                <iframe    width="560" height="315" src="https://www.youtube.com/embed/7VUTvR1DDoI?si=TTDxHNqdlLTQin7v" 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
            </div>
        )
    }
}

export default inicioCuerpo;