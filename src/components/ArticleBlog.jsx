import '../data/articleData';
import { Button, Card } from "react-bootstrap"

const Article = ({ img, title, description, date }) => {
    return (
        <Card className="my-3">
            <Card.Img variant='top' src={img} />
            <Card.Body className='m-1'>
                <Card.Title as="h2" className="title-services">{title}</Card.Title>
                <Card.Text className="fs-6">{description}</Card.Text>
                <Button variant="primary" rel="noopener noreferrer nofollow" target="_blank">Lire la suite</Button>
            </Card.Body>
            <Card.Footer className="text-center">{date}</Card.Footer>
        </Card>
    )
}

export default Article;