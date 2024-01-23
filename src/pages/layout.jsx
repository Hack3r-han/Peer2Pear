import React from "react"; //este es un componente que fue copiado de bootstrap
import { Link } from "react-router-dom"; //esta sintaxis es para acceder del dom de react el componente Link, que sirve para facilitar la navegación entre diferentes vistas de tu aplicación basada en URL. Luego se usa el LINK para reemplazar los A y luego se reemplazan los HREF con TO
//nav bar
export function Navbar() {
    return (
        //adentro de las etiquetas se cambio el "class" por "className", debido a que en js "class" es una palabra reservada
        //se puede modificar la estetica dentro de las etiquetas si quisiera
        <nav className="navbar navbar-expand-lg navbar-light border-bottom box-shadow py-3 mb-3" style={{backgroundColor:"orange"}}>
            <div className="container">
                <Link className="navbar-brand" to="/" style={{fontWeight:"bold", fontSize:"23.5px"}}>eCollectic</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link text-dark" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-dark" to="/products">Products</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>

    );
}

//footer
export function Footer() {
    return (
        <footer>
            <div className="container p-3 mt-5 border-top">
            <small className="d-block text-muted text-center">&copy; 2024 - eCollectic - .:A.H.L.M.I:.</small>
            </div>
        </footer>
    );
}