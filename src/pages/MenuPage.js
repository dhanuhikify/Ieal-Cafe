import React, { useContext, useState } from 'react';
import { Container, Row, Col, Button, Card, Dropdown, ButtonGroup } from 'react-bootstrap';
import menuItems from '../data/MenuData';
import { CartContext } from '../context/CartContext';

const MenuPage = () => {
  const [filter, setFilter] = useState("All");
  const [sortOption, setSortOption] = useState("");
  const { addToCart } = useContext(CartContext);

  const filteredItems = menuItems.filter((item) => {
    if (filter === "All") return true;
    if (filter === "Ice Creams") return item.category === "Ice Creams";
    if (filter === "Popular") return item.isPopular;
    return item.category === filter;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortOption === "Price Low to High") return a.price - b.price;
    if (sortOption === "Price High to Low") return b.price - a.price;
    if (sortOption === "Rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">🍽 Explore Our Menu</h2>

      <div className="d-flex justify-content-center mb-3 flex-wrap gap-2">
        {["All", "Ice Creams", "Desserts", "Beverages", "Snacks", "Popular"].map((cat) => (
          <Button
            key={cat}
            variant={filter === cat ? "primary" : "outline-primary"}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      <div className="d-flex justify-content-end mb-3">
        <Dropdown as={ButtonGroup}>
          <Button variant="secondary">Sort</Button>
          <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setSortOption("Price Low to High")}>Price Low to High</Dropdown.Item>
            <Dropdown.Item onClick={() => setSortOption("Price High to Low")}>Price High to Low</Dropdown.Item>
            <Dropdown.Item onClick={() => setSortOption("Rating")}>Rating</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Row>
        {sortedItems.map((item) => (
          <Col md={4} key={item.id} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={item.image} height="200px" style={{ objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text><strong>₹{item.price}</strong> | ⭐ {item.rating}</Card.Text>
                <Button variant="success" onClick={() => addToCart(item)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MenuPage;
