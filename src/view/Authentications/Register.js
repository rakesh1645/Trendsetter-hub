import React, { useState } from 'react';
import { Form, Button, Alert, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    const user = { email, password };
    localStorage.setItem(email, JSON.stringify(user));
    localStorage.setItem('user', email);
    alert('Registration successful');
    navigate('/');
  };

  return (
    <Card style={{margin:'100px', padding:'20px 40px', border:"1px solid black"}}>
      <h1 style={{textAlign:'center'}}>Register here</h1>
    <Form onSubmit={handleSubmit} >
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Form.Group>

      <Button  className="my-3"variant="primary" type="submit">
        Register
      </Button>
    </Form>
    <p><Link to='/Login' style={{ textDecoration: "none"}}>Resigter here</Link></p>
    </Card>

  );
}

export default Register;
