import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export default function ForgetPassword(){

    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

  

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:'50px' }}>
        <Card style={{ width: '38rem',  padding:'20px', border:'1px solid black'}}> 
            <Row>
                <h2 style={{textAlign:'center'}}>
                    Forget Password
                </h2>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value={email} onChange={handleEmailChange} placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll send a password reset link to this email.
                            </Form.Text>
                        </Form.Group>
                        
                        <Button variant="primary" type="button">
                            <Link to="/Otp" style={{textDecoration:"none", color:'#fff'}}>Continue</Link>
                            
                        </Button>
                        <p>
                            Remember your password? <Link to="/login">Login</Link>
                        </p>
                    </Form>
                </Col>
            </Row>
            </Card>
              </div>
    )
}

