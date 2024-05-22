import React from 'react'
import Form from 'react-bootstrap/Form';

export default function Contact() {
   
  return (
< div> 
<h1 className='Contact-heading'>Contact us </h1>
    <Form className='Contact-form'>
    <Form.Group className="mx-2 input-box " controlId="exampleForm.ControlInput1">
      <Form.Label>Enter Your Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Your name" />
    </Form.Group>
    <Form.Group className="mx-2 input-box" controlId="exampleForm.ControlInput1">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter Your e-mail" />
    </Form.Group>
    <Form.Group className="mx-2 input-box" controlId="exampleForm.ControlInput1">
      <Form.Label>Phone number</Form.Label>
      <Form.Control type="email" placeholder="Enter Your Phone Number" />
    </Form.Group>
    <Form.Group className="mx-2 input-box" controlId="exampleForm.ControlTextarea1">
      <Form.Label>How Can We help You</Form.Label>
      <Form.Control as="textarea" placeholder='Help' rows={2} />
    </Form.Group>
  </Form>
  </div>
  )
}
