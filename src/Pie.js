import React from "react";

const PiePagina = () => {
    return (
        <footer className="pie-pagina">
            <div className="redes-sociales">
                <a href="https://www.facebook.com">
                    <img src="img/facebook.jpg" alt="Facebook" /> 
                </a>
                <a href="https://twitter.com">
                    <img src="img/twitter1.jpg" alt="Twitter" />
                </a>
                <a href="https://www.instagram.com">
                    <img src="img/instagram1.jpg" alt="Instagram" />
                </a>
             
            </div>
            <div className="texto-pie">
                <p>Síguenos en nuestras redes sociales para mantenerte al tanto de nuestras últimas novedades y promociones.</p>
            </div>
        </footer>
    );
}

export default PiePagina;