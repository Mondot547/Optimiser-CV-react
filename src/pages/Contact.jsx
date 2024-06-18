import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';
import MapComponent from '../components/MapContact'; 

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };

    return (
        <>
            <Helmet>
                <title>Contactez-moi | Mon Portfolio</title>
                <meta name="description" content="Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact." />
            </Helmet>
            <Header />
            <div className='bg-img-contact'>
                <Col sm={11} className='mx-auto px-3 py-5'>
                    <Container className='p-lg-5 p-sm-3 mx-auto rounded container-info-contact py-5'>
                        <div className='text-center'>
                            <h1 className='text-uppercase'>Me contacter</h1>
                            <span>Pour me contacter en vue d&apos;un entretien ou d&apos;une future collaboration, merci de remplir le formulaire de contact</span>
                            <div className="w-25 mx-auto">
                                <hr className="border border-primary border-3 opacity-100" />
                            </div>
                        </div>
                        <Container>
                            <Row className="justify-content-md-center">
                                <Col sm={12} lg={6}>
                                    <h2 className="mt-4">Formulaire de contact</h2>
                                    <div className="mx-auto">
                                        <hr className="border border-primary border-1 opacity-100" />
                                    </div>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group controlId="formName" className="mt-5">
                                            <Form.Control
                                                type="text"
                                                placeholder="Votre nom"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                autoComplete='name'
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="formEmail" className="mt-3">
                                            <Form.Control
                                                type="email"
                                                placeholder="Votre email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                autoComplete='off'
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="formPhone" className="mt-3">
                                            <Form.Control
                                                type="tel"
                                                placeholder="Votre numéro de téléphone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                autoComplete='off'
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="formSubject" className="mt-3">
                                            <Form.Control
                                                type="text"
                                                placeholder="Votre sujet"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="formMessage" className="mt-3">
                                            <Form.Control
                                                as="textarea"
                                                rows={8}
                                                placeholder="Votre message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Form.Group>

                                        <div className="d-flex justify-content-center">
                                            <Button variant="primary" size='lg' type="submit" className="mt-3">
                                                Envoyer
                                            </Button>
                                        </div>
                                    </Form>
                                </Col>
                                <Col sm={12} lg={6} className=''>
                                    <Container>
                                        <h2 className='mt-4'>Mes coordonnées</h2>
                                        <div className="mx-auto">
                                            <hr className="border border-primary border-1 opacity-100" />
                                        </div>
                                    </Container>
                                    <Container className='mt-5'>
                                        <address className='m-0'><FontAwesomeIcon icon={faLocationDot} /> 40 Rue Laure Diebold, 69009 Lyon, France</address>
                                        <a href="tel:0620304050" target="_blank" rel="noopener noreferrer nofollow" className="text-decoration-none text-dark"><FontAwesomeIcon icon={faMobileScreenButton} /> 06.20.30.40.50</a>
                                        <MapComponent />
                                    </Container>
                                </Col>
                            </Row>
                        </Container>
                    </Container>
                </Col>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
