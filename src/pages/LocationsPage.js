import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const locations = [
  {
    id: 1,
    name: 'Ideal Cafe - Hampankatta',
    address: 'Ideal Towers, G.T. Road, Palike Area, Hampankatta, Mangalore, Karnataka 575001',
    mapSrc: 'https://www.google.com/maps?q=Ideal+Cafe+Hampankatta,+Mangalore&z=15&output=embed',
  },
  {
    id: 2,
    name: 'Ideal Cafe - Lalbagh',
    address: 'Shree Krishna Prasad Complex, M.G. Road, Lalbagh, Mangalore, Karnataka 575003',
    mapSrc: 'https://www.google.com/maps?q=Ideal+Cafe+Lalbagh,+Mangalore&z=15&output=embed',
  },
  {
    id: 3,
    name: 'Ideal Cafe - Bejai',
    address: 'Bejai, Mangalore, Karnataka 575004',
    mapSrc: 'https://www.google.com/maps?q=Ideal+Cafe+Bejai,+Mangalore&z=15&output=embed',
  },
  {
    id: 4,
    name: 'Ideal Cream Parlour - KS Rao Nagar',
    address: '4th Floor, City Centre Mall, KS Rao Road, KS Rao Nagar, Mangalore, Karnataka 575001',
    mapSrc: 'https://www.google.com/maps?q=Ideal+Cream+Parlour+KS+Rao+Nagar,+Mangalore&z=15&output=embed',
  },
];

const LocationsPage = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">📍 Our Locations</h2>
      <Row>
        {locations.map((location) => (
          <Col md={6} key={location.id} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="fw-bold">{location.name}</Card.Title>
                <Card.Text>{location.address}</Card.Text>
                <iframe
                  title={location.name}
                  src={location.mapSrc}
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LocationsPage;
