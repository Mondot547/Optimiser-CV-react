
import { Container, Row } from 'react-bootstrap';
import ServiceCard from '../components/ServicesCard';
import servicesData from '../data/servicesData';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const Services = () => {
    return (
        <>
            <Helmet>
                <title>Services | Mon Portfolio</title>
                <meta name="description" content="Découvrez les services que je propose, notamment le développement web, la conception graphique, et plus encore." />
            </Helmet>
            <Header />
            <div className="bg-img-realisation"></div>
            <Container className='text-center my-5'>
                <h1 className='text-uppercase'>Mon offre de Services</h1>
                <span>Voici les prestations sur lesquelles je peux intervenir.</span>
                <div className="w-25 mx-auto">
                    <hr className="border border-primary border-3 opacity-100" />
                </div>
            </Container>
            <Container className="my-5">
                <Row>
                    {servicesData.map(service => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default Services;
