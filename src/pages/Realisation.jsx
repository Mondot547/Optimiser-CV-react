import Project from '../components/Projects';
import projectsData from '../data/projectsData';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';


const Realisation = () => {
    return (
        <>
            <Helmet>
                <title>Réalisations | Mon Portfolio</title>
                <meta name="description" content="Découvrez mes réalisations et projets antérieurs. Je partage ici des exemples de mon travail en développement web, conception graphique, et plus encore." />
            </Helmet>
            <Header />
            <div className="banner-img"></div>
            <Container className='text-center mt-5'>
                <h1 className='text-uppercase'>Portfolio</h1>
                <span>Voici quelques-unes de mes réalisations.</span>
                <div className="w-25 mx-auto">
                    <hr className="border border-primary border-3 opacity-100" />
                </div>
            </Container>
            <Container className="my-5 text-sm-center">
                <Row>
                    {projectsData.map((project) => (
                        <Col key={project.id} xs={12} md={6} lg={4} className='d-flex justify-content-center'>
                            <Project
                                title={project.title}
                                description={project.description}
                                imageUrl={project.imageUrl}
                                link={project.link}
                                techno={project.techno}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default Realisation