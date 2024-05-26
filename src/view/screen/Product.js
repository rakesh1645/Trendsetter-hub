import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { bestseller} from '../data/data'; // Ensure 'shop' is correctly imported

export default function Product() {
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setProduct(bestseller);
    }, []);

    return (
        <div style={{marginTop:'100px'}}>
            <Row >
                {product && product.map(a => (
                    <Col lg={4} md={6} sm={12} onClick={() => navigate('/details', { state: a })} style={{ cursor: 'pointer', display: 'flex', justifyContent: "center" }}>
                        <Card style={{  margin: "10px" }}>
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
