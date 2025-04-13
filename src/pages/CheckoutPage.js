import React, { useContext, useState } from 'react';
import { Container, Form, Button, ListGroup } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

const CheckoutPage = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle order submission logic here
    console.log('Order Submitted', { cart, shippingInfo });
    clearCart();
    alert('Order placed successfully!');
  };

  return (
    <Container>
      <h1>Checkout</h1>
      <ListGroup>
        {cart.map((item) => (
          <ListGroup.Item key={item.id}>
            {item.name} - {item.quantity} x ₹{item.price.toFixed(2)}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <h3>Total: ₹{cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="fullName"
            value={shippingInfo.fullName}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={shippingInfo.address}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            name="city"
            value={shippingInfo.city}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="postalCode">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="text"
            name="postalCode"
            value={shippingInfo.postalCode}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            name="country"
            value={shippingInfo.country}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Place Order
        </Button>
      </Form>
    </Container>
  );
};

export default CheckoutPage;
