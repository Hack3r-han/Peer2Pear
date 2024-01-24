import { Link } from "react-router-dom"
import "../style/Navbar.css"
import { Products } from "../components/Formproduct"
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src="../src/img/logo.png" alt="Logo" style={{
                    width: "90px",
                }} id="logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#" to="./products">Link</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
function Footer() {
    return (
        <footer>
            <div className="container p-3 mt-5 border-top">
                <small className="d-block text-muted text-center">&copy; 2024 - eCollectic - .:A.H.L.M.I:.</small>
            </div>
        </footer>
    )
}

export { Navbar, Footer }

