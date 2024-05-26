import { BrowserRouter } from "react-router-dom";
import RoutNav from "./router";
import './style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from "./component/HeaderComponent";
import FooterComponenet from "./component/FooterComponent";
function App() {
    return(
   <>
   <BrowserRouter>
   <HeaderComponent/>
   <RoutNav></RoutNav>
   
   <FooterComponenet/> 
  
   </BrowserRouter>
   </>
   )

}
export default App;