import { Container, Accordion, Col } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faLocationDot, faMobileScreenButton, faEnvelope } from "@fortawesome/free-solid-svg-icons";

//fonction que me permet de changer le text du header selectioné en text-primary via l'eventKey
const MentionsLegales = () => {

    return (
        <>
            <Header />
            <Container className='text-center mt-5'>
                <h1 className='text-uppercase'>Mentions Légales</h1>
                <div className="w-25 mx-auto">
                    <hr className="border border-primary border-3 opacity-100" />
                </div>
            </Container>
            <Container className="mt-5 mb-4">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            Éditeur de site
                        </Accordion.Header>
                        <Accordion.Body>
                            <h2>John Doe</h2>
                            <div className="d-flex align-items-center">
                                <FontAwesomeIcon className="pb-4" icon={faLocationDot} size="xs" />
                                <address className="mx-1 my-0">
                                    40 Rue Laure Diebold <br />
                                    69009 Lyon, France
                                </address>
                            </div>
                            <FontAwesomeIcon icon={faMobileScreenButton} /> <a className="text-decoration-none text-primary" href="tel:+33620304050">0620304050</a> <br />
                            <FontAwesomeIcon icon={faEnvelope} /> <a className="text-primary font-weight-bold" href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            Hébergeur
                        </Accordion.Header>
                        <Accordion.Body>
                            <h2>Always Data</h2>
                            <address>
                                91 rue du Faubourg Saint Honoré<br />
                                75008 Paris
                            </address>
                            <Col className="d-flex flex-row align-items-center">
                                <FontAwesomeIcon icon={faGlobe} size="xs" />
                                <a href="http://" target="_blank" rel="noopener noreferrer" className="text-decoration-none mx-2">www.alwaysdata.com</a>
                            </Col>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            Crédits
                        </Accordion.Header>
                        <Accordion.Body>
                            <h2>Crédits</h2>
                            <p>Site développé par John Doe, étudiant du CEF.</p>
                            <p>Les images libres de droit dont issues du site <a href="https://pixabay.com/fr/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary"><strong>Pixabay</strong></a></p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
            <Footer />
        </>
    );
}

export default MentionsLegales;
