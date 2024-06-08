
import { Nav, NavLink, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"




function Header() {
    return (
        <div className="navbar-container">
            <Navbar bg="dark" variant="dark" expand="lg" className="px-5">
                <Navbar.Brand as="div">
                    <NavLink as={Link} to='/' className="navbar-brand text-uppercase">
                        John Doe
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="ml-auto">
                        <NavLink as={Link} to="/" className="nav-link text-uppercase">Accueil</NavLink>
                        <NavLink as={Link} to="/services" className="nav-link text-uppercase">Services</NavLink>
                        <NavLink as={Link} to="/projects" className="nav-link text-uppercase">Réalisations</NavLink>
                        <NavLink as={Link} to="/blog" className="nav-link text-uppercase">Blog</NavLink>
                        <NavLink as={Link} to="/contact" className="nav-link text-uppercase">Me contacter</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header