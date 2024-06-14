import { Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDisplay, faFileCode, faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons';
import '../data/servicesData';
import React, { useState } from 'react'; // Importez useState

const ServiceCard = ({ service }) => {
  const { title, description, icon } = service;
  const [isHovered, setIsHovered] = useState(false); // Ajoutez un état pour suivre le survol

  const renderIcon = () => {
    let iconComponent = null;

    switch (icon) {
      case 'code':
        iconComponent = <FontAwesomeIcon icon={faDisplay} size="2x" className="mb-3 text-primary" />;
        break;
      case 'paint-brush':
        iconComponent = <FontAwesomeIcon icon={faFileCode} size="2x" className="mb-3 text-primary" />;
        break;
      case 'mobile-alt':
        iconComponent = <FontAwesomeIcon icon={faMagnifyingGlassDollar} size="2x" className="mb-3 text-primary" />;
        break;
      default:
        iconComponent = null;
    }

    // Change la couleur de l'icône si survolé
    return isHovered ? React.cloneElement(iconComponent, { className: "mb-3 text-custom" }) : iconComponent;
  };

  return (
    <Col md={4} className="mb-4">
      <Card
        className="h-100 text-center py-5 border-0 bg-light"
        onMouseEnter={() => setIsHovered(true)} // Met à jour l'état lorsque survolé
        onMouseLeave={() => setIsHovered(false)} // Met à jour l'état lorsque le survol est terminé
      >
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
