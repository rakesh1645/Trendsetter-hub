import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

export default function Buynow() {
    const [detail, setDetail] = useState('')
    
    const loc=useLocation()
    useEffect(()=>{

        setDetail(loc.state)
      },[])
  return (
    <div>
      <Container>
      <Row>
        <Col>
        <Image src={detail.img}/>
        </Col>
        <Col>
          <Button >+</Button>
          <p>sd</p>
          <Button >-</Button>
        </Col>
      </Row>
    </Container>
    </div>
  )
}
