import { Button, Col, Container, ProgressBar, Row } from 'react-bootstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../assets/styles/main.css'
import imgAbout from '../assets/john-doe-about.jpg'

const Home = () => {
    return (
        <>
            <Header />
            <div id='bg-img-home' className='d-flex'>
                <Col className='d-flex justify-content-center align-items-center flex-column gap-3 text-white'>
                    <span className='fs-1'>Bonjour, je suis John Doe</span>
                    <h1 className='fs-3 title-home'>Développeur web full stack</h1>
                    <Button href='#about' rel="noopener noreferrer">En savoir plus</Button>
                </Col>
            </div>
            <Container id='about' className='my-5 rounded shadow w-100'>
                <Row className='p-4 rounded'>
                    <Col sm={12} md={6} lg={6}>
                        <h2 className="mb-2">&#192; propos</h2>
                        <div className="w-100 text-start mb-5">
                            <hr className="border border-primary border-1 opacity-100 m-0" />
                        </div>
                        <p>
                            Passioné par l&apos;informatique et les nouvelles <br /> technologies, j&apos; suivi une formation d&apos;<strong>intégrateur-développeur web</strong> au CEF. Au cours de cette formation,<br /> j&apos; acquérir des bases solides pour travailler dans le domaine du <strong>développement web.</strong>
                        </p>
                        <p>
                            Basé à Lyon, je suis en recherche d&apos;une alternancce au<br /> sein d&apos;une agence digital pour consolider ma formation<br /> de <strong>développeur web full stack.</strong>
                        </p>
                        <p>
                            J&apos;accorde une attention particulière à la qualité du code<br /> que j&apos;écris et je respecte les bonnes pratiques du web.
                        </p>
                    </Col>
                    <Col sm={12} md={6} lg={6} className='px-1 pb-5'>
                        <img className='w-100 rounded' src={imgAbout} alt="Photo de profil de John Doe" />
                        <h3 className='m-0'>Mes compétences</h3>
                        <p className='mb-1 mt-2 text-uppercase'>Html 90%</p>
                        <ProgressBar variant='danger' now={90} />
                        <p className='mb-1 mt-3 text-uppercase'>Css3 80%</p>
                        <ProgressBar variant='info' now={80} />
                        <p className='mb-1 mt-3 text-uppercase'>JavaScript 70%</p>
                        <ProgressBar variant='warning' now={70} />
                        <p className='mb-1 mt-3 text-uppercase'>Php 60%</p>
                        <ProgressBar variant='success' now={60} />
                        <p className='mb-1 mt-3 text-uppercase'>React 50%</p>
                        <ProgressBar variant='primary' now={50} />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default Home