import { Route,Routes } from "react-router-dom"
import home from '../screen/Home'
import product from "../screen/Product"
import Details from "../screen/Details"
import Shop from "../screen/Shop"
import About from "../screen/About"
import Contact from "../screen/Contact"
import Login from "../screen/Login"
import Logout from "../screen/Logout"
import Forget from '../screen/Forget'
import { useEffect, useState } from 'react';
import Home from "../screen/Home"
import Addtocart from "../screen/Addtocart"
import OTPPage from "../screen/Otp"
import Resigter from "../screen/Resigter"
import Buynow from "../screen/Buynow"
function RoutNav(){
    const [userdata,setUserData] = useState('')

   useEffect(()=>{

    setUserData(localStorage.getItem('user'))

   },[])
   
   console.log(userdata);
   
    return(
        <>
        <Routes>
            <Route path='/'Component={home}/>
            <Route path='/product'Component={product}/>
            <Route path='/details'Component={Details}/>
            <Route path='/shop'Component={Shop}/>
            <Route path='/About'Component={About}/>
            <Route path='/Contact'Component={Contact}/>
            <Route path='/logout'Component={Logout}/>
            <Route path='/addtocart'Component={Addtocart}/>
            <Route path='/buynow'Component={Buynow}/>
            <Route path='/forget' Component={Forget}/>
            <Route path='/Otp' Component={OTPPage}/>
            <Route path='/Resigter' Component={Resigter}/>
            
            { userdata!==null?<>
                <Route path='/' Component={Home}/>
               </>
               :
                <>
               <Route path='/login' Component={Login}/>
               
                <Route path='/' Component={Home}/>
                </>
            }
            
        </Routes>
        </>
    )
}
export default RoutNav