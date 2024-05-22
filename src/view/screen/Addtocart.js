import React, { useEffect, useState } from 'react';
import { Container ,Row,Col, Button,Image} from 'react-bootstrap';
import { useLocation} from "react-router-dom";

export default function Addtocart() {
  const[qty,setQty]=useState(1)
  const[rate,setRate]=useState('')
  const[detail,setDetail]=useState('')

   const loc=useLocation()
  console.log(loc.state)
  useEffect(()=>{

    setDetail(loc.state)
  },[])
  
  function Qtyadd(){
    setQty(qty+1)

  }
  function Qtysub(){
    setQty(qty-1)

  }
  
  return (
    <Container>
      <Row>
        <Col>
        <Image src={detail.img}/>
        </Col>
        <Col>
          <Button onClick={Qtyadd}>+</Button>
          <p>{qty}</p>
          <Button onClick={Qtysub}>-</Button>
        </Col>
      </Row>
    </Container>
  )
}
