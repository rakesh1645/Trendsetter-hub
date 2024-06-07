import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

export default function Success() {
    const nav=useNavigate();
    const navigate=()=>{
        nav('/')
    }
  return (
    <div style={{width:'100%',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
      <h2>
        Your Oreder Successfully Complete
      </h2>
      <Button onClick={navigate}>Back Home</Button>
    </div>
  )
}
