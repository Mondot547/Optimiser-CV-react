import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Article from "../components/ArticleBlog";
import articleData from "../data/articleData";

const Blog = () => {
    return (
        <>
            <Header />
            <div className="bg-img-realisation"></div>
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
