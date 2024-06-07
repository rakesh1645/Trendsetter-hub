import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import '../style/style.css'

export default function Buynow() {
  const loc = useLocation();
  const [quantity, setQuantity] = useState(1);
  const [productDetails, setProductDetails] = useState("");

  useEffect(() => {

    setProductDetails(loc.state)
  }, [])

  function QuantityAdd() {
    setQuantity(quantity + 1);
  }

  function QuantitySub() {
    if (quantity > 1) setQuantity(quantity - 1);
  }

  return (
    <>
      <Container className='buynow-main-page'>
       
          <Row>
          <Col>
            <h2 >Select the Payment method</h2>
            <p>RECOMMENDED</p>
            <Card>
              <Card.Body>Cash On Delivery / Pay on Delivery</Card.Body>
              <Card.Body>phone Pay UPI</Card.Body>
            </Card>
            <p>CREDIT & DEBIT CARDS</p>
            <Card>
              <Card.Body>Credit or debit card</Card.Body>
            </Card>
            <p>UPI </p>
            <Card>
              <Card.Body>Other UPI Apps</Card.Body>
              <Card.Body>Add account to Amazon Pay UPI</Card.Body>
            </Card>
            <p>MORE WAYS TO PAY</p>
            <Card>
              <Card.Body>EMI</Card.Body>
              <Card.Body>NET Banking</Card.Body>
            </Card>
            <br>
            </br>
            <Card>
              <Card.Body>Add Gift Card or Promo Code</Card.Body>
            </Card>
            <br>
            </br>
            <Button variant='dark'> Continue</Button>

            <Card className='my-3'>
              <Card.Body>This is some text within a card body.</Card.Body>
            </Card>
        </Col>
        
        <Col className="d-flex flex-column align-items-end">
        <Card className='cardpayment' >
              <h5>Estimated Total Rs. {productDetails.price * quantity}</h5>
              <p>*Taxes, discounts and shipping charges included at checkout*</p>
              <Button className="footerButton" >Check out</Button>
              </Card>
            </Col>
           
      </Row>
    </Container >
    </>
  )
}
