import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../screen/Home';
import Product from '../screen/Product';
import Details from '../screen/Details';
import Shop from '../screen/Shop';
import About from '../screen/About';
import Contact from '../screen/Contact';
import Logout from '../Authentications/Logout'
import Login from '../Authentications/Login';
import Forget from '../Authentications/Forget';
import Addtocart from '../screen/Addtocart';
import OTPPage from '../Authentications/Otp';
import Register from '../Authentications/Register'; 
import Buynow from '../screen/Buynow';
import ScrollToTop from '../screen/ScrollTop';

function RoutNav() {
  const [userdata, setUserData] = useState('');

  useEffect(() => {
    setUserData(localStorage.getItem('user'));
  }, []);
  
  console.log(userdata);

  return (
    <>
    <ScrollToTop/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/product' element={<Product />} />
        <Route exact path='/details' element={<Details />} />
        <Route exact path='/shop' element={<Shop />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/logout' element={<Logout />} />
        <Route exact path='/addtocart' element={<Addtocart />} />
        <Route exact path='/buynow' element={<Buynow />} />
        <Route exact path='/forget' element={<Forget />} />
        <Route exact path='/otp' element={<OTPPage />} />
        <Route exact path='/register' element={<Register />} /> 
        
        { userdata !== null ? (
          <Route exact path='/' element={<Home />} />
        ) : (
          <>
            <Route exact path='/login' element={<Login/>} />
            <Route exact path='/' element={<Home />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default RoutNav;
