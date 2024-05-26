import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
export default function Login() {

    const [email, setmail] = useState('')
    const [password, setPassword] = useState('')

    const isEmail = (event) => {
        setmail(event.target.value)

    }

    const isPassword = (event) => {
        setPassword(event.target.value)
    }

    const onPressLogin = () => {
        const param = {
            email: email,
            password: password
        }
        console.log(param);
        localStorage.setItem("user", param)

        setmail("")
        setPassword("")
        window.location = "/"
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '150px' }}>
            <Card style={{ width: '48rem', padding: '20px', border: '1px solid black',  margin:'10px'}}>
                <Row>
                    <h2 style={{ textAlign: 'center' }}>
                        Login & Resigter
                    </h2>
                    <Col>
                        <Form >
                            <Form.Group className="mb-3" controlId="formBasicEmail1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" value={email} onChange={isEmail} placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type=" current-password" value={password} onChange={isPassword} placeholder="Password" />
                            </Form.Group>

                            <Button variant="primary" type="button" onClick={onPressLogin} >
                                Submit
                            </Button>
                            <p> <Link to="/Forget">Forget password</Link></p>

                        </Form>
                        <p><Link to='/Resigter' style={{ textDecoration: "none"}}>Resigter here</Link></p>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}
