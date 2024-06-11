// src/components/Header.js
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div className="navbar-container">
            <Navbar bg="dark" variant="dark" expand="lg" className="px-5">
                <Navbar.Brand as="div">
                    <NavLink to='/' className="navbar-brand text-uppercase">
                        John Doe
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="ml-auto">
                        <NavLink exact to="/" activeClassName="active-link" className="nav-link text-uppercase">Accueil</NavLink>
                        <NavLink to="/services" activeClassName="active-link" className="nav-link text-uppercase">Services</NavLink>
                        <NavLink to="/projects" activeClassName="active-link" className="nav-link text-uppercase">Réalisations</NavLink>
                        <NavLink to="/blog" activeClassName="active-link" className="nav-link text-uppercase">Blog</NavLink>
                        <NavLink to="/contact" activeClassName="active-link" className="nav-link text-uppercase">Me contacter</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header;
