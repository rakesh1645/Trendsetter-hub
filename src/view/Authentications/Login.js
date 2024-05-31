import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Col, Row } from "react-bootstrap";


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        if (email && password) {
            const param = {
                email: email,
                password: password
            };
            console.log(param);
            localStorage.setItem("user", JSON.stringify(param));

            setEmail('');
            setPassword('');
            navigate('/');
        } else {
            alert('Please enter both email and password');
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '150px' }}>
            <Card style={{ width: '48rem', padding: '20px', border: '1px solid black', margin: '10px' }}>
                <Row>
                    <h2 style={{ textAlign: 'center' }}>
                        Login & Register
                    </h2>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" value={email} onChange={handleEmailChange} placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
                            </Form.Group>

                            <Button variant="primary" type="button" onClick={handleLogin}>
                                Submit
                            </Button>
                            <p><Link to="/forget">Forget password</Link></p>
                        </Form>
                        <p><Link to='/register' style={{ textDecoration: "none" }}>Register here</Link></p>
                    </Col>
                </Row>
            </Card>
        </div>
    );
}
