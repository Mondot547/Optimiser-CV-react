import { Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDisplay, faFileCode, faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons';
import '../data/servicesData'

const ServiceCard = ({ service }) => {
  const { title, description, icon } = service;

  const renderIcon = () => {
    switch (icon) {
      case 'code':
        return <FontAwesomeIcon icon={faDisplay} size="2x" className="mb-3 text-primary" />;
      case 'paint-brush':
        return <FontAwesomeIcon icon={faFileCode} size="2x" className="mb-3 text-primary" />;
      case 'mobile-alt':
        return <FontAwesomeIcon icon={faMagnifyingGlassDollar} size="2x" className="mb-3 text-primary" />;
      default:
        return null;
    }
  };

  return (
    <Col md={4} className="mb-4">
      <Card className="h-100 text-center py-5 border-0 bg-light">
        <Card.Body>
          {renderIcon()}
          <Card.Title className='text-uppercase'>{title}</Card.Title>
          <Card.Text dangerouslySetInnerHTML={{ __html: description }}></Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ServiceCard;