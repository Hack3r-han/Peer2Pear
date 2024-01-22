import "../style/Navbar.css"
function Navbar() {
    return (
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img src="../src/img/logo.png" alt="Logo" style={{
                    width: "90px",
                }} id="logo" /></a>
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