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
            <Route excat path='/'Component={home}/>
            <Route excat path='/product'Component={product}/>
            <Route excat path='/details'Component={Details}/>
            <Route excat path='/shop'Component={Shop}/>
            <Route excat path='/About'Component={About}/>
            <Route excat path='/Contact'Component={Contact}/>
            <Route excat path='/logout'Component={Logout}/>
            <Route excat path='/addtocart'Component={Addtocart}/>
            <Route excat path='/buynow'Component={Buynow}/>
            <Route excat path='/forget' Component={Forget}/>
            <Route excat path='/Otp' Component={OTPPage}/>
            <Route excat path='/Resigter' Component={Resigter}/>
            
            { userdata!==null?<>
                <Route excat path='/' Component={Home}/>
               </>
               :
                <>
               <Route excat path='/login' Component={Login}/>
               
                <Route excat path='/' Component={Home}/>
                </>
            }
            
        </Routes>
        </>
    )
}
export default RoutNav