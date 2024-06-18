import { Row, Col, Nav, NavLink } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { Link } from "react-router-dom";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";




function Footer() {

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const footerCopyright = document.getElementById("footer-copyright");

        const handleScroll = () => {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                footerCopyright.style.display = "block"; // Assurez-vous qu'il est visible avant d'ajouter la classe
                footerCopyright.classList.add("show");
            } else {
                footerCopyright.classList.remove("show");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <footer className="bg-light text-dark pt-5 pb-3 w-100">
                <Row className="mx-auto">
                    <Col md={6} lg={3} className="px-md-5 px-lg-2 px-xl-5">
                        <h5>John Doe</h5>
                        <address className="m-0">
                            40 Rue Laure Diebold<br />
                            69009 Lyon, France
                        </address>
                        <p className="m-0">Téléphone : <a href="tel:+620304050" rel="noopener noreferrer nofollow" className="text-decoration-none text-dark">06 20 30 40 50</a></p>
                        <Row className="mt-2 mx-0">
                            <Col>
                                <a href="/githubProfile" target="_blank" rel="noopener noreferrer nofollow" className="text-dark me-3">
                                    <FontAwesomeIcon icon={faGithub} size="xl" />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer nofollow" className="text-dark me-3">
                                    <FontAwesomeIcon icon={faTwitterSquare} size="xl" />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer nofollow" className="text-dark">
                                    <FontAwesomeIcon icon={faLinkedin} size="xl" />
                                </a>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6} lg={3} className="mx-auto px-lg-3 px-xl-5">
                        <h5>Liens utiles</h5>
                        <Nav className="col-12 flex-column">
                            <NavLink as={Link} to="/" onClick={handleClick} rel="noopener noreferrer" className="nav-link p-0 text-dark"><FontAwesomeIcon icon={faChevronRight} size="xs" className="mx-1 text-primary" />Accueil</NavLink>
                            <NavLink as={Link} to="/services" onClick={handleClick} rel="noopener noreferrer" className="nav-link p-0 text-dark text-primary-hover"><FontAwesomeIcon icon={faChevronRight} size="xs" className="mx-1 text-primary" />Services</NavLink>
                            <NavLink as={Link} to="/projects" onClick={handleClick} rel="noopener noreferrer" className="nav-link p-0 text-dark"><FontAwesomeIcon icon={faChevronRight} size="xs" className="mx-1 text-primary" />Réalisations</NavLink>
                            <NavLink as={Link} to="/blog" onClick={handleClick} rel="noopener noreferrer" className="nav-link p-0 text-dark">
                                <FontAwesomeIcon icon={faChevronRight} size="xs" className="mx-1 text-primary" />
                                Blog
                            </NavLink>
                            <NavLink as={Link} to="/contact" onClick={handleClick} rel="noopener noreferrer" className="nav-link p-0 text-dark"><FontAwesomeIcon icon={faChevronRight} size="xs" className="mx-1 text-primary" />Me contacter</NavLink>
                            <NavLink as={Link} to="/mentionsLegales" onClick={handleClick} rel="noopener noreferrer nofollow" className="nav-link p-0 text-dark"><FontAwesomeIcon icon={faChevronRight} size="xs" className="mx-1 text-primary" />Mentions légales</NavLink>
                        </Nav>
                    </Col>
                    <Col md={6} lg={3} className="mx-auto px-md-5 mt-md-3 mt-lg-0 px-lg-0 px-xl-5">
                        <h5>Mes dernières réalisations</h5>
                        <ul className="list-unstyled">
                            <li><a href="#"
                                target="_blank" rel="noopener noreferrer nofollow" className="text-decoration-none text-dark"><FontAwesomeIcon icon={faChevronRight} size="xs" className="mx-1 text-primary" />Fresh food</a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer nofollow" className="text-decoration-none text-dark"><FontAwesomeIcon icon={faChevronRight} size="xs" className="mx-1 text-primary" />Restaurant Akira</a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer nofollow" className="text-decoration-none text-dark"><FontAwesomeIcon icon={faChevronRight} size="xs" className="mx-1 text-primary" />Espace bien-être</a></li>
                        </ul>
                    </Col>
                    <Col md={6} lg={3} className="mx-auto mt-md-3 mt-lg-0 px-lg-0 px-xl-5">
                        <h5>Mes derniers articles</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" target="_blank" rel="noopener noreferrer nofollow" className="text-decoration-none text-dark"><FontAwesomeIcon icon={faChevronRight} size="xs" className="mx-1 text-primary" />Coder son site en HTML/CSS</a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer nofollow" className="text-decoration-none text-dark"><FontAwesomeIcon icon={faChevronRight} size="xs" className="mx-1 text-primary" />Vendre ses produits sur le web</a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer nofollow" className="text-decoration-none text-dark"><FontAwesomeIcon icon={faChevronRight} size="xs" className="mx-1 text-primary" />Se positionner sur Google</a></li>
                        </ul>
                    </Col>
                </Row>
                <Row className="mt-3 mx-auto text-center w-100">
                    <Col id="footer-copyright" className="bg-dark py-3">
                        <small onClick={handleClick} className="mb-0 footer-copyright">&copy; Designed by John Doe</small>
                    </Col>
                </Row>
            </footer>

        </>
    )
}

export default Footer