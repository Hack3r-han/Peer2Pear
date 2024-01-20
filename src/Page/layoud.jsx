import "../style/Navbar.css"
function Navbar() {
    return (
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <img src="../src/img/logo.png" alt="Logo" style={{
                    width: "100px",
                }} id="logo" />
            </div>
        </nav>
    )
}

function Footer() {
    return (
        <footer>
            <div className="container text-center">Footer</div>
        </footer>
    )
}

export { Navbar, Footer }