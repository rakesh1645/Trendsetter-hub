import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Sports } from '../data/data';

export default function Product() {
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setProduct(Sports);
    }, []);

    return (
        <Container style={{marginTop:'80px'}}>
            <h3>Trendsetter Hub  Sports Products</h3>
            <Row> 
                {product && product.map(a => (
                    <Col lg={4} md={6} sm={12} onClick={() => navigate('/details', { state: a })} style={{ cursor: 'pointer', display: 'flex', justifyContent: "center" }}>
                        <Card >
                            <Card.Img variant="top" src={a.img} style={{height:'400px', width:'100%', objectFit: 'cover'}} />
                            <Card.Body>
                                <Card.Title className='my-3'>{a.name}</Card.Title>
                                <p>{a.price} M.R.P; <del>{a.delprice}</del> ({(100 - ((a.price / a.delprice) * 100)).toFixed(2)}% off)</p> 
                               
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
