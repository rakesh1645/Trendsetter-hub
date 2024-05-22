import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FooterComponenet() {
  return (
    <Container fluid className="Footer">
      <Row>
        <Col lg={4} md={6} className="polices">
          <h3>Expore us</h3>

          <a href="About">About us</a>
          <a href="Contact">Contact us</a>
          <a href="About">Terms And Conditions</a>



        </Col>
        <Col lg={4} md={6} className="polices">
          <h1 >Our Polices</h1>
          <a href="">Shipping Details</a>
          <a href="">Return & Exchange Policy</a>
          <a href="">Order Cancellation</a>
          <a href="">Privacy Policy</a>
          <a href="">Terms Of Service</a>


        </Col>
        <Col lg={4} md={6}>
          <h3>Contact us</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
export default FooterComponenet
