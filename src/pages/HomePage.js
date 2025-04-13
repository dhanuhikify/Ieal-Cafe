// src/pages/HomePage.js
import React from 'react';
import { Carousel, Card, Container, Row, Col, Alert } from 'react-bootstrap';

const HomePage = () => {
  // Popular dishes
  const popularDishes = [
    {
      name: "Strawberry Swirl Sundae",
      image: "https://th.bing.com/th/id/OIP.HothRSZtKKXmGpHV5q24DgHaFE?w=626&h=428&rs=1&pid=ImgDetMain",
      description: "Layers of strawberry, vanilla, and whipped cream topped with fresh berries!"
    },
    {
      name: "Nutty Caramel Crunch",
      image: "https://th.bing.com/th/id/OIP._MADQuyBMJncsM8tJ0C7hQHaHa?rs=1&pid=ImgDetMain",
      description: "Crunchy roasted nuts drizzled in golden caramel, all on creamy goodness."
    },
    {
      name: "Tropical Pineapple Float",
      image: "https://th.bing.com/th/id/OIP.SyZApD5tgiboeA3ZsmMYvAHaHa?rs=1&pid=ImgDetMain",
      description: "Zesty pineapple juice with scoops of vanilla ice cream – summer in a glass!"
    }
  ];

  // Customer testimonials
  const testimonials = [
    {
      name: "Aarav",
      rating: "⭐️⭐️⭐️⭐️⭐️",
      comment: "The Mango Tango was mind-blowing. So fresh and tangy!"
    },
    {
      name: "Meera",
      rating: "⭐️⭐️⭐️⭐️",
      comment: "Vanilla Dream tastes like a cloud. Loved the smoothness!"
    },
    {
      name: "Ishaan",
      rating: "⭐️⭐️⭐️⭐️⭐️",
      comment: "Every scoop feels like a celebration. Best in town!"
    },
  ];

  return (
    <div>
      {/* Hero Carousel */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://th.bing.com/th/id/OIP.HothRSZtKKXmGpHV5q24DgHaFE?w=626&h=428&rs=1&pid=ImgDetMain"
            alt="First slide"
            height="600px"
          />
          <Carousel.Caption className="bg-dark bg-opacity-50 p-3 rounded">
            <h3>Award-Winning Ice Creams 🍦</h3>
            <p>Try our famous Strawberry Swirl and tropical delights!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://th.bing.com/th/id/OIP.SyZApD5tgiboeA3ZsmMYvAHaHa?rs=1&pid=ImgDetMain"
            alt="Second slide"
            height="600px"
          />
          <Carousel.Caption className="bg-dark bg-opacity-50 p-3 rounded">
            <h3>Cool Down with Pineapple Floats 🍍</h3>
            <p>Chill vibes and tropical flavors await!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Award-Winning Ice Creams */}
      <Container className="mt-5">
        <h2 className="text-center mb-4">🏆 Award-Winning Ice Creams</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-lg">
              <Card.Img
                variant="top"
                src="https://th.bing.com/th/id/OIP.R5sSAnwe05B6QhvF6RtDawHaHa?rs=1&pid=ImgDetMain"
                height="420px"
                style={{ objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>Belgian Chocolate Bliss</Card.Title>
                <Card.Text>Won ‘Best Chocolate Creation’ – rich, indulgent, unforgettable.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-lg">
              <Card.Img
                variant="top"
                src="https://th.bing.com/th/id/OIP.AibAzhQTjMhQEQKp8sdjrQHaHa?rs=1&pid=ImgDetMain"
                height="420px"
                style={{ objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>Classic Vanilla Dream</Card.Title>
                <Card.Text>A timeless favorite – voted #1 by local foodies three years running!</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-lg">
              <Card.Img
                variant="top"
                src="https://britneybreaksbread.com/wp-content/uploads/2020/08/mango-tango-drink-2.jpg"
                height="420px"
                style={{ objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>Mango Tango</Card.Title>
                <Card.Text>Summer champ! Tropical mango burst with a twist of lime zest.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Popular Picks This Week */}
      <Container className="mt-5">
        <h2 className="text-center mb-4">🍨 Popular Picks This Week</h2>
        <Row>
          {popularDishes.map((dish, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100 shadow-lg">
                <Card.Img
                  variant="top"
                  src={dish.image}
                  height="300px"
                  style={{ objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>{dish.name}</Card.Title>
                  <Card.Text>{dish.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Customer Testimonials */}
      <Container className="mt-5">
        <h2 className="text-center mb-4">❤️ What Our Customers Are Saying</h2>
        <Row>
          {testimonials.map((testi, index) => (
            <Col md={4} key={index}>
              <Card className="mb-4 shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="text-primary">{testi.name}</Card.Title>
                  <Card.Text className="fst-italic">"{testi.comment}"</Card.Text>
                  <Card.Text>{testi.rating}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Exclusive Offers */}
      <Container className="mt-5 mb-5">
        <h2 className="text-center mb-4">🎁 Exclusive Offers Just For You!</h2>
        <Row className="gy-3">
          <Col md={6}>
            <Alert
              variant="info"
              className="fs-5 fw-semibold text-center border border-primary rounded shadow-sm"
            >
              🧁 <strong>Buy 2, Get 1 Free</strong> on all sundaes every <strong>Tuesday</strong>!
            </Alert>
          </Col>
          <Col md={6}>
            <Alert
              variant="primary"
              className="fs-5 fw-semibold text-center border border-info rounded shadow-sm"
            >
              ❄️ <strong>Midday Chill Deal</strong> (1 PM – 3 PM): <strong>Flat 30% off</strong> on cold coffees!
            </Alert>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
