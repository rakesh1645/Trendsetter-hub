import { useEffect, useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import "../style/style.css";

export default function AddToCart() {
  const nav = useNavigate();
  const loc = useLocation();
  const [quantity, setQuantity] = useState(1);
  const [productDetails, setProductDetails] = useState("");
  const [isRemoved, setIsRemoved] = useState(false);


  useEffect(() => {
    setProductDetails(loc.state);
  }, []);

  function QuantityAdd() {
    setQuantity(quantity + 1);
  }

  function QuantitySub() {
    if (quantity > 1) setQuantity(quantity - 1);
  }
 const navigate = useNavigate();
  function Buynow() {
      
    navigate('/buynow', { state: productDetails });
}

  const handleRemove = () => {
    setIsRemoved(true);
   
  };
  const handlegohome=()=>{
   nav("/");
  }

  return (
    <Container style={{ marginTop: '100px', backgroundColor: '#FFF', padding: '25px' }}>
      {!isRemoved ? (
        <>
          <Row className="border p-3">
            <Col xs={12} md={4} className="d-flex align-items-center justify-content-center mb-3 mb-md-0">
              <Image src={productDetails.img} style={{ height: '200px', width: '100%', objectFit: 'cover' }} />
            </Col>

            <Col xs={12} md={4} className="d-flex flex-column justify-content-center mb-3 mb-md-0">
              <p>
                {productDetails.name}
                <br />
                <br />
                <strong>₹ {productDetails.price} M.R.P</strong> <del>{productDetails.delprice}</del> ({(100 - ((productDetails.price / productDetails.delprice) * 100)).toFixed(2)}% off)
              </p>
            </Col>

            <Col xs={12} md={2} className="d-flex align-items-center mb-3 mb-md-0">
              <div className="d-flex align-items-center">
                <button className="btn btn-outline-secondary me-2" onClick={QuantitySub}>-</button>
                <span>{quantity}</span>
                <button className="btn btn-outline-secondary ms-2" onClick={QuantityAdd}>+</button>
              </div>
            </Col>

            <Col xs={12} md={2} className="d-flex align-items-center ">
              <Button onClick={handleRemove}>Remove</Button>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col className="d-flex flex-column align-items-end">
              <h5>Estimated Total Rs. {productDetails.price * quantity}</h5>
              <p>*Taxes, discounts and shipping charges included at checkout*</p>
              <Button className="footerButton" onClick={Buynow}>Check out</Button>
            </Col>
          </Row>
        </>
      ) : (
        <Row className="border p-3">
          <Col className="d-flex justify-content-center"style={{cursor:'pointer'}}>
            <p onClick={handlegohome}>Add Your Fav.</p>
          </Col>
        </Row>
      )}
    </Container>
  );
}
