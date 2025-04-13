import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const NavigationBar = () => {
  // Accessing cart context to get the number of items in the cart
  const { cart } = useContext(CartContext);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0); // Calculate total quantity of items

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm sticky-top">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="fw-bold text-dark">
          🍨 Ideal Cafe
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Navigation Links */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/menu" className="nav-link">
              Menu
            </Nav.Link>
            <Nav.Link as={Link} to="/offers" className="nav-link">
              Offers
            </Nav.Link>
            <Nav.Link as={Link} to="/locations" className="nav-link">
              Locations
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link">
              Contact Us
            </Nav.Link>
            <Nav.Link as={Link} to="/signin" className="nav-link">
              Sign In
            </Nav.Link>
          </Nav>

          {/* Search Bar */}
          <Form className="d-flex me-3" style={{ maxWidth: '400px', flexGrow: 1 }}>
            <FormControl
              type="search"
              placeholder="Search ice creams..."
              className="me-2 rounded-pill"
              aria-label="Search"
            />
            <Button variant="outline-success" className="rounded-pill">
              Search
            </Button>
          </Form>

          {/* Cart Icon */}
          <Nav>
            <Nav.Link as={Link} to="/cart" className="d-flex align-items-center">
              <FaShoppingCart size={20} className="me-2" />
              {cartItemCount > 0 && (
                <span className="badge bg-danger rounded-pill">{cartItemCount}</span>
              )}
              <span className="ms-1">Cart</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
