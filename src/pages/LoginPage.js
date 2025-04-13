import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f0f4ff, #d9e8ff)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={6} lg={5}>
            <Card
              style={{
                padding: '30px',
                borderRadius: '16px',
                boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                backgroundColor: '#ffffffdd',
                backdropFilter: 'blur(10px)',
              }}
            >
              <h3 className="text-center mb-4" style={{ color: '#333' }}>
                🔐 Welcome Back
              </h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ borderRadius: '10px' }}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ borderRadius: '10px' }}
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button variant="primary" type="submit" style={{ borderRadius: '30px' }}>
                    Login
                  </Button>
                </div>
              </Form>

              <div className="text-center mt-3">
                <small>
                  Don’t have an account? <a href="/signup">Sign up</a>
                </small>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
