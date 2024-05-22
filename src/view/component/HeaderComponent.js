import { Col, Container, Row, } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from "react";

function HeaderComponent() {
  const[user,setUser] = useState('')

  useEffect(()=>{
    setUser(localStorage.getItem('user'))

  },[])
  return (
    
      
      <Row>
        <Col>
          <Navbar expand="lg" className="navbar-dark bg-dark navbar fixed-top " >
            <Container fluid>
              <Navbar.Brand href="#">Trendsetters Hub</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="Shop">Shop</Nav.Link>
                  <Nav.Link href="product">Sports</Nav.Link>

              
                  {
              user?
                  <Nav.Link href="/logout"   >
                  Logout
                </Nav.Link>
              :
              <>
            <Nav.Link href="/login" >
              Login
            </Nav.Link>
            <Nav.Link href="/Register"  >
              Register
            </Nav.Link>
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
