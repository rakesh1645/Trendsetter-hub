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
    const navigate=useNavigate();
    function Buynow() {
      
        navigate('/buynow');
    }

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
                                <Image className='slider' src={require('../Images/banner.png.png')} />
                                
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image className='slider' src={require('../Images/banner2.png.png')} />
                                
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
                            <Col key={index} lg={4} md={6} sm={12} onClick={()=>nav ('/details',{state:a})}style={{ cursor: 'pointer', display: 'flex', justifyContent: "center", marginTop:'4px' }} >
                                <Card >
                                    <Card.Img variant="top" src={a.img} style={{height:'400px', width:'100%', objectFit: 'cover'}}  />
                                    <Card.Body>
                                        <Card.Title>{a.name}</Card.Title>
                                        <p style={{display:'flex', alignItems:'center'}}><h3>{a.price}</h3> M.R.P;   <del> {a.delprice} </del>  {(100 - ((a.price / a.delprice) * 100)).toFixed(2)}% off</p> 
                        
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
                <Row className='my-5'>
                    <Col>
                    <Image  src={require('../Images/gifforhome.png')} />
                    </Col>
                </Row>
                <Row>
                    {
                       bestsellers&&bestsellers.map((a,index) => (
                            <Col key={index} lg={4} md={6} sm={12} onClick={()=>nav ('/details',{state:a})} style={{ cursor: 'pointer', display: 'flex', justifyContent: "center" }}>
                                <Card>
                                    <Card.Img variant="top" src={a.img} style={{height:'400px', width:'100%', objectFit: 'cover'}} />
                                    <Card.Body>
                                        <Card.Title>{a.name}</Card.Title>
                                        <Button variant="danger" style={{fontSize:'12px'}}>Limited time Deal</Button>
                                        <p style={{display:'flex', alignItems:'center'}}><h3>{a.price}</h3> M.R.P;   <del> {a.delprice} </del>  {(100 - ((a.price / a.delprice) * 100)).toFixed(2)}% off</p> 
                        
                                       
                                        
                                       
                                 
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
                <Row className='my-5'>
                    <Col>
                    <Image  src={require('../Images/gifforshop.png')} />
                    </Col>
                </Row>

                <Row >
                    {
                       product&&product.map((a,index) => (
                            <Col lg={4} md={6} sm={12}  key={index}onClick={()=>nav ('/details',{state:a})} style={{ cursor: 'pointer', display: 'flex', justifyContent: "center" }}>
                                <Card >
                                    <Card.Img variant="top" src={a.img} style={{height:'400px', width:'100%', objectFit: 'cover'}}  />
                                    <Card.Body>
                                        <Card.Title>{a.name}</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <p style={{display:'flex', alignItems:'center'}}><h3>{a.price}</h3> M.R.P;   <del> {a.delprice} </del>  {(100 - ((a.price / a.delprice) * 100)).toFixed(2)}% off</p> 
                        
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
