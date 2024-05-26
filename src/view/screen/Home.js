import {  Row, Col, Image, Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect,useState } from "react";
import{ shoping} from'../data/data'
import{ useNavigate}from "react-router-dom";
import { bestseller } from '../data/data';

function Home() {
    const [product,setproduct]=useState('')
    console.log("product",product);
    const nav =useNavigate()
    useEffect(()=>{
        setproduct(shoping);
    },[])
 

    const [bestsellers, setBestellers] = useState('');
    useEffect(()=>{
        setBestellers(bestseller);
    }, [])
    return (
        <>
          <Container style={{marginTop:'40px'}} >
                <Row >
                    <Col >
                        <Carousel>
                            <Carousel.Item>
                                <Image className='slider' src={require('../Images/banner3.png.png')} style={{width:'100%'}} />
                               
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image className='slider' src={require('../Images/banner2.png.png')} />
                                
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image className='slider' src={require('../Images/banner.png.png')} />
                                
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                <Row  style={{textAlign:"center"}}> 
                    <h2 >
                    COMFTABLE COTTON PANTS
                    </h2>
                    <p>Choudhary's pure cotton breathable cotton pants with deep pockets suits your everyday styling</p>
                </Row>

                <Row >
                    {
                       product&&product.map((a,index) => (
                            <Col key={index} lg={3} md={6} sm={12} onClick={()=>nav ('/details',{state:a})}  style={{cursor:'pointer', display:'flex',justifyContent:"center"}}>
                                <Card style={{  margin:"10px"}}>
                                    <Card.Img variant="top" src={a.img} />
                                    <Card.Body>
                                        <Card.Title>{a.name}</Card.Title>
                                       
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
                       bestsellers&&bestsellers.map((a,index) => (
                            <Col key={index} lg={3} md={6} sm={12} onClick={()=>nav ('/details',{state:a})} >
                                <Card style={{ margin:"10px" }}>
                                    <Card.Img variant="top" src={a.img} />
                                    <Card.Body>
                                        <Card.Title>{a.name}</Card.Title>
                                       
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
export default Home
