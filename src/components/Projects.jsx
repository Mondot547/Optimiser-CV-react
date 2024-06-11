import '../data/projectsData';
import { Card, Button } from 'react-bootstrap';

const Project = ({ title, description, imageUrl, link, techno }) => {
    return (
        <Card className="m-3 text-center">
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title as="h2">{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button variant="outline-primary" href={link} target="_blank">Voir</Button>
            </Card.Body>
            <Card.Footer>{techno}</Card.Footer>
        </Card>
    );
};

export default Project;