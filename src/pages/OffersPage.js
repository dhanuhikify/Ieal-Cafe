// src/pages/OffersPage.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const offers = [
  {
    id: 1,
    title: 'Buy 2, Get 1 Free on Sundaes',
    description: 'Every Tuesday, enjoy a free sundae when you buy any 2 from our special menu!',
    imageUrl: 'https://th.bing.com/th/id/OIP.pqrmPv20UaqfBH8Pu9IuLAHaHa?rs=1&pid=ImgDetMain',
  },
  {
    id: 2,
    title: 'Midday Chill Deal – 20% Off Cold Coffees',
    description: 'From 1 PM to 3 PM daily, beat the heat with 20% off all our cold coffee varieties.',
    imageUrl: 'https://img.freepik.com/premium-psd/coffee-shop-drink-menu-promotion-social-media-instagram-post-banner-template_65983-2490.jpg?size=626&ext=jpg',
  },
  {
    id: 3,
    title: 'Family Combo Pack',
    description: 'Perfect for outings! Get 4 scoops + 2 waffles + 2 drinks at just ₹299. Limited time offer!',
    imageUrl: 'https://th.bing.com/th/id/OIP.kZb-DXeZ6I7G6oWDHHFa3wHaFs?rs=1&pid=ImgDetMain',
  },
  {
    id: 4,
    title: 'Weekend Waffle Wonder',
    description: 'All waffles at flat ₹99 on Saturdays and Sundays. Add a scoop at ₹30 only!',
    imageUrl: 'https://i.ytimg.com/vi/M4FLK9XdacE/maxresdefault.jpg',
  },
];

const OffersPage = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">🎉 Current Offers & Deals</h2>
      <Row>
        {offers.map((offer) => (
          <Col md={6} className="mb-4" key={offer.id}>
            <Card className="shadow-sm h-100">
              <Card.Img variant="top" src={offer.imageUrl} alt={offer.title} style={{ height: '280px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title className="fw-bold">{offer.title}</Card.Title>
                <Card.Text>{offer.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OffersPage;
