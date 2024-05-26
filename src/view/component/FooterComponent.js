import { Container, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";



function FooterComponenet() {
  return (
    <Container fluid className="Footer">
      <Row>
        <Col lg={4} md={6} className="polices">
          <h3>Expore us</h3>

          <Link to="/About">About us</Link>
          <Link to="/Contact">Contact us</Link>
          <Link to="/About">Terms And Conditions</Link>



        </Col>
        <Col lg={4} md={6} className="polices">
          <h3 >Our Polices</h3>
          <Link to="">Shipping Details</Link>
          <Link to="">Return & Exchange Policy</Link>
          <Link to="">Order Cancellation</Link>
          <Link to="">Privacy Policy</Link>
          <Link to="">Terms Of Service</Link>


        </Col>
        <Col lg={4} md={6}  className="polices">
          <h3>HELP</h3>
         <Link to=''>payments</Link>
         <Link to=''>Shipping</Link>
         <Link  to=''>Cancellation & Return</Link>
         <Link to=''>FAQ</Link>
         <Link to=''>Report Infringement</Link>
        </Col>
      </Row>
    </Container>
  )
}
export default FooterComponenet
