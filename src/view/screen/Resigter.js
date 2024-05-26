import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'

function Resigter() {
  const [email, setmail] = useState('')
    const [name, setName] = useState('')
    const [number,setNumber]=useState('');

    const isEmail = (event) => {
        setmail(event.target.value)

    }

    const isPassword = (event) => {
        setName(event.target.value)
    }
   const isNumber =(event)=>{
    setNumber(event.target.value)
   }
    const onPressLogin = () => {
        const param = {
            email: email,
            name:name
        }
        console.log(param);
        localStorage.setItem("user", param)

        setmail("")
        setName("")
        window.location = "/"
    }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '150px' }}>
            <Card style={{ width: '48rem', padding: '20px', border: '1px solid black',  margin:'10px'}}>
                <Row>
                    <h2 style={{ textAlign: 'center' }}>
                         Resigter 
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
                                <Form.Label>Name </Form.Label>
                                <Form.Control type=" current-password" value={name} onChange={isPassword} placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Number </Form.Label>
                                <Form.Control type=" current-password" value={number} onChange={isNumber} placeholder="Enter Your mobile No" />
                            </Form.Group>
                          

                            <Button variant="primary" type="button" onClick={onPressLogin} >
                                Submit
                            </Button>
                           

                        </Form>
                        
                    </Col>
                </Row>
            </Card>
        </div>
  )
}

export default Resigter
