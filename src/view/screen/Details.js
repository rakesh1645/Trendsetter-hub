import { Container, Row, Col, Image } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import { bestseller, addtocart } from '../data/data';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Details() {
    const navigate = useNavigate();
    const location = useLocation();
    const [first, setfirst] = useState('')
    const [productDetails, setProductDetails] = useState({});
    const [img, setImage] = useState('');

    
    useEffect(() => {
        if (location.state) {
            setProductDetails(location.state);
            setImage(location.state.img);
            window.scrollTo(0, 0);
        }
    }, [location.state]);

    function ImageChange(newImg) {
        setImage(newImg);
    }

    function addtoCart() {
        addtocart.push(productDetails);
        navigate('/addtocart', { state: productDetails });
    }


    useEffect(() => {
      setfirst(bestseller)
    }, [])
    

    return (
        <Container style={{marginTop:'100px'}}>
            <Row>
                <Col lg={6}>
                    <Image fluid src={img ? img : productDetails.img} />
                    <Row>
                        {productDetails.sideimage && productDetails.sideimage.map((img, index) => (
                            <Col key={index} onClick={() => ImageChange(img)}>
                                <Image src={img} style={{ width: 80, height: 100, cursor: 'pointer' }} />
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col lg={6}>
                    <Row>
                        <Col><h4>{productDetails.name || "Product Name"}</h4><br></br>
                        <h4>Rs. {productDetails.price || "1,399.00"}</h4></Col>
                    </Row>
                    <Row>
                        <Col>
                            <Image src={require('../Images/start.jpeg')} style={{ width: 20 }} />
                            <Image src={require('../Images/start.jpeg')} style={{ width: 20 }} />
                            <Image src={require('../Images/start.jpeg')} style={{ width: 20 }} />
                            <Image src={require('../Images/start.jpeg')} style={{ width: 20 }} />
                            <Image src={require('../Images/start.jpeg')} style={{ width: 20 }} />
                            <span>23 reviews</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Size</p>
                        </Col>
                        <Row>
                            <Col>
                                <Button variant="outline-primary">S</Button>{'  '}
                                <Button variant="outline-primary">M</Button>{'  '}
                                <Button variant="outline-primary">L</Button>{'  '}
                                <Button variant="outline-primary">XL</Button>{'  '}
                                <Button variant="outline-primary">XXL</Button>{'  '}
                                <Button variant="outline-primary">XXXL</Button>{'  '}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Accordion>
                                    <Accordion.Item style={{ marginTop: 10 }} eventKey="0">
                                        <Accordion.Header>Size Chart</Accordion.Header>
                                        <Accordion.Body>
                                            <Image src={require('../Images/sizechar.webp')} />
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p style={{ marginTop: 5 }}>Colours</p>
                                <Button variant="primary" style={{ width: 30, height: 30 }}></Button>{' '}
                                <Button variant="secondary" style={{ width: 30, height: 30 }}></Button>{' '}
                                <Button variant="success" style={{ width: 30, height: 30 }}></Button>{' '}
                                <Button variant="warning" style={{ width: 30, height: 30 }}></Button>{' '}
                                <Button variant="danger" style={{ width: 30, height: 30 }}></Button>{' '}
                                <Button variant="info" style={{ width: 30, height: 30 }}></Button>{' '}
                                <Button variant="light" style={{ width: 30, height: 30 }}></Button>{' '}
                                <Button variant="dark" style={{ width: 30, height: 30 }}></Button>{' '}
                                <Button variant="link" style={{ width: 30, height: 30 }}></Button>{' '}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button className="m-2" variant="primary" style={{ width: "100%", height: 30 }} onClick={addtoCart}>Add to cart</Button>{' '}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button className="m-2" variant="primary" style={{ width: "100%", height: 30 }}>Buy now</Button>{' '}
                            </Col>
                        </Row>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>BestSeller</h1>
                </Col>
                <Row>
                    {first && first.map((value, index) => (
                        <Col key={index} lg={3} md={8} sm={12} onClick={() => navigate('/details', { state: value })} style={{ cursor: 'pointer' }}>
                            <Card style={{margin:"10px"}}>
                                <Card.Img variant="top" src={value.img} />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: 16 }}>{value.name}</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Add to cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Row>
        </Container>
    );
}

export default Details;
