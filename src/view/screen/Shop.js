import {Container,Col,Row,Image} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import{ Product, shoping} from'../data/data'
import { useEffect,useState } from "react";
import{useNavigate}from "react-router-dom";
function Shop() {
    const [product,setproduct]=useState('')
    console.log("product",product);
    const nav =useNavigate()
    useEffect(()=>{
        setproduct(shoping);
     


    },[])
    return (
        <>
            <Container style={{marginTop:"80px"}}>
                <h1 style={{marginBottom:'20px'}}>Trendsetter Hub Bestseller</h1>
                <Row >
                    {
                       product&&product.map((a,index) => (
                            <Col lg={4} md={6} sm={12}  key={index}onClick={()=>nav ('/details',{state:a})} style={{ cursor: 'pointer', display: 'flex', justifyContent: "center" }}>
                                <Card >
                                    <Card.Img variant="top" src={a.img}style={{height:'400px', width:'100%', objectFit: 'cover'}}  />
                                    <Card.Body>
                                        <Card.Title>{a.name}</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <strong><p>{a.price} M.R.P; <del>{a.delprice}</del>({(100 - ((a.price / a.delprice) * 100)).toFixed(2)}% off)</p> </strong>
                                        <Button variant="primary">Buy Now</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
                <Row>
                    <Col>
                    <Image className='Productimg' src={require('../Images/4.png')} />
                    </Col>
                </Row>
                <Row>
                {
                       Product.map((a,index) => (
                            <Col key={index} lg={4} md={6} sm={12} onClick={()=>nav ('/details',{state:a})}style={{ cursor: 'pointer', display: 'flex', justifyContent: "center" }}>
                                <Card >
                                    <Card.Img variant="top" src={a.img}style={{height:'400px', width:'100%', objectFit: 'cover'}}  />
                                    <Card.Body>
                                        <Card.Title>{a.name}</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <p>{a.price} M.R.P; <del>{a.delprice}</del> ({(100 - ((a.price / a.delprice) * 100)).toFixed(2)}% off)</p> 
                                        <Button variant="primary">Buy Now</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    )
}
export default Shop