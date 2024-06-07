import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import '../style/style.css';

export default function Buynow() {
  const loc = useLocation();
  const [quantity, setQuantity] = useState(1);
  const [productDetails, setProductDetails] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("");

  useEffect(() => {
    setProductDetails(loc.state);
  }, [loc.state]);

  const handlePaymentSelection = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
  };

  const nav = useNavigate();

  const handleContinue = () => {
    if (!selectedPayment) {
      alert("Please select a payment method.");
      return;
    }
    nav('/success');
  };

  return (
    <>
      <Container className='buynow-main-page' style={{backgroundColor:'#f9f8fa'}} fluid>
        <Row>
          <Col xs={12} md={8}>
            <h2>Select the Payment method</h2>
            <p>RECOMMENDED</p>
            <Card>
              <Card.Body
                style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}
                onClick={() => handlePaymentSelection('Cash On Delivery')}
              >
                Cash On Delivery / Pay on Delivery
                <Form.Check
                  type='radio'
                  checked={selectedPayment === 'Cash On Delivery'}
                  onChange={() => handlePaymentSelection('Cash On Delivery')}
                />
              </Card.Body>
              <Card.Body
                style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}
                onClick={() => handlePaymentSelection('Phone Pay UPI')}
              >
                Phone Pay UPI
                <Form.Check
                  type='radio'
                  checked={selectedPayment === 'Phone Pay UPI'}
                  onChange={() => handlePaymentSelection('Phone Pay UPI')}
                />
              </Card.Body>
            </Card>
            <p>CREDIT & DEBIT CARDS</p>
            <Card>
              <Card.Body
                style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}
                onClick={() => handlePaymentSelection('Credit or Debit Card')}
              >
                Credit or Debit Card
                <Form.Check
                  type='radio'
                  checked={selectedPayment === 'Credit or Debit Card'}
                  onChange={() => handlePaymentSelection('Credit or Debit Card')}
                />
              </Card.Body>
            </Card>
            <p>UPI</p>
            <Card>
              <Card.Body
                style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}
                onClick={() => handlePaymentSelection('Other UPI Apps')}
              >
                Other UPI Apps
                <Form.Check
                  type='radio'
                  checked={selectedPayment === 'Other UPI Apps'}
                  onChange={() => handlePaymentSelection('Other UPI Apps')}
                />
              </Card.Body>
              <Card.Body
                style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}
                onClick={() => handlePaymentSelection('Amazon Pay UPI')}
              >
                Add account to Trendsetter
                <Form.Check
                  type='radio'
                  checked={selectedPayment === 'Amazon Pay UPI'}
                  onChange={() => handlePaymentSelection('Amazon Pay UPI')}
                />
              </Card.Body>
            </Card>
            <p>MORE WAYS TO PAY</p>
            <Card>
              <Card.Body
                style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}
                onClick={() => handlePaymentSelection('EMI')}
              >
                EMI
                <Form.Check
                  type='radio'
                  checked={selectedPayment === 'EMI'}
                  onChange={() => handlePaymentSelection('EMI')}
                />
              </Card.Body>
              <Card.Body
                style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}
                onClick={() => handlePaymentSelection('Net Banking')}
              >
                NET Banking
                <Form.Check
                  type='radio'
                  checked={selectedPayment === 'Net Banking'}
                  onChange={() => handlePaymentSelection('Net Banking')}
                />
              </Card.Body>
            </Card>
            <br />
            <Card>
              <Card.Body
                style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}
                onClick={() => handlePaymentSelection('Gift Card')}
              >
                Add Gift Card or Promo Code
                <Form.Check
                  type='radio'
                  checked={selectedPayment === 'Gift Card'}
                  onChange={() => handlePaymentSelection('Gift Card')}
                />
              </Card.Body>
            </Card>
            <br />
            <Button variant='dark' onClick={handleContinue}>Continue</Button>

            <Card className='my-3'>
              <Card.Body
                style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}
              >
                This is some text within a card body.
                <Form.Check
                  type='radio'
                  checked={false} 
                  readOnly
                />
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4} className="d-flex flex-column align-items-end">
            <Card className='cardpayment'>
              <h5>Estimated Total Rs. {productDetails.price * quantity}</h5>
              <p>*Taxes, discounts and shipping charges included at checkout*</p>
              <Button className="footerButton">Check out</Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
