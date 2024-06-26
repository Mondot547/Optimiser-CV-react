import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Article from "../components/ArticleBlog";
import articleData from "../data/articleData";
import { Helmet } from "react-helmet-async";

const Blog = () => {
    return (
        <>
            <Helmet>
                <title>Blog | Mon Portfolio</title>
                <meta name="description" content="Lisez mes articles de blog sur le développement web, la conception graphique, et d'autres sujets intéressants. Suivez mes mises à jour et découvrez mes expériences." />
            </Helmet>
            <Header />
            <div className="banner-img"></div>
            <Container className='text-center mt-5'>
                <h1 className='text-uppercase'>Blog</h1>
                <span>Retrouver ici quelques articles sur le développement web.</span>
                <div className="w-25 mx-auto">
                    <hr className="border border-primary border-3 opacity-100" />
                </div>
            </Container>
            <Container className="my-5">
                <Row>
                    {articleData.map((article) => (
                        <Col key={article.id} xs={12} md={6} lg={4}>
                            <Article
                                img={article.img}
                                title={article.title}
                                description={article.description}
                                date={article.date}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default Blog;
