import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { bestseller, shop } from '../data/data'; // Ensure 'shop' is correctly imported

export default function Product() {
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setProduct(bestseller);
    }, []);

    return (
        <div style={{margin:'100px'}}>
            <Row lg={4} md={3} sm={2}>
                {product && product.map(a => (
                    <Col onClick={() => navigate('/details', { state: a })} style={{ cursor: 'pointer', display: 'flex', justifyContent: "center" }}>
                        <Card style={{ width: '21rem', margin: "10px" }}>
                            <Card.Img variant="top" src={a.img} />
                            <Card.Body>
                                <Card.Title>{a.name}</Card.Title>
                                <Button variant="primary">Buy Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
