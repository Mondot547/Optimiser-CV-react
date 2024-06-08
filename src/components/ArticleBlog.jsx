import { Button, Card } from "react-bootstrap"

const Article = ({img, title, description, date}) => {
    return (
        <Card className="my-3">
            <Card.Img variant='top' src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button variant="primary" target="_blank">Lire la suite</Button>
            </Card.Body>
            <Card.Footer className="text-center">{date}</Card.Footer>
        </Card>
    )
}

export default Article;