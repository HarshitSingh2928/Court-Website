import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
function LoginPage() {
  const [passkey, setPasskey] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    <Container className="login-container d-flex flex-column justify-content-center align-items-center vh-100">
        <h2>Welcome Aboard !</h2>
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Group controlId="passkey">
        <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="login-input"
          />
          <Form.Control
            type="password"
            placeholder="Enter passkey"
            value={passkey}
            onChange={(event) => setPasskey(event.target.value)}
            required
            className="login-input"
          />
        </Form.Group>
        <Link to="/upload">
        <Button type="submit" variant="outline-transparent" className="login-button w-100">
          Login
        </Button>
        </Link>
      </Form>
    </Container>
  );
}

export default LoginPage;
