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
            <Container style={{marginTop:"100px"}}>
                <Row>
                    {
                       product&&product.map(a => (
                            <Col onClick={()=>nav ('/details',{state:a})} >
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={a.img} />
                                    <Card.Body>
                                        <Card.Title>{a.name}</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
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
                       Product.map(a => (
                            <Col onClick={()=>nav ('/details',{state:a})}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={a.img} />
                                    <Card.Body>
                                        <Card.Title>{a.name}</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
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