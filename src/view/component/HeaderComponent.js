import { Col, Container, Row, } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../style/style.css';
function HeaderComponent() {
  const[user,setUser] = useState('')

  useEffect(()=>{
    setUser(localStorage.getItem('user'))

  },[])
  const [expanded, setExpanded] = useState(false);
  
  const handleToggle = () => setExpanded(!expanded);
  const Close = () => setExpanded(false);
  return (
    
      
      <Row>
        <Col>
          <Navbar   expanded={expanded}  expand="lg" className="navbar-dark bg-dark navbar fixed-top " >
            <Container fluid>
              <Navbar.Brand to="/">Trendsetters Hub</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll"  onClick={handleToggle} />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  navbarScroll
                >
                  <Link to="/" className="navbarlinks" onClick={Close} >Home</Link>
                  <Link to="/Shop"  className="navbarlinks"  onClick={Close}>Shop</Link>
                  <Link to="/Product"  className="navbarlinks" onClick={Close} >Sports</Link>

              
                  {
              user?
                  <Link to="/logout"   className="navbarlinks"  onClick={Close} >
                  Logout
                </Link>
              :
              <>
            <Link to="/login"    className="navbarlinks"  onClick={Close}>
              Login
            </Link>
            <Link to="/register" className="navbarlinks" onClick={Close}  >
              Register
            </Link>
            </>
            
            
          }
                  
                 

                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success mx-primary">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>
     

  )
}
export default HeaderComponent
