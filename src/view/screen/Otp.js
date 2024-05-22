import { useState } from "react";
import { Col,  Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

export default function OTPPage(){

    const [otp, setOTP] = useState('');

    const handleOTPChange = (event) => {
        setOTP(event.target.value);
    }

    const handleSubmit = () => {
        // Here you can add the logic to verify the OTP
        console.log("OTP submitted:", otp);
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:'50px' }}>
        <Card style={{ width: '38rem',  padding:'20px', border:'1px solid black'}}> 
            <Row>
                <h2 style={{ textAlign: 'center' }}>
                    Enter OTP
                </h2>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicOTP">
                            <Form.Label>OTP</Form.Label>
                            <Form.Control type="text" value={otp} onChange={handleOTPChange} placeholder="Enter OTP" />
                            <Form.Text className="text-muted">
                                We have sent an OTP to your registered email or phone number.
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="button" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
            </Card>
              </div>
    );
}
